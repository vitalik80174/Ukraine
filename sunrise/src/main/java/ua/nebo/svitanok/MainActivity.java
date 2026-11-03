package ua.nebo.svitanok;

import android.Manifest;
import android.app.Activity;
import android.app.NotificationManager;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.PowerManager;
import android.provider.Settings;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONObject;

/** Settings screen and the sunrise itself, both drawn by the page in assets. */
public class MainActivity extends Activity {
    private WebView web;
    private boolean pageReady = false;
    private String pendingJs = null;
    private MediaPlayer player;
    private final Handler ui = new Handler(Looper.getMainLooper());
    private float volume = 0f;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.BLACK);
        getWindow().setNavigationBarColor(Color.BLACK);
        web = new WebView(this);
        web.setBackgroundColor(Color.BLACK);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        web.addJavascriptInterface(new Bridge(), "Svitanok");
        web.setWebViewClient(new WebViewClient() {
            @Override public void onPageFinished(WebView v, String url) {
                pageReady = true;
                if (pendingJs != null) { web.evaluateJavascript(pendingJs, null); pendingJs = null; }
            }
        });
        setContentView(web);
        web.loadUrl("file:///android_asset/svitanok.html");
        if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 1);
        }
        handle(getIntent());
        Scheduler.schedule(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (pageReady) web.evaluateJavascript("window.refreshChecks&&refreshChecks()", null);
    }

    @Override
    protected void onNewIntent(Intent intent) { super.onNewIntent(intent); setIntent(intent); handle(intent); }

    private void handle(Intent i) {
        if (i == null || !"sunrise".equals(i.getStringExtra("mode"))) return;
        setShowWhenLocked(true);
        setTurnScreenOn(true);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        hideBars();
        String js = "startSunrise(" + i.getLongExtra("start", 0) + "," + i.getLongExtra("alarmAt", 0) + "," + i.getLongExtra("id", 0) + ")";
        if (pageReady) web.evaluateJavascript(js, null); else pendingJs = js;
        i.removeExtra("mode");
    }

    private void hideBars() {
        web.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
    }

    private void setBrightness(float f) {
        WindowManager.LayoutParams lp = getWindow().getAttributes();
        lp.screenBrightness = f < 0 ? WindowManager.LayoutParams.BRIGHTNESS_OVERRIDE_NONE : Math.max(0.01f, Math.min(1f, f));
        getWindow().setAttributes(lp);
    }

    static final String BIRDS = "builtin:birds";

    /** Built-in birds and music is the default sound. */
    private String soundMode() {
        String u = Scheduler.prefs(this).getString("sound", "");
        if (u.isEmpty() || BIRDS.equals(u)) return "birds";
        return "none".equals(u) ? "none" : "system";
    }

    private Uri soundUri() {
        String u = Scheduler.prefs(this).getString("sound", "");
        if ("none".equals(u)) return null;
        if (u.isEmpty() || BIRDS.equals(u)) return Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.birds_music);
        return Uri.parse(u);
    }

    private boolean startPlayer(float startVolume) {
        Uri u = soundUri();
        if (u == null) return false;
        try {
            player = new MediaPlayer();
            player.setAudioAttributes(new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_ALARM)
                    .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC).build());
            player.setDataSource(this, u);
            player.setLooping(true);
            player.prepare();
            volume = startVolume;
            player.setVolume(volume, volume);
            player.start();
            return true;
        } catch (Exception e) { player = null; return false; }
    }

    /** Birds and music start with the sunrise and get louder with the light. */
    private void startAmbient() {
        if (!"birds".equals(soundMode()) || player != null) return;
        startPlayer(0.005f);
    }

    private void setAmbientVolume(float v) {
        if (player == null || !"birds".equals(soundMode())) return;
        volume = Math.max(0.005f, Math.min(1f, v));
        try { player.setVolume(volume, volume); } catch (Exception ignored) { }
    }

    private final Runnable rampUp = new Runnable() {
        @Override public void run() {
            if (player == null) return;
            volume = Math.min(1f, volume + 0.02f);   // full volume after about a minute
            try { player.setVolume(volume, volume); } catch (Exception ignored) { }
            if (volume < 1f) ui.postDelayed(this, 1200);
        }
    };

    private void ring() {
        if ("birds".equals(soundMode()) && player != null) {
            // already playing since the sunrise began: bring it to full volume
            ui.removeCallbacks(rampUp);
            ui.postDelayed(rampUp, 300);
        } else {
            stopRing();
            if (startPlayer(0.04f)) ui.postDelayed(rampUp, 1200);
        }
        if (Scheduler.prefs(this).getBoolean("vibrate", false)) {
            Vibrator v = getSystemService(Vibrator.class);
            if (v != null) v.vibrate(VibrationEffect.createWaveform(new long[]{0, 500, 1500}, 0));
        }
    }

    private void stopRing() {
        ui.removeCallbacks(rampUp);
        if (player != null) { try { player.stop(); player.release(); } catch (Exception ignored) { } player = null; }
        Vibrator v = getSystemService(Vibrator.class);
        if (v != null) v.cancel();
    }

    private void endSunrise() {
        stopRing();
        setBrightness(-1);
        getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setShowWhenLocked(false);
        setTurnScreenOn(false);
        getSystemService(NotificationManager.class).cancel(AlarmReceiver.NOTE);
    }

    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        super.onActivityResult(req, res, data);
        if (req != 7 || res != RESULT_OK || data == null) return;
        Uri u = data.getParcelableExtra(RingtoneManager.EXTRA_RINGTONE_PICKED_URI);
        Scheduler.prefs(this).edit().putString("sound", u == null ? "none" : u.toString()).apply();
        web.evaluateJavascript("onSound(" + JSONObject.quote(soundTitle()) + "," + JSONObject.quote(soundMode()) + ")", null);
    }

    private String soundTitle() {
        if ("birds".equals(soundMode())) return "Пташки й музика";
        Uri u = soundUri();
        if (u == null) return "Без звуку";
        try { Ringtone r = RingtoneManager.getRingtone(this, u); return r.getTitle(this); } catch (Exception e) { return "Мелодія будильника"; }
    }

    /** Called from the page as window.Svitanok. */
    private class Bridge {
        @JavascriptInterface
        public String getState() {
            SharedPreferences p = Scheduler.prefs(MainActivity.this);
            JSONObject o = new JSONObject();
            try {
                o.put("alarms", new JSONArray(p.getString("alarms", "[]")));
                o.put("vibrate", p.getBoolean("vibrate", false));
                o.put("sound", soundTitle());
                o.put("soundMode", soundMode());
                long[] n = Scheduler.next(MainActivity.this);
                if (n != null) { o.put("nextStart", n[1]); o.put("nextAt", n[2]); }
            } catch (Exception ignored) { }
            return o.toString();
        }

        @JavascriptInterface
        public void save(String alarmsJson, boolean vibrate) {
            Scheduler.prefs(MainActivity.this).edit().putString("alarms", alarmsJson).putBoolean("vibrate", vibrate).apply();
            Scheduler.schedule(MainActivity.this);
        }

        @JavascriptInterface
        public void pickSound() {
            runOnUiThread(() -> {
                Intent i = new Intent(RingtoneManager.ACTION_RINGTONE_PICKER)
                        .putExtra(RingtoneManager.EXTRA_RINGTONE_TYPE, RingtoneManager.TYPE_ALARM)
                        .putExtra(RingtoneManager.EXTRA_RINGTONE_TITLE, "Звук будильника")
                        .putExtra(RingtoneManager.EXTRA_RINGTONE_SHOW_SILENT, true)
                        .putExtra(RingtoneManager.EXTRA_RINGTONE_SHOW_DEFAULT, true)
                        .putExtra(RingtoneManager.EXTRA_RINGTONE_EXISTING_URI, soundUri());
                try { startActivityForResult(i, 7); } catch (Exception ignored) { }
            });
        }

        /** What the alarm needs to open over a locked screen. */
        @JavascriptInterface
        public String getChecks() {
            JSONObject o = new JSONObject();
            try {
                NotificationManager nm = getSystemService(NotificationManager.class);
                o.put("notif", nm.areNotificationsEnabled());
                o.put("fsi", Build.VERSION.SDK_INT < 34 || nm.canUseFullScreenIntent());
                o.put("overlay", Settings.canDrawOverlays(MainActivity.this));
                PowerManager pm = getSystemService(PowerManager.class);
                o.put("battery", pm.isIgnoringBatteryOptimizations(getPackageName()));
                android.app.AlarmManager am = getSystemService(android.app.AlarmManager.class);
                o.put("exact", Build.VERSION.SDK_INT < 31 || am.canScheduleExactAlarms());
            } catch (Exception ignored) { }
            return o.toString();
        }

        @JavascriptInterface
        public void openSetting(String which) {
            runOnUiThread(() -> {
                Uri pkg = Uri.parse("package:" + getPackageName());
                Intent i;
                switch (which) {
                    case "notif": i = new Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS).putExtra(Settings.EXTRA_APP_PACKAGE, getPackageName()); break;
                    case "fsi": i = Build.VERSION.SDK_INT >= 34 ? new Intent(Settings.ACTION_MANAGE_APP_USE_FULL_SCREEN_INTENT, pkg) : new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, pkg); break;
                    case "overlay": i = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, pkg); break;
                    case "battery": i = new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, pkg); break;
                    case "exact": i = Build.VERSION.SDK_INT >= 31 ? new Intent(Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM, pkg) : new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, pkg); break;
                    default: i = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, pkg);
                }
                try { startActivity(i); }
                catch (Exception e) { try { startActivity(new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, pkg)); } catch (Exception ignored) { } }
            });
        }

        /** A quick test: the sunrise screen should open by itself in about a minute. */
        @JavascriptInterface
        public void testInMinute() {
            Scheduler.prefs(MainActivity.this).edit().putLong("snoozeAt", System.currentTimeMillis() + 60_000L).apply();
            Scheduler.schedule(MainActivity.this);
        }

        @JavascriptInterface
        public void brightness(float f) { runOnUiThread(() -> setBrightness(f)); }

        @JavascriptInterface
        public void ambient(float v) { runOnUiThread(() -> { startAmbient(); setAmbientVolume(v); }); }

        @JavascriptInterface
        public void stopAmbient() { runOnUiThread(MainActivity.this::stopRing); }

        @JavascriptInterface
        public void setSound(String mode) {
            runOnUiThread(() -> {
                Scheduler.prefs(MainActivity.this).edit().putString("sound", "birds".equals(mode) ? BIRDS : "none").apply();
                web.evaluateJavascript("onSound(" + JSONObject.quote(soundTitle()) + "," + JSONObject.quote(soundMode()) + ")", null);
            });
        }

        @JavascriptInterface
        public void ring() { runOnUiThread(MainActivity.this::ring); }

        @JavascriptInterface
        public void snooze(int minutes) {
            runOnUiThread(() -> {
                stopRing();
                setBrightness(0.15f);
                Scheduler.prefs(MainActivity.this).edit().putLong("snoozeAt", System.currentTimeMillis() + minutes * 60_000L).apply();
                Scheduler.schedule(MainActivity.this);
            });
        }

        @JavascriptInterface
        public void dismiss(long id) {
            runOnUiThread(() -> {
                endSunrise();
                SharedPreferences p = Scheduler.prefs(MainActivity.this);
                p.edit().putLong("snoozeAt", 0).apply();
                // A one-time alarm (no days chosen) switches itself off after it rang.
                try {
                    JSONArray a = new JSONArray(p.getString("alarms", "[]"));
                    for (int i = 0; i < a.length(); i++) {
                        JSONObject o = a.getJSONObject(i);
                        JSONArray d = o.optJSONArray("days");
                        if (o.optLong("id") == id && (d == null || d.length() == 0)) o.put("on", false);
                    }
                    p.edit().putString("alarms", a.toString()).apply();
                } catch (Exception ignored) { }
                Scheduler.schedule(MainActivity.this);
                web.evaluateJavascript("showHome()", null);
            });
        }

        @JavascriptInterface
        public void stopPreview() { runOnUiThread(() -> { endSunrise(); web.evaluateJavascript("showHome()", null); }); }
    }

    @Override
    protected void onDestroy() { stopRing(); web.destroy(); super.onDestroy(); }
}
