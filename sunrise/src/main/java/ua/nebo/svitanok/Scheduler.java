package ua.nebo.svitanok;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Calendar;
import java.util.HashSet;
import java.util.Set;

/**
 * Finds the next sunrise and books it with the system alarm clock.
 * Each alarm: {id, h, m, days:[1..7 = Mon..Sun], dur: minutes of sunrise before the alarm, on}.
 */
public class Scheduler {
    static final String PREFS = "svitanok";

    static SharedPreferences prefs(Context c) { return c.getSharedPreferences(PREFS, Context.MODE_PRIVATE); }

    /** {id, start, alarmAt} of the next sunrise, or null. */
    static long[] next(Context ctx) {
        SharedPreferences p = prefs(ctx);
        long now = System.currentTimeMillis();
        Set<String> fired = p.getStringSet("fired", new HashSet<>());
        long bestStart = Long.MAX_VALUE, bestAt = 0, bestId = 0;
        long snooze = p.getLong("snoozeAt", 0);
        if (snooze > now) { bestStart = snooze; bestAt = snooze; bestId = -1; }
        // a test: a short real sunrise that starts soon
        long testStart = p.getLong("testStart", 0), testAt = p.getLong("testAt", 0);
        if (testStart > now && testStart < bestStart) { bestStart = testStart; bestAt = testAt; bestId = -2; }
        try {
            JSONArray alarms = new JSONArray(p.getString("alarms", "[]"));
            for (int i = 0; i < alarms.length(); i++) {
                JSONObject a = alarms.getJSONObject(i);
                if (!a.optBoolean("on", true)) continue;
                JSONArray days = a.optJSONArray("days");
                int dur = a.optInt("dur", 30);
                long id = a.optLong("id");
                Calendar c = Calendar.getInstance();
                c.set(Calendar.SECOND, 0); c.set(Calendar.MILLISECOND, 0);
                c.set(Calendar.HOUR_OF_DAY, a.optInt("h", 7)); c.set(Calendar.MINUTE, a.optInt("m", 0));
                for (int d = 0; d < 8; d++) {
                    long at = c.getTimeInMillis();
                    int dow = ((c.get(Calendar.DAY_OF_WEEK) + 5) % 7) + 1; // Mon=1 .. Sun=7
                    boolean dayOk = days == null || days.length() == 0;
                    for (int k = 0; days != null && k < days.length(); k++) if (days.optInt(k) == dow) dayOk = true;
                    if (dayOk && at > now && !fired.contains(id + "@" + at)) {
                        long start = Math.max(now + 3000, at - dur * 60_000L);
                        if (start < bestStart) { bestStart = start; bestAt = at; bestId = id; }
                        break;
                    }
                    c.add(Calendar.DAY_OF_MONTH, 1);
                }
            }
        } catch (Exception ignored) { }
        return bestStart == Long.MAX_VALUE ? null : new long[]{bestId, bestStart, bestAt};
    }

    static void schedule(Context ctx) {
        AlarmManager am = ctx.getSystemService(AlarmManager.class);
        PendingIntent op = operation(ctx, 0, 0, 0);
        am.cancel(op);
        long[] n = next(ctx);
        if (n == null) return;
        PendingIntent pi = operation(ctx, n[0], n[1], n[2]);
        PendingIntent show = PendingIntent.getActivity(ctx, 1, new Intent(ctx, MainActivity.class),
                PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
        try {
            am.setAlarmClock(new AlarmManager.AlarmClockInfo(n[1], show), pi);
        } catch (SecurityException e) {
            am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, n[1], pi);
        }
    }

    static PendingIntent operation(Context ctx, long id, long start, long at) {
        Intent i = new Intent(ctx, AlarmReceiver.class).putExtra("id", id).putExtra("start", start).putExtra("alarmAt", at);
        return PendingIntent.getBroadcast(ctx, 0, i, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
    }

    /** Marks one occurrence as used so it is not booked again. */
    static void markFired(Context ctx, long id, long at) {
        SharedPreferences p = prefs(ctx);
        Set<String> fired = new HashSet<>();
        long now = System.currentTimeMillis();
        for (String f : p.getStringSet("fired", new HashSet<>())) {
            try { if (Long.parseLong(f.substring(f.indexOf('@') + 1)) > now - 2 * 86400_000L) fired.add(f); } catch (Exception ignored) { }
        }
        fired.add(id + "@" + at);
        SharedPreferences.Editor e = p.edit().putStringSet("fired", fired);
        if (id == -1) e.putLong("snoozeAt", 0);
        if (id == -2) e.putLong("testStart", 0).putLong("testAt", 0);
        e.apply();
    }
}
