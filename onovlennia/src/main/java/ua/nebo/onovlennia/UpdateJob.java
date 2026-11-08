package ua.nebo.onovlennia;

import android.app.job.JobParameters;
import android.app.job.JobService;
import android.content.SharedPreferences;

import java.util.Calendar;

/** Runs about once an hour in the background and installs whatever changed. */
public class UpdateJob extends JobService {
    @Override
    public boolean onStartJob(JobParameters params) {
        new Thread(() -> {
            SharedPreferences p = Updater.prefs(this);
            int h = Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
            boolean nightOnly = p.getBoolean("night", false);
            boolean recently = System.currentTimeMillis() - p.getLong("lastCheck", 0) < 40 * 60 * 1000L;
            if (!(nightOnly && (h < 2 || h >= 6)) && !recently) Updater.run(this, null, false);
            jobFinished(params, false);
        }).start();
        return true;
    }

    @Override
    public boolean onStopJob(JobParameters params) { return true; }
}
