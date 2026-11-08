package ua.nebo.onovlennia;

import android.app.PendingIntent;
import android.app.job.JobInfo;
import android.app.job.JobScheduler;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageInstaller;
import android.content.pm.PackageManager;
import android.os.Build;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Checks the latest GitHub release of vitalik80174/Ukraine and installs newer builds of the user's apps.
 *
 * Every app in the repo gets versionCode 100 + run number, and the release tag is "v1.<run number>",
 * so the release tag tells which versionCode is available. The release also carries apps.json with a
 * git tree hash per module: an app whose code did not change since we last installed it is skipped,
 * so «Вікно» is not restarted just because «Пісочниця» changed.
 *
 * Installs go through PackageInstaller. On Android 12+ an update is silent when this app is the
 * installer of record; the very first update of an app installed from a browser needs one tap.
 */
public final class Updater {
    static final String REPO = "vitalik80174/Ukraine";
    static final String API = "https://api.github.com/repos/" + REPO + "/releases/latest";
    static final String ACTION_STATUS = "ua.nebo.onovlennia.INSTALL_STATUS";

    /** What is happening to each package right now ("Завантаження…", "Встановлення…"). */
    static final Map<String, String> working = new ConcurrentHashMap<>();
    static volatile boolean busy = false;

    static final String FALLBACK = "["
            + "{\"package\":\"ua.nebo.widget\",\"apk\":\"Nebo.apk\",\"name\":\"Небо\",\"about\":\"Тривоги, шахеди, погода й світло у Львові\"},"
            + "{\"package\":\"ua.nebo.svitanok\",\"apk\":\"Svitanok.apk\",\"name\":\"Світанок\",\"about\":\"Будильник зі штучним світанком\"},"
            + "{\"package\":\"ua.nebo.vikno\",\"apk\":\"Vikno.apk\",\"name\":\"Вікно\",\"about\":\"Живий Львів із висоти Ратуші\"},"
            + "{\"package\":\"ua.nebo.pisok\",\"apk\":\"Pisok.apk\",\"name\":\"Пісочниця\",\"about\":\"Живі матеріали під пальцями\"},"
            + "{\"package\":\"ua.nebo.ruina\",\"apk\":\"Ruina.apk\",\"name\":\"Руйнівник\",\"about\":\"3D-руйнування споруд\"},"
            + "{\"package\":\"ua.nebo.struny\",\"apk\":\"Struny.apk\",\"name\":\"Струни\",\"about\":\"Музика світних струн і кульок\"},"
            + "{\"package\":\"ua.nebo.onovlennia\",\"apk\":\"Onovlennia.apk\",\"name\":\"Оновлення\",\"about\":\"Сам ставить нові версії всіх застосунків\"}"
            + "]";

    private Updater() {}

    static SharedPreferences prefs(Context c) { return c.getSharedPreferences("upd", Context.MODE_PRIVATE); }

    /* ---------------- network ---------------- */

    private static HttpURLConnection open(String url) throws IOException {
        HttpURLConnection h = (HttpURLConnection) new URL(url).openConnection();
        h.setConnectTimeout(15000);
        h.setReadTimeout(60000);
        h.setInstanceFollowRedirects(true);
        h.setRequestProperty("User-Agent", "Nebo-Onovlennia");
        h.setRequestProperty("Accept", "application/vnd.github+json, application/octet-stream, */*");
        int code = h.getResponseCode();
        if (code == 301 || code == 302 || code == 303 || code == 307 || code == 308) { // a redirect to another host
            String loc = h.getHeaderField("Location");
            h.disconnect();
            if (loc == null) throw new IOException("redirect without location");
            return open(loc);
        }
        if (code != 200) { h.disconnect(); throw new IOException("HTTP " + code); }
        return h;
    }

    static String get(String url) throws IOException {
        HttpURLConnection h = open(url);
        try (InputStream in = h.getInputStream()) {
            ByteArrayOutputStream b = new ByteArrayOutputStream();
            byte[] buf = new byte[16384];
            int n;
            while ((n = in.read(buf)) > 0) b.write(buf, 0, n);
            return new String(b.toByteArray(), StandardCharsets.UTF_8);
        } finally { h.disconnect(); }
    }

    static void download(String url, File out) throws IOException {
        HttpURLConnection h = open(url);
        try (InputStream in = h.getInputStream(); OutputStream o = new FileOutputStream(out)) {
            byte[] buf = new byte[65536];
            int n;
            while ((n = in.read(buf)) > 0) o.write(buf, 0, n);
        } finally { h.disconnect(); }
    }

    /* ---------------- catalog ---------------- */

    static long codeFromTag(String tag) {
        if (tag == null) return 0;
        int dot = tag.lastIndexOf('.');
        try { return 100 + Long.parseLong(tag.substring(dot + 1).trim()); } catch (Exception e) { return 0; }
    }

    /** Fetches the latest release and stores it as the catalog: {tag, code, apps:[{name,package,apk,about,hash,url,size}]}. */
    static JSONObject fetchCatalog(Context c) throws IOException, JSONException {
        JSONObject rel = new JSONObject(get(API));
        String tag = rel.getString("tag_name");
        JSONArray assets = rel.getJSONArray("assets");
        Map<String, JSONObject> byName = new HashMap<>();
        for (int i = 0; i < assets.length(); i++) {
            JSONObject a = assets.getJSONObject(i);
            byName.put(a.getString("name"), a);
        }
        JSONArray list;
        JSONObject listAsset = byName.get("apps.json");
        if (listAsset != null) {
            try { list = new JSONArray(get(listAsset.getString("browser_download_url"))); }
            catch (Exception e) { list = new JSONArray(FALLBACK); }
        } else list = new JSONArray(FALLBACK);
        JSONArray apps = new JSONArray();
        for (int i = 0; i < list.length(); i++) {
            JSONObject a = list.getJSONObject(i);
            JSONObject asset = byName.get(a.optString("apk"));
            if (asset == null) continue;
            a.put("url", asset.getString("browser_download_url"));
            a.put("size", asset.optLong("size"));
            apps.put(a);
        }
        JSONObject cat = new JSONObject();
        cat.put("tag", tag);
        cat.put("code", codeFromTag(tag));
        cat.put("apps", apps);
        prefs(c).edit().putString("catalog", cat.toString()).putLong("lastCheck", System.currentTimeMillis()).apply();
        return cat;
    }

    static JSONObject cachedCatalog(Context c) {
        try {
            String s = prefs(c).getString("catalog", null);
            if (s != null) return new JSONObject(s);
            JSONObject cat = new JSONObject();
            cat.put("tag", "");
            cat.put("code", 0);
            cat.put("apps", new JSONArray(FALLBACK));
            return cat;
        } catch (JSONException e) { return new JSONObject(); }
    }

    /* ---------------- installed apps ---------------- */

    @SuppressWarnings("deprecation")
    static long installedCode(Context c, String pkg) {
        try {
            PackageInfo pi = c.getPackageManager().getPackageInfo(pkg, 0);
            return Build.VERSION.SDK_INT >= 28 ? pi.getLongVersionCode() : pi.versionCode;
        } catch (PackageManager.NameNotFoundException e) { return -1; }
    }

    static String installedName(Context c, String pkg) {
        try { return c.getPackageManager().getPackageInfo(pkg, 0).versionName; }
        catch (PackageManager.NameNotFoundException e) { return null; }
    }

    /** "missing", "ok" (newest installed), "same" (newer build but this app did not change), "update". */
    static String status(Context c, JSONObject app, long code) {
        String pkg = app.optString("package");
        long inst = installedCode(c, pkg);
        if (inst < 0) return "missing";
        String hash = app.optString("hash", "");
        if (inst >= code) {
            if (code > 0 && !hash.isEmpty()) prefs(c).edit().putString("hash." + pkg, hash).apply();
            return "ok";
        }
        if (!hash.isEmpty() && hash.equals(prefs(c).getString("hash." + pkg, ""))) return "same";
        return "update";
    }

    /* ---------------- the work ---------------- */

    /**
     * Checks the release and installs what is needed. With onlyPkg == null updates every installed app
     * that changed; with a package name installs or updates just that one (even if not installed yet).
     */
    static void run(Context ctx, String onlyPkg, boolean force) {
        Context c = ctx.getApplicationContext();
        synchronized (Updater.class) { if (busy) return; busy = true; }
        MainActivity.refresh();
        try {
            JSONObject cat = fetchCatalog(c);
            long code = cat.optLong("code");
            String tag = cat.optString("tag");
            JSONArray apps = cat.optJSONArray("apps");
            List<JSONObject> todo = new ArrayList<>();
            JSONObject self = null;
            for (int i = 0; apps != null && i < apps.length(); i++) {
                JSONObject a = apps.getJSONObject(i);
                String pkg = a.optString("package");
                if (onlyPkg != null && !onlyPkg.equals(pkg)) continue;
                String st = status(c, a, code);
                boolean want = onlyPkg != null ? (!st.equals("ok") || force) : st.equals("update");
                if (!want) continue;
                if (pkg.equals(c.getPackageName())) self = a; else todo.add(a);
            }
            if (self != null) todo.add(self);                                      // update ourselves last
            if (todo.isEmpty() && onlyPkg == null) log(c, "Перевірено " + nice(tag) + ": усе актуальне");
            for (JSONObject a : todo) {
                try { install(c, a, tag); }
                catch (Exception e) { working.remove(a.optString("package")); log(c, a.optString("name") + ": не вдалося завантажити (" + e.getMessage() + ")"); }
                MainActivity.refresh();
            }
        } catch (Exception e) {
            log(c, "Не вдалося перевірити оновлення: " + e.getMessage());
        } finally {
            busy = false;
            MainActivity.refresh();
        }
    }

    static String nice(String tag) { return tag == null ? "" : tag.replace("v", ""); }

    private static void install(Context c, JSONObject a, String tag) throws IOException {
        String pkg = a.optString("package"), name = a.optString("name");
        working.put(pkg, "Завантаження…");
        MainActivity.refresh();
        File f = new File(c.getCacheDir(), a.optString("apk"));
        download(a.optString("url"), f);
        working.put(pkg, "Встановлення…");
        MainActivity.refresh();

        PackageInstaller pi = c.getPackageManager().getPackageInstaller();
        PackageInstaller.SessionParams p = new PackageInstaller.SessionParams(PackageInstaller.SessionParams.MODE_FULL_INSTALL);
        p.setAppPackageName(pkg);
        p.setSize(f.length());
        if (Build.VERSION.SDK_INT >= 31) p.setRequireUserAction(PackageInstaller.SessionParams.USER_ACTION_NOT_REQUIRED);
        int id = pi.createSession(p);
        PackageInstaller.Session s = pi.openSession(id);
        try {
            try (OutputStream out = s.openWrite("base.apk", 0, f.length()); InputStream in = new FileInputStream(f)) {
                byte[] buf = new byte[65536];
                int n;
                while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
                s.fsync(out);
            }
            Intent i = new Intent(c, InstallReceiver.class).setAction(ACTION_STATUS)
                    .putExtra("pkg", pkg).putExtra("name", name)
                    .putExtra("hash", a.optString("hash", "")).putExtra("tag", tag);
            int flags = PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= 31 ? PendingIntent.FLAG_MUTABLE : 0);
            PendingIntent pend = PendingIntent.getBroadcast(c, id, i, flags);
            s.commit(pend.getIntentSender());
        } catch (IOException | RuntimeException e) {
            s.abandon();
            throw e;
        } finally {
            s.close();
            //noinspection ResultOfMethodCallIgnored
            f.delete();
        }
    }

    /* ---------------- log ---------------- */

    static void log(Context c, String msg) {
        try {
            JSONArray old = new JSONArray(prefs(c).getString("log", "[]"));
            JSONArray now = new JSONArray();
            String t = new SimpleDateFormat("d.MM HH:mm", Locale.getDefault()).format(new Date());
            now.put(t + " · " + msg);
            for (int i = 0; i < old.length() && i < 39; i++) now.put(old.get(i));
            prefs(c).edit().putString("log", now.toString()).apply();
        } catch (JSONException ignored) {}
    }

    /* ---------------- schedule ---------------- */

    static void schedule(Context c) {
        JobScheduler js = c.getSystemService(JobScheduler.class);
        if (js == null) return;
        SharedPreferences p = prefs(c);
        if (!p.getBoolean("auto", true)) { js.cancel(1); return; }
        JobInfo job = new JobInfo.Builder(1, new ComponentName(c, UpdateJob.class))
                .setRequiredNetworkType(p.getBoolean("wifi", false) ? JobInfo.NETWORK_TYPE_UNMETERED : JobInfo.NETWORK_TYPE_ANY)
                .setPersisted(true)
                .setPeriodic(60 * 60 * 1000L)
                .build();
        js.schedule(job);
    }
}
