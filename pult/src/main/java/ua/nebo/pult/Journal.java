package ua.nebo.pult;

import android.content.Context;
import android.content.SharedPreferences;

import org.json.JSONArray;
import org.json.JSONObject;

/** The last 40 commands and what came of them, shown on the main screen. */
final class Journal {
    private Journal() {}

    static SharedPreferences prefs(Context c) { return c.getSharedPreferences("pult", Context.MODE_PRIVATE); }

    static synchronized void add(Context c, String title, JSONArray lines, boolean ok) {
        try {
            JSONArray old = new JSONArray(prefs(c).getString("log", "[]"));
            JSONArray out = new JSONArray();
            JSONObject e = new JSONObject();
            e.put("t", System.currentTimeMillis());
            e.put("title", title);
            e.put("lines", lines == null ? new JSONArray() : lines);
            e.put("ok", ok);
            out.put(e);
            for (int i = 0; i < old.length() && out.length() < 40; i++) out.put(old.get(i));
            prefs(c).edit().putString("log", out.toString()).apply();
        } catch (Exception ignored) {
        }
    }

    static String json(Context c) { return prefs(c).getString("log", "[]"); }
}
