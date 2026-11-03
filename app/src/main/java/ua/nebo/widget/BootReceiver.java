package ua.nebo.widget;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;

/** After the tablet turns on (or the app updates): restart watching and, if allowed, open the app. */
public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context ctx, Intent intent) {
        WatchService.start(ctx);
        boolean autostart = ctx.getSharedPreferences(WatchService.PREFS, Context.MODE_PRIVATE).getBoolean("autostart", false);
        boolean canOpen = Build.VERSION.SDK_INT < 23 || Settings.canDrawOverlays(ctx);
        if (autostart && canOpen && Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
            Intent i = new Intent(ctx, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            try { ctx.startActivity(i); } catch (Exception ignored) { }
        }
    }
}
