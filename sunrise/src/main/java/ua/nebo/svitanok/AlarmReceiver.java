package ua.nebo.svitanok;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.PowerManager;

/** The sunrise is due: open the sunrise screen over the lock screen and book the next one. */
public class AlarmReceiver extends BroadcastReceiver {
    static final String CH = "sunrise_v1";
    static final int NOTE = 7;

    @Override
    public void onReceive(Context ctx, Intent intent) {
        long id = intent.getLongExtra("id", 0), start = intent.getLongExtra("start", 0), at = intent.getLongExtra("alarmAt", 0);
        // Keep the CPU awake for a few seconds so the screen can come on.
        PowerManager.WakeLock wl = ctx.getSystemService(PowerManager.class).newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "svitanok:alarm");
        wl.acquire(10_000);
        if (at == 0) { Scheduler.schedule(ctx); return; }
        Scheduler.markFired(ctx, id, at);
        Scheduler.schedule(ctx);

        Intent open = new Intent(ctx, MainActivity.class)
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP)
                .putExtra("mode", "sunrise").putExtra("id", id).putExtra("start", start).putExtra("alarmAt", at);
        PendingIntent full = PendingIntent.getActivity(ctx, 2, open, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);

        NotificationManager nm = ctx.getSystemService(NotificationManager.class);
        NotificationChannel ch = new NotificationChannel(CH, "Світанок", NotificationManager.IMPORTANCE_HIGH);
        ch.setSound(null, null);
        nm.createNotificationChannel(ch);
        Notification n = new Notification.Builder(ctx, CH)
                .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
                .setContentTitle("Світанок почався")
                .setContentText("Екран поступово світлішає до будильника")
                .setCategory(Notification.CATEGORY_ALARM)
                .setFullScreenIntent(full, true)
                .setContentIntent(full)
                .setOngoing(true)
                .build();
        try { nm.notify(NOTE, n); } catch (Exception ignored) { }
        // With "display over other apps" Android lets the app open itself even from the background.
        try { ctx.startActivity(open); } catch (Exception ignored) { }
    }
}
