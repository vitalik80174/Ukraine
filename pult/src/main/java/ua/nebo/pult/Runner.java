package ua.nebo.pult;

import android.app.KeyguardManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.media.AudioManager;
import android.net.Uri;
import android.os.PowerManager;
import android.provider.Settings;
import android.speech.tts.TextToSpeech;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.List;
import java.util.Locale;

/**
 * Carries out one command: a list of actions run in order, e.g.
 *   {"actions":[{"do":"wake"},{"do":"open","app":"ua.nebo.vikno"},{"do":"say","text":"Доброго ранку"}]}
 * Each action returns one human-readable line for the journal.
 */
final class Runner {
    private final Context ctx;
    private TextToSpeech tts;
    private volatile int ttsState; // 0 = starting, 1 = ready, -1 = unavailable
    private PowerManager.WakeLock awake;

    Runner(Context c) {
        ctx = c.getApplicationContext();
        try {
            tts = new TextToSpeech(ctx, status -> {
                if (status == TextToSpeech.SUCCESS) {
                    int r = tts.setLanguage(new Locale("uk", "UA"));
                    if (r < 0) tts.setLanguage(Locale.getDefault());
                    ttsState = 1;
                } else ttsState = -1;
            });
        } catch (Exception e) {
            ttsState = -1;
        }
    }

    void shutdown() {
        if (tts != null) try { tts.shutdown(); } catch (Exception ignored) {}
        if (awake != null && awake.isHeld()) try { awake.release(); } catch (Exception ignored) {}
    }

    /** Runs all actions; returns the journal lines. Sets ok[0] = false if something failed. */
    JSONArray run(JSONObject cmd, boolean[] ok) {
        JSONArray lines = new JSONArray();
        JSONArray actions = cmd.optJSONArray("actions");
        if (actions == null) actions = new JSONArray();
        for (int i = 0; i < actions.length(); i++) {
            JSONObject a = actions.optJSONObject(i);
            if (a == null) continue;
            String line;
            try {
                line = one(a);
            } catch (Exception e) {
                line = "✗ " + a.optString("do") + ": " + e.getMessage();
            }
            if (line.startsWith("✗")) ok[0] = false;
            lines.put(line);
        }
        return lines;
    }

    private String one(JSONObject a) throws Exception {
        switch (a.optString("do")) {
            case "wake": return wake();
            case "open": return open(a.optString("app"), a.optJSONObject("extras"));
            case "url": return url(a.optString("url"));
            case "volume": return volume(a.optInt("level", 50));
            case "say": return say(a.optString("text"));
            case "show": return show(a.optString("text"));
            case "home": return home();
            case "awake": return keepAwake(a.optInt("minutes", 10));
            case "wait": Thread.sleep(Math.max(0, Math.min(30000, a.optLong("ms", 1000)))); return "· пауза " + a.optLong("ms", 1000) + " мс";
            default: return "✗ не знаю дії «" + a.optString("do") + "»";
        }
    }

    private boolean canStartFromBackground() { return Settings.canDrawOverlays(ctx); }

    private void start(Intent i) {
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        ctx.startActivity(i);
    }

    @SuppressWarnings("deprecation")
    private String wake() throws InterruptedException {
        PowerManager pm = (PowerManager) ctx.getSystemService(Context.POWER_SERVICE);
        KeyguardManager km = (KeyguardManager) ctx.getSystemService(Context.KEYGUARD_SERVICE);
        boolean wasOn = pm.isInteractive();
        if (!wasOn) {
            PowerManager.WakeLock wl = pm.newWakeLock(PowerManager.SCREEN_BRIGHT_WAKE_LOCK
                    | PowerManager.ACQUIRE_CAUSES_WAKEUP | PowerManager.ON_AFTER_RELEASE, "pult:wake");
            wl.acquire(8000);
        }
        if (km.isKeyguardLocked()) {
            start(new Intent(ctx, WakeActivity.class).addFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION));
            for (int i = 0; i < 25 && km.isKeyguardLocked(); i++) Thread.sleep(200);
        }
        Thread.sleep(300);
        if (km.isKeyguardLocked()) {
            if (km.isDeviceSecure()) return "✗ екран увімкнено, але стоїть PIN/пароль — його Пульт не знімає";
            if (!canStartFromBackground()) return "✗ екран увімкнено, але замок лишився: дайте дозвіл «Поверх інших застосунків»";
            return "✗ екран увімкнено, але замок не знявся";
        }
        return wasOn ? "✓ екран і так був увімкнений, замок знято" : "✓ розбудив і розблокував";
    }

    private String open(String app, JSONObject extras) {
        if (app == null || app.isEmpty()) return "✗ не сказано, що відкрити";
        PackageManager pm = ctx.getPackageManager();
        Intent li = pm.getLaunchIntentForPackage(app);
        String label = app;
        if (li == null) {
            Intent q = new Intent(Intent.ACTION_MAIN).addCategory(Intent.CATEGORY_LAUNCHER);
            @SuppressWarnings("deprecation") List<ResolveInfo> all = pm.queryIntentActivities(q, 0);
            String want = app.toLowerCase(Locale.ROOT).trim();
            ResolveInfo exact = null, part = null;
            for (ResolveInfo r : all) {
                String l = String.valueOf(r.loadLabel(pm)).toLowerCase(Locale.ROOT).trim();
                if (l.equals(want)) { exact = r; break; }
                if (part == null && (l.contains(want) || want.contains(l) && l.length() >= 3)) part = r;
            }
            ResolveInfo r = exact != null ? exact : part;
            if (r != null) {
                li = pm.getLaunchIntentForPackage(r.activityInfo.packageName);
                label = String.valueOf(r.loadLabel(pm));
            }
        } else {
            try { label = String.valueOf(pm.getApplicationLabel(pm.getApplicationInfo(app, 0))); } catch (Exception ignored) {}
        }
        if (li == null) return "✗ не знайшов застосунок «" + app + "»";
        if (extras != null) {
            Iterator<String> k = extras.keys();
            while (k.hasNext()) { String key = k.next(); li.putExtra(key, extras.optString(key)); }
        }
        li.addFlags(Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED);
        start(li);
        return (canStartFromBackground() ? "✓ відкрив «" : "? попросив відкрити «") + label + "»"
                + (canStartFromBackground() ? "" : " (без дозволу «Поверх інших» Android може не дати)");
    }

    private String url(String u) {
        if (u == null || !(u.startsWith("https://") || u.startsWith("http://"))) return "✗ дивне посилання";
        start(new Intent(Intent.ACTION_VIEW, Uri.parse(u)));
        return "✓ відкрив посилання " + Uri.parse(u).getHost();
    }

    private String volume(int level) {
        AudioManager am = (AudioManager) ctx.getSystemService(Context.AUDIO_SERVICE);
        int max = am.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
        int v = Math.round(Math.max(0, Math.min(100, level)) / 100f * max);
        am.setStreamVolume(AudioManager.STREAM_MUSIC, v, AudioManager.FLAG_SHOW_UI);
        return "✓ гучність " + Math.max(0, Math.min(100, level)) + "%";
    }

    private String say(String text) throws InterruptedException {
        if (text == null || text.isEmpty()) return "✗ нічого сказати";
        for (int i = 0; i < 50 && ttsState == 0; i++) Thread.sleep(100);
        if (ttsState != 1 || tts == null) return "✗ на планшеті немає синтезу мовлення";
        tts.speak(text, TextToSpeech.QUEUE_ADD, null, "pult" + System.nanoTime());
        return "✓ сказав: «" + text + "»";
    }

    private String show(String text) {
        MainActivity.pendingMessage = text;
        start(new Intent(ctx, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP));
        return "✓ показав напис: «" + text + "»";
    }

    private String home() {
        start(new Intent(Intent.ACTION_MAIN).addCategory(Intent.CATEGORY_HOME));
        return "✓ повернувся на головний екран";
    }

    @SuppressWarnings("deprecation")
    private String keepAwake(int minutes) {
        if (awake != null && awake.isHeld()) awake.release();
        if (minutes <= 0) return "✓ екран знову гасне як звичайно";
        PowerManager pm = (PowerManager) ctx.getSystemService(Context.POWER_SERVICE);
        awake = pm.newWakeLock(PowerManager.SCREEN_BRIGHT_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP
                | PowerManager.ON_AFTER_RELEASE, "pult:awake");
        awake.setReferenceCounted(false);
        int m = Math.min(minutes, 240);
        awake.acquire(m * 60_000L);
        return "✓ екран не гасне " + m + " хв";
    }
}
