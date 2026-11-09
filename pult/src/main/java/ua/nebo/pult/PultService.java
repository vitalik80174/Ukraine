package ua.nebo.pult;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ServiceInfo;
import android.os.Build;
import android.os.IBinder;
import android.os.PowerManager;

import org.json.JSONArray;
import org.json.JSONObject;

import java.time.Instant;

/**
 * Stays running (with a small permanent notification) and checks every few seconds whether Claude
 * has sent a new command. Commands older than 10 minutes are skipped, so nothing surprising
 * happens when the tablet comes back online after a long time.
 */
public class PultService extends Service {
    static volatile boolean running;
    static volatile String status = "Запускаюся…";
    static volatile long lastCheck;
    static volatile boolean online;

    private static final long MAX_AGE_MS = 10 * 60_000L;
    private volatile boolean alive;
    private Thread worker;
    private PowerManager.WakeLock cpu;
    private Runner runner;

    static void start(Context c) {
        Intent i = new Intent(c, PultService.class);
        if (Build.VERSION.SDK_INT >= 26) c.startForegroundService(i); else c.startService(i);
    }

    static void stop(Context c) { c.stopService(new Intent(c, PultService.class)); }

    @Override
    public void onCreate() {
        super.onCreate();
        NotificationManager nm = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
        nm.createNotificationChannel(new NotificationChannel("pult", "Пульт на зв'язку", NotificationManager.IMPORTANCE_LOW));
        Notification n = note("Чекаю на команди від Claude");
        if (Build.VERSION.SDK_INT >= 34) startForeground(1, n, ServiceInfo.FOREGROUND_SERVICE_TYPE_SPECIAL_USE);
        else startForeground(1, n);
        running = true;
        alive = true;
        runner = new Runner(this);
        PowerManager pm = (PowerManager) getSystemService(POWER_SERVICE);
        cpu = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "pult:listen");
        cpu.setReferenceCounted(false);
        cpu.acquire();
        worker = new Thread(this::loop, "pult");
        worker.start();
    }

    private Notification note(String text) {
        PendingIntent pi = PendingIntent.getActivity(this, 0, new Intent(this, MainActivity.class),
                PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
        return new Notification.Builder(this, "pult")
                .setSmallIcon(R.drawable.ic_stat)
                .setContentTitle("Пульт")
                .setContentText(text)
                .setContentIntent(pi)
                .setOngoing(true)
                .setShowWhen(false)
                .build();
    }

    private void notifyText(String text) {
        try { ((NotificationManager) getSystemService(NOTIFICATION_SERVICE)).notify(1, note(text)); } catch (Exception ignored) {}
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null && "test".equals(intent.getAction())) {
            new Thread(() -> {
                try {
                    JSONObject cmd = new JSONObject("{\"say\":\"Перевірка\",\"actions\":[{\"do\":\"say\",\"text\":\"Пульт на зв'язку\"}]}");
                    execute(cmd, "Перевірка з планшета");
                } catch (Exception ignored) {}
            }).start();
        }
        return START_STICKY;
    }

    private void loop() {
        SharedPreferences p = Journal.prefs(this);
        PowerManager pm = (PowerManager) getSystemService(POWER_SERVICE);
        while (alive) {
            long pause;
            try {
                String sha = Channel.headSha();
                lastCheck = System.currentTimeMillis();
                online = true;
                status = "На зв'язку";
                if (sha != null && !sha.equals(p.getString("sha", ""))) {
                    p.edit().putString("sha", sha).apply();
                    handle(sha, p);
                }
                pause = pm.isInteractive() ? 3000 : 6000;
            } catch (Exception e) {
                online = false;
                status = "Немає зв'язку з GitHub — пробую ще";
                pause = 15000;
            }
            try { Thread.sleep(pause); } catch (InterruptedException e) { break; }
        }
    }

    private void handle(String sha, SharedPreferences p) {
        JSONObject cmd;
        try {
            cmd = new JSONObject(Channel.fetch(sha));
        } catch (Exception e) {
            Journal.add(this, "Не вдалося прочитати команду", new JSONArray().put("✗ " + e.getMessage()), false);
            return;
        }
        String id = cmd.optString("id", sha);
        if (id.equals(p.getString("lastId", ""))) return;
        p.edit().putString("lastId", id).apply();
        String title = cmd.optString("say", "Команда");
        long sent = 0;
        try { sent = Instant.parse(cmd.optString("sent")).toEpochMilli(); } catch (Exception ignored) {}
        if (sent > 0 && System.currentTimeMillis() - sent > MAX_AGE_MS) {
            Journal.add(this, title, new JSONArray().put("· пропустив: команда застаріла (надіслана понад 10 хв тому)"), false);
            return;
        }
        execute(cmd, title);
    }

    private synchronized void execute(JSONObject cmd, String title) {
        notifyText("Виконую: " + title);
        boolean[] ok = {true};
        JSONArray lines = runner.run(cmd, ok);
        Journal.add(this, title, lines, ok[0]);
        notifyText("Останнє: " + title + (ok[0] ? " ✓" : " — не все вдалося"));
    }

    @Override
    public void onDestroy() {
        alive = false;
        running = false;
        online = false;
        status = "Вимкнено";
        if (worker != null) worker.interrupt();
        if (cpu != null && cpu.isHeld()) cpu.release();
        if (runner != null) runner.shutdown();
        super.onDestroy();
    }

    @Override
    public IBinder onBind(Intent intent) { return null; }
}
