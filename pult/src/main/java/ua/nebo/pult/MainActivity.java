package ua.nebo.pult;

import android.Manifest;
import android.app.Activity;
import android.app.KeyguardManager;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.PowerManager;
import android.provider.Settings;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONObject;

/** «Пульт»: the screen shows whether the tablet is listening, what to switch on, and the journal. */
public class MainActivity extends Activity {
    static volatile String pendingMessage;
    private WebView web;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.parseColor("#0B111C"));
        getWindow().setNavigationBarColor(Color.parseColor("#0B111C"));
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#0B111C"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        web.addJavascriptInterface(new Bridge(), "Pult");
        web.setWebViewClient(new WebViewClient());
        setContentView(web);
        web.loadUrl("file:///android_asset/pult.html");
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
        if (Journal.prefs(this).getBoolean("on", false) && !PultService.running) {
            try { PultService.start(this); } catch (Exception ignored) {}
        }
    }

    @Override
    protected void onNewIntent(Intent intent) { super.onNewIntent(intent); setIntent(intent); }

    @Override
    protected void onPause() { web.onPause(); super.onPause(); }

    @Override
    protected void onDestroy() { web.destroy(); super.onDestroy(); }

    private class Bridge {
        @JavascriptInterface
        public String status() {
            try {
                JSONObject o = new JSONObject();
                PowerManager pm = (PowerManager) getSystemService(POWER_SERVICE);
                KeyguardManager km = (KeyguardManager) getSystemService(KEYGUARD_SERVICE);
                o.put("on", Journal.prefs(MainActivity.this).getBoolean("on", false));
                o.put("running", PultService.running);
                o.put("online", PultService.online);
                o.put("status", PultService.status);
                o.put("lastCheck", PultService.lastCheck);
                o.put("overlay", Settings.canDrawOverlays(MainActivity.this));
                o.put("battery", pm.isIgnoringBatteryOptimizations(getPackageName()));
                o.put("notif", Build.VERSION.SDK_INT < 33
                        || checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED);
                o.put("secure", km.isDeviceSecure());
                o.put("settings", Settings.System.canWrite(MainActivity.this));
                return o.toString();
            } catch (Exception e) {
                return "{}";
            }
        }

        @JavascriptInterface
        public String log() { return Journal.json(MainActivity.this); }

        @JavascriptInterface
        public void setOn(boolean on) {
            Journal.prefs(MainActivity.this).edit().putBoolean("on", on).apply();
            runOnUiThread(() -> {
                try {
                    if (on) {
                        if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED)
                            requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 1);
                        PultService.start(MainActivity.this);
                    } else PultService.stop(MainActivity.this);
                } catch (Exception ignored) {}
            });
        }

        @JavascriptInterface
        public void openOverlay() {
            runOnUiThread(() -> {
                try { startActivity(new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:" + getPackageName()))); }
                catch (Exception e) { startActivity(new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION)); }
            });
        }

        @JavascriptInterface
        public void openBattery() {
            runOnUiThread(() -> {
                try { startActivity(new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, Uri.parse("package:" + getPackageName()))); }
                catch (Exception e) { startActivity(new Intent(Settings.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS)); }
            });
        }

        @JavascriptInterface
        public void openWriteSettings() {
            runOnUiThread(() -> {
                try { startActivity(new Intent(Settings.ACTION_MANAGE_WRITE_SETTINGS, Uri.parse("package:" + getPackageName()))); }
                catch (Exception e) { startActivity(new Intent(Settings.ACTION_MANAGE_WRITE_SETTINGS)); }
            });
        }

        @JavascriptInterface
        public void askNotif() {
            if (Build.VERSION.SDK_INT >= 33) runOnUiThread(() -> requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 1));
        }

        @JavascriptInterface
        public void test() {
            Intent i = new Intent(MainActivity.this, PultService.class).setAction("test");
            try { startService(i); } catch (Exception ignored) {}
        }

        @JavascriptInterface
        public String takeMessage() { String m = pendingMessage; pendingMessage = null; return m == null ? "" : m; }

        @JavascriptInterface
        public String version() {
            try { return getPackageManager().getPackageInfo(getPackageName(), 0).versionName; }
            catch (Exception e) { return ""; }
        }
    }
}
