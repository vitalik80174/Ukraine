"use strict";
/* «Акваріум» — a living tank: canvas 2D, no libraries, works offline. */
const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search);
const app = window.Akvarium || null;
const cv = $("cv"); let ctx = cv.getContext("2d");
const store = {
  get(k, d) { try { const v = localStorage.getItem("akv." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("akv." + k, JSON.stringify(v)); } catch (e) {} }
};
const now = () => performance.now() / 1000;
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

let seed = store.get("seed", 0); if (!seed) { seed = (Math.random() * 1e9) | 0; store.set("seed", seed); }
if (Q.get("seed")) seed = +Q.get("seed");

let W = 0, H = 0, DPR = 1, K = 1;            // K: size unit (1 on a ~800px-tall screen)
let surfY = 0, sandBase = 0, sandPh = [0, 0, 0];
let bg = null, vign = null, sandPath = null, caustPat = null;
let plants = [], rays = [], stone = { x: 0, y: 0 };
let T = 0;

function sandY(x) {
  const u = x / W * Math.PI * 2;
  return sandBase + H * (0.022 * Math.sin(u * 0.8 + sandPh[0]) + 0.012 * Math.sin(u * 2.3 + sandPh[1]) + 0.005 * Math.sin(u * 5.1 + sandPh[2]));
}

/* ================= scene build ================= */
function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  W = innerWidth; H = innerHeight;
  cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
  K = clamp(Math.min(H, W * 0.75) / 760, 0.6, 1.7);
  build();
  for (const f of fish) keepInside(f, true);
}

function off(w, h) { const c = document.createElement("canvas"); c.width = Math.round(w * DPR); c.height = Math.round(h * DPR); const g = c.getContext("2d"); g.scale(DPR, DPR); return [c, g]; }

function build() {
  const R = mulberry(seed);
  surfY = Math.round(H * 0.06);
  sandBase = H * 0.84;
  sandPh = [R() * 6.28, R() * 6.28, R() * 6.28];
  let g;
  [bg, g] = off(W, H);

  // water
  const wg = g.createLinearGradient(0, 0, 0, H);
  wg.addColorStop(0, "#2a8494"); wg.addColorStop(0.35, "#17687b"); wg.addColorStop(0.75, "#0d4b5e"); wg.addColorStop(1, "#0a3a49");
  g.fillStyle = wg; g.fillRect(0, 0, W, H);
  // soft light glow under the lamp
  const lg = g.createRadialGradient(W * 0.5, -H * 0.2, 10, W * 0.5, -H * 0.2, H * 1.1);
  lg.addColorStop(0, "rgba(190,240,230,.22)"); lg.addColorStop(1, "rgba(190,240,230,0)");
  g.fillStyle = lg; g.fillRect(0, 0, W, H);

  // far hazy silhouettes of plants on the back glass
  for (let i = 0; i < 26; i++) {
    const x = R() * W, h = H * (0.15 + R() * 0.35), y0 = sandBase - H * 0.01;
    g.fillStyle = `rgba(${20 + R() * 20 | 0},${80 + R() * 30 | 0},${80 + R() * 20 | 0},${0.18 + R() * 0.14})`;
    g.beginPath(); g.moveTo(x - 5 * K, y0);
    g.quadraticCurveTo(x - 10 * K + (R() - 0.5) * 40, y0 - h * 0.6, x + (R() - 0.5) * 50 * K, y0 - h);
    g.quadraticCurveTo(x + 10 * K, y0 - h * 0.5, x + 6 * K, y0); g.fill();
  }

  // driftwood
  const dx = W * (0.28 + R() * 0.12);
  g.lineCap = "round";
  const wood = (x1, y1, cx, cy, x2, y2, w) => {
    g.strokeStyle = "#3b2a1c"; g.lineWidth = w; g.beginPath(); g.moveTo(x1, y1); g.quadraticCurveTo(cx, cy, x2, y2); g.stroke();
    g.strokeStyle = "rgba(140,100,60,.35)"; g.lineWidth = w * 0.35; g.beginPath(); g.moveTo(x1 - w * 0.15, y1 - w * 0.2); g.quadraticCurveTo(cx - w * 0.15, cy - w * 0.25, x2, y2 - w * 0.1); g.stroke();
  };
  const sy = sandY(dx);
  wood(dx - 60 * K, sy + 6, dx + 30 * K, sy - 40 * K, dx + 150 * K, sy - H * 0.28, 16 * K);
  wood(dx + 40 * K, sy - 25 * K, dx + 60 * K, sy - 80 * K, dx + 20 * K, sy - H * 0.2, 9 * K);
  wood(dx + 100 * K, sy - H * 0.17, dx + 150 * K, sy - H * 0.2, dx + 210 * K, sy - H * 0.19, 7 * K);
  wood(dx - 40 * K, sy + 4, dx - 90 * K, sy - 10 * K, dx - 130 * K, sy - 40 * K, 8 * K);
  // moss tufts on the wood
  for (let i = 0; i < 40; i++) {
    const t = R(); const x = lerp(dx - 30 * K, dx + 150 * K, t), y = lerp(sy - 10 * K, sy - H * 0.28, t * t) + (R() - 0.5) * 14 * K;
    g.fillStyle = `rgba(${70 + R() * 40 | 0},${130 + R() * 40 | 0},${50 + R() * 20 | 0},.55)`;
    g.beginPath(); g.arc(x, y - 6 * K, (3 + R() * 5) * K, 0, 7); g.fill();
  }

  // rocks
  const rockAt = [[0.12, 0.13], [0.66, 0.1], [0.78, 0.17], [0.5, 0.055]];
  for (const [fx, fs] of rockAt) {
    const cx = W * (fx + (R() - 0.5) * 0.04), r = H * fs, base = sandY(cx) + r * 0.25;
    const pts = [];
    for (let i = 0; i <= 10; i++) { const a = Math.PI + i / 10 * Math.PI; const rr = r * (0.8 + R() * 0.3); pts.push([cx + Math.cos(a) * rr * 1.35, base + Math.sin(a) * rr]); }
    const rg = g.createLinearGradient(cx - r, base - r, cx + r * 0.6, base);
    rg.addColorStop(0, "#8b9590"); rg.addColorStop(0.5, "#5d6a68"); rg.addColorStop(1, "#2f3a3c");
    g.fillStyle = rg; g.beginPath(); g.moveTo(pts[0][0], base + 4);
    for (let i = 0; i < pts.length - 1; i++) { const m = [(pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2]; g.quadraticCurveTo(pts[i][0], pts[i][1], m[0], m[1]); }
    g.lineTo(pts[pts.length - 1][0], base + 4); g.closePath(); g.fill();
    g.save(); g.clip();
    g.strokeStyle = "rgba(20,28,30,.35)"; g.lineWidth = 1.5 * K;
    for (let i = 0; i < 4; i++) { const x = cx + (R() - 0.5) * r * 1.6; g.beginPath(); g.moveTo(x, base - r); g.lineTo(x + (R() - 0.5) * r * 0.5, base - r * 0.4); g.lineTo(x + (R() - 0.5) * r * 0.6, base); g.stroke(); }
    g.fillStyle = "rgba(220,240,230,.12)"; g.beginPath(); g.ellipse(cx - r * 0.35, base - r * 0.75, r * 0.6, r * 0.18, -0.2, 0, 7); g.fill();
    for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(${60 + R() * 40 | 0},${120 + R() * 50 | 0},${50 + R() * 30 | 0},.5)`; g.beginPath(); g.arc(cx + (R() - 0.5) * r * 1.8, base - r * (0.8 + R() * 0.2), (2 + R() * 5) * K, 0, 7); g.fill(); }
    g.restore();
  }

  // sand
  sandPath = new Path2D();
  sandPath.moveTo(0, H); for (let x = 0; x <= W + 8; x += 8) sandPath.lineTo(x, sandY(x)); sandPath.lineTo(W, H); sandPath.closePath();
  const sg = g.createLinearGradient(0, sandBase - H * 0.04, 0, H);
  sg.addColorStop(0, "#cdb78d"); sg.addColorStop(0.3, "#b39d72"); sg.addColorStop(1, "#7d6a4b");
  g.fillStyle = sg; g.fill(sandPath);
  g.save(); g.clip(sandPath);
  const grains = Math.min(9000, W * (H - sandBase) * 0.06 | 0);
  for (let i = 0; i < grains; i++) {
    const x = R() * W, y = sandBase - H * 0.04 + R() * H * 0.22, v = R();
    g.fillStyle = v < 0.5 ? "rgba(90,70,40,.25)" : v < 0.85 ? "rgba(240,228,200,.3)" : "rgba(60,50,40,.35)";
    g.fillRect(x, y, 1.3, 1.3);
  }
  for (let i = 0; i < 70; i++) {
    const x = R() * W, y = sandY(x) + 4 + R() * (H - sandBase) * 0.8, r = (2 + R() * 5) * K;
    const c = [[120, 110, 100], [80, 75, 70], [160, 140, 110], [200, 190, 170], [110, 90, 70]][R() * 5 | 0];
    g.fillStyle = `rgb(${c})`; g.beginPath(); g.ellipse(x, y, r * 1.3, r, R() * 3, 0, 7); g.fill();
    g.fillStyle = "rgba(255,255,255,.18)"; g.beginPath(); g.ellipse(x - r * 0.3, y - r * 0.35, r * 0.5, r * 0.3, 0, 0, 7); g.fill();
  }
  // a shell
  const shx = W * 0.58, shy = sandY(W * 0.58) + 18 * K;
  g.fillStyle = "#eadbc4"; g.beginPath(); g.moveTo(shx, shy); g.arc(shx, shy, 13 * K, Math.PI * 1.05, Math.PI * 1.95); g.closePath(); g.fill();
  g.strokeStyle = "rgba(150,110,80,.6)"; g.lineWidth = 1;
  for (let i = 1; i < 6; i++) { const a = Math.PI * (1.05 + i * 0.15); g.beginPath(); g.moveTo(shx, shy); g.lineTo(shx + Math.cos(a) * 13 * K, shy + Math.sin(a) * 13 * K); g.stroke(); }
  // shading where sand meets back glass
  const sh = g.createLinearGradient(0, sandBase - H * 0.05, 0, sandBase + H * 0.03);
  sh.addColorStop(0, "rgba(10,40,50,.35)"); sh.addColorStop(1, "rgba(10,40,50,0)");
  g.fillStyle = sh; g.fillRect(0, sandBase - H * 0.05, W, H * 0.08);
  g.restore();

  // air stone (bubbler) at the right
  stone.x = W * 0.9; stone.y = sandY(W * 0.9) + 2;
  g.fillStyle = "#4d5a63"; g.beginPath(); g.ellipse(stone.x, stone.y, 14 * K, 7 * K, 0, 0, 7); g.fill();
  g.strokeStyle = "rgba(220,235,240,.25)"; g.lineWidth = 2 * K; g.beginPath(); g.moveTo(stone.x + 10 * K, stone.y); g.bezierCurveTo(W * 0.95, stone.y - 20, W * 0.97, surfY + 40, W * 0.985, -5); g.stroke();

  // vignette + glass sheen (drawn over everything)
  [vign, g] = off(W, H);
  const vg = g.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.hypot(W, H) * 0.6);
  vg.addColorStop(0, "rgba(0,10,15,0)"); vg.addColorStop(1, "rgba(0,10,15,.5)");
  g.fillStyle = vg; g.fillRect(0, 0, W, H);
  const gl = g.createLinearGradient(0, 0, W * 0.4, H * 0.5);
  gl.addColorStop(0, "rgba(255,255,255,0)"); gl.addColorStop(0.45, "rgba(255,255,255,.035)"); gl.addColorStop(0.55, "rgba(255,255,255,.0)");
  g.fillStyle = gl; g.fillRect(0, 0, W, H);

  // caustics tile
  if (!caustPat) caustPat = ctx.createPattern(makeCaustics(), "repeat");

  // light rays
  rays = [];
  for (let i = 0; i < 7; i++) rays.push({ x: (i + 0.3 + R() * 0.5) / 7, w: (30 + R() * 70) * K, lean: 0.12 + R() * 0.12, ph: R() * 6.28, sp: 0.15 + R() * 0.25 });

  // plants
  plants = [];
  const avoid = [0.12, 0.66, 0.78];
  const spot = () => { for (let k = 0; k < 20; k++) { const x = R(); if (avoid.every(a => Math.abs(a - x) > 0.07) && x > 0.02 && x < 0.86) return x; } return R(); };
  const greens = ["#3f8f3a", "#4c9c3e", "#5daa4a", "#357e3a", "#6bb04b"];
  for (let i = 0; i < 6; i++) plants.push(grass(spot() * W, H * (0.35 + R() * 0.3), R, greens[R() * 5 | 0], "back"));
  plants.push(grass(0.03 * W, H * 0.62, R, "#3f8f3a", "back"));
  for (let i = 0; i < 3; i++) plants.push(sword(spot() * W, H * (0.18 + R() * 0.12), R));
  for (let i = 0; i < 2; i++) plants.push(stems(spot() * W, H * (0.4 + R() * 0.2), R, "red"));
  for (let i = 0; i < 2; i++) plants.push(stems(spot() * W, H * (0.35 + R() * 0.25), R, "cabomba"));
  for (let i = 0; i < 4; i++) plants.push(grass(R() * W, H * (0.08 + R() * 0.08), R, "#6bb04b", "front", 5));
  plants.sort((a, b) => a.z - b.z);
}

function grass(x, h, R, col, layer, n) {
  const blades = [];
  n = n || 7 + (R() * 6 | 0);
  for (let i = 0; i < n; i++) blades.push({ dx: (R() - 0.5) * 30 * K, h: h * (0.55 + R() * 0.5), w: (5 + R() * 4) * K, lean: (R() - 0.5) * 0.5, ph: R() * 6.28, col: shade(col, (R() - 0.5) * 0.25) });
  return { type: "grass", x, layer, z: layer === "front" ? 2 : R(), blades };
}
function sword(x, h, R) {
  const leaves = [];
  const n = 9 + (R() * 5 | 0);
  for (let i = 0; i < n; i++) leaves.push({ a: (i / (n - 1) - 0.5) * 1.6 + (R() - 0.5) * 0.2, len: h * (0.6 + R() * 0.5), wid: (9 + R() * 6) * K, ph: R() * 6.28, col: shade("#4a9a3c", (R() - 0.5) * 0.3) });
  leaves.sort((a, b) => Math.abs(b.a) - Math.abs(a.a));
  return { type: "sword", x, layer: "back", z: 0.5 + R() * 0.5, leaves };
}
function stems(x, h, R, kind) {
  const st = [];
  const n = 4 + (R() * 3 | 0);
  for (let i = 0; i < n; i++) st.push({ dx: (R() - 0.5) * 36 * K, h: h * (0.6 + R() * 0.45), ph: R() * 6.28, lean: (R() - 0.5) * 0.3 });
  return { type: kind, x, layer: "back", z: R(), st };
}
function shade(hex, d) {
  const n = parseInt(hex.slice(1), 16); const f = c => clamp(Math.round(c * (1 + d)), 0, 255);
  return `rgb(${f(n >> 16)},${f(n >> 8 & 255)},${f(n & 255)})`;
}

function makeCaustics() {
  const S = 256, c = document.createElement("canvas"); c.width = c.height = S;
  const g = c.getContext("2d"), img = g.createImageData(S, S), R = mulberry(7);
  const P = []; for (let i = 0; i < 14; i++) P.push([R() * S, R() * S]);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    let d1 = 1e9, d2 = 1e9;
    for (const [px, py] of P) {
      let dx = Math.abs(x - px), dy = Math.abs(y - py); if (dx > S / 2) dx = S - dx; if (dy > S / 2) dy = S - dy;
      const d = Math.sqrt(dx * dx + dy * dy); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
    }
    const v = Math.pow(clamp(1 - (d2 - d1) / 12, 0, 1), 3);
    const o = (y * S + x) * 4; img.data[o] = 230; img.data[o + 1] = 255; img.data[o + 2] = 245; img.data[o + 3] = v * 255;
  }
  g.putImageData(img, 0, 0); return c;
}

/* ================= plants ================= */
function sway(ph, u, amp) { return (Math.sin(T * 0.55 + ph + u * 1.6) * 0.65 + Math.sin(T * 1.13 + ph * 1.7 + u) * 0.35) * amp * Math.pow(u, 1.4); }
function fingerPush(px, py, u) {
  if (!finger) return 0;
  const dx = px - finger.x, dy = py - finger.y, d2 = dx * dx + dy * dy, r = 110 * K;
  if (d2 > r * r) return 0;
  return Math.sign(dx || 1) * (1 - Math.sqrt(d2) / r) * 30 * K * u;
}
function drawPlant(p) {
  const y0 = sandY(p.x) + 3;
  if (p.type === "grass") {
    for (const b of p.blades) {
      const n = 9, L = [], Rr = [];
      const bx = p.x + b.dx;
      for (let s = 0; s <= n; s++) {
        const u = s / n;
        let px = bx + b.lean * b.h * u * u + sway(b.ph, u, b.h * 0.09);
        const py = y0 - b.h * u;
        px += fingerPush(px, py, u);
        const w = b.w * (1 - u * 0.75) * 0.5;
        L.push([px - w, py]); Rr.push([px + w, py]);
      }
      ctx.fillStyle = b.col; ctx.beginPath(); ctx.moveTo(L[0][0], L[0][1]);
      for (const q of L) ctx.lineTo(q[0], q[1]);
      ctx.lineTo((L[n][0] + Rr[n][0]) / 2, L[n][1] - b.w);
      for (let s = n; s >= 0; s--) ctx.lineTo(Rr[s][0], Rr[s][1]);
      ctx.fill();
    }
  } else if (p.type === "sword") {
    for (const l of p.leaves) {
      const a = l.a + sway(l.ph, 1, 0.08) + fingerPush(p.x + Math.sin(l.a) * l.len * 0.7, y0 - Math.cos(l.a) * l.len * 0.7, 1) * 0.004;
      const tx = p.x + Math.sin(a) * l.len, ty = y0 - Math.cos(a) * l.len * (1 - Math.abs(a) * 0.25);
      const mx = (p.x + tx) / 2, my = (y0 + ty) / 2, nx = -(ty - y0) / l.len, ny = (tx - p.x) / l.len;
      ctx.fillStyle = l.col; ctx.beginPath(); ctx.moveTo(p.x, y0);
      ctx.quadraticCurveTo(mx + nx * l.wid * 1.6, my + ny * l.wid * 1.6, tx, ty);
      ctx.quadraticCurveTo(mx - nx * l.wid * 1.6, my - ny * l.wid * 1.6, p.x, y0); ctx.fill();
      ctx.strokeStyle = "rgba(200,240,170,.25)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, y0); ctx.lineTo(tx, ty); ctx.stroke();
    }
  } else {
    const red = p.type === "red";
    for (const s of p.st) {
      const n = Math.max(6, s.h / (14 * K) | 0), pts = [];
      for (let i = 0; i <= n; i++) {
        const u = i / n; let px = p.x + s.dx + s.lean * s.h * u * u + sway(s.ph, u, s.h * 0.07); const py = y0 - s.h * u;
        px += fingerPush(px, py, u); pts.push([px, py, u]);
      }
      ctx.strokeStyle = red ? "#7a3b2a" : "#4f8f3a"; ctx.lineWidth = 2 * K; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
      for (const q of pts) ctx.lineTo(q[0], q[1]); ctx.stroke();
      ctx.lineCap = "round";
      if (red) {
        ctx.lineWidth = 5.5 * K; ctx.beginPath();
        for (let i = 1; i <= n; i++) { const [x, y, u] = pts[i], l = (7 + (1 - u) * 3) * K; ctx.moveTo(x, y); ctx.lineTo(x - l, y - l * 0.35); ctx.moveTo(x, y); ctx.lineTo(x + l, y - l * 0.35); }
        ctx.strokeStyle = "#b9472f"; ctx.stroke();
        ctx.lineWidth = 4 * K; ctx.beginPath();
        for (let i = Math.max(1, n - 3); i <= n; i++) { const [x, y] = pts[i], l = 5 * K; ctx.moveTo(x, y); ctx.lineTo(x - l, y - l * 0.6); ctx.moveTo(x, y); ctx.lineTo(x + l, y - l * 0.6); }
        ctx.strokeStyle = "#e0704a"; ctx.stroke();
      } else {
        ctx.lineWidth = 1.3 * K; ctx.strokeStyle = "#7cc853"; ctx.beginPath();
        for (let i = 1; i <= n; i++) {
          const [x, y, u] = pts[i], l = (11 - u * 4) * K;
          for (let j = 0; j < 7; j++) { const a = -Math.PI / 2 + (j - 3) * 0.42; ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * l * 1.2, y + Math.sin(a) * l * 0.55 + l * 0.35); }
        }
        ctx.stroke();
      }
      ctx.lineCap = "butt";
    }
  }
}

/* ================= fish ================= */
const SPECIES = {
  neon:  { name: "Неон", L: 25, H: 0.27, speed: 62, school: true, depth: [0.15, 0.75], tail: "fork", tailL: 0.28, top: "#6f8389", belly: "#ece7dc", fin: "rgba(225,235,238,.35)", pat: "neon", about: "зграйка з блакитною смужкою", max: 24 },
  barb:  { name: "Барбус", L: 30, H: 0.46, speed: 66, school: true, depth: [0.3, 0.85], tail: "fork", tailL: 0.3, top: "#c89a3c", belly: "#f6e3a4", fin: "rgba(232,80,48,.85)", pat: "bars", about: "смугасті жваві непосиди", max: 12 },
  angel: { name: "Скалярія", L: 44, H: 0.64, speed: 26, depth: [0.1, 0.55], tail: "lyre", tailL: 0.36, top: "#c7cbc2", belly: "#f3f0e6", fin: "rgba(228,230,222,.5)", pat: "angel", dorsal: "tall", about: "велична й неквапна", max: 4 },
  gold:  { name: "Золота рибка", L: 50, H: 0.48, speed: 34, depth: [0.12, 0.7], tail: "flow", tailL: 0.55, top: "#e2601a", belly: "#ffb347", fin: "rgba(255,146,60,.62)", pat: "gold", about: "виконує бажання (може)", max: 4 },
  betta: { name: "Півник", L: 40, H: 0.32, speed: 24, depth: [0.06, 0.35], tail: "fan", tailL: 0.55, top: "#3a2ca8", belly: "#7a3fd8", fin: "rgba(150,60,230,.72)", pat: "betta", dorsal: "long", about: "розкішні плавці, тримається вгорі", max: 2 },
  cory:  { name: "Сомик", L: 30, H: 0.38, speed: 22, depth: "bottom", tail: "fork", tailL: 0.27, top: "#8b7b5c", belly: "#e8dec6", fin: "rgba(222,212,190,.5)", pat: "spots", about: "риється в піску, доїдає крихти", max: 8 }
};
const ORDER = ["neon", "barb", "angel", "gold", "betta", "cory"];
const NAMES = ["Марічка", "Остап", "Соломія", "Тарас", "Ярина", "Богдан", "Зірка", "Мавка", "Лукаш", "Оксана", "Данило", "Христя", "Петрик", "Устина", "Нестор", "Бульбашка", "Іскра", "Мирон", "Злата", "Орест", "Леся", "Устим", "Вишенька", "Тимко", "Роксолана", "Северин", "Квітка", "Яким", "Зоряна", "Панько", "Ромця", "Веселка", "Захар", "Килина", "Остапчик", "Перлинка", "Добриня", "Стефа", "Маркіян", "Ліра"];
const DEFAULT = ["neon", "neon", "neon", "neon", "neon", "neon", "neon", "neon", "neon", "neon", "angel", "angel", "gold", "betta", "cory", "cory", "cory"];
const MAXFISH = 40;

let fish = [], food = [], bubbles = [], parts = [], ripples = [];
let finger = null, fear = null, light = 1, lampOverride = null, overrideFor = null;
const goals = {};

function newFish(sp, rec) {
  const S = SPECIES[sp];
  const used = new Set(fish.map(f => f.name));
  const name = rec?.name || NAMES.find(n => !used.has(n)) || NAMES[Math.random() * NAMES.length | 0];
  const f = {
    sp, S, name, eaten: rec?.eaten || 0, born: rec?.born || todayStr(),
    var: 0.85 + Math.random() * 0.3, z: rec?.z ?? (0.15 + Math.random() * 0.85),
    x: W * (0.1 + Math.random() * 0.8), y: H * 0.4, vx: (Math.random() - 0.5) * 40, vy: 0,
    face: Math.random() < 0.5 ? -1 : 1, tilt: 0, phase: Math.random() * 6, tx: 0, ty: 0, tt: 0, hunger: 0.3 + Math.random() * 0.6,
    rest: 0, scared: 0, seed: Math.random() * 1000 | 0
  };
  f.size = S.L * K * 1.7 * f.var * (0.7 + 0.3 * f.z);
  const yr = depthRange(f); f.y = lerp(yr[0], yr[1], Math.random());
  pickTarget(f);
  return f;
}
function todayStr() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
function saveFish() { store.set("fish", fish.map(f => ({ sp: f.sp, name: f.name, eaten: f.eaten, born: f.born, z: +f.z.toFixed(2) }))); }
function depthRange(f) {
  const top = surfY + 28 * K, bot = sandBase - 30 * K;
  if (f.S.depth === "bottom") return [bot, bot];
  const night = light < 0.4;
  let [a, b] = f.S.depth; if (night) { a = lerp(a, 0.55, 0.6); b = lerp(b, 0.95, 0.6); }
  return [lerp(top, bot, a), lerp(top, bot, b)];
}
function pickTarget(f) {
  const [a, b] = depthRange(f);
  f.tx = W * (0.06 + Math.random() * 0.88); f.ty = lerp(a, b, Math.random());
  f.tt = 4 + Math.random() * 8;
  if (f.S.depth === "bottom") { f.tx = clamp(f.x + (Math.random() - 0.5) * W * 0.5, W * 0.04, W * 0.96); f.ty = sandY(f.tx) - f.size * 0.3; }
}
function keepInside(f, hard) {
  const m = f.size * 0.6;
  if (hard) { f.x = clamp(f.x, m, W - m); f.y = clamp(f.y, surfY + m, sandY(f.x) - f.size * 0.25); }
}

function updateFish(dt) {
  const night = light < 0.4;
  for (const sp of ["neon", "barb"]) {
    const g = goals[sp] || (goals[sp] = { x: W / 2, y: H / 2, t: 0 });
    g.t -= dt;
    if (g.t <= 0) { const r = depthRange({ S: SPECIES[sp] }); g.x = W * (0.1 + Math.random() * 0.8); g.y = lerp(r[0], r[1], Math.random()); g.t = 5 + Math.random() * 7; }
  }
  for (const f of fish) {
    const S = f.S, L = f.size;
    f.hunger = Math.min(1, f.hunger + dt / 70);
    let speed = S.speed * K * f.var * (night ? 0.38 : 1);
    let dx = 0, dy = 0, turn = 2.2;
    const bottom = S.depth === "bottom";

    // food
    let target = null;
    if (f.hunger > 0.2 && food.length && !(night && Math.random() < 0.5 && !f.ftarget)) {
      let best = 1e9;
      for (const fd of food) {
        if (bottom && fd.y < sandY(fd.x) - 60 * K) continue;
        if (fd.y < surfY + 4 && fd.float > 0.6) continue;
        const d = Math.hypot(fd.x - f.x, fd.y - f.y); if (d < best && d < W * 0.6) { best = d; target = fd; }
      }
    }
    f.ftarget = target;
    if (f.scared > 0) {
      f.scared -= dt;
      dx = f.x - fear.x; dy = f.y - fear.y; speed *= 3.2; turn = 6;
    } else if (target) {
      const sx = f.x + Math.sign(f.face) * L * 0.45;
      dx = target.x - sx; dy = target.y - f.y; speed *= 1.8; turn = 4;
      if (Math.hypot(dx, dy) < Math.max(7 * K, L * 0.28)) eat(f, target);
    } else if (finger && finger.held && Math.hypot(finger.x - f.x, finger.y - f.y) < 360 * K && !bottom) {
      // curious: come close, but keep a polite distance
      const ox = finger.x + Math.sin(f.seed + T * 0.7) * 50 * K, oy = finger.y + Math.cos(f.seed * 1.3 + T * 0.6) * 35 * K;
      dx = ox - f.x; dy = oy - f.y; const d = Math.hypot(dx, dy); speed *= clamp(d / (80 * K), 0.2, 1.4); turn = 3;
    } else if (S.school) {
      const g = goals[f.sp];
      let cx = 0, cy = 0, ax = 0, ay = 0, sx = 0, sy = 0, n = 0;
      for (const o of fish) {
        if (o === f || o.sp !== f.sp) continue;
        const ex = o.x - f.x, ey = o.y - f.y, d2 = ex * ex + ey * ey;
        if (d2 > (110 * K) ** 2) continue;
        n++; cx += o.x; cy += o.y; ax += o.vx; ay += o.vy;
        if (d2 < (L * 1.1) ** 2) { const d = Math.sqrt(d2) || 1; sx -= ex / d * (L * 1.1 - d); sy -= ey / d * (L * 1.1 - d); }
      }
      dx = (g.x - f.x) * 0.6; dy = (g.y - f.y) * 0.6;
      if (n) { dx += (cx / n - f.x) * 1.2 + ax / n * 0.8 + sx * 3; dy += (cy / n - f.y) * 1.2 + ay / n * 0.8 + sy * 3; }
      dx += Math.sin(T * 0.9 + f.seed) * 30 * K; dy += Math.cos(T * 0.7 + f.seed) * 20 * K;
    } else {
      f.tt -= dt;
      if (f.rest > 0) { f.rest -= dt; speed *= 0.05; dx = Math.sign(f.face) * 5; dy = 0; if (bottom && Math.random() < dt * 3) puff(f); }
      else {
        dx = f.tx - f.x; dy = f.ty - f.y;
        const d = Math.hypot(dx, dy);
        if (d < L || f.tt <= 0) { pickTarget(f); if (Math.random() < (bottom ? 0.6 : 0.35)) f.rest = 1.5 + Math.random() * (night ? 8 : 4); }
        speed *= clamp(d / (L * 3), 0.25, 1);
      }
    }
    if (bottom) dy = (sandY(f.x) - L * 0.3 - f.y) * 3 + (target ? dy * 0.5 : 0);

    // walls, surface and sand
    const m = L * 0.8, sy0 = sandY(f.x) - L * (bottom ? 0.2 : 0.45);
    if (f.x < m) dx += (m - f.x) * 6; if (f.x > W - m) dx -= (f.x - W + m) * 6;
    if (f.y < surfY + L * 0.5) dy += (surfY + L * 0.5 - f.y) * 6; if (f.y > sy0) dy -= (f.y - sy0) * 6;

    const d = Math.hypot(dx, dy) || 1;
    const wx = dx / d * speed, wy = dy / d * speed * (bottom ? 1 : 0.6);
    const k = Math.min(1, dt * turn);
    f.vx += (wx - f.vx) * k; f.vy += (wy - f.vy) * k;
    f.x += f.vx * dt; f.y += f.vy * dt;
    f.y = Math.min(f.y, sandY(f.x) - L * 0.15); f.y = Math.max(f.y, surfY + 6);
    f.x = clamp(f.x, -L, W + L);

    if (f.vx > 6 * K) f.facing = 1; else if (f.vx < -6 * K) f.facing = -1;
    if (f.facing) f.face += (f.facing - f.face) * Math.min(1, dt * 5);
    const tl = clamp(Math.atan2(f.vy, Math.max(Math.abs(f.vx), 8 * K)), -0.42, 0.42) + (bottom && f.rest > 0 ? 0.18 : 0);
    f.tilt += (tl - f.tilt) * Math.min(1, dt * 4);
    const sp = Math.hypot(f.vx, f.vy);
    f.phase += dt * (2.2 + sp / L * 2.4) * (night && sp < 10 * K ? 0.5 : 1);
    if (Math.random() < dt * 0.02) bubbles.push({ x: f.x + Math.sign(f.face) * L * 0.5, y: f.y, r: (1 + Math.random()) * K, vy: -30 * K, ph: Math.random() * 6 });
  }
}

function eat(f, fd) {
  food.splice(food.indexOf(fd), 1);
  f.hunger = Math.max(0, f.hunger - 0.22); f.eaten++;
  for (let i = 0; i < 4; i++) parts.push({ x: fd.x, y: fd.y, vx: (Math.random() - 0.5) * 30 * K, vy: (Math.random() - 0.5) * 30 * K, life: 0.6, max: 0.6, r: 1.2 * K, c: fd.c });
  sfx("gulp");
  clearTimeout(eat.t); eat.t = setTimeout(saveFish, 1500);
}
function puff(f) {
  const x = f.x + Math.sign(f.face) * f.size * 0.45, y = sandY(x);
  for (let i = 0; i < 3; i++) parts.push({ x: x + (Math.random() - 0.5) * 8, y: y - 2, vx: (Math.random() - 0.5) * 18 * K, vy: -(8 + Math.random() * 14) * K, life: 1, max: 1, r: (1.5 + Math.random() * 2) * K, c: "rgba(210,190,150,.6)" });
}

/* fish drawing: local frame, facing +x, snout at +L/2 */
function prof(t) { const u = t < 0.35 ? 0.5 * t / 0.35 : 0.5 + 0.5 * (t - 0.35) / 0.65; return Math.pow(Math.sin(Math.PI * (u * 0.9 + 0.05)), 0.75); }
function drawFish(f) {
  const S = f.S, L = f.size, Hh = L * S.H * 0.5, ph = f.phase;
  const bend = t => Math.sin(ph - t * 2.6) * L * 0.035 * t * t;
  const X = t => L * 0.5 - t * L * 0.78;
  const top = t => bend(t) - Hh * prof(t), bot = t => bend(t) + Hh * prof(t) * 1.06;
  ctx.save();
  ctx.translate(f.x, f.y);
  const sx = Math.sign(f.face || 1) * Math.max(0.14, Math.abs(f.face));
  ctx.scale(sx, 1); ctx.rotate(f.tilt * Math.abs(f.face));
  ctx.globalAlpha = 0.6 + 0.4 * f.z;

  // tail
  const tB = X(1), yb = bend(1), hP = Hh * prof(1), TL = L * S.tailL, fl = 0.62 + 0.38 * Math.cos(ph), dy = Math.sin(ph - 3) * L * 0.05;
  ctx.fillStyle = S.fin; ctx.beginPath();
  if (S.tail === "fork" || S.tail === "lyre") {
    const hy = TL * (S.tail === "lyre" ? 1.05 : 0.6), notch = S.tail === "lyre" ? 0.25 : 0.45;
    ctx.moveTo(tB + 1, yb - hP);
    ctx.quadraticCurveTo(tB - TL * 0.6 * fl, yb - hy * 0.5 + dy, tB - TL * fl, yb - hy + dy);
    ctx.quadraticCurveTo(tB - TL * 0.55 * fl, yb - hy * 0.25 + dy, tB - TL * notch * fl, yb + dy);
    ctx.quadraticCurveTo(tB - TL * 0.55 * fl, yb + hy * 0.25 + dy, tB - TL * fl, yb + hy + dy);
    ctx.quadraticCurveTo(tB - TL * 0.6 * fl, yb + hy * 0.5 + dy, tB + 1, yb + hP);
  } else if (S.tail === "flow") {
    const w = Math.sin(ph * 0.8 - 1) * TL * 0.2;
    ctx.moveTo(tB + 1, yb - hP);
    ctx.bezierCurveTo(tB - TL * 0.4 * fl, yb - TL * 0.45, tB - TL * 0.8 * fl, yb - TL * 0.5 + w, tB - TL * fl, yb - TL * 0.25 + w);
    ctx.quadraticCurveTo(tB - TL * 0.5 * fl, yb + w * 0.5, tB - TL * 0.95 * fl, yb + TL * 0.45 + w);
    ctx.bezierCurveTo(tB - TL * 0.75 * fl, yb + TL * 0.7 + w, tB - TL * 0.3 * fl, yb + TL * 0.4, tB + 1, yb + hP);
  } else { // fan
    const w = Math.sin(ph * 0.7 - 1) * TL * 0.12;
    ctx.moveTo(tB + 1, yb - hP);
    ctx.bezierCurveTo(tB - TL * 0.3 * fl, yb - TL * 0.75, tB - TL * 1.1 * fl, yb - TL * 0.7 + w, tB - TL * 1.05 * fl, yb + w);
    ctx.bezierCurveTo(tB - TL * 1.1 * fl, yb + TL * 0.8 + w, tB - TL * 0.3 * fl, yb + TL * 0.85, tB + 1, yb + hP);
  }
  ctx.closePath(); ctx.fill();
  if (S.tail === "fan" || S.tail === "flow") {
    ctx.strokeStyle = "rgba(255,255,255,.16)"; ctx.lineWidth = 0.8; ctx.beginPath();
    for (let i = -3; i <= 3; i++) { ctx.moveTo(tB, yb); ctx.lineTo(tB - TL * 0.9 * fl, yb + i * TL * 0.18 + dy * 0.5); } ctx.stroke();
  }

  // dorsal & anal fins
  ctx.fillStyle = S.fin;
  if (S.dorsal === "tall") {
    const w = Math.sin(ph * 0.6) * L * 0.04;
    ctx.beginPath(); ctx.moveTo(X(0.25), top(0.25)); ctx.quadraticCurveTo(X(0.5), top(0.4) - L * 0.55, X(0.95) - L * 0.18 + w, top(0.6) - L * 0.62); ctx.quadraticCurveTo(X(0.8), top(0.8) - L * 0.1, X(0.92), top(0.92)); ctx.fill();
    ctx.beginPath(); ctx.moveTo(X(0.3), bot(0.3)); ctx.quadraticCurveTo(X(0.5), bot(0.4) + L * 0.6, X(0.95) - L * 0.15 + w, bot(0.6) + L * 0.7); ctx.quadraticCurveTo(X(0.8), bot(0.8) + L * 0.1, X(0.92), bot(0.92)); ctx.fill();
    // long ventral threads
    ctx.strokeStyle = S.fin; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(X(0.25), bot(0.25)); ctx.quadraticCurveTo(X(0.3), bot(0.3) + L * 0.4, X(0.45) + w, bot(0.4) + L * 0.75); ctx.stroke();
  } else if (S.dorsal === "long") {
    const w = Math.sin(ph * 0.7 - 0.5) * L * 0.06;
    ctx.beginPath(); ctx.moveTo(X(0.4), top(0.4)); ctx.quadraticCurveTo(X(0.7), top(0.6) - L * 0.32, X(1.05) - L * 0.08 + w, top(0.95) - L * 0.22 + w); ctx.lineTo(X(0.98), top(0.98)); ctx.fill();
    ctx.beginPath(); ctx.moveTo(X(0.28), bot(0.28)); ctx.bezierCurveTo(X(0.4), bot(0.4) + L * 0.5, X(0.9), bot(0.7) + L * 0.6 + w, X(1.08) - L * 0.05 + w, bot(0.9) + L * 0.45 + w); ctx.lineTo(X(0.98), bot(0.98)); ctx.fill();
  } else {
    const hgt = S.pat === "bars" ? 0.55 : S.pat === "gold" ? 0.6 : 0.45;
    ctx.beginPath(); ctx.moveTo(X(0.32), top(0.32) + 1); ctx.quadraticCurveTo(X(0.4), top(0.4) - Hh * hgt * 1.3, X(0.6), top(0.5) - Hh * hgt); ctx.lineTo(X(0.58), top(0.58) + 1); ctx.fill();
    ctx.beginPath(); ctx.moveTo(X(0.55), bot(0.55) - 1); ctx.quadraticCurveTo(X(0.62), bot(0.6) + Hh * 0.6, X(0.78), bot(0.7) + Hh * 0.35); ctx.lineTo(X(0.78), bot(0.78) - 1); ctx.fill();
  }

  // body
  const N = 10, body = new Path2D();
  body.moveTo(L * 0.52, bend(0) + Hh * 0.08);
  for (let i = 0; i <= N; i++) { const t = i / N; body.lineTo(X(t), top(t)); }
  for (let i = N; i >= 0; i--) { const t = i / N; body.lineTo(X(t), bot(t)); }
  body.closePath();
  const bgr = ctx.createLinearGradient(0, -Hh, 0, Hh);
  bgr.addColorStop(0, S.top); bgr.addColorStop(0.55, S.belly); bgr.addColorStop(1, S.belly);
  ctx.fillStyle = bgr; ctx.fill(body);

  ctx.save(); ctx.clip(body);
  const band = (t, w, c) => { ctx.fillStyle = c; ctx.fillRect(X(t) - w / 2, -Hh * 1.4, w, Hh * 2.8); };
  if (S.pat === "neon") {
    ctx.fillStyle = "#e3303b"; ctx.fillRect(X(1.05), bend(0.6), X(0.42) - X(1.05), Hh * 1.2);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "rgba(60,220,255,.35)"; ctx.lineWidth = Hh * 0.7; ctx.beginPath(); ctx.moveTo(X(0.08), bend(0.08) - Hh * 0.2); ctx.lineTo(X(0.85), bend(0.85) - Hh * 0.12); ctx.stroke();
    ctx.strokeStyle = "#39d4ff"; ctx.lineWidth = Hh * 0.34; ctx.stroke();
    ctx.globalCompositeOperation = "source-over";
  } else if (S.pat === "bars") {
    for (const t of [0.13, 0.4, 0.66, 0.93]) band(t, L * 0.075, "rgba(20,18,16,.88)");
  } else if (S.pat === "angel") {
    for (const t of [0.14, 0.44, 0.76]) band(t, L * 0.07, "rgba(25,25,28,.75)");
    ctx.fillStyle = "rgba(255,220,140,.25)"; ctx.fillRect(X(0.25), -Hh, L * 0.3, Hh * 0.4);
  } else if (S.pat === "gold") {
    ctx.fillStyle = "rgba(255,240,190,.35)"; ctx.beginPath(); ctx.ellipse(X(0.35), -Hh * 0.3, L * 0.22, Hh * 0.22, 0, 0, 7); ctx.fill();
    ctx.strokeStyle = "rgba(160,50,10,.25)"; ctx.lineWidth = 0.8;
    for (let i = 0; i < 6; i++) { const x = X(0.25 + i * 0.1); ctx.beginPath(); ctx.arc(x, bend(0.3 + i * 0.1), Hh * 0.5, -1, 1); ctx.stroke(); }
  } else if (S.pat === "betta") {
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = "rgba(60,140,255,.35)"; ctx.beginPath(); ctx.ellipse(X(0.45), -Hh * 0.1, L * 0.3, Hh * 0.35, 0, 0, 7); ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  } else if (S.pat === "spots") {
    const r = mulberry(f.seed); ctx.fillStyle = "rgba(50,40,30,.55)";
    for (let i = 0; i < 14; i++) { ctx.beginPath(); ctx.arc(X(0.1 + r() * 0.85), (r() - 0.6) * Hh * 1.4, L * (0.02 + r() * 0.02), 0, 7); ctx.fill(); }
    ctx.fillRect(X(0.95), -Hh * 0.1, X(0.3) - X(0.95), Hh * 0.12);
  }
  // sheen on the back and shadow under the belly
  const sh = ctx.createLinearGradient(0, -Hh, 0, Hh);
  sh.addColorStop(0, "rgba(255,255,255,.22)"); sh.addColorStop(0.35, "rgba(255,255,255,0)"); sh.addColorStop(0.8, "rgba(0,0,0,0)"); sh.addColorStop(1, "rgba(0,20,30,.25)");
  ctx.fillStyle = sh; ctx.fillRect(-L, -Hh * 1.2, L * 2, Hh * 2.4);
  ctx.restore();
  ctx.strokeStyle = "rgba(0,0,0,.18)"; ctx.lineWidth = 0.8; ctx.stroke(body);
  // gill
  ctx.strokeStyle = "rgba(0,0,0,.2)"; ctx.beginPath(); ctx.arc(X(0.27) + Hh * 0.6, bend(0.2), Hh * 0.62, Math.PI * 0.75, Math.PI * 1.25); ctx.stroke();
  // eye
  const er = Math.max(1.4, Hh * (S.pat === "angel" ? 0.17 : 0.25)), ex = X(0.1), ey = bend(0.1) - Hh * 0.12;
  ctx.fillStyle = S.pat === "neon" ? "#9fdcff" : "#efe6d2"; ctx.beginPath(); ctx.arc(ex, ey, er, 0, 7); ctx.fill();
  ctx.fillStyle = "#0a0a0c"; ctx.beginPath(); ctx.arc(ex + er * 0.1, ey, er * 0.62, 0, 7); ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,.85)"; ctx.beginPath(); ctx.arc(ex + er * 0.3, ey - er * 0.3, er * 0.22, 0, 7); ctx.fill();
  // barbels
  if (S.pat === "spots") { ctx.strokeStyle = "rgba(230,215,190,.8)"; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(L * 0.48, Hh * 0.3); ctx.lineTo(L * 0.56, Hh * 0.75); ctx.moveTo(L * 0.44, Hh * 0.35); ctx.lineTo(L * 0.47, Hh * 0.85); ctx.stroke(); }
  // pectoral fin
  ctx.fillStyle = S.fin; ctx.beginPath();
  ctx.ellipse(X(0.27), bend(0.27) + Hh * 0.35, L * 0.1, Hh * 0.2, -0.7 + Math.sin(ph * 1.7) * 0.45, 0, 7); ctx.fill();
  ctx.restore();
}

/* ================= food, bubbles, particles ================= */
const FOODC = ["#d9822b", "#b5531f", "#e8b04a", "#8f6a3a", "#c94a2a"];
function feed(x) {
  x = clamp(x, 30, W - 30);
  for (let i = 0; i < 5 && food.length < 70; i++)
    food.push({ x: x + (Math.random() - 0.5) * 40 * K, y: surfY + 2 + Math.random() * 3, float: 0.6 + Math.random() * 1.8, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 2, s: (2.2 + Math.random() * 1.8) * K, c: FOODC[Math.random() * 5 | 0], landed: false, life: 40, ph: Math.random() * 6 });
  ripples.push({ x, y: surfY, r: 4, life: 1 });
  sfx("plop");
}
function updateFood(dt) {
  for (let i = food.length - 1; i >= 0; i--) {
    const f = food[i];
    if (f.float > 0) { f.float -= dt; f.x += Math.sin(T + f.ph) * 4 * dt; f.y = surfY + 3 + Math.sin(T * 2 + f.ph); continue; }
    if (!f.landed) {
      f.y += 17 * K * dt; f.x += Math.sin(T * 1.4 + f.ph) * 9 * K * dt; f.rot += f.vr * dt;
      if (f.y >= sandY(f.x) - 1) { f.landed = true; f.y = sandY(f.x) - 1; }
    } else { f.life -= dt; if (f.life <= 0) food.splice(i, 1); }
  }
}
function updateBubbles(dt) {
  const rate = 16;
  if (Math.random() < rate * dt) bubbles.push({ x: stone.x + (Math.random() - 0.5) * 16 * K, y: stone.y - 4, r: (1.4 + Math.random() * 3) * K, vy: 0, ph: Math.random() * 6 });
  if (bubbles.length > 170) bubbles.splice(0, bubbles.length - 170);
  for (let i = bubbles.length - 1; i >= 0; i--) {
    const b = bubbles[i];
    b.vy = lerp(b.vy, -(55 + b.r * 22 / K) * K, dt * 2);
    b.y += b.vy * dt; b.x += Math.sin(T * 6 + b.ph) * 14 * K * dt; b.r += dt * 0.25 * K;
    if (b.y < surfY + b.r) { bubbles.splice(i, 1); if (Math.random() < 0.15) ripples.push({ x: b.x, y: surfY, r: 2, life: 0.6 }); if (Math.random() < 0.06) sfx("bub"); }
  }
  for (let i = parts.length - 1; i >= 0; i--) { const p = parts[i]; p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.96; p.vy *= 0.96; if (p.life <= 0) parts.splice(i, 1); }
  for (let i = ripples.length - 1; i >= 0; i--) { const r = ripples[i]; r.life -= dt; r.r += 40 * K * dt; if (r.life <= 0) ripples.splice(i, 1); }
}

/* ================= light (lamp timer 8:00–22:00) ================= */
function clockHour() { if (Q.get("h") != null) return +Q.get("h"); const d = new Date(); return d.getHours() + d.getMinutes() / 60; }
function scheduleLight() { const h = clockHour(); return smooth(7.6, 8.4, h) * (1 - smooth(21.6, 22.4, h)); }
function lampTarget() {
  const s = scheduleLight(), on = s > 0.5;
  if (lampOverride != null && overrideFor !== on) lampOverride = null; // the timer took over again
  return lampOverride != null ? lampOverride : s;
}

/* ================= render ================= */
function render(dt) {
  const tgt = lampTarget(); light += (tgt - light) * Math.min(1, dt * 0.8);
  if (Math.abs(tgt - light) < 0.002) light = tgt;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
  ctx.drawImage(bg, 0, 0, W, H);

  // caustics on the sand and faintly in the water
  if (light > 0.02) {
    ctx.save(); ctx.globalCompositeOperation = "lighter";
    const layer = (s, ox, oy, a) => {
      ctx.globalAlpha = a; ctx.save();
      const p = 256 * s; ctx.translate(((ox % p) + p) % p - p, ((oy % p) + p) % p - p); ctx.scale(s, s);
      ctx.fillStyle = caustPat; ctx.fillRect(0, 0, (W + 2 * p) / s, (H + 2 * p) / s); ctx.restore();
    };
    ctx.save(); ctx.clip(sandPath);
    layer(1.7 * K, T * 11, T * 4, 0.13 * light); layer(2.3 * K, -T * 8, T * 6, 0.1 * light);
    ctx.restore();
    layer(2.6 * K, T * 6, -T * 3, 0.035 * light);
    ctx.restore();
  }
  drawRays(light);

  for (const p of plants) if (p.layer === "back" && p.z < 0.5) drawPlant(p);
  const sorted = fish.slice().sort((a, b) => a.z - b.z);
  let i = 0;
  for (; i < sorted.length && sorted[i].z < 0.5; i++) drawFish(sorted[i]);
  for (const p of plants) if (p.layer === "back" && p.z >= 0.5) drawPlant(p);
  drawFood();
  for (; i < sorted.length; i++) drawFish(sorted[i]);
  for (const p of plants) if (p.layer === "front") drawPlant(p);
  drawBubbles();
  drawSurface();

  // night: dim to moonlight
  if (light < 0.999) {
    ctx.globalAlpha = 1; ctx.fillStyle = `rgba(3,9,26,${(1 - light) * 0.66})`; ctx.fillRect(0, 0, W, H);
    ctx.save(); ctx.globalCompositeOperation = "lighter";
    const mg = ctx.createRadialGradient(W * 0.3, 0, 10, W * 0.3, 0, H * 0.9);
    mg.addColorStop(0, `rgba(80,120,200,${(1 - light) * 0.16})`); mg.addColorStop(1, "rgba(80,120,200,0)");
    ctx.fillStyle = mg; ctx.fillRect(0, 0, W, H); ctx.restore();
  }
  ctx.globalAlpha = 1; ctx.drawImage(vign, 0, 0, W, H);
}

function drawRays(l) {
  ctx.save(); ctx.globalCompositeOperation = "lighter";
  const night = 1 - l;
  for (const r of rays) {
    const a = (0.06 + 0.05 * Math.sin(T * r.sp + r.ph)) * (l + night * 0.35);
    if (a <= 0.004) continue;
    const x0 = r.x * W + Math.sin(T * r.sp * 0.7 + r.ph) * 30 * K, len = sandBase - surfY, x1 = x0 + len * r.lean;
    const g = ctx.createLinearGradient(0, surfY, 0, sandBase);
    const c = l > 0.5 ? "210,255,235" : "130,160,230";
    g.addColorStop(0, `rgba(${c},${a})`); g.addColorStop(1, `rgba(${c},0)`);
    ctx.fillStyle = g; ctx.beginPath();
    ctx.moveTo(x0 - r.w * 0.5, surfY); ctx.lineTo(x0 + r.w * 0.5, surfY); ctx.lineTo(x1 + r.w * 1.6, sandBase); ctx.lineTo(x1 - r.w * 1.6, sandBase); ctx.fill();
  }
  ctx.restore();
}
function drawFood() {
  for (const f of food) {
    ctx.globalAlpha = f.landed ? Math.min(1, f.life / 6) : 1;
    ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.rot); ctx.fillStyle = f.c;
    ctx.beginPath(); ctx.moveTo(-f.s, -f.s * 0.4); ctx.lineTo(f.s * 0.3, -f.s * 0.7); ctx.lineTo(f.s, f.s * 0.2); ctx.lineTo(-f.s * 0.2, f.s * 0.6); ctx.fill();
    ctx.restore();
  }
  ctx.globalAlpha = 1;
  for (const p of parts) { ctx.globalAlpha = p.life / p.max; ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill(); }
  ctx.globalAlpha = 1;
}
function drawBubbles() {
  ctx.lineWidth = 1; ctx.strokeStyle = "rgba(230,250,255,.55)"; ctx.beginPath();
  for (const b of bubbles) { ctx.moveTo(b.x + b.r, b.y); ctx.arc(b.x, b.y, b.r, 0, 7); }
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,.7)"; ctx.beginPath();
  for (const b of bubbles) { const r = Math.max(0.6, b.r * 0.3); ctx.moveTo(b.x - b.r * 0.35 + r, b.y - b.r * 0.35); ctx.arc(b.x - b.r * 0.35, b.y - b.r * 0.35, r, 0, 7); }
  ctx.fill();
}
function drawSurface() {
  const wave = x => surfY + Math.sin(x * 0.018 + T * 1.3) * 2.2 * K + Math.sin(x * 0.047 - T * 2.1) * 1.1 * K;
  // underside of the surface reflects the tank
  const g = ctx.createLinearGradient(0, 0, 0, surfY + 4);
  g.addColorStop(0, "#071b22"); g.addColorStop(0.45, "#174f5c"); g.addColorStop(1, "#5fb3bd");
  ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(W, 0);
  for (let x = W; x >= -10; x -= 16) ctx.lineTo(x, wave(x)); ctx.closePath(); ctx.fill();
  // lamp bar
  if (light > 0.02) { ctx.fillStyle = `rgba(240,255,250,${0.5 * light})`; ctx.fillRect(W * 0.12, surfY * 0.18, W * 0.76, Math.max(2, surfY * 0.08)); }
  ctx.strokeStyle = "rgba(220,255,250,.55)"; ctx.lineWidth = 1.4; ctx.beginPath();
  for (let x = -10; x <= W + 10; x += 16) x < 0 ? ctx.moveTo(x, wave(x)) : ctx.lineTo(x, wave(x));
  ctx.stroke();
  // glimmers just under the surface
  ctx.save(); ctx.globalCompositeOperation = "lighter";
  const sg = ctx.createLinearGradient(0, surfY, 0, surfY + 40 * K);
  sg.addColorStop(0, `rgba(200,255,245,${0.12 * (0.3 + light)})`); sg.addColorStop(1, "rgba(200,255,245,0)");
  ctx.fillStyle = sg; ctx.fillRect(0, surfY, W, 40 * K);
  ctx.restore();
  ctx.strokeStyle = "rgba(220,255,250,.5)";
  for (const r of ripples) { ctx.globalAlpha = r.life; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.ellipse(r.x, r.y + 2, r.r * 1.6, r.r * 0.3, 0, 0, 7); ctx.stroke(); }
  ctx.globalAlpha = 1;
  if (knockFx > 0) { ctx.strokeStyle = `rgba(255,255,255,${knockFx * 0.5})`; ctx.lineWidth = 2; for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(fear.x, fear.y, (1 - knockFx) * (120 + k * 60) * K, 0, 7); ctx.stroke(); } }
}
let knockFx = 0;

/* ================= sound (optional, synthesized) ================= */
let ac = null, soundOn = store.get("sound", false), hum = null;
function audioInit() {
  if (ac) return;
  try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  const len = ac.sampleRate * 3, buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
  let last = 0; for (let i = 0; i < len; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
  const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
  const lp = ac.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 700;
  hum = ac.createGain(); hum.gain.value = 0;
  src.connect(lp); lp.connect(hum); hum.connect(ac.destination); src.start();
}
let lastSfx = 0;
function sfx(kind) {
  if (!soundOn || !ac || ac.state !== "running") return;
  const t = ac.currentTime; if (t - lastSfx < 0.05) return; lastSfx = t;
  const o = ac.createOscillator(), g = ac.createGain(); o.type = "sine";
  const base = kind === "plop" ? 260 : kind === "gulp" ? 520 : kind === "knock" ? 90 : 700 + Math.random() * 500;
  const dur = kind === "knock" ? 0.18 : 0.08;
  o.frequency.setValueAtTime(base, t); o.frequency.exponentialRampToValueAtTime(kind === "knock" ? 50 : base * 2.2, t + dur);
  const vol = kind === "knock" ? 0.35 : kind === "bub" ? 0.05 : 0.09;
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + dur + 0.02);
}
function setSound(on) {
  soundOn = on; store.set("sound", on);
  if (on) { audioInit(); if (ac) { ac.resume(); hum.gain.setTargetAtTime(0.05, ac.currentTime, 0.5); } }
  else if (ac && hum) hum.gain.setTargetAtTime(0, ac.currentTime, 0.2);
  $("bSound").classList.toggle("on", on);
  $("iSound").innerHTML = on ? '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11"/>' : '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l4 6M21 9l-4 6"/>';
}

/* ================= input ================= */
let downAt = null;
cv.addEventListener("pointerdown", e => {
  wake(); closePop();
  if (soundOn && ac && ac.state !== "running") ac.resume();
  downAt = { x: e.clientX, y: e.clientY, t: now(), id: e.pointerId, moved: false };
  finger = { x: e.clientX, y: e.clientY, held: false };
  cv.setPointerCapture(e.pointerId);
});
cv.addEventListener("pointermove", e => {
  if (!downAt || e.pointerId !== downAt.id) return;
  finger.x = e.clientX; finger.y = e.clientY;
  if (Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 14) downAt.moved = true;
  if (downAt.moved || now() - downAt.t > 0.35) finger.held = true;
});
const up = e => {
  if (!downAt || e.pointerId !== downAt.id) return;
  if (!downAt.moved && now() - downAt.t < 0.45) tap(downAt.x, downAt.y);
  downAt = null; finger = null;
};
cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);

function fishAt(x, y) {
  let best = null, bd = 1e9;
  for (const f of fish) { const d = Math.hypot(f.x - x, f.y - y); if (d < Math.max(f.size * 0.7, 22) && d < bd) { bd = d; best = f; } }
  return best;
}
function tap(x, y) {
  const f = fishAt(x, y);
  if (f) {
    f.rest = 0; f.vx += (f.x - x) * 2; f.vy += (f.y - y) * 2;
    const days = Math.round((new Date(todayStr()) - new Date(f.born)) / 864e5);
    const since = days <= 0 ? "з нами від сьогодні" : `з нами ${days} ${plural(days, "день", "дні", "днів")}`;
    toast(`${f.S.name} ${f.name} · ${f.eaten ? `з'їдено ${f.eaten} ${plural(f.eaten, "пластівець", "пластівці", "пластівців")}` : "ще нічого не з'їдено"} · ${since}`);
    return;
  }
  feed(x); hideTitle();
}
function plural(n, a, b, c) { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 12 || h > 14) ? b : c; }
function knock() {
  fear = { x: W * (0.3 + Math.random() * 0.4), y: H * (0.35 + Math.random() * 0.3) };
  for (const f of fish) { f.scared = 0.9 + Math.random() * 0.8; f.rest = 0; }
  knockFx = 1; sfx("knock");
}

/* ================= UI ================= */
let toastT;
function toast(s) { const t = $("toast"); t.textContent = s; t.style.opacity = 1; clearTimeout(toastT); toastT = setTimeout(() => t.style.opacity = 0, 3200); }
function hideTitle() { $("title").style.opacity = 0; }
setTimeout(hideTitle, 9000);
let idleT;
function wake() { $("dock").classList.remove("idle"); clearTimeout(idleT); idleT = setTimeout(() => { if ($("pop").hidden && !$("panel").classList.contains("open")) $("dock").classList.add("idle"); }, 9000); }
document.addEventListener("pointerdown", wake, true);

function closePop() { $("pop").hidden = true; $("bFish").classList.remove("on"); }
function openFishPop() {
  const pop = $("pop"); pop.innerHTML = "";
  const note = document.createElement("div"); note.className = "note"; note.textContent = `У нас ${fish.length} ${plural(fish.length, "риба", "риби", "риб")} · торкнись, щоб додати`; pop.appendChild(note);
  for (const sp of ORDER) {
    const S = SPECIES[sp], n = fish.filter(f => f.sp === sp).length;
    const chip = document.createElement("button"); chip.className = "chip";
    const pc = document.createElement("canvas"); pc.width = 128; pc.height = 84;
    chip.appendChild(pc);
    const t = document.createElement("div"); t.className = "t"; t.innerHTML = `<b>${S.name}${n ? " · " + n : ""}</b><span>${S.about}</span>`; chip.appendChild(t);
    const m = document.createElement("button"); m.className = "m"; m.textContent = "−"; m.title = "відпустити"; if (!n) m.style.visibility = "hidden"; chip.appendChild(m);
    m.addEventListener("click", e => { e.stopPropagation(); removeFish(sp); openFishPop(); });
    chip.addEventListener("click", () => { addFish(sp); openFishPop(); });
    pop.appendChild(chip);
    portrait(pc, sp);
  }
  pop.hidden = false; $("bFish").classList.add("on");
}
function portrait(c, sp) {
  const g = c.getContext("2d"), S = SPECIES[sp];
  const f = { S, sp, size: S.dorsal === "tall" ? 46 : S.tail === "fan" || S.tail === "flow" ? 60 : 72, z: 1, face: 1, tilt: 0, phase: 1.2, x: 70, y: 42, seed: 3 };
  const keep = ctx; ctx = g; try { drawFish(f); } finally { ctx = keep; }
}
function addFish(sp) {
  const S = SPECIES[sp];
  if (fish.length >= MAXFISH) { toast("Акваріум повний — спершу відпусти когось"); return; }
  if (fish.filter(f => f.sp === sp).length >= S.max) { toast(`${S.name}: більше не влізе`); return; }
  const f = newFish(sp); f.x = W * (0.2 + Math.random() * 0.6); f.y = surfY + 30 * K; f.vy = 40 * K;
  fish.push(f); saveFish(); toast(`Вітаємо в акваріумі: ${S.name} ${f.name}`);
}
function removeFish(sp) {
  for (let i = fish.length - 1; i >= 0; i--) if (fish[i].sp === sp) { const f = fish.splice(i, 1)[0]; saveFish(); toast(`Прощавай, ${f.S.name} ${f.name}! Повернено в зоомагазин`); return; }
}

$("bFish").addEventListener("click", () => { if ($("pop").hidden) openFishPop(); else closePop(); });
$("bKnock").addEventListener("click", () => { closePop(); knock(); });
$("bLamp").addEventListener("click", () => {
  closePop();
  const on = lampTarget() < 0.5;
  overrideFor = scheduleLight() > 0.5; lampOverride = on ? 1 : 0;
  showLamp(); toast(on ? "Лампу ввімкнено" : "Лампу вимкнено — риби засинають");
});
$("bSound").addEventListener("click", () => { closePop(); setSound(!soundOn); toast(soundOn ? "Звук води ввімкнено" : "Звук вимкнено"); });
$("bMore").addEventListener("click", () => { closePop(); $("panel").classList.add("open"); });
$("close").addEventListener("click", () => $("panel").classList.remove("open"));
function showLamp() { const on = lampTarget() > 0.5; $("vLamp").textContent = on ? "Лампа" : "Ніч"; $("bLamp").classList.toggle("on", on); }

function renderDiary() {
  const log = (window.CHANGELOG || []).slice().sort((a, b) => b.day - a.day);
  $("diary").innerHTML = log.map(e => `<div class="entry"><span class="d">ДЕНЬ ${e.day} · ${e.date.split("-").reverse().join(".")}</span><b>${e.title}</b><p>${e.text}</p></div>`).join("");
  if (log.length) $("dayline2").textContent = `День ${log[0].day} · щоранку щось нове`;
  const v = app ? app.version() : ""; if (v) $("foot").textContent = `Версія ${v} · Лабораторія Claude`;
  const seen = store.get("seenDay", 0);
  if (log.length && log[0].day > seen) { store.set("seenDay", log[0].day); if (seen) setTimeout(() => toast(`Нове: ${log[0].title}`), 1500); }
}

/* ================= lifecycle ================= */
let running = true;
window.pauseAll = () => { running = false; if (ac && ac.state === "running") ac.suspend(); saveFish(); };
window.resumeAll = () => { running = true; last = now(); if (ac && soundOn) ac.resume(); };
document.addEventListener("visibilitychange", () => { if (document.hidden) window.pauseAll(); else window.resumeAll(); });
let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 200); });

resize();
light = lampTarget();
const saved = store.get("fish", null);
const nFish = Q.get("n");
if (saved && saved.length && !nFish) for (const r of saved) { if (SPECIES[r.sp]) fish.push(newFish(r.sp, r)); }
else { const list = nFish ? Array.from({ length: +nFish }, (_, i) => ORDER[i % ORDER.length]) : DEFAULT; for (const sp of list) fish.push(newFish(sp)); saveFish(); }
renderDiary(); showLamp(); wake();
if (soundOn) { $("bSound").classList.add("on"); setSound(true); }
if (Q.get("panel")) $("panel").classList.add("open");
if (Q.get("pop")) openFishPop();

let last = now(), acc = 0;
function loop() {
  requestAnimationFrame(loop);
  const t = now(); acc += t - last; last = t;
  if (!running || acc < 0.030) return;           // ~30 fps is plenty for fish and saves battery
  const dt = Math.min(0.06, acc); acc = 0;
  T += dt;
  if (knockFx > 0) knockFx = Math.max(0, knockFx - dt * 1.2);
  updateFish(dt); updateFood(dt); updateBubbles(dt);
  render(dt);
  if (Math.floor(T) % 30 === 0 && Math.floor(T - dt) % 30 !== 0) showLamp();
}
// warm up: let the fish settle into their places before the first frame
for (let k = 0; k < 60; k++) { T += 0.05; updateFish(0.05); updateBubbles(0.05); }
render(0.05);
requestAnimationFrame(loop);

window.__akv = { get fish() { return fish; }, get food() { return food; }, get light() { return light; }, feed, knock, tap, addFish, step(n) { for (let k = 0; k < n; k++) { T += 0.033; updateFish(0.033); updateFood(0.033); updateBubbles(0.033); } render(0.033); } };
