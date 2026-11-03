package ua.nebo.widget;

import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.SharedPreferences;
import android.widget.RemoteViews;

/** Home-screen tile: time, alert in the home raion, Shaheds and missiles. Filled in by WatchService. */
public class NeboWidget extends AppWidgetProvider {

    @Override
    public void onUpdate(Context ctx, AppWidgetManager mgr, int[] ids) {
        for (int id : ids) mgr.updateAppWidget(id, build(ctx));
    }

    static void refreshAll(Context ctx) {
        AppWidgetManager mgr = AppWidgetManager.getInstance(ctx);
        int[] ids = mgr.getAppWidgetIds(new ComponentName(ctx, NeboWidget.class));
        if (ids.length == 0) return;
        RemoteViews v = build(ctx);
        for (int id : ids) mgr.updateAppWidget(id, v);
    }

    static RemoteViews build(Context ctx) {
        SharedPreferences p = ctx.getSharedPreferences(WatchService.PREFS, Context.MODE_PRIVATE);
        RemoteViews v = new RemoteViews(ctx.getPackageName(), R.layout.nebo_widget);
        boolean alert = p.getBoolean("w_alert", false);
        boolean missile = p.getBoolean("w_missile", false);
        v.setTextViewText(R.id.status, p.getString("w_status", "Відкрийте «Небо», щоб почати"));
        v.setTextViewText(R.id.threats, p.getString("w_threats", ""));
        v.setTextViewText(R.id.updated, p.getString("w_updated", ""));
        v.setTextColor(R.id.status, alert ? 0xFFFF6B6B : 0xFFE8EDF3);
        v.setTextColor(R.id.threats, missile ? 0xFFFF2E78 : 0xFFC77DFF);
        v.setInt(R.id.root, "setBackgroundResource", alert || missile ? R.drawable.widget_bg_alert : R.drawable.widget_bg);
        v.setOnClickPendingIntent(R.id.root, WatchService.openApp(ctx));
        return v;
    }
}
