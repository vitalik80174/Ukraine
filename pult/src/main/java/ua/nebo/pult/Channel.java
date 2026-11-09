package ua.nebo.pult;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

/**
 * The command channel. Claude pushes each command as a commit to the branch «pult» of the public
 * repository (file command.json). The tablet asks GitHub's git server for the tip of that branch
 * (git protocol v2 «ls-refs»: ~65 bytes, not subject to the REST API's 60-requests-per-hour limit),
 * and when the commit changes, downloads command.json at that exact commit (immutable URL, so no
 * stale CDN cache). Only people with write access to the repository can send commands.
 */
final class Channel {
    static final String GIT = "https://github.com/vitalik80174/Ukraine.git/git-upload-pack";
    static final String RAW = "https://raw.githubusercontent.com/vitalik80174/Ukraine/";
    static final String BRANCH = "refs/heads/pult";

    private Channel() {}

    private static String pkt(String s) { return String.format("%04x", s.length() + 4) + s; }

    /** Commit id at the tip of the «pult» branch, or null if the branch does not exist yet. */
    static String headSha() throws IOException {
        String body = pkt("command=ls-refs\n") + "0001" + pkt("ref-prefix " + BRANCH + "\n") + "0000";
        HttpURLConnection c = (HttpURLConnection) new URL(GIT).openConnection();
        try {
            c.setConnectTimeout(10000);
            c.setReadTimeout(10000);
            c.setUseCaches(false);
            c.setDoOutput(true);
            c.setRequestMethod("POST");
            c.setRequestProperty("Git-Protocol", "version=2");
            c.setRequestProperty("Content-Type", "application/x-git-upload-pack-request");
            c.setRequestProperty("Accept", "application/x-git-upload-pack-result");
            c.setRequestProperty("User-Agent", "git/2.43.0 (nebo-pult)");
            byte[] b = body.getBytes(StandardCharsets.US_ASCII);
            c.setFixedLengthStreamingMode(b.length);
            try (OutputStream o = c.getOutputStream()) { o.write(b); }
            int code = c.getResponseCode();
            if (code != 200) throw new IOException("GitHub відповів " + code);
            String s;
            try (InputStream in = c.getInputStream()) { s = new String(readAll(in), StandardCharsets.US_ASCII); }
            int i = 0;
            while (i + 4 <= s.length()) {
                int len = Integer.parseInt(s.substring(i, i + 4), 16);
                if (len == 0) break;
                if (len < 4 || i + len > s.length()) { i += 4; continue; }
                String line = s.substring(i + 4, i + len).trim();
                i += len;
                String[] p = line.split(" ");
                if (p.length >= 2 && BRANCH.equals(p[1])) return p[0];
            }
            return null;
        } finally {
            c.disconnect();
        }
    }

    /** command.json exactly as it was in the given commit. */
    static String fetch(String sha) throws IOException {
        IOException last = null;
        for (int attempt = 0; attempt < 4; attempt++) {
            HttpURLConnection c = (HttpURLConnection) new URL(RAW + sha + "/command.json").openConnection();
            try {
                c.setConnectTimeout(10000);
                c.setReadTimeout(10000);
                c.setUseCaches(false);
                c.setRequestProperty("User-Agent", "nebo-pult");
                int code = c.getResponseCode();
                if (code == 200) {
                    try (InputStream in = c.getInputStream()) { return new String(readAll(in), StandardCharsets.UTF_8); }
                }
                last = new IOException("команда недоступна (" + code + ")");
            } catch (IOException e) {
                last = e;
            } finally {
                c.disconnect();
            }
            try { Thread.sleep(1500); } catch (InterruptedException e) { throw new IOException("перервано"); }
        }
        throw last;
    }

    private static byte[] readAll(InputStream in) throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buf = new byte[4096];
        int n;
        while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
        return out.toByteArray();
    }
}
