"use strict";
// «Гончар» — гончарний круг. Горщик — поверхня обертання: профіль r(t) з NS зрізів і висота H.
// Малюється попіксельно в маленький буфер (освітлення, текстура розпису, що крутиться разом із кругом).
const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search);
const app = window.Honchar || null;
const now = () => performance.now() / 1000;
const store = {
  get(k, d) { try { const v = localStorage.getItem("honchar." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("honchar." + k, JSON.stringify(v)); } catch (e) {} }
};
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const mix = (a, b, k) => a + (b - a) * k;
const hex = h => [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255];

/* ================= constants ================= */
const NS = 120;                 // зрізів профілю
const TW = 512, TV = 256;
const SU = TW / 256, SV = TV / 128;   // масштаб орнаментів у текселях       // текстура розпису (по колу × по висоті)
const SA = 0.24, CA = Math.sqrt(1 - SA * SA); // нахил погляду згори
const MINR = 0.13, MAXR = 1.0;

const CLAYS = {
  red:   { name: "Червона", adj: "Червоний",    about: "теракота, тепла й м'яка", raw: hex("#8f4c33"), fired: hex("#c4673d"), gRaw: .34, gFired: .07, sRaw: 18, sFired: 8 },
  white: { name: "Біла", adj: "Білий",       about: "світла, під косівський розпис", raw: hex("#b2a690"), fired: hex("#ece2cf"), gRaw: .30, gFired: .09, sRaw: 18, sFired: 10 },
  black: { name: "Гаварецька", adj: "Гаварецький", about: "після випалу чорна зі сріблом", raw: hex("#6f665d"), fired: hex("#1f1d1c"), gRaw: .30, gFired: .5, sRaw: 18, sFired: 26 }
};
const PAL = [null,
  { n: "Білий", c: "#f1ead8" }, { n: "Жовтий", c: "#e2a52c" }, { n: "Зелений", c: "#3b7d3e" }, { n: "Брунатний", c: "#6e3b1e" },
  { n: "Синій", c: "#2b4f9e" }, { n: "Червоний", c: "#b8392b" }, { n: "Чорний", c: "#1d1a18" }];
const PALRGB = PAL.map(p => p ? hex(p.c) : null);
const SPEEDS = [{ n: "Стоп", v: 0 }, { n: "Повільно", v: 0.33 }, { n: "Швидко", v: 0.95 }];

// світло зліва-згори-спереду
const L = (() => { const v = [-0.55, 0.58, 0.6]; const m = Math.hypot(...v); return v.map(x => x / m); })();
const HV = (() => { const v = [L[0], L[1], L[2] + 1]; const m = Math.hypot(...v); return v.map(x => x / m); })();

// дрібні зернята в глині — завдяки ним видно, що горщик крутиться
const NZ = new Uint8Array(TW * TV);
(() => { let s = 12345; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < NZ.length; i++) { const r = rnd(); NZ[i] = r < 0.035 ? 150 + rnd() * 50 : 232 + rnd() * 23; } })();

/* ================= pot state ================= */
function newPot(clay) {
  const r = new Float32Array(NS);
  for (let i = 0; i < NS; i++) { const t = i / (NS - 1); r[i] = 0.62 - 0.1 * t * t + 0.04 * Math.sin(t * 3); }
  return { clay: clay || "red", fired: false, H: 0.34, r, paint: new Uint8Array(TW * TV), id: 0, date: "" };
}
function shapeFrom(points) { // points: [[t, r], ...] → плавний профіль
  const r = new Float32Array(NS);
  for (let i = 0; i < NS; i++) {
    const t = i / (NS - 1); let k = 0; while (k < points.length - 2 && points[k + 1][0] < t) k++;
    const [t0, r0] = points[k], [t1, r1] = points[k + 1]; const u = clamp((t - t0) / (t1 - t0), 0, 1);
    r[i] = mix(r0, r1, u * u * (3 - 2 * u));
  }
  for (let p = 0; p < 6; p++) for (let i = 1; i < NS - 1; i++) r[i] = r[i] * 0.5 + (r[i - 1] + r[i + 1]) * 0.25;
  return r;
}
let pot = newPot("red");
let viewing = false;            // дивимось виріб з полиці
let rot = 0, speedIdx = 2, speed = SPEEDS[2].v;
let mode = "shape", color = 2, brush = 1, heat = 0, firing = null;
let dirty = true;

/* ================= layout ================= */
const cv = $("cv"), ctx = cv.getContext("2d");
const buf = document.createElement("canvas"), bctx = buf.getContext("2d");
const bg = document.createElement("canvas"), gctx = bg.getContext("2d");
let W = 0, Hs = 0, DPR = 1, cx = 0, baseY = 0, Rpx = 0, Hmax = 0, q = 1, img = null, px32 = null;
let box = { x: 0, y: 0, w: 0, h: 0 };

function resize() {
  DPR = Math.min(2, window.devicePixelRatio || 1);
  W = innerWidth; Hs = innerHeight;
  cv.width = Math.round(W * DPR); cv.height = Math.round(Hs * DPR);
  Rpx = Math.min(W * 0.19, Hs * 0.26);
  Hmax = Math.min(Hs * 0.5, Rpx * 2.4);
  cx = W / 2; baseY = Hs * 0.73;
  box.w = Math.ceil(Rpx * 2 + 8); box.x = Math.floor(cx - box.w / 2);
  box.y = Math.floor(baseY - Hmax * CA - Rpx * SA - 6); box.h = Math.ceil(baseY + Rpx * SA + 6 - box.y);
  q = Math.min(DPR, 1.5, 420 / box.w);
  buf.width = Math.max(8, Math.round(box.w * q)); buf.height = Math.max(8, Math.round(box.h * q));
  img = bctx.createImageData(buf.width, buf.height); px32 = new Uint32Array(img.data.buffer);
  drawBackground(); dirty = true;
}

function drawBackground() {
  bg.width = cv.width; bg.height = cv.height;
  const g = gctx; g.setTransform(DPR, 0, 0, DPR, 0, 0);
  let gr = g.createLinearGradient(0, 0, 0, Hs);
  gr.addColorStop(0, "#2b1f17"); gr.addColorStop(0.6, "#22180f"); gr.addColorStop(1, "#150e09");
  g.fillStyle = gr; g.fillRect(0, 0, W, Hs);
  // тепле світло з вікна майстерні
  gr = g.createRadialGradient(W * 0.18, Hs * 0.05, 10, W * 0.18, Hs * 0.05, Math.max(W, Hs) * 0.85);
  gr.addColorStop(0, "rgba(255,206,150,.22)"); gr.addColorStop(0.5, "rgba(255,180,120,.06)"); gr.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = gr; g.fillRect(0, 0, W, Hs);
  // дошки стіни
  g.strokeStyle = "rgba(0,0,0,.18)"; g.lineWidth = 1;
  for (let x = (W % 90) / 2; x < W; x += 90) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, Hs * 0.62); g.stroke(); }
  // полиця з силуетами горщиків на тлі
  const sy = Hs * 0.2;
  g.fillStyle = "rgba(0,0,0,.22)"; g.fillRect(W * 0.62, sy, W * 0.38, 7);
  g.fillStyle = "rgba(120,80,50,.16)";
  for (const [x, w, h] of [[0.66, 34, 44], [0.72, 26, 58], [0.78, 44, 30], [0.86, 30, 50], [0.92, 22, 36]]) {
    g.beginPath(); g.ellipse(W * x, sy - h * 0.45, w / 2, h / 2, 0, 0, Math.PI * 2); g.fill();
  }
  // підлога/верстак
  const fy = Hs * 0.62;
  gr = g.createLinearGradient(0, fy, 0, Hs); gr.addColorStop(0, "#3a281b"); gr.addColorStop(1, "#1a110b");
  g.fillStyle = gr; g.fillRect(0, fy, W, Hs - fy);
  g.fillStyle = "rgba(255,220,180,.05)"; g.fillRect(0, fy, W, 2);
  // тумба круга
  const rx = Rpx * 1.55, ry = rx * SA;
  gr = g.createLinearGradient(cx - rx * 1.2, 0, cx + rx * 1.2, 0);
  gr.addColorStop(0, "#2a211c"); gr.addColorStop(0.35, "#5b4c42"); gr.addColorStop(1, "#1c1612");
  g.fillStyle = gr;
  g.beginPath(); g.moveTo(cx - rx * 1.15, baseY + ry + 18); g.lineTo(cx - rx * 1.25, Hs + 10); g.lineTo(cx + rx * 1.25, Hs + 10); g.lineTo(cx + rx * 1.15, baseY + ry + 18); g.fill();
  // корито для води/шлікеру
  g.fillStyle = "#2d2520"; g.beginPath(); g.ellipse(cx, baseY + 18, rx * 1.18, ry * 1.25 + 8, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = "#3d2f26"; g.beginPath(); g.ellipse(cx, baseY + 14, rx * 1.16, ry * 1.2 + 6, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = "#1b1410"; g.beginPath(); g.ellipse(cx, baseY + 14, rx * 1.08, ry * 1.1 + 4, 0, 0, Math.PI * 2); g.fill();
  const v = g.createRadialGradient(W / 2, Hs * 0.5, Math.min(W, Hs) * 0.3, W / 2, Hs * 0.5, Math.max(W, Hs) * 0.75);
  v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,0,0,.55)");
  g.fillStyle = v; g.fillRect(0, 0, W, Hs);
}

/* ================= renderer ================= */
const RS = new Float32Array(NS), DR = new Float32Array(NS);
// cxb, byb — вісь і лінія дна в пікселях буфера; Rp/Hp — масштаб; out — Uint32 масив bw×bh
function renderPot(p, out, bw, bh, cxb, byb, Rp, Hp, rotation, heatK) {
  out.fill(0);
  const clay = CLAYS[p.clay] || CLAYS.red, fired = p.fired;
  const base = fired ? clay.fired : clay.raw;
  const gB = fired ? clay.gFired : clay.gRaw, shB = fired ? clay.sFired : clay.sRaw;
  const HH = Hp * p.H * CA, Hreal = Hp * p.H;
  for (let i = 0; i < NS; i++) RS[i] = p.r[i] * Rp;
  for (let i = 0; i < NS; i++) { const a = RS[Math.max(0, i - 1)], b = RS[Math.min(NS - 1, i + 1)]; DR[i] = (b - a) / ((i > 0 && i < NS - 1 ? 2 : 1) / (NS - 1)) / Hreal; }
  let maxR = 0; for (let i = 0; i < NS; i++) maxR = Math.max(maxR, RS[i]);
  const R = t => { const f = clamp(t, 0, 1) * (NS - 1), i = f | 0, k = f - i; return i >= NS - 1 ? RS[NS - 1] : RS[i] + (RS[i + 1] - RS[i]) * k; };
  const paint = p.paint, glowR = 1, glowG = 0.42 + 0.3 * heatK, glowB = 0.12 + 0.2 * heatK * heatK;
  const rows0 = Math.max(0, Math.floor(byb - HH - maxR * SA - 2)), rows1 = Math.min(bh, Math.ceil(byb + maxR * SA + 2));
  const x0 = Math.max(0, Math.floor(cxb - maxR - 1)), x1 = Math.min(bw, Math.ceil(cxb + maxR + 1));
  const TAU = Math.PI * 2;
  for (let j = rows0; j < rows1; j++) {
    const yUp = byb - (j + 0.5);
    for (let i = x0; i < x1; i++) {
      const x = i + 0.5 - cxb, ax = x < 0 ? -x : x;
      if (ax >= maxR) continue;
      let t = yUp / HH, r = 0, cz = 0;
      for (let it = 0; it < 4; it++) {
        r = R(t); cz = ax < r ? Math.sqrt(1 - (x / r) * (x / r)) : 0;
        t = (yUp + r * cz * SA) / HH;
      }
      if (t < 0 || t > 1) continue;
      r = R(t); if (ax >= r) continue;
      const sx = x / r; cz = Math.sqrt(1 - sx * sx);
      const fi = t * (NS - 1), ii = fi | 0, s = ii >= NS - 1 ? DR[NS - 1] : DR[ii] + (DR[ii + 1] - DR[ii]) * (fi - ii);
      const inv = 1 / Math.sqrt(1 + s * s);
      const ox = sx * inv, oy = -s * inv, oz = cz * inv;
      const nx = ox, ny = oy * CA - oz * SA, nz = oz * CA + oy * SA;
      let dif = nx * L[0] + ny * L[1] + nz * L[2]; if (dif < 0) dif = 0;
      let sp = nx * HV[0] + ny * HV[1] + nz * HV[2]; if (sp < 0) sp = 0;
      let u = Math.asin(sx) / TAU + rotation; u -= Math.floor(u);
      const tu = (u * TW) | 0, tv = Math.min(TV - 1, (t * TV) | 0), ti = tv * TW + tu;
      const pc = paint[ti]; let cr, cg, cb, gl = gB, sh = shB;
      if (pc) {
        const c = PALRGB[pc];
        if (fired) { cr = c[0]; cg = c[1]; cb = c[2]; gl = 0.7; sh = 40; }
        else { cr = mix(c[0], base[0], 0.3) * 0.86; cg = mix(c[1], base[1], 0.3) * 0.86; cb = mix(c[2], base[2], 0.3) * 0.86; gl = 0.16; sh = 12; }
      } else { cr = base[0]; cg = base[1]; cb = base[2]; }
      const n = NZ[ti] / 255;
      const ring = 1 + (fired ? 0.025 : 0.055) * Math.sin(t * Hreal * 0.55 + Math.sin(t * 17) * 2);
      const ao = t < 0.05 ? 0.7 + 6 * t : 1;
      const lit = (0.22 + 0.9 * dif) * n * ring * ao;
      let spec = sp; spec *= spec; spec *= spec; spec *= spec; if (sh > 20) { spec *= spec; } if (sh > 35) spec *= spec; // ≈ pow
      spec *= gl * 1.25;
      let R_ = cr * lit + spec, G_ = cg * lit + spec * 0.96, B_ = cb * lit + spec * 0.9;
      if (heatK > 0) { const e = heatK * (0.55 + 0.45 * dif); R_ = mix(R_, glowR, e); G_ = mix(G_, glowG, e); B_ = mix(B_, glowB, e); }
      R_ = R_ > 1 ? 255 : R_ * 255; G_ = G_ > 1 ? 255 : G_ * 255; B_ = B_ > 1 ? 255 : B_ * 255;
      out[j * bw + i] = 0xff000000 | (B_ << 16) | (G_ << 8) | R_;
    }
  }
  return { top: byb - HH, rTop: RS[NS - 1], base, fired };
}

// отвір горщика: вінця й темне нутро
function drawRim(c, info, cxb, Rp, heatK) {
  const rt = info.rTop, ry = rt * SA, wall = Math.max(1.5, Rp * 0.065);
  const b = info.base, k = (v, f) => Math.round(clamp(v * f, 0, 1) * 255);
  const lip = `rgb(${k(b[0], 1.05)},${k(b[1], 1.05)},${k(b[2], 1.05)})`;
  c.fillStyle = lip; c.beginPath(); c.ellipse(cxb, info.top, rt, ry, 0, 0, Math.PI * 2); c.fill();
  const ri = Math.max(0, rt - wall);
  if (ri > 0.5) {
    const g = c.createLinearGradient(0, info.top - ri * SA, 0, info.top + ri * SA);
    g.addColorStop(0, `rgb(${k(b[0], .62)},${k(b[1], .62)},${k(b[2], .62)})`);
    g.addColorStop(0.55, `rgb(${k(b[0], .26)},${k(b[1], .26)},${k(b[2], .26)})`);
    g.addColorStop(1, `rgb(${k(b[0], .12)},${k(b[1], .12)},${k(b[2], .12)})`);
    c.fillStyle = g; c.beginPath(); c.ellipse(cxb, info.top + wall * SA * 0.4, ri, ri * SA, 0, 0, Math.PI * 2); c.fill();
  }
  c.strokeStyle = "rgba(255,240,220,.18)"; c.lineWidth = Math.max(0.8, wall * 0.25);
  c.beginPath(); c.ellipse(cxb, info.top, rt - wall * 0.45, ry - wall * 0.45 * SA, 0, Math.PI * 0.05, Math.PI * 0.95); c.stroke();
  if (heatK > 0) { c.fillStyle = `rgba(255,${110 + 60 * heatK | 0},40,${heatK * 0.75})`; c.beginPath(); c.ellipse(cxb, info.top, rt, ry, 0, 0, Math.PI * 2); c.fill(); }
}

function drawWheel(c) {
  const rx = Rpx * 1.45, ry = rx * SA;
  // бортик диска
  let g = c.createLinearGradient(cx - rx, 0, cx + rx, 0);
  g.addColorStop(0, "#3c3631"); g.addColorStop(0.3, "#8a817a"); g.addColorStop(0.7, "#5a524c"); g.addColorStop(1, "#2c2723");
  c.fillStyle = g; c.beginPath(); c.ellipse(cx, baseY + 12, rx, ry, 0, 0, Math.PI); c.lineTo(cx - rx, baseY); c.ellipse(cx, baseY, rx, ry, 0, Math.PI, 0, true); c.fill();
  // верх диска
  g = c.createRadialGradient(cx - rx * 0.3, baseY - ry * 0.4, 4, cx, baseY, rx);
  g.addColorStop(0, "#9a918a"); g.addColorStop(1, "#5c544e");
  c.fillStyle = g; c.beginPath(); c.ellipse(cx, baseY, rx, ry, 0, 0, Math.PI * 2); c.fill();
  // мокрий шлікер навколо горщика
  c.fillStyle = "rgba(70,40,28,.35)"; c.beginPath(); c.ellipse(cx, baseY, Math.min(rx * 0.95, pot.r[0] * Rpx * 1.35), Math.min(ry * 0.95, pot.r[0] * Rpx * 1.35 * SA), 0, 0, Math.PI * 2); c.fill();
  // концентричні борозни й мітки, що крутяться
  c.strokeStyle = "rgba(30,24,20,.35)"; c.lineWidth = 1;
  for (const k of [0.45, 0.72, 0.9]) { c.beginPath(); c.ellipse(cx, baseY, rx * k, ry * k, 0, 0, Math.PI * 2); c.stroke(); }
  c.fillStyle = "rgba(30,22,18,.55)";
  for (let m = 0; m < 6; m++) {
    const a = (m / 6 + rot) * Math.PI * 2, s = Math.sin(a), co = Math.cos(a);
    const k = 0.82 + (m % 2) * 0.1, x = cx + s * rx * k, y = baseY + co * ry * k;
    c.beginPath(); c.ellipse(x, y, 5 * (0.5 + 0.5 * Math.abs(co)), 2.2, 0, 0, Math.PI * 2); c.fill();
  }
  // тінь від горщика
  const sr = pot.r[0] * Rpx;
  g = c.createRadialGradient(cx, baseY, sr * 0.6, cx, baseY, sr * 1.25);
  g.addColorStop(0, "rgba(0,0,0,.45)"); g.addColorStop(1, "rgba(0,0,0,0)");
  c.fillStyle = g; c.save(); c.translate(cx, baseY); c.scale(1, SA * 1.3); c.beginPath(); c.arc(0, 0, sr * 1.25, 0, Math.PI * 2); c.restore(); c.fill();
}

let rimInfo = null;
function renderMain() {
  const info = renderPot(pot, px32, buf.width, buf.height, (cx - box.x) * q, (baseY - box.y) * q, Rpx * q, Hmax * q, rot, heat);
  bctx.putImageData(img, 0, 0);
  drawRim(bctx, info, (cx - box.x) * q, Rpx * q, heat);
  rimInfo = { top: box.y + info.top / q, rTop: info.rTop / q };
}

/* ================= interaction ================= */
let finger = null; // {id, x, y, kind:'shape'|'pull'|'paint', vx}
let lastStamp = null, lastPaintV = 0.5, interacted = false;
const potHH = () => pot.H * Hmax * CA;

function pick(px, py) { // екран → (t, θ) на передній поверхні
  const x = px - cx, ax = Math.abs(x), yUp = baseY - py, HH = potHH();
  const R = t => { const f = clamp(t, 0, 1) * (NS - 1), i = f | 0, k = f - i; return (i >= NS - 1 ? pot.r[NS - 1] : pot.r[i] + (pot.r[i + 1] - pot.r[i]) * k) * Rpx; };
  let t = yUp / HH, r = 0, cz = 0;
  for (let it = 0; it < 5; it++) { r = R(t); cz = ax < r ? Math.sqrt(1 - (x / r) ** 2) : 0; t = (yUp + r * cz * SA) / HH; }
  if (t < 0 || t > 1) return null; r = R(t); if (ax >= r) return null;
  return { t, th: Math.asin(x / r), r };
}

cv.addEventListener("pointerdown", e => {
  if (finger) return;
  closePop(); closePanels();
  if (!interacted) { interacted = true; $("title").style.opacity = 0; }
  initAudio();
  const f = { id: e.pointerId, x: e.clientX, y: e.clientY, px: e.clientX, py: e.clientY, kind: null, mv: 0 };
  if (viewing) { f.kind = "spin"; finger = f; return; }
  if (pot.fired) { toast("Випалений горщик уже не зліпиш — візьми нову глину"); f.kind = "spin"; finger = f; return; }
  if (firing) return;
  if (mode === "paint") { f.kind = "paint"; lastStamp = null; }
  else {
    const rt = (rimInfo ? rimInfo.rTop : pot.r[NS - 1] * Rpx), top = baseY - potHH();
    if (Math.abs(e.clientY - top) < Math.max(26, rt * SA + 14) && Math.abs(e.clientX - cx) < rt + 34) f.kind = "pull";
    else f.kind = "shape";
    if (speed === 0) toast("Запусти круг — глина ліпиться, коли крутиться");
  }
  finger = f; cv.setPointerCapture(e.pointerId);
});
cv.addEventListener("pointermove", e => {
  if (!finger || e.pointerId !== finger.id) return;
  finger.mv += Math.hypot(e.clientX - finger.x, e.clientY - finger.y);
  finger.x = e.clientX; finger.y = e.clientY;
});
const up = e => { if (finger && e.pointerId === finger.id) { finger = null; lastStamp = null; save(); } };
cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);

function shapeStep(dt) {
  const f = finger; if (!f) return;
  if (f.kind === "spin") { // на полиці — крутимо пальцем
    rot -= (f.x - f.px) / (Math.PI * 2 * Rpx * 0.8); f.px = f.x; dirty = true; return;
  }
  const sp = speed / 0.95;
  if (f.kind === "pull") {
    if (sp <= 0) return;
    const nh = clamp((baseY - f.y) / (Hmax * CA), 0.14, 1);
    const k = Math.min(1, dt * 6 * (0.4 + sp));
    const H2 = mix(pot.H, nh, k), s = Math.sqrt(pot.H / H2);
    for (let i = 0; i < NS; i++) pot.r[i] = clamp(pot.r[i] * s, MINR, MAXR);
    pot.r[0] = Math.max(pot.r[0], 0.22);
    pot.H = H2; dirty = true; squish = Math.min(1, Math.abs(H2 - nh) * 6);
    if (Math.random() < 0.5 * sp) splash(cx + (Math.random() - 0.5) * pot.r[NS - 1] * Rpx * 2, baseY - potHH());
    return;
  }
  if (f.kind === "shape") {
    if (sp <= 0) return;
    const HH = potHH(), t = (baseY - f.y) / HH;
    if (t < -0.08 || t > 1.08) return;
    const d = clamp(Math.abs(f.x - cx) / Rpx, MINR, MAXR);
    const sig = clamp(40 / HH, 0.05, 0.3), rate = dt * 5 * (0.3 + 0.7 * sp);
    let moved = 0;
    for (let i = 0; i < NS; i++) {
      const ti = i / (NS - 1), z = (ti - t) / sig, w = Math.exp(-z * z); if (w < 0.004) continue;
      const k = Math.min(1, w * rate), old = pot.r[i]; pot.r[i] = old + (d - old) * k;
      moved += Math.abs(pot.r[i] - old);
    }
    // розгладжуємо під пальцем і не даємо стінці звисати
    for (let i = 1; i < NS - 1; i++) {
      const z = (i / (NS - 1) - t) / (sig * 1.5), w = Math.exp(-z * z) * 0.35;
      if (w > 0.01) pot.r[i] = mix(pot.r[i], (pot.r[i - 1] + pot.r[i + 1]) / 2, w);
    }
    constrain();
    pot.r[0] = Math.max(pot.r[0], 0.22);
    dirty = true; squish = Math.min(1, moved * 3);
    const pk = pick(f.x, f.y);
    if (pk && Math.random() < 0.35 * sp + moved * 4) splash(cx + Math.sin(pk.th) * pk.r, f.y);
  }
  if (f.kind === "paint") paintStep();
}
function constrain() {
  const maxStep = 0.03;
  for (let i = 1; i < NS; i++) {
    const d = pot.r[i] - pot.r[i - 1];
    if (d > maxStep) pot.r[i] = pot.r[i - 1] + maxStep; else if (d < -maxStep) pot.r[i] = pot.r[i - 1] - maxStep;
    pot.r[i] = clamp(pot.r[i], MINR, MAXR);
  }
}

function stamp(uT, vT, ru, rv, c) {
  const p = pot.paint;
  for (let dv = -Math.ceil(rv); dv <= Math.ceil(rv); dv++) {
    const v = Math.round(vT) + dv; if (v < 0 || v >= TV) continue;
    const yy = dv / (rv || 1);
    for (let du = -Math.ceil(ru); du <= Math.ceil(ru); du++) {
      const xx = du / (ru || 1); if (xx * xx + yy * yy > 1) continue;
      const u = ((Math.round(uT) + du) % TW + TW) % TW; p[v * TW + u] = c;
    }
  }
}
function paintStep() {
  const f = finger, pk = pick(f.x, f.y); if (!pk) { lastStamp = null; return; }
  let u = pk.th / (Math.PI * 2) + rot; u -= Math.floor(u);
  const uT = u * TW, vT = pk.t * TV, bpx = [3, 6, 11][brush];
  const ru = Math.max(0.6, bpx / (Math.PI * 2 * pk.r) * TW), rv = Math.max(0.6, bpx / potHH() * TV);
  const c = color;
  if (lastStamp) {
    let du = uT - lastStamp.u; if (du > TW / 2) du -= TW; if (du < -TW / 2) du += TW;
    const dv = vT - lastStamp.v, n = Math.min(260, Math.ceil(Math.max(Math.abs(du) / Math.max(ru * 0.5, 0.5), Math.abs(dv) / Math.max(rv * 0.5, 0.5))));
    for (let s = 1; s <= n; s++) stamp(lastStamp.u + du * s / n, lastStamp.v + dv * s / n, ru, rv, c);
  } else stamp(uT, vT, ru, rv, c);
  lastStamp = { u: uT, v: vT }; lastPaintV = pk.t; dirty = true;
}

// автоматичний орнамент — пояском на висоті останнього мазка
const ORN = ["хвилька", "ялинка", "крапки", "сонечка", "подвійна смуга", "гребінець"];
let ornI = 0;
function ornament(quiet) {
  if (pot.fired || viewing) return;
  const kind = ORN[ornI++ % ORN.length], v0 = clamp(lastPaintV, 0.08, 0.92) * TV, c = color || 4;
  const per = [8, 12, 16][Math.floor(Math.random() * 3)], amp = TV * 0.035;
  for (let u = 0; u < TW; u++) {
    const ph = (u / TW) * per % 1;
    if (kind === "хвилька") stamp(u, v0 + Math.sin(ph * Math.PI * 2) * amp, 0.8 * SU, 1.1 * SV, c);
    if (kind === "ялинка") stamp(u, v0 + (Math.abs(ph * 2 - 1) * 2 - 1) * amp, 0.8 * SU, 1.1 * SV, c);
    if (kind === "подвійна смуга") { stamp(u, v0 - amp * 0.9, 0.6 * SU, 0.9 * SV, c); stamp(u, v0 + amp * 0.9, 0.6 * SU, 0.9 * SV, c); }
    if (kind === "гребінець") { stamp(u, v0 + amp, 0.6 * SU, 0.8 * SV, c); if (ph < 0.18) for (let k = -1; k < 1; k += 0.25 / SV) stamp(u, v0 + k * amp, 0.6 * SU, 0.8 * SV, c); }
  }
  const nd = per * 2;
  for (let k = 0; k < nd; k++) {
    const u = (k + 0.5) / nd * TW;
    if (kind === "крапки") stamp(u, v0, 2.2 * SU, 2.2 * SV, c);
    if (kind === "сонечка") { stamp(u, v0, 2 * SU, 2 * SV, c); for (let a = 0; a < 6; a++) stamp(u + Math.cos(a) * 4.2 * SU, v0 + Math.sin(a) * 4.2 * SV, 0.9 * SU, 0.9 * SV, c); }
  }
  dirty = true; if (!quiet) { save(); toast(`Орнамент: ${kind}`); }
}

/* ================= splashes (краплі шлікеру) ================= */
const drops = [];
let squish = 0;
function splash(x, y) {
  if (drops.length > 60) return;
  drops.push({ x, y, vx: -(60 + Math.random() * 120) * (0.4 + speed), vy: -40 - Math.random() * 60, life: 0.6 + Math.random() * 0.5, r: 1 + Math.random() * 2 });
}
function stepDrops(dt) {
  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i]; d.vy += 600 * dt; d.x += d.vx * dt; d.y += d.vy * dt; d.life -= dt;
    if (d.life <= 0 || d.y > baseY + Rpx * SA * 1.3) drops.splice(i, 1);
  }
}
function drawDrops(c) {
  const b = (CLAYS[pot.clay] || CLAYS.red).raw;
  c.fillStyle = `rgba(${b[0] * 255 | 0},${b[1] * 230 | 0},${b[2] * 220 | 0},.85)`;
  for (const d of drops) { c.globalAlpha = clamp(d.life * 2, 0, 1); c.beginPath(); c.arc(d.x, d.y, d.r, 0, Math.PI * 2); c.fill(); }
  c.globalAlpha = 1;
}

/* ================= firing ================= */
function fire() {
  if (viewing) { toast("Цей горщик уже випалено"); return; }
  if (pot.fired) { toast("Уже випалено — візьми нову глину"); return; }
  if (firing) return;
  firing = { t: 0, saved: false }; toast("У піч! Глина твердне…"); setMode("shape");
}
function stepFire(dt) {
  if (!firing) return;
  firing.t += dt;
  const T1 = 2.4, T2 = 4.2;
  if (firing.t < T1) heat = Math.sin(clamp(firing.t / T1, 0, 1) * Math.PI / 2);
  else {
    if (!pot.fired) { pot.fired = true; }
    heat = 1 - clamp((firing.t - T1) / (T2 - T1), 0, 1);
  }
  dirty = true;
  if (firing.t >= T2) { heat = 0; firing = null; onFired(); }
}
function onFired() {
  const list = store.get("shelf", []);
  pot.id = Date.now(); pot.date = new Date().toISOString().slice(0, 10);
  list.unshift(packPot(pot)); while (list.length > 30) list.pop();
  store.set("shelf", list); save();
  toast(`Готово! ${(CLAYS[pot.clay] || CLAYS.red).adj} горщик уже на полиці`);
}

/* ================= save / load ================= */
function rle(a) { const o = []; let v = a[0], n = 0; for (let i = 0; i < a.length; i++) { if (a[i] === v) n++; else { o.push(v, n); v = a[i]; n = 1; } } o.push(v, n); return o; }
function unrle(o, len) { const a = new Uint8Array(len); let k = 0; for (let i = 0; i < o.length; i += 2) { a.fill(o[i], k, Math.min(len, k + o[i + 1])); k += o[i + 1]; } return a; }
function packPot(p) { return { clay: p.clay, fired: p.fired, H: +p.H.toFixed(4), r: Array.from(p.r, v => +v.toFixed(4)), p: rle(p.paint), id: p.id, date: p.date }; }
function unpackPot(o) {
  const p = newPot(o.clay); p.fired = !!o.fired; p.H = o.H || 0.34; p.id = o.id || 0; p.date = o.date || "";
  if (o.r && o.r.length === NS) p.r = Float32Array.from(o.r);
  if (o.p) p.paint = unrle(o.p, TW * TV);
  return p;
}
let saveT = 0;
function save() { if (!viewing && !Q.get("demo")) store.set("work", packPot(pot)); }

/* ================= UI ================= */
let toastT = 0;
function toast(s) { const t = $("toast"); t.textContent = s; t.style.opacity = 1; clearTimeout(toastT); toastT = setTimeout(() => t.style.opacity = 0, 2600); }
function closePop() { $("pop").hidden = true; }
function closePanels() { document.querySelectorAll(".panel").forEach(p => p.classList.remove("open")); }
document.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", closePanels));

function setMode(m) {
  mode = m; $("bShape").classList.toggle("on", m === "shape"); $("bPaint").classList.toggle("on", m === "paint");
}
function leaveViewing() { if (!viewing) return; viewing = false; const w = store.get("work", null); pot = w ? unpackPot(w) : newPot("red"); dirty = true; }

$("bShape").addEventListener("click", () => {
  closePop(); leaveViewing(); setMode("shape");
  if (pot.fired) toast("Випалений горщик уже не зліпиш — візьми нову глину");
});
$("bPaint").addEventListener("click", () => {
  leaveViewing();
  if (pot.fired) { toast("Розписують до випалу — візьми нову глину"); return; }
  setMode("paint"); openPaintPop();
});
function openPaintPop() {
  const pop = $("pop");
  pop.innerHTML = `<div class="note">Торкнись горщика — круг сам протягне смужку. Зупини круг для крапок.</div>` +
    PAL.map((p, i) => p ? `<button class="sw${i === color ? " on" : ""}" data-c="${i}" style="background:${p.c}" title="${p.n}"></button>` : "").join("") +
    `<button class="sw erase${color === 0 ? " on" : ""}" data-c="0" title="Стерти"></button>` +
    `<div style="width:100%;display:flex;gap:6px;justify-content:center;flex-wrap:wrap">` +
    ["Тонкий", "Середній", "Широкий"].map((n, i) => `<button class="pill${i === brush ? " on" : ""}" data-b="${i}">${n}</button>`).join("") +
    `<button class="pill" id="orn">✦ Орнамент</button></div>`;
  pop.hidden = false;
  pop.querySelectorAll("[data-c]").forEach(b => b.addEventListener("click", () => { color = +b.dataset.c; openPaintPop(); }));
  pop.querySelectorAll("[data-b]").forEach(b => b.addEventListener("click", () => { brush = +b.dataset.b; openPaintPop(); }));
  $("orn").addEventListener("click", () => ornament());
}
function showSpeed() { $("vSpeed").textContent = SPEEDS[speedIdx].n; $("bSpeed").classList.toggle("on", speedIdx > 0); }
$("bSpeed").addEventListener("click", () => { speedIdx = (speedIdx + 1) % SPEEDS.length; showSpeed(); store.set("speed", speedIdx); });
$("bFire").addEventListener("click", () => { closePop(); fire(); });
$("bNew").addEventListener("click", () => {
  const pop = $("pop");
  if (!pop.hidden && pop.dataset.k === "clay") { closePop(); return; }
  pop.dataset.k = "clay";
  pop.innerHTML = `<div class="note">${pot.fired || viewing ? "Яку глину покласти на круг?" : "Нова грудка замінить те, що зараз на крузі"}</div>` +
    Object.entries(CLAYS).map(([k, c]) => `<button class="clay" data-k="${k}"><i style="background:rgb(${c.raw.map(v => v * 255 | 0)})"></i><div><b>${c.name}</b><span>${c.about}</span></div></button>`).join("");
  pop.hidden = false;
  pop.querySelectorAll("[data-k]").forEach(b => b.addEventListener("click", () => {
    viewing = false; pot = newPot(b.dataset.k); setMode("shape"); closePop(); dirty = true; save();
    if (speedIdx === 0) { speedIdx = 2; showSpeed(); }
    toast(`${CLAYS[b.dataset.k].name} глина на крузі`);
  }));
});
$("pop").addEventListener("pointerdown", e => e.stopPropagation());

$("bShelf").addEventListener("click", () => { closePop(); renderShelf(); $("shelfPanel").classList.add("open"); });
function renderShelf() {
  const list = store.get("shelf", []), el = $("shelf");
  $("shelfEmpty").hidden = list.length > 0;
  $("shelfSub").textContent = list.length ? `${list.length} ${plural(list.length, "виріб", "вироби", "виробів")} · торкнись, щоб поставити на круг` : "Випалені горщики стоять тут";
  el.innerHTML = list.map((o, i) => `<button class="pot" data-i="${i}"><canvas width="120" height="150"></canvas><span>${(o.date || "").split("-").reverse().slice(0, 2).join(".")}</span></button>`).join("");
  el.querySelectorAll(".pot").forEach(b => {
    const o = list[+b.dataset.i], p = unpackPot(o), c = b.querySelector("canvas");
    thumb(p, c);
    b.addEventListener("click", () => { viewing = true; pot = p; dirty = true; closePanels(); toast("Крути пальцем, щоб роздивитися"); });
  });
  $("shelfDel").hidden = !list.length;
}
$("shelfDel").addEventListener("click", () => { const l = store.get("shelf", []); l.shift(); store.set("shelf", l); if (viewing) leaveViewing(); renderShelf(); });
function thumb(p, c) {
  const w = c.width, h = c.height, x = c.getContext("2d"), id = x.createImageData(w, h), a = new Uint32Array(id.data.buffer);
  const Rp = w * 0.42, Hp = h * 0.72 / CA, byb = h - Rp * SA - 6;
  const info = renderPot(p, a, w, h, w / 2, byb, Rp, Hp, 0.12, 0);
  x.putImageData(id, 0, 0); drawRim(x, info, w / 2, Rp, 0);
}
const plural = (n, a, b, c) => { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 12 || h > 14) ? b : c; };

$("bMore").addEventListener("click", () => { closePop(); $("panel").classList.add("open"); });
function renderDiary() {
  const log = (window.CHANGELOG || []).slice().sort((a, b) => b.day - a.day);
  $("diary").innerHTML = log.map(e => `<div class="entry"><span class="d">ДЕНЬ ${e.day} · ${e.date.split("-").reverse().join(".")}</span><b>${e.title}</b><p>${e.text}</p></div>`).join("");
  if (log.length) $("dayline2").textContent = `День ${log[0].day} · щоранку щось нове`;
  const v = app ? app.version() : ""; if (v) $("foot").textContent = `Версія ${v} · Лабораторія Claude`;
  const seen = store.get("seenDay", 0);
  if (log.length && log[0].day > seen) { store.set("seenDay", log[0].day); if (seen) setTimeout(() => toast(`Нове: ${log[0].title}`), 1500); }
}

/* ================= sound: гул круга й чвакання глини ================= */
let ac = null, humG = null, humF = null, sqG = null, soundOn = store.get("sound", true);
function initAudio() {
  if (ac || !soundOn) { if (ac && ac.state !== "running") ac.resume(); return; }
  try {
    ac = new (window.AudioContext || window.webkitAudioContext)();
    const len = ac.sampleRate * 2, nb = ac.createBuffer(1, len, ac.sampleRate), d = nb.getChannelData(0);
    let b = 0; for (let i = 0; i < len; i++) { b = (b + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = b * 3.5; }
    const src = ac.createBufferSource(); src.buffer = nb; src.loop = true;
    humF = ac.createBiquadFilter(); humF.type = "lowpass"; humF.frequency.value = 200;
    humG = ac.createGain(); humG.gain.value = 0;
    src.connect(humF).connect(humG).connect(ac.destination); src.start();
    const wb = ac.createBuffer(1, len, ac.sampleRate), w = wb.getChannelData(0);
    for (let i = 0; i < len; i++) w[i] = Math.random() * 2 - 1;
    const s2 = ac.createBufferSource(); s2.buffer = wb; s2.loop = true;
    const bp = ac.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 700; bp.Q.value = 0.9;
    sqG = ac.createGain(); sqG.gain.value = 0;
    s2.connect(bp).connect(sqG).connect(ac.destination); s2.start();
  } catch (e) { ac = null; }
}
function stepAudio() {
  if (!ac || !humG) return;
  const t = ac.currentTime, on = soundOn && running ? 1 : 0;
  humG.gain.setTargetAtTime(on * speed * 0.18, t, 0.3);
  humF.frequency.setTargetAtTime(90 + speed * 260, t, 0.3);
  sqG.gain.setTargetAtTime(on * squish * 0.05, t, 0.08);
}

/* ================= demo presets (для тестів) ================= */
function demo(kind) {
  const P = {
    jug:  [[0, .46], [.12, .7], [.34, .86], [.58, .66], [.78, .34], [.9, .32], [1, .42]],
    vase: [[0, .36], [.2, .58], [.45, .48], [.7, .26], [.88, .24], [1, .4]],
    bowl: [[0, .38], [.3, .7], [.65, .92], [1, .98]],
    makitra: [[0, .4], [.4, .78], [.8, .92], [1, .9]]
  };
  const p = newPot(Q.get("clay") || (kind === "vase" ? "black" : kind === "bowl" ? "white" : "red"));
  p.r = shapeFrom(P[kind] || P.jug); p.H = kind === "bowl" ? 0.34 : kind === "vase" ? 0.95 : 0.8;
  pot = p;
  if (kind !== "vase") {
    color = 1; lastPaintV = 0.3; ornI = 0; for (let k = 0; k < 2; k++) for (let u = 0; u < TW; u++) stamp(u, TV * 0.2 + k * 2 * SV, 0.6 * SU, 1.4 * SV, 1);
    color = 2; lastPaintV = 0.42; ornament(1); color = 3; lastPaintV = 0.62; ornI = 3; ornament(1); color = 4; lastPaintV = 0.55; ornI = 1; ornament(1);
  } else { color = 1; lastPaintV = 0.5; ornI = 0; ornament(1); }
  pot.fired = Q.get("fired") === "1";
}

/* ================= lifecycle ================= */
let running = true;
window.pauseAll = () => { running = false; if (ac && ac.state === "running") ac.suspend(); save(); };
window.resumeAll = () => { running = true; last = now(); if (ac && soundOn) ac.resume(); };
document.addEventListener("visibilitychange", () => { if (document.hidden) window.pauseAll(); else window.resumeAll(); });
let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 200); });

resize();
speedIdx = clamp(store.get("speed", 2), 0, 2);
if (Q.get("speed") != null) speedIdx = clamp(+Q.get("speed"), 0, 2);
speed = SPEEDS[speedIdx].v;
const w0 = store.get("work", null);
if (Q.get("demo")) demo(Q.get("demo")); else if (w0) pot = unpackPot(w0);
if (Q.get("rot")) rot = +Q.get("rot");
if (Q.get("heat")) heat = +Q.get("heat");
renderDiary(); showSpeed();
if (Q.get("mode") === "paint") { setMode("paint"); openPaintPop(); }
if (Q.get("pop") === "clay") $("bNew").click();
if (Q.get("panel")) $("panel").classList.add("open");
if (Q.get("shelf")) { if (Q.get("demo")) { const l = []; for (const k of ["jug", "bowl", "vase", "makitra"]) { const s = Q.get("demo"); demo(k); pot.fired = true; pot.date = "2026-11-22"; l.push(packPot(pot)); } store.set("shelf", l); demo(Q.get("demo")); } renderShelf(); $("shelfPanel").classList.add("open"); }

window.__g = { get pot() { return pot; }, step(n) { for (let i = 0; i < n; i++) tick(1 / 30); }, touch(x, y, k) { finger = { id: -1, x, y, px: x, py: y, kind: k, mv: 0 }; }, release() { finger = null; lastStamp = null; }, fire, ornament, cx: () => cx, baseY: () => baseY, Rpx: () => Rpx };

let last = now(), acc = 0, fpsT = 0;
function tick(dt) {
  speed += (SPEEDS[speedIdx].v - speed) * Math.min(1, dt * 2.5);
  if (viewing && !finger) speed += (0.18 - speed) * Math.min(1, dt * 2);
  if (Math.abs(speed) > 0.002) { rot += speed * dt; dirty = true; }
  squish *= Math.pow(0.02, dt);
  shapeStep(dt); stepFire(dt); stepDrops(dt);
  saveT += dt; if (saveT > 6 && finger) { saveT = 0; save(); }
}
function draw() {
  if (dirty) { renderMain(); dirty = false; }
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(bg, 0, 0);
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  if (heat > 0) { // жар печі
    const g = ctx.createRadialGradient(cx, baseY - potHH() / 2, 20, cx, baseY - potHH() / 2, Math.max(W, Hs) * 0.7);
    const fl = 0.85 + 0.15 * Math.sin(now() * 23) * Math.sin(now() * 7);
    g.addColorStop(0, `rgba(255,140,40,${0.55 * heat * fl})`); g.addColorStop(0.5, `rgba(180,50,10,${0.35 * heat})`); g.addColorStop(1, `rgba(40,5,0,${0.6 * heat})`);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, Hs);
  }
  drawWheel(ctx);
  ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = "high";
  ctx.drawImage(buf, box.x, box.y, box.w, box.h);
  drawDrops(ctx);
  if (finger && (finger.kind === "shape" || finger.kind === "pull" || finger.kind === "paint")) {
    ctx.strokeStyle = finger.kind === "paint" ? (PAL[color] ? PAL[color].c : "#fff") : "rgba(255,240,220,.55)";
    ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(finger.x, finger.y, finger.kind === "paint" ? [6, 10, 16][brush] : 16, 0, Math.PI * 2); ctx.stroke();
  }
}
function loop() {
  requestAnimationFrame(loop);
  const t = now(); acc += t - last; last = t;
  if (!running || acc < 0.030) return;
  const dt = Math.min(0.06, acc); acc = 0;
  tick(dt); draw(); stepAudio();
}
draw();
requestAnimationFrame(loop);
