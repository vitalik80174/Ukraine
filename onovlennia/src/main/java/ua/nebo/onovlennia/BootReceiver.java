package ua.nebo.onovlennia;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/** Re-arms the hourly check after a reboot and after «Оновлення» updated itself. */
public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context c, Intent in) {
        Updater.schedule(c);
        if (Intent.ACTION_MY_PACKAGE_REPLACED.equals(in.getAction())) Updater.log(c, "«Оновлення» оновило саме себе");
    }
}
