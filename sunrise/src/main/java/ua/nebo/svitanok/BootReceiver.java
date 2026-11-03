package ua.nebo.svitanok;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/** Alarms are forgotten on restart or a clock change, so book them again. */
public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context ctx, Intent intent) { Scheduler.schedule(ctx); }
}
