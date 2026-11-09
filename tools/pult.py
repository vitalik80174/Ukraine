#!/usr/bin/env python3
"""Send a command to the tablet's «Пульт» app.

The tablet watches the branch «pult» of this repository; each command is one commit with command.json.
Usage (from the repo root):
  python3 tools/pult.py "Розбуди й відкрий Вікно" wake open:ua.nebo.vikno
  python3 tools/pult.py "Привітання" wake volume:40 'say:Доброго ранку!' 'show:Доброго ранку!'
  python3 tools/pult.py "Сирий JSON" --json '[{"do":"open","app":"YouTube"}]'
Actions: wake | open:<package or app name> | url:<https://…> | volume:<0-100> | say:<text> | show:<text>
         | home | awake:<minutes, 0 = stop> | wait:<ms>
The tablet skips commands older than 10 minutes, so send them right when needed.
"""
import json, subprocess, sys, tempfile, uuid, os
from datetime import datetime, timezone

def git(*a, inp=None, env=None):
    r = subprocess.run(["git", *a], input=inp, capture_output=True, text=True, env=env)
    if r.returncode: raise SystemExit(f"git {' '.join(a)}: {r.stderr.strip()}")
    return r.stdout.strip()

def parse(tok):
    if ":" not in tok: return {"do": tok}
    k, v = tok.split(":", 1)
    if k in ("volume", "awake"): return {"do": k, ("level" if k == "volume" else "minutes"): int(v)}
    if k == "wait": return {"do": "wait", "ms": int(v)}
    if k == "open": return {"do": "open", "app": v}
    if k == "url": return {"do": "url", "url": v}
    return {"do": k, "text": v}

def main():
    if len(sys.argv) < 3: raise SystemExit(__doc__)
    title = sys.argv[1]
    actions = json.loads(sys.argv[3]) if sys.argv[2] == "--json" else [parse(t) for t in sys.argv[2:]]
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    cmd = {"id": now + "-" + uuid.uuid4().hex[:6], "sent": now, "say": title, "actions": actions}
    body = json.dumps(cmd, ensure_ascii=False, indent=1) + "\n"
    subprocess.run(["git", "fetch", "-q", "origin", "+refs/heads/pult:refs/remotes/origin/pult"], capture_output=True)
    parent = subprocess.run(["git", "rev-parse", "-q", "--verify", "refs/remotes/origin/pult"], capture_output=True, text=True).stdout.strip()
    blob = git("hash-object", "-w", "--stdin", inp=body)
    tree = git("mktree", inp=f"100644 blob {blob}\tcommand.json\n")
    msg = f"Пульт: {title}\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n"
    commit = git("commit-tree", tree, *(["-p", parent] if parent else []), "-m", msg)
    git("push", "-q", "origin", f"{commit}:refs/heads/pult")
    subprocess.run(["git", "update-ref", "refs/remotes/origin/pult", commit])
    print("надіслано:", json.dumps(cmd, ensure_ascii=False))

main()
