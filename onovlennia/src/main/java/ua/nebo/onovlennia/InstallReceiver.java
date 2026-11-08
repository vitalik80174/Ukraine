package ua.nebo.onovlennia;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInstaller;

/** Receives the result of each install session. */
public class InstallReceiver extends BroadcastReceiver {
    static final String CH_DONE = "done", CH_ASK = "ask";

    @Override
    @SuppressWarnings("deprecation")
    public void onReceive(Context c, Intent in) {
        int st = in.getIntExtra(PackageInstaller.EXTRA_STATUS, PackageInstaller.STATUS_FAILURE);
        String pkg = in.getStringExtra("pkg"), name = in.getStringExtra("name"), hash = in.getStringExtra("hash"), tag = in.getStringExtra("tag");
        if (pkg == null) return;
        NotificationManager nm = c.getSystemService(NotificationManager.class);
        channels(nm);

        if (st == PackageInstaller.STATUS_PENDING_USER_ACTION) {
            Intent confirm = in.getParcelableExtra(Intent.EXTRA_INTENT);
            if (confirm == null) return;
            confirm.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            Updater.working.put(pkg, "Чекає підтвердження");
            if (MainActivity.visible) {
                try { c.startActivity(confirm); MainActivity.refresh(); return; } catch (Exception ignored) {}
            }
            PendingIntent pi = PendingIntent.getActivity(c, pkg.hashCode(), confirm, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
            Notification n = new Notification.Builder(c, CH_ASK)
                    .setSmallIcon(R.drawable.ic_stat)
                    .setContentTitle("Оновити «" + name + "»?")
                    .setContentText("Торкніться, щоб підтвердити. Далі оновлення ставитимуться самі.")
                    .setContentIntent(pi)
                    .setAutoCancel(true)
                    .build();
            if (nm != null) nm.notify(pkg.hashCode(), n);
            Updater.log(c, name + ": Android просить підтвердити встановлення");
        } else if (st == PackageInstaller.STATUS_SUCCESS) {
            Updater.working.remove(pkg);
            if (hash != null && !hash.isEmpty()) Updater.prefs(c).edit().putString("hash." + pkg, hash).apply();
            Updater.log(c, name + " оновлено до " + Updater.nice(tag));
            if (nm != null) {
                nm.cancel(pkg.hashCode());
                Notification n = new Notification.Builder(c, CH_DONE)
                        .setSmallIcon(R.drawable.ic_stat)
                        .setContentTitle("«" + name + "» оновлено")
                        .setContentText("Версія " + Updater.nice(tag))
                        .setAutoCancel(true)
                        .build();
                nm.notify(pkg.hashCode() + 1, n);
            }
        } else {
            Updater.working.remove(pkg);
            String msg = in.getStringExtra(PackageInstaller.EXTRA_STATUS_MESSAGE);
            if (st == PackageInstaller.STATUS_FAILURE_ABORTED) Updater.log(c, name + ": встановлення скасовано");
            else Updater.log(c, name + ": не встановлено" + (msg != null ? " (" + msg + ")" : ""));
        }
        MainActivity.refresh();
    }

    static void channels(NotificationManager nm) {
        if (nm == null) return;
        nm.createNotificationChannel(new NotificationChannel(CH_DONE, "Оновлено", NotificationManager.IMPORTANCE_LOW));
        nm.createNotificationChannel(new NotificationChannel(CH_ASK, "Потрібне підтвердження", NotificationManager.IMPORTANCE_DEFAULT));
    }
}
