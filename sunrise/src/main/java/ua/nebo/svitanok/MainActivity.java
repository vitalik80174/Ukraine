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

    private Uri soundUri() {
        String u = Scheduler.prefs(this).getString("sound", "");
        if ("none".equals(u)) return null;
        return u.isEmpty() ? RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM) : Uri.parse(u);
    }

    private final Runnable rampUp = new Runnable() {
        @Override public void run() {
            if (player == null) return;
            volume = Math.min(1f, volume + 0.02f);   // full volume after about a minute
            try { player.setVolume(volume, volume); } catch (Exception ignored) { }
            if (volume < 1f) ui.postDelayed(this, 1200);
        }
    };

    // The alarm rings for at most five minutes, then goes quiet on its own.
    private final Runnable autoStop = () -> {
        stopRing();
        web.evaluateJavascript("window.onRingEnd&&onRingEnd()", null);
    };

    private void ring() {
        stopRing();
        ui.postDelayed(autoStop, 5 * 60_000L);
        Uri u = soundUri();
        if (u != null) {
            try {
                player = new MediaPlayer();
                player.setAudioAttributes(new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_ALARM)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION).build());
                player.setDataSource(this, u);
                player.setLooping(true);
                player.prepare();
                volume = 0.04f;
                player.setVolume(volume, volume);
                player.start();
                ui.postDelayed(rampUp, 1200);
            } catch (Exception e) { player = null; }
        }
        if (Scheduler.prefs(this).getBoolean("vibrate", false)) {
            Vibrator v = getSystemService(Vibrator.class);
            if (v != null) v.vibrate(VibrationEffect.createWaveform(new long[]{0, 500, 1500}, 0));
        }
    }

    private void stopRing() {
        ui.removeCallbacks(rampUp);
        ui.removeCallbacks(autoStop);
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
        web.evaluateJavascript("onSound(" + JSONObject.quote(soundTitle()) + ")", null);
    }

    private String soundTitle() {
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

        @JavascriptInterface
        public void brightness(float f) { runOnUiThread(() -> setBrightness(f)); }

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
