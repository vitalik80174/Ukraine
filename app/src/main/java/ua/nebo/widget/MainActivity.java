package ua.nebo.widget;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.PowerManager;
import android.provider.Settings;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;

import org.json.JSONObject;

/**
 * Shows the bundled widget page full screen.
 * The page lives in assets, and file access is allowed to reach other sites,
 * so the app fetches alerts, threats and weather directly without a server.
 */
public class MainActivity extends Activity {
    private WebView web;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        // A tablet on a stand keeps showing the map instead of going to sleep.
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        getWindow().setStatusBarColor(Color.parseColor("#0d1117"));
        getWindow().setNavigationBarColor(Color.parseColor("#0d1117"));

        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#0d1117"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowFileAccessFromFileURLs(true);
        s.setAllowUniversalAccessFromFileURLs(true);
        s.setCacheMode(WebSettings.LOAD_NO_CACHE);
        s.setMediaPlaybackRequiresUserGesture(false);
        web.addJavascriptInterface(new Bridge(), "NeboNative");
        setContentView(web);

        if (state != null) web.restoreState(state);
        else web.loadUrl("file:///android_asset/nebo.html");
        hideBars();

        askPermissions();
        WatchService.start(this);
    }

    private void askPermissions() {
        if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 1);
        }
        // Without this, Android may pause network checks when the screen is off.
        SharedPreferences p = getSharedPreferences(WatchService.PREFS, MODE_PRIVATE);
        PowerManager pm = getSystemService(PowerManager.class);
        if (!p.getBoolean("asked_battery", false) && pm != null && !pm.isIgnoringBatteryOptimizations(getPackageName())) {
            p.edit().putBoolean("asked_battery", true).apply();
            try {
                startActivity(new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, Uri.parse("package:" + getPackageName())));
            } catch (Exception ignored) { }
        }
    }

    /** Called from the page as window.NeboNative. */
    private class Bridge {
        @JavascriptInterface
        public void setPrefs(String json) {
            try {
                JSONObject o = new JSONObject(json);
                getSharedPreferences(WatchService.PREFS, MODE_PRIVATE).edit()
                        .putString("home", o.optString("home"))
                        .putString("oblast", o.optString("oblast"))
                        .putString("city", o.optString("city"))
                        .putLong("lat", Double.doubleToLongBits(o.optDouble("lat", 49.8397)))
                        .putLong("lon", Double.doubleToLongBits(o.optDouble("lon", 24.0297)))
                        .putString("missile", o.optString("missile", "all"))
                        .apply();
            } catch (Exception ignored) { }
        }

        @JavascriptInterface
        public void setDim(boolean dim) {
            runOnUiThread(() -> {
                WindowManager.LayoutParams lp = getWindow().getAttributes();
                lp.screenBrightness = dim ? 0.02f : WindowManager.LayoutParams.BRIGHTNESS_OVERRIDE_NONE;
                getWindow().setAttributes(lp);
            });
        }

        @JavascriptInterface
        public void testAlarm() {
            WatchService.notifyMissile(MainActivity.this, "Перевірка сигналу", "Так звучатиме сигнал про ракети");
        }

        @JavascriptInterface
        public void openAutostart() {
            getSharedPreferences(WatchService.PREFS, MODE_PRIVATE).edit().putBoolean("autostart", true).apply();
            runOnUiThread(() -> {
                if (!Settings.canDrawOverlays(MainActivity.this)) {
                    try {
                        startActivity(new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:" + getPackageName())));
                    } catch (Exception ignored) { }
                }
            });
        }

        @JavascriptInterface
        public boolean autostartReady() {
            return getSharedPreferences(WatchService.PREFS, MODE_PRIVATE).getBoolean("autostart", false)
                    && Settings.canDrawOverlays(MainActivity.this);
        }
    }

    private void hideBars() {
        web.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideBars();
    }

    @Override
    protected void onResume() { super.onResume(); web.onResume(); web.resumeTimers(); }

    @Override
    protected void onPause() { web.onPause(); super.onPause(); }

    @Override
    protected void onSaveInstanceState(Bundle out) { super.onSaveInstanceState(out); web.saveState(out); }

    @Override
    protected void onDestroy() { web.destroy(); super.onDestroy(); }
}
