package ua.nebo.pult;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/** Brings the Pult back after a reboot and after «Оновлення» installed a new version. */
public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context c, Intent in) {
        if (!Journal.prefs(c).getBoolean("on", false)) return;
        try { PultService.start(c); } catch (Exception ignored) {}
    }
}
