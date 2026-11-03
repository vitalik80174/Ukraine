package ua.nebo.widget;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ServiceInfo;
import android.media.AudioAttributes;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.IBinder;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Locale;
import java.util.Set;
import java.util.TimeZone;

/**
 * Keeps watching while the app is closed.
 * Sounds an alarm only for missiles and ballistic threats, and keeps the home-screen widget current.
 */
public class WatchService extends Service {
    static final String PREFS = "nebo";
    static final String CH_WATCH = "watch";
    static final String CH_MISSILE = "missile_v1";
    static final int ID_WATCH = 1, ID_MISSILE = 2;
    static final String ACTION_TEST = "ua.nebo.widget.TEST_ALARM";

    private HandlerThread thread;
    private Handler handler;
    private final Set<String> seen = new HashSet<>();
    private boolean primed = false;
    private long lastAlerts = 0;

    public static void start(Context ctx) {
        Intent i = new Intent(ctx, WatchService.class);
        try {
            if (Build.VERSION.SDK_INT >= 26) ctx.startForegroundService(i); else ctx.startService(i);
        } catch (Exception ignored) { }
    }

    @Override
    public void onCreate() {
        super.onCreate();
        createChannels(this);
        Notification n = new Notification.Builder(this, CH_WATCH)
                .setSmallIcon(android.R.drawable.ic_dialog_alert)
                .setContentTitle("Небо стежить за ракетами")
                .setContentText("Сигнал пролунає, коли з'являться ракети або балістика")
                .setContentIntent(openApp(this))
                .setOngoing(true)
                .build();
        if (Build.VERSION.SDK_INT >= 34) startForeground(ID_WATCH, n, ServiceInfo.FOREGROUND_SERVICE_TYPE_SPECIAL_USE);
        else startForeground(ID_WATCH, n);

        thread = new HandlerThread("nebo-watch");
        thread.start();
        handler = new Handler(thread.getLooper());
        handler.post(loop);
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null && ACTION_TEST.equals(intent.getAction())) {
            notifyMissile(this, "Перевірка сигналу", "Так звучатиме сигнал про ракети");
        }
        return START_STICKY;
    }

    private final Runnable loop = new Runnable() {
        @Override public void run() {
            try { poll(); } catch (Exception ignored) { }
            handler.postDelayed(this, 15000);
        }
    };

    private void poll() {
        SharedPreferences p = getSharedPreferences(PREFS, MODE_PRIVATE);
        String home = p.getString("home", "Львівський район");
        String oblast = p.getString("oblast", "Львівська область");
        String scope = p.getString("missile", "all");
        double lat = Double.longBitsToDouble(p.getLong("lat", Double.doubleToLongBits(49.8397)));
        double lon = Double.longBitsToDouble(p.getLong("lon", Double.doubleToLongBits(24.0297)));
        String city = p.getString("city", "Львів");
        SharedPreferences.Editor ed = p.edit();

        // Air threats from NEPTUN
        try {
            JSONArray arr = new JSONObject(get("https://neptun.in.ua/api/v1/threats")).optJSONArray("threats");
            int uav = 0, missiles = 0;
            double nearest = -1;
            Set<String> fresh = new LinkedHashSet<>();
            Set<String> regions = new LinkedHashSet<>();
            Set<String> now = new HashSet<>();
            boolean ballistic = false;
            for (int i = 0; arr != null && i < arr.length(); i++) {
                JSONObject t = arr.getJSONObject(i);
                String status = t.optString("status", "active");
                if (!status.isEmpty() && !"active".equals(status)) continue;
                String type = t.optString("type");
                int count = Math.max(1, t.optInt("count", 1));
                String region = t.optString("region", "");
                boolean areaOnly = t.optBoolean("areaOnly", false);
                if ("uav".equals(type)) {
                    uav += count;
                    if (!areaOnly && t.has("lat")) {
                        double d = km(lat, lon, t.optDouble("lat"), t.optDouble("lon"));
                        if (nearest < 0 || d < nearest) nearest = d;
                    }
                }
                if ("missile".equals(type) || "ballistic".equals(type)) {
                    if ("off".equals(scope)) continue;
                    if ("oblast".equals(scope) && !oblast.equals(region)) continue;
                    missiles += count;
                    if ("ballistic".equals(type)) ballistic = true;
                    String id = t.optString("id", type + region);
                    now.add(id);
                    if (!region.isEmpty()) regions.add(region);
                    if (!seen.contains(id)) fresh.add(id);
                }
            }
            if (!fresh.isEmpty() && primed) {
                String where = regions.isEmpty() ? "Україна" : String.join(", ", regions);
                notifyMissile(this, (ballistic ? "Загроза балістики: " : "Ракети в повітрі: ") + missiles, where);
            }
            if (missiles == 0) cancelMissile(this);
            seen.clear(); seen.addAll(now);
            primed = true;
            StringBuilder sb = new StringBuilder();
            sb.append("Шахеди: ").append(uav);
            if (nearest >= 0) sb.append(" · найближчий ").append(Math.round(nearest)).append(" км від м. ").append(city);
            if (missiles > 0) sb.append("\nРакети: ").append(missiles);
            ed.putString("w_threats", sb.toString());
            ed.putBoolean("w_missile", missiles > 0);
        } catch (Exception e) {
            ed.putString("w_threats", "Цілі недоступні");
        }

        // Air raid alert for the home raion from siren.pp.ua, every 30 s
        if (System.currentTimeMillis() - lastAlerts > 29000) {
            lastAlerts = System.currentTimeMillis();
            try {
                JSONArray rows = new JSONArray(get("https://siren.pp.ua/api/v3/alerts"));
                boolean alert = false, oblastAlert = false;
                for (int i = 0; i < rows.length(); i++) {
                    JSONObject row = rows.getJSONObject(i);
                    String name = row.optString("regionName");
                    String type = row.optString("regionType");
                    JSONArray act = row.optJSONArray("activeAlerts");
                    boolean air = false;
                    for (int j = 0; act != null && j < act.length(); j++)
                        if ("AIR".equals(act.getJSONObject(j).optString("type"))) air = true;
                    if (!air) continue;
                    if ("State".equals(type) && (name.equals(oblast) || name.equals(home))) alert = true;
                    else if ("District".equals(type) && name.equals(home)) alert = true;
                    if (name.equals(oblast)) oblastAlert = true;
                }
                ed.putBoolean("w_alert", alert);
                ed.putString("w_status", alert ? home + ": тривога" : home + ": тривоги немає");
            } catch (Exception e) {
                ed.putString("w_status", "Немає зв'язку з даними про тривоги");
            }
        }
        ed.putString("w_updated", "оновлено " + hhmm());
        ed.apply();
        NeboWidget.refreshAll(this);
    }

    static String hhmm() {
        SimpleDateFormat f = new SimpleDateFormat("HH:mm", Locale.US);
        f.setTimeZone(TimeZone.getTimeZone("Europe/Kiev"));
        return f.format(new Date());
    }

    static double km(double la1, double lo1, double la2, double lo2) {
        double r = Math.PI / 180, dLa = (la2 - la1) * r, dLo = (lo2 - lo1) * r;
        double h = Math.pow(Math.sin(dLa / 2), 2) + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.pow(Math.sin(dLo / 2), 2);
        return 12742 * Math.asin(Math.sqrt(h));
    }

    static String get(String url) throws Exception {
        HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
        c.setConnectTimeout(12000);
        c.setReadTimeout(12000);
        c.setRequestProperty("User-Agent", "NeboAndroid/1.0 (personal widget)");
        c.setRequestProperty("Accept", "application/json");
        try (InputStream in = c.getInputStream()) {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[16384];
            int n;
            while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
            return out.toString("UTF-8");
        } finally {
            c.disconnect();
        }
    }

    static void createChannels(Context ctx) {
        if (Build.VERSION.SDK_INT < 26) return;
        NotificationManager nm = ctx.getSystemService(NotificationManager.class);
        NotificationChannel watch = new NotificationChannel(CH_WATCH, "Фонове стеження", NotificationManager.IMPORTANCE_MIN);
        watch.setShowBadge(false);
        nm.createNotificationChannel(watch);
        NotificationChannel m = new NotificationChannel(CH_MISSILE, "Ракети", NotificationManager.IMPORTANCE_HIGH);
        Uri sound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM);
        m.setSound(sound, new AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_ALARM)
                .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION).build());
        m.enableVibration(true);
        m.setVibrationPattern(new long[]{0, 600, 300, 600, 300, 600});
        m.setBypassDnd(true);
        nm.createNotificationChannel(m);
    }

    static void notifyMissile(Context ctx, String title, String text) {
        createChannels(ctx);
        Notification n = new Notification.Builder(ctx, CH_MISSILE)
                .setSmallIcon(android.R.drawable.ic_dialog_alert)
                .setContentTitle(title)
                .setContentText(text)
                .setStyle(new Notification.BigTextStyle().bigText(text))
                .setCategory(Notification.CATEGORY_ALARM)
                .setColor(0xFFFF2E78)
                .setContentIntent(openApp(ctx))
                .setAutoCancel(true)
                .build();
        try { ctx.getSystemService(NotificationManager.class).notify(ID_MISSILE, n); } catch (Exception ignored) { }
    }

    static void cancelMissile(Context ctx) {
        try { ctx.getSystemService(NotificationManager.class).cancel(ID_MISSILE); } catch (Exception ignored) { }
    }

    static PendingIntent openApp(Context ctx) {
        Intent i = new Intent(ctx, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        return PendingIntent.getActivity(ctx, 0, i, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
    }

    @Override
    public void onDestroy() {
        if (handler != null) handler.removeCallbacksAndMessages(null);
        if (thread != null) thread.quitSafely();
        super.onDestroy();
    }

    @Override
    public IBinder onBind(Intent intent) { return null; }
}
