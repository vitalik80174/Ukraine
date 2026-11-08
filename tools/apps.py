#!/usr/bin/env python3
"""Turns apps.list into apps.json for the release. Each app gets the git tree hash of its module,
so «Оновлення» can skip reinstalling an app whose code did not change in this release."""
import json, subprocess
apps = []
for line in open("apps.list", encoding="utf-8"):
    line = line.strip()
    if not line or line.startswith("#"):
        continue
    mod, pkg, apk, name, about = [p.strip() for p in line.split("|")]
    h = subprocess.run(["git", "rev-parse", f"HEAD:{mod}"], capture_output=True, text=True).stdout.strip()
    apps.append({"module": mod, "package": pkg, "apk": apk, "name": name, "about": about, "hash": h})
print(json.dumps(apps, ensure_ascii=False, indent=1))
