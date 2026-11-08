package ua.nebo.onovlennia;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONObject;

import java.lang.ref.WeakReference;

/** The screen: a list of the user's apps with their versions, driven by assets/onovlennia.html. */
public class MainActivity extends Activity {
    static volatile boolean visible = false;
    private static WeakReference<MainActivity> current = new WeakReference<>(null);
    private WebView web;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.parseColor("#12141c"));
        getWindow().setNavigationBarColor(Color.parseColor("#12141c"));
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#12141c"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        web.addJavascriptInterface(new Bridge(), "Upd");
        web.setWebViewClient(new WebViewClient());
        setContentView(web);
        web.loadUrl("file:///android_asset/onovlennia.html");
        current = new WeakReference<>(this);
        Updater.schedule(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        visible = true;
        current = new WeakReference<>(this);
        refresh();
        long last = Updater.prefs(this).getLong("lastCheck", 0);
        if (System.currentTimeMillis() - last > 5 * 60 * 1000L) new Thread(() -> Updater.run(this, null, false)).start();
    }

    @Override
    protected void onPause() { visible = false; super.onPause(); }

    /** Redraws the page from any thread. */
    static void refresh() {
        MainActivity a = current.get();
        if (a == null || a.web == null) return;
        a.runOnUiThread(() -> { if (a.web != null) a.web.evaluateJavascript("window.render&&render()", null); });
    }

    @Override
    protected void onDestroy() { if (web != null) { web.destroy(); web = null; } super.onDestroy(); }

    private class Bridge {
        @JavascriptInterface
        public String state() {
            try {
                SharedPreferences p = Updater.prefs(MainActivity.this);
                JSONObject cat = Updater.cachedCatalog(MainActivity.this);
                long code = cat.optLong("code");
                JSONObject o = new JSONObject();
                o.put("tag", Updater.nice(cat.optString("tag")));
                o.put("lastCheck", p.getLong("lastCheck", 0));
                o.put("busy", Updater.busy);
                o.put("canInstall", Build.VERSION.SDK_INT < 26 || getPackageManager().canRequestPackageInstalls());
                o.put("notif", Build.VERSION.SDK_INT < 33 || checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED);
                o.put("silent", Build.VERSION.SDK_INT >= 31);
                o.put("auto", p.getBoolean("auto", true));
                o.put("wifi", p.getBoolean("wifi", false));
                o.put("night", p.getBoolean("night", false));
                o.put("log", new JSONArray(p.getString("log", "[]")));
                o.put("self", getPackageName());
                JSONArray apps = cat.optJSONArray("apps"), out = new JSONArray();
                for (int i = 0; apps != null && i < apps.length(); i++) {
                    JSONObject a = apps.getJSONObject(i);
                    String pkg = a.optString("package");
                    JSONObject r = new JSONObject();
                    r.put("name", a.optString("name"));
                    r.put("about", a.optString("about"));
                    r.put("pkg", pkg);
                    r.put("size", a.optLong("size"));
                    r.put("installed", Updater.installedName(MainActivity.this, pkg));
                    r.put("status", code > 0 ? Updater.status(MainActivity.this, a, code) : (Updater.installedCode(MainActivity.this, pkg) < 0 ? "missing" : "unknown"));
                    String w = Updater.working.get(pkg);
                    if (w != null) r.put("working", w);
                    out.put(r);
                }
                o.put("apps", out);
                return o.toString();
            } catch (Exception e) { return "{}"; }
        }

        @JavascriptInterface
        public void check() { new Thread(() -> Updater.run(MainActivity.this, null, false)).start(); }

        @JavascriptInterface
        public void install(String pkg) { new Thread(() -> Updater.run(MainActivity.this, pkg, true)).start(); }

        @JavascriptInterface
        public void open(String pkg) {
            Intent i = getPackageManager().getLaunchIntentForPackage(pkg);
            if (i != null) runOnUiThread(() -> startActivity(i));
        }

        @JavascriptInterface
        public void setOpt(String key, boolean on) {
            Updater.prefs(MainActivity.this).edit().putBoolean(key, on).apply();
            Updater.schedule(MainActivity.this);
        }

        @JavascriptInterface
        public void allowInstall() {
            runOnUiThread(() -> startActivity(new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + getPackageName()))));
        }

        @JavascriptInterface
        public void allowNotif() {
            if (Build.VERSION.SDK_INT >= 33) runOnUiThread(() -> requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 1));
        }

        @JavascriptInterface
        public String version() {
            try { return getPackageManager().getPackageInfo(getPackageName(), 0).versionName; } catch (Exception e) { return ""; }
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        refresh();
    }
}
