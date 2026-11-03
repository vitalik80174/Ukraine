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
import android.webkit.WebViewClient;
import android.webkit.WebResourceRequest;

import org.json.JSONObject;

import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.URL;

/**
 * Shows the bundled widget page full screen.
 * The page lives in assets, and file access is allowed to reach other sites,
 * so the app fetches alerts, threats and weather directly without a server.
 */
public class MainActivity extends Activity {
    private WebView web;
    private static long lastSpeed = 0;
    private static String lastGateway = null;

    private static boolean tcp(String host, int port, int timeoutMs) {
        try (Socket so = new Socket()) { so.connect(new InetSocketAddress(host, port), timeoutMs); return true; }
        catch (Exception e) { return false; }
    }

    private static boolean http204() {
        try {
            HttpURLConnection c = (HttpURLConnection) new URL("https://www.gstatic.com/generate_204").openConnection();
            c.setConnectTimeout(5000); c.setReadTimeout(5000); c.setUseCaches(false);
            int code = c.getResponseCode(); c.disconnect();
            return code == 204 || code == 200;
        } catch (Exception e) { return false; }
    }

    private static double speedMbps() {
        try {
            HttpURLConnection c = (HttpURLConnection) new URL("https://speed.cloudflare.com/__down?bytes=4000000").openConnection();
            c.setConnectTimeout(6000); c.setReadTimeout(15000);
            long t0 = System.nanoTime(), total = 0;
            try (InputStream in = c.getInputStream()) {
                byte[] b = new byte[65536]; int n;
                while ((n = in.read(b)) > 0) total += n;
            }
            double sec = (System.nanoTime() - t0) / 1e9;
            return sec > 0 ? Math.round(total * 8 / sec / 1e6 * 10) / 10.0 : 0;
        } catch (Exception e) { return 0; }
    }

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
        // Links to websites open in the browser instead of replacing the widget.
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest req) {
                Uri u = req.getUrl();
                if ("file".equals(u.getScheme())) return false;
                try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (Exception ignored) { }
                return true;
            }
        });
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
                        .putBoolean("voice", o.optBoolean("voice", true))
                        .putBoolean("pwRem", o.optBoolean("pwRem", true))
                        .putBoolean("batt", o.optBoolean("batt", true))
                        .apply();
            } catch (Exception ignored) { }
        }

        @JavascriptInterface
        public void setSky(String json) {
            getSharedPreferences(WatchService.PREFS, MODE_PRIVATE).edit().putString("sky", json).apply();
        }

        /** Checks the connection in the background and answers through window.onNet. */
        @JavascriptInterface
        public void netCheck() {
            new Thread(() -> {
                JSONObject o = new JSONObject();
                try {
                    ConnectivityManager cm = getSystemService(ConnectivityManager.class);
                    Network net = cm.getActiveNetwork();
                    NetworkCapabilities nc = net == null ? null : cm.getNetworkCapabilities(net);
                    String type = nc == null ? "none"
                            : nc.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) ? "wifi"
                            : nc.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) ? "cellular"
                            : nc.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET) ? "ethernet" : "other";
                    o.put("type", type);
                    WifiManager wm = (WifiManager) getApplicationContext().getSystemService(WIFI_SERVICE);
                    if ("wifi".equals(type) && wm != null) {
                        WifiInfo wi = wm.getConnectionInfo();
                        int rssi = wi.getRssi();
                        o.put("rssi", rssi);
                        o.put("level", WifiManager.calculateSignalLevel(rssi, 5));
                        int gw = wm.getDhcpInfo().gateway;
                        if (gw != 0) {
                            lastGateway = (gw & 0xff) + "." + ((gw >> 8) & 0xff) + "." + ((gw >> 16) & 0xff) + "." + ((gw >> 24) & 0xff);
                            o.put("router", tcp(lastGateway, 80, 900) || tcp(lastGateway, 443, 900) || tcp(lastGateway, 53, 900));
                        }
                    } else if (lastGateway != null && wm != null && wm.isWifiEnabled()) {
                        // Home Wi-Fi was here before and is gone now: usually the router lost power.
                        o.put("router", false);
                    }
                    long t0 = System.nanoTime();
                    boolean ok = http204();
                    o.put("online", ok);
                    if (ok) o.put("ms", (System.nanoTime() - t0) / 1_000_000);
                    if (ok && "wifi".equals(type) && System.currentTimeMillis() - lastSpeed > 30 * 60_000L) {
                        lastSpeed = System.currentTimeMillis();
                        double mbps = speedMbps();
                        if (mbps > 0) o.put("mbps", mbps);
                    }
                } catch (Exception ignored) { }
                String js = "window.onNet&&window.onNet(" + o + ")";
                runOnUiThread(() -> web.evaluateJavascript(js, null));
            }).start();
        }

        @JavascriptInterface
        public void setOutages(String json) {
            getSharedPreferences(WatchService.PREFS, MODE_PRIVATE).edit().putString("outages", json).apply();
        }

        @JavascriptInterface
        public String getHistory() { return WatchService.historyJson(); }

        @JavascriptInterface
        public String getTrails() { return WatchService.trailsJson(); }

        @JavascriptInterface
        public String version() {
            try { return getPackageManager().getPackageInfo(getPackageName(), 0).versionName; }
            catch (Exception e) { return "0.0"; }
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
