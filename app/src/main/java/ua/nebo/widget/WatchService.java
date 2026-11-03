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
import android.os.BatteryManager;
import android.content.IntentFilter;
import android.speech.tts.TextToSpeech;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
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
    static final String CH_POWER = "power";
    static final int ID_WATCH = 1, ID_MISSILE = 2;
    static final String ACTION_TEST = "ua.nebo.widget.TEST_ALARM";

    private HandlerThread thread;
    private Handler handler;
    private final Set<String> seen = new HashSet<>();
    private boolean primed = false;
    private long lastAlerts = 0;
    private TextToSpeech tts;
    private boolean ttsReady = false;
    private boolean battWarned = false;

    // Shared with the page through MainActivity's bridge (same process).
    static final List<JSONObject> history = new ArrayList<>();
    static final Map<String, JSONArray> trails = new HashMap<>();
    private static String lastSig = "";

    static synchronized String historyJson() {
        JSONArray a = new JSONArray();
        for (JSONObject o : history) a.put(o);
        return a.toString();
    }

    static synchronized String trailsJson() {
        JSONObject o = new JSONObject();
        try { for (Map.Entry<String, JSONArray> e : trails.entrySet()) o.put(e.getKey(), e.getValue()); } catch (Exception ignored) { }
        return o.toString();
    }

    private synchronized void loadHistory() {
        try (FileInputStream in = new FileInputStream(new File(getFilesDir(), "history.json"))) {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] b = new byte[16384]; int n;
            while ((n = in.read(b)) > 0) out.write(b, 0, n);
            JSONArray a = new JSONArray(out.toString("UTF-8"));
            history.clear();
            long cut = System.currentTimeMillis() - 25 * 3600_000L;
            for (int i = 0; i < a.length(); i++) if (a.getJSONObject(i).optLong("t") >= cut) history.add(a.getJSONObject(i));
        } catch (Exception ignored) { }
    }

    private synchronized void logHistory(JSONArray rows) {
        try {
            JSONArray air = new JSONArray();
            StringBuilder sig = new StringBuilder();
            for (int i = 0; i < rows.length(); i++) {
                JSONObject row = rows.getJSONObject(i);
                JSONArray act = row.optJSONArray("activeAlerts");
                JSONArray keep = new JSONArray();
                for (int j = 0; act != null && j < act.length(); j++) {
                    JSONObject a = act.getJSONObject(j);
                    if (!"AIR".equals(a.optString("type"))) continue;
                    keep.put(a);
                    sig.append(a.optString("regionId")).append(a.optJSONArray("activeAlertLevels") != null ? a.optJSONArray("activeAlertLevels").length() : 0).append(';');
                }
                if (keep.length() == 0) continue;
                JSONObject r = new JSONObject();
                r.put("regionId", row.optString("regionId"));
                r.put("regionName", row.optString("regionName"));
                r.put("regionType", row.optString("regionType"));
                r.put("activeAlerts", keep);
                air.put(r);
            }
            if (sig.toString().equals(lastSig)) return;
            lastSig = sig.toString();
            JSONObject e = new JSONObject();
            e.put("t", System.currentTimeMillis());
            e.put("rows", air);
            history.add(e);
            long cut = System.currentTimeMillis() - 25 * 3600_000L;
            while (!history.isEmpty() && history.get(0).optLong("t") < cut) history.remove(0);
            try (FileOutputStream out = new FileOutputStream(new File(getFilesDir(), "history.json"))) {
                out.write(historyJson().getBytes("UTF-8"));
            }
        } catch (Exception ignored) { }
    }

    private synchronized void addTrail(String id, double lat, double lon) {
        long now = System.currentTimeMillis();
        try {
            JSONArray arr = trails.get(id);
            if (arr == null) { arr = new JSONArray(); trails.put(id, arr); }
            JSONArray last = arr.length() > 0 ? arr.getJSONArray(arr.length() - 1) : null;
            if (last == null || Math.abs(last.getDouble(0) - lat) + Math.abs(last.getDouble(1) - lon) > 0.004) {
                arr.put(new JSONArray().put(lat).put(lon).put(now));
            }
        } catch (Exception ignored) { }
    }

    private synchronized void pruneTrails(Set<String> live) {
        long cut = System.currentTimeMillis() - 25 * 60_000L;
        Iterator<Map.Entry<String, JSONArray>> it = trails.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<String, JSONArray> e = it.next();
            JSONArray kept = new JSONArray();
            try {
                for (int i = 0; i < e.getValue().length(); i++) {
                    JSONArray p = e.getValue().getJSONArray(i);
                    if (p.getLong(2) >= cut) kept.put(p);
                }
            } catch (Exception ignored) { }
            if (kept.length() == 0 || (!live.contains(e.getKey()) && kept.length() > 0 && cutOld(kept))) it.remove();
            else e.setValue(kept);
        }
    }

    private static boolean cutOld(JSONArray kept) {
        try { return System.currentTimeMillis() - kept.getJSONArray(kept.length() - 1).getLong(2) > 10 * 60_000L; }
        catch (Exception e) { return true; }
    }

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

        loadHistory();
        tts = new TextToSpeech(this, status -> {
            if (status == TextToSpeech.SUCCESS) {
                int r = tts.setLanguage(new Locale("uk", "UA"));
                ttsReady = r != TextToSpeech.LANG_MISSING_DATA && r != TextToSpeech.LANG_NOT_SUPPORTED;
                tts.setAudioAttributes(new AudioAttributes.Builder()
                        .setUsage(AudioAttributes.USAGE_ALARM)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH).build());
            }
        });

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
            Set<String> liveIds = new HashSet<>();
            boolean ballistic = false;
            for (int i = 0; arr != null && i < arr.length(); i++) {
                JSONObject t = arr.getJSONObject(i);
                String status = t.optString("status", "active");
                if (!status.isEmpty() && !"active".equals(status)) continue;
                String type = t.optString("type");
                int count = Math.max(1, t.optInt("count", 1));
                String region = t.optString("region", "");
                boolean areaOnly = t.optBoolean("areaOnly", false);
                if (!areaOnly && t.has("lat") && ("uav".equals(type) || "missile".equals(type) || "ballistic".equals(type))) {
                    String tid = t.optString("id", "");
                    if (!tid.isEmpty()) { liveIds.add(tid); addTrail(tid, t.optDouble("lat"), t.optDouble("lon")); }
                }
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
                if (p.getBoolean("voice", true) && ttsReady) {
                    String say = "Увага! " + (ballistic ? "Загроза балістики. " : "Ракети. ") + where.replace(" область", "");
                    tts.speak(say, TextToSpeech.QUEUE_FLUSH, null, "missile");
                }
            }
            pruneTrails(liveIds);
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
                logHistory(rows);
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
        checkOutages(p);
        checkBattery(p);
        ed.putString("w_updated", "оновлено " + hhmm());
        ed.apply();
        NeboWidget.refreshAll(this);
    }

    private void checkOutages(SharedPreferences p) {
        if (!p.getBoolean("pwRem", true)) return;
        try {
            JSONArray starts = new JSONArray(p.getString("outages", "[]"));
            Set<String> done = new HashSet<>(p.getStringSet("out_done", new HashSet<>()));
            long now = System.currentTimeMillis();
            boolean changed = false;
            for (int i = 0; i < starts.length(); i++) {
                long s = starts.getLong(i);
                long left = s - now;
                if (left > 0 && left <= 31 * 60_000L && !done.contains(String.valueOf(s))) {
                    done.add(String.valueOf(s));
                    changed = true;
                    notifyInfo(this, 3, "Через " + Math.max(1, Math.round(left / 60000.0)) + " хв вимкнуть світло",
                            "Заряджіть телефон і павербанк, поки є світло");
                }
            }
            if (changed) {
                Set<String> keep = new HashSet<>();
                for (String d : done) if (Long.parseLong(d) > now - 2 * 86400_000L) keep.add(d);
                p.edit().putStringSet("out_done", keep).apply();
            }
        } catch (Exception ignored) { }
    }

    private void checkBattery(SharedPreferences p) {
        if (!p.getBoolean("batt", true)) return;
        Intent b = registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
        if (b == null) return;
        int level = b.getIntExtra(BatteryManager.EXTRA_LEVEL, -1), scale = b.getIntExtra(BatteryManager.EXTRA_SCALE, 100);
        int st = b.getIntExtra(BatteryManager.EXTRA_STATUS, -1);
        boolean charging = st == BatteryManager.BATTERY_STATUS_CHARGING || st == BatteryManager.BATTERY_STATUS_FULL;
        int pct = level < 0 ? 100 : Math.round(level * 100f / scale);
        if (charging || pct > 30) { battWarned = false; return; }
        if (pct <= 20 && !battWarned) {
            battWarned = true;
            notifyInfo(this, 4, "Планшет розряджається: " + pct + "%", "Поставте на зарядку, щоб «Небо» не вимкнулося під час тривоги");
        }
    }

    static void notifyInfo(Context ctx, int id, String title, String text) {
        createChannels(ctx);
        Notification n = new Notification.Builder(ctx, CH_POWER)
                .setSmallIcon(android.R.drawable.ic_lock_idle_low_battery)
                .setContentTitle(title)
                .setContentText(text)
                .setContentIntent(openApp(ctx))
                .setAutoCancel(true)
                .build();
        try { ctx.getSystemService(NotificationManager.class).notify(id, n); } catch (Exception ignored) { }
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
        nm.createNotificationChannel(new NotificationChannel(CH_POWER, "Світло й заряд", NotificationManager.IMPORTANCE_DEFAULT));
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
        if (tts != null) tts.shutdown();
        if (handler != null) handler.removeCallbacksAndMessages(null);
        if (thread != null) thread.quitSafely();
        super.onDestroy();
    }

    @Override
    public IBinder onBind(Intent intent) { return null; }
}
