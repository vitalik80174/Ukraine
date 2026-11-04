package ua.nebo.vikno;

import android.app.Activity;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * «Вікно» — a living window for the tablet. Everything is drawn by assets/vikno.html;
 * this activity only hosts the page full-screen and remembers a couple of settings.
 */
public class MainActivity extends Activity {
    private WebView web;

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
        s.setAllowFileAccess(true);
        web.addJavascriptInterface(new Bridge(), "Vikno");
        web.setWebViewClient(new WebViewClient());
        setContentView(web);
        web.loadUrl("file:///android_asset/vikno.html");
        applyKeepAwake();
    }

    @Override
    protected void onResume() {
        super.onResume();
        hideBars();
        web.onResume();
        web.evaluateJavascript("window.onAppResume&&onAppResume()", null);
    }

    @Override
    protected void onPause() { web.onPause(); super.onPause(); }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideBars();
    }

    private SharedPreferences prefs() { return getSharedPreferences("vikno", MODE_PRIVATE); }

    private void applyKeepAwake() {
        if (prefs().getBoolean("awake", true)) getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        else getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
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

    /** Called from the page as window.Vikno. */
    private class Bridge {
        @JavascriptInterface
        public boolean getAwake() { return prefs().getBoolean("awake", true); }

        @JavascriptInterface
        public void setAwake(boolean on) {
            prefs().edit().putBoolean("awake", on).apply();
            runOnUiThread(MainActivity.this::applyKeepAwake);
        }

        /** -1 gives brightness back to the system. */
        @JavascriptInterface
        public void brightness(float f) { runOnUiThread(() -> setBrightness(f)); }

        @JavascriptInterface
        public String version() {
            try { return getPackageManager().getPackageInfo(getPackageName(), 0).versionName; }
            catch (Exception e) { return ""; }
        }
    }

    @Override
    protected void onDestroy() { web.destroy(); super.onDestroy(); }
}
