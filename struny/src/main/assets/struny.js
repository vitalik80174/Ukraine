/* «Струни» — a generative string instrument.
   Strings are line segments; their length picks a note from the current scale (longer = lower).
   Sources drop glowing balls on the beat; balls bounce off strings and pluck them.
   Sound is synthesised offline (Karplus–Strong harp, bells, marimba) into cached buffers. */
"use strict";
const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search);
const app = window.Struny || null;
const store = {
  get(k, d) { try { const v = localStorage.getItem("struny." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("struny." + k, JSON.stringify(v)); } catch (e) {} }
};

/* ================= music ================= */
const NOTE_NAMES = ["До", "До♯", "Ре", "Мі♭", "Мі", "Фа", "Фа♯", "Соль", "Соль♯", "Ля", "Сі♭", "Сі"];
const SCALES = [
  { id: "penta", name: "Пентатоніка", sub: "світла, як дитяча пісенька", set: [0, 2, 4, 7, 9] },
  { id: "minor", name: "Смуток", sub: "мінорна пентатоніка", set: [0, 3, 5, 7, 10] },
  { id: "ukr", name: "Український", sub: "дорійський лад дум і кобзарів", set: [0, 2, 3, 6, 7, 9, 10] },
  { id: "dream", name: "Сон", sub: "лад-казка, трохи східний", set: [0, 2, 3, 7, 8] }
];
const VOICES = [
  { id: "harp", name: "Арфа", sub: "щипок струни" },
  { id: "bell", name: "Дзвіночки", sub: "скляні, довгі" },
  { id: "marimba", name: "Маримба", sub: "дерев'яна, тепла" }
];
const TEMPOS = [60, 72, 84, 90, 100, 112, 126];
const PERIODS = [1, 2, 3, 4, 6];
const BASE_HZ = 130.81; // C3
const RANGE = 36;       // three octaves

let scaleIx = store.get("scale", 0), voiceIx = store.get("voice", 0), tempoIx = store.get("tempo", 3);
if (Q.get("scale")) scaleIx = +Q.get("scale");
if (!SCALES[scaleIx]) scaleIx = 0; if (!VOICES[voiceIx]) voiceIx = 0; if (!TEMPOS[tempoIx]) tempoIx = 3;

function scaleNotes() {
  const s = SCALES[scaleIx].set, out = [];
  for (let o = 0; o <= 3; o++) for (const n of s) { const v = o * 12 + n; if (v <= RANGE) out.push(v); }
  return out;
}
let NOTES = scaleNotes();
/* String length → note: like a real string, frequency ∝ 1/length, then snapped to the scale. */
function noteForLength(L) {
  // longest useful string ≈ 70% of the screen → lowest note; ≈ 5% → highest (range squeezed so every length sings)
  const M = Math.max(W, H), Lmax = 0.7 * M, Lmin = 0.05 * M;
  const semi = RANGE * Math.log(Lmax / Math.max(20, L)) / Math.log(Lmax / Lmin);
  let best = NOTES[0], bd = 1e9;
  for (const n of NOTES) { const d = Math.abs(n - semi); if (d < bd) { bd = d; best = n; } }
  return best;
}
function noteName(semi) { return NOTE_NAMES[semi % 12] + (3 + Math.floor(semi / 12)); }
function noteHue(semi) { return (((semi % 12) * 7) % 12) * 30 + 15; }
function noteColor(semi, a, l) {
  const oct = Math.floor(semi / 12);
  return `hsla(${noteHue(semi)},85%,${(l || 62) + oct * 4}%,${a})`;
}

/* ================= audio ================= */
let ac = null, master = null, wet = null, audioOn = false;
const cache = new Map();
let voicesPlaying = 0;
function initAudio() {
  if (ac) { if (ac.state !== "running") ac.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  ac = new AC();
  master = ac.createGain(); master.gain.value = 0.7;
  const comp = ac.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
  master.connect(comp); comp.connect(ac.destination);
  // little hall: generated impulse response, no files needed
  const conv = ac.createConvolver();
  const len = Math.floor(ac.sampleRate * 2.6), ir = ac.createBuffer(2, len, ac.sampleRate);
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
  conv.buffer = ir; wet = ac.createGain(); wet.gain.value = 0.32; wet.connect(conv); conv.connect(master);
  audioOn = true;
}
function synth(voice, semi) {
  const key = voice + ":" + semi; if (cache.has(key)) return cache.get(key);
  const sr = ac.sampleRate, f = BASE_HZ * Math.pow(2, semi / 12);
  const dur = voice === "bell" ? 3.2 : voice === "marimba" ? 1.4 : 2.6;
  const n = Math.floor(sr * dur), buf = ac.createBuffer(1, n, sr), y = buf.getChannelData(0);
  if (voice === "harp") {
    // Karplus–Strong with fractional delay; a softened noise burst sounds like a finger pluck
    const P = sr / f, Pi = Math.floor(P), fr = P - Pi;
    const decay = Math.pow(0.5, 1 / (f * (1.1 + 1.6 * (1 - semi / RANGE)))) ;
    let prev = 0;
    for (let i = 0; i <= Pi + 1; i++) { const r = Math.random() * 2 - 1; prev = prev * 0.55 + r * 0.45; y[i] = prev; }
    for (let i = Pi + 2; i < n; i++) {
      const a = y[i - Pi] * (1 - fr) + y[i - Pi - 1] * fr;
      const b = y[i - Pi - 1] * (1 - fr) + y[i - Pi - 2] * fr;
      y[i] = decay * 0.5 * (a + b);
    }
    // remove DC and fade the tail
    let m = 0; for (let i = 0; i < n; i++) m += y[i]; m /= n;
    for (let i = 0; i < n; i++) y[i] = (y[i] - m) * Math.min(1, (n - i) / (sr * 0.3)) * 0.9;
  } else if (voice === "bell") {
    const parts = [[1, 1, 1.6], [2.0, 0.35, 1.1], [2.76, 0.4, 0.8], [5.4, 0.18, 0.4], [8.93, 0.08, 0.25]];
    for (let i = 0; i < n; i++) {
      const t = i / sr; let s = 0;
      for (const [r, a, d] of parts) s += a * Math.sin(2 * Math.PI * f * r * t) * Math.exp(-t / d);
      y[i] = s * 0.32 * Math.min(1, t * 400);
    }
  } else {
    const parts = [[1, 1, 0.55], [3.93, 0.32, 0.12], [9.8, 0.12, 0.04]];
    for (let i = 0; i < n; i++) {
      const t = i / sr; let s = 0;
      for (const [r, a, d] of parts) s += a * Math.sin(2 * Math.PI * f * r * t) * Math.exp(-t / d);
      y[i] = s * 0.5 * Math.min(1, t * 600);
    }
  }
  cache.set(key, buf); return buf;
}
function pluckSound(semi, vel, x) {
  if (!audioOn || !ac || ac.state !== "running" || voicesPlaying > 22) return;
  const src = ac.createBufferSource(); src.buffer = synth(VOICES[voiceIx].id, semi);
  const g = ac.createGain(); g.gain.value = 0.12 + 0.55 * Math.min(1, vel);
  let out = g;
  if (ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = Math.max(-0.8, Math.min(0.8, (x / W) * 1.6 - 0.8)); g.connect(p); out = p; }
  src.connect(g); out.connect(master); out.connect(wet);
  voicesPlaying++; src.onended = () => { voicesPlaying--; };
  src.start();
}
// warm the cache in idle moments so the first hits do not stutter
function warmCache() {
  if (!ac) return; const v = VOICES[voiceIx].id; let k = 0;
  const todo = strings.map(s => s.semi).filter(s => !cache.has(v + ":" + s));
  (function step() { if (k >= todo.length) return; synth(v, todo[k++]); setTimeout(step, 8); })();
}

/* ================= world ================= */
const cv = $("cv"), cx = cv.getContext("2d");
let W = 0, H = 0, DPR = 1, bg = null;
let strings = [], sources = [], balls = [], rings = [], sparks = [], motes = [];
let tool = "string", paused = false, uid = 1;
let beatT0 = performance.now(), beatN = -1;

function resize() {
  const ow = W, oh = H;
  DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  W = innerWidth; H = innerHeight;
  cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
  cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  bg = document.createElement("canvas"); bg.width = Math.max(1, Math.round(W / 2)); bg.height = Math.max(1, Math.round(H / 2));
  const b = bg.getContext("2d"), w = bg.width, h = bg.height;
  const g = b.createLinearGradient(0, 0, 0, h); g.addColorStop(0, "#0b0c1d"); g.addColorStop(0.6, "#111029"); g.addColorStop(1, "#1a1230");
  b.fillStyle = g; b.fillRect(0, 0, w, h);
  const r = b.createRadialGradient(w * 0.5, h * 1.05, 0, w * 0.5, h * 1.05, h * 0.9);
  r.addColorStop(0, "rgba(242,140,92,.18)"); r.addColorStop(1, "rgba(242,140,92,0)");
  b.fillStyle = r; b.fillRect(0, 0, w, h);
  for (let i = 0; i < 140; i++) { b.fillStyle = `rgba(255,255,255,${Math.random() * 0.35})`; b.fillRect(Math.random() * w, Math.random() * h * 0.85, 1, 1); }
  if (!motes.length) for (let i = 0; i < 40; i++) motes.push({ x: Math.random(), y: Math.random(), s: 0.4 + Math.random(), p: Math.random() * 6 });
  if (ow && (ow !== W || oh !== H)) { // keep the composition when the tablet rotates
    const sx = W / ow, sy = H / oh;
    for (const s of strings) { s.x1 *= sx; s.x2 *= sx; s.y1 *= sy; s.y2 *= sy; s.semi = noteForLength(len(s)); }
    for (const e of sources) { e.x *= sx; e.y *= sy; }
    balls.length = 0;
  }
}
const len = s => Math.hypot(s.x2 - s.x1, s.y2 - s.y1);
function addString(x1, y1, x2, y2) {
  const s = { id: uid++, x1, y1, x2, y2, semi: 0, amp: 0, ph: 0, t: 9, born: now() };
  s.semi = noteForLength(len(s)); strings.push(s); warmCache(); save(); return s;
}
function addSource(x, y, vx, vy, period) {
  const e = { id: uid++, x, y, vx: vx || 0, vy: vy || 0, period: period || 2, flash: 0, born: now() };
  sources.push(e); save(); return e;
}
function now() { return performance.now() / 1000; }

function pluck(s, vel, px, py) {
  s.amp = Math.min(16, 3 + vel * 14); s.t = 0; s.ph = Math.random() * 6;
  pluckSound(s.semi, vel, px);
  rings.push({ x: px, y: py, r: 4, a: 0.55 * Math.min(1, 0.3 + vel), semi: s.semi });
  const k = 3 + Math.round(vel * 5);
  for (let i = 0; i < k; i++) { const a = Math.random() * Math.PI * 2, v = 40 + Math.random() * 120 * (0.4 + vel); sparks.push({ x: px, y: py, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 30, life: 0.5 + Math.random() * 0.5, semi: s.semi }); }
  if (sparks.length > 300) sparks.splice(0, sparks.length - 300);
}

/* ================= physics ================= */
const R = 7;
let HITS = 0;
function gravity() { return 980 * Math.max(0.7, Math.min(1.3, H / 800)); }
function stepBalls(dt) {
  const G = gravity(), SUB = 3, h = dt / SUB, e = 0.86;
  for (let i = balls.length - 1; i >= 0; i--) {
    const b = balls[i]; b.age += dt;
    for (let k = 0; k < SUB; k++) {
      b.vy += G * h; b.x += b.vx * h; b.y += b.vy * h;
      for (const s of strings) {
        const dx = s.x2 - s.x1, dy = s.y2 - s.y1, L2 = dx * dx + dy * dy || 1;
        let t = ((b.x - s.x1) * dx + (b.y - s.y1) * dy) / L2; t = t < 0 ? 0 : t > 1 ? 1 : t;
        const cxp = s.x1 + dx * t, cyp = s.y1 + dy * t;
        let nx = b.x - cxp, ny = b.y - cyp; const d = Math.hypot(nx, ny);
        if (d >= R || d < 1e-6) continue;
        nx /= d; ny /= d;
        const vn = b.vx * nx + b.vy * ny;
        b.x = cxp + nx * R; b.y = cyp + ny * R;
        if (vn < 0) {
          b.vx -= (1 + e) * vn * nx; b.vy -= (1 + e) * vn * ny;
          const sp = -vn, tnow = b.age;
          if (sp > 70 && !(b.last === s.id && tnow - b.lastT < 0.09)) {
            HITS++; pluck(s, Math.min(1, sp / 900), cxp, cyp); b.hue = s.semi; b.glow = 1; b.hits++;
          }
          b.last = s.id; b.lastT = tnow;
        }
      }
    }
    b.trail.push(b.x, b.y); if (b.trail.length > 16) b.trail.splice(0, 2);
    b.glow *= 0.94;
    if (b.y > H + 40 || b.x < -60 || b.x > W + 60 || b.age > 30) {
      if (b.y > H + 40) rings.push({ x: b.x, y: H - 2, r: 6, a: 0.25, semi: b.hue == null ? 24 : b.hue, flat: 1 });
      balls.splice(i, 1);
    }
  }
}
function fireSources(t) {
  const spb = 60 / TEMPOS[tempoIx], n = Math.floor((t - beatT0) / spb);
  if (n === beatN) return; beatN = n;
  for (const e of sources) {
    if (n % e.period !== (e.id % e.period)) continue;
    if (balls.length >= 70) break;
    balls.push({ x: e.x, y: e.y + 10, vx: e.vx, vy: e.vy, age: 0, trail: [], hue: null, glow: 0, last: 0, lastT: -1, hits: 0 });
    e.flash = 1;
  }
}

/* ================= drawing ================= */
function drawString(s, t) {
  const age = t - s.born, grow = Math.max(0, Math.min(1, age / 0.25));
  if (grow <= 0) return;
  s.t += 1 / 60;
  const dec = Math.exp(-s.t * 2.6), a = s.amp * dec;
  const dx = s.x2 - s.x1, dy = s.y2 - s.y1, L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
  const freq = 18 + (s.semi / RANGE) * 40; // visual wobble speed, higher notes shimmer faster
  const off = a * Math.sin(s.t * freq + s.ph);
  const mx = (s.x1 + s.x2) / 2 + nx * off * 2, my = (s.y1 + s.y2) / 2 + ny * off * 2;
  const x2 = s.x1 + dx * grow, y2 = s.y1 + dy * grow;
  const lit = Math.min(1, dec * (s.amp / 8));
  cx.lineCap = "round";
  cx.globalCompositeOperation = "lighter";
  cx.strokeStyle = noteColor(s.semi, 0.10 + 0.25 * lit); cx.lineWidth = 10 + 8 * lit;
  cx.beginPath(); cx.moveTo(s.x1, s.y1); cx.quadraticCurveTo(grow < 1 ? (s.x1 + x2) / 2 : mx, grow < 1 ? (s.y1 + y2) / 2 : my, x2, y2); cx.stroke();
  cx.globalCompositeOperation = "source-over";
  cx.strokeStyle = noteColor(s.semi, 0.95, 66 + 18 * lit); cx.lineWidth = 2.2 + 0.8 * lit;
  cx.stroke();
  // pegs
  cx.fillStyle = "rgba(255,244,220,.85)";
  cx.beginPath(); cx.arc(s.x1, s.y1, 3.2, 0, 7); cx.arc(x2, y2, 3.2, 0, 7); cx.fill();
  if (tool === "move" || s.lift) { // grab handles
    const pulse = 0.5 + 0.5 * Math.sin(t * 3 + s.id);
    cx.strokeStyle = noteColor(s.semi, s.lift ? 0.95 : 0.35 + 0.25 * pulse, 74); cx.lineWidth = s.lift ? 2.4 : 1.6;
    cx.beginPath(); cx.arc(s.x1, s.y1, s.lift ? 13 : 9, 0, 7); cx.stroke();
    cx.beginPath(); cx.arc(x2, y2, s.lift ? 13 : 9, 0, 7); cx.stroke();
  }
  if (s.lift) noteTag(s.semi, (s.x1 + s.x2) / 2, (s.y1 + s.y2) / 2 - 22);
}
function noteTag(semi, lx, ly) {
  cx.font = "600 15px Golos Text, Roboto, sans-serif"; cx.textAlign = "center";
  const nm = noteName(semi), tw = cx.measureText(nm).width + 18;
  cx.fillStyle = "rgba(10,11,22,.72)"; cx.beginPath();
  if (cx.roundRect) cx.roundRect(lx - tw / 2, ly - 16, tw, 24, 12); else cx.rect(lx - tw / 2, ly - 16, tw, 24);
  cx.fill(); cx.fillStyle = noteColor(semi, 1, 76); cx.fillText(nm, lx, ly + 1);
}
function drawSource(e, t) {
  const spb = 60 / TEMPOS[tempoIx], ph = ((t - beatT0) / spb) % e.period, pr = (ph + ((e.period - (e.id % e.period)) % e.period)) % e.period / e.period;
  e.flash *= 0.9;
  cx.globalCompositeOperation = "lighter";
  const g = cx.createRadialGradient(e.x, e.y, 0, e.x, e.y, 34);
  g.addColorStop(0, `rgba(255,236,200,${0.25 + 0.5 * e.flash})`); g.addColorStop(1, "rgba(255,236,200,0)");
  cx.fillStyle = g; cx.beginPath(); cx.arc(e.x, e.y, 34, 0, 7); cx.fill();
  cx.globalCompositeOperation = "source-over";
  cx.strokeStyle = "rgba(255,244,220,.25)"; cx.lineWidth = 3;
  cx.beginPath(); cx.arc(e.x, e.y, 14, 0, 7); cx.stroke();
  cx.strokeStyle = "rgba(255,244,220,.9)";
  cx.beginPath(); cx.arc(e.x, e.y, 14, -Math.PI / 2, -Math.PI / 2 + pr * Math.PI * 2); cx.stroke();
  // beat dots show the period
  for (let i = 0; i < e.period; i++) {
    const a = -Math.PI / 2 + (i / e.period) * Math.PI * 2;
    cx.fillStyle = "rgba(255,244,220,.7)"; cx.beginPath(); cx.arc(e.x + Math.cos(a) * 21, e.y + Math.sin(a) * 21, 1.6, 0, 7); cx.fill();
  }
  cx.fillStyle = "#fff4dc"; cx.beginPath(); cx.arc(e.x, e.y, 5 + 3 * e.flash, 0, 7); cx.fill();
  if (tool === "move" || e.lift) {
    cx.strokeStyle = `rgba(242,180,92,${e.lift ? 0.95 : 0.45 + 0.2 * Math.sin(t * 3 + e.id)})`; cx.lineWidth = 1.8; cx.setLineDash([3, 5]);
    cx.beginPath(); cx.arc(e.x, e.y, e.lift ? 30 : 27, 0, 7); cx.stroke(); cx.setLineDash([]);
  }
  if (e.vx || e.vy) { // aim arrow
    const L = Math.hypot(e.vx, e.vy), ux = e.vx / L, uy = e.vy / L;
    cx.strokeStyle = "rgba(255,244,220,.45)"; cx.lineWidth = 2;
    cx.beginPath(); cx.moveTo(e.x + ux * 18, e.y + uy * 18); cx.lineTo(e.x + ux * 30, e.y + uy * 30); cx.stroke();
  }
}
function drawBall(b) {
  const col = b.hue == null ? "255,244,220" : null;
  cx.globalCompositeOperation = "lighter";
  const tr = b.trail;
  for (let i = 2; i < tr.length; i += 2) {
    const k = i / tr.length;
    cx.strokeStyle = col ? `rgba(${col},${0.25 * k})` : noteColor(b.hue, 0.3 * k);
    cx.lineWidth = R * 1.4 * k; cx.beginPath(); cx.moveTo(tr[i - 2], tr[i - 1]); cx.lineTo(tr[i], tr[i + 1]); cx.stroke();
  }
  const gr = R * (2.6 + 2 * b.glow);
  const g = cx.createRadialGradient(b.x, b.y, 0, b.x, b.y, gr);
  g.addColorStop(0, col ? `rgba(${col},.55)` : noteColor(b.hue, 0.6, 70)); g.addColorStop(1, "rgba(0,0,0,0)");
  cx.fillStyle = g; cx.beginPath(); cx.arc(b.x, b.y, gr, 0, 7); cx.fill();
  cx.globalCompositeOperation = "source-over";
  cx.fillStyle = col ? "#fff8ea" : noteColor(b.hue, 1, 86); cx.beginPath(); cx.arc(b.x, b.y, R * 0.8, 0, 7); cx.fill();
}
let preview = null, eraseTrail = [];
function render(t, dt) {
  cx.globalCompositeOperation = "source-over";
  cx.drawImage(bg, 0, 0, W, H);
  // drifting dust
  cx.fillStyle = "rgba(255,236,210,.35)";
  for (const m of motes) {
    m.y -= 0.00006 * m.s * 16; if (m.y < -0.02) { m.y = 1.02; m.x = Math.random(); }
    const x = m.x * W + Math.sin(t * 0.3 + m.p) * 14, y = m.y * H;
    cx.globalAlpha = 0.25 + 0.25 * Math.sin(t + m.p); cx.fillRect(x, y, m.s * 1.6, m.s * 1.6);
  }
  cx.globalAlpha = 1;
  // ripples
  for (let i = rings.length - 1; i >= 0; i--) {
    const r = rings[i]; r.r += dt * (r.flat ? 60 : 110); r.a -= dt * 0.7;
    if (r.a <= 0) { rings.splice(i, 1); continue; }
    cx.strokeStyle = noteColor(r.semi, r.a); cx.lineWidth = 1.5;
    cx.beginPath();
    if (r.flat) cx.ellipse(r.x, r.y, r.r * 1.8, r.r * 0.35, 0, 0, 7); else cx.arc(r.x, r.y, r.r, 0, 7);
    cx.stroke();
  }
  for (const s of strings) drawString(s, t);
  for (const e of sources) drawSource(e, t);
  // sparks
  cx.globalCompositeOperation = "lighter";
  for (let i = sparks.length - 1; i >= 0; i--) {
    const p = sparks[i]; p.life -= dt; if (p.life <= 0) { sparks.splice(i, 1); continue; }
    p.vy += 240 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.98;
    cx.fillStyle = noteColor(p.semi, Math.min(1, p.life * 1.6), 74); cx.fillRect(p.x - 1.2, p.y - 1.2, 2.4, 2.4);
  }
  cx.globalCompositeOperation = "source-over";
  for (const b of balls) drawBall(b);
  // gesture previews
  if (preview && preview.kind === "string") {
    const L = Math.hypot(preview.x2 - preview.x1, preview.y2 - preview.y1), ok = L >= 36, semi = noteForLength(L);
    cx.setLineDash([6, 8]); cx.lineWidth = 2; cx.strokeStyle = ok ? noteColor(semi, 0.9) : "rgba(255,255,255,.35)";
    cx.beginPath(); cx.moveTo(preview.x1, preview.y1); cx.lineTo(preview.x2, preview.y2); cx.stroke(); cx.setLineDash([]);
    if (ok) noteTag(semi, (preview.x1 + preview.x2) / 2, (preview.y1 + preview.y2) / 2 - 18);
  }
  if (preview && preview.kind === "aim") {
    const dx = preview.x2 - preview.x1, dy = preview.y2 - preview.y1;
    cx.strokeStyle = "rgba(255,244,220,.6)"; cx.setLineDash([4, 6]); cx.lineWidth = 2;
    cx.beginPath(); cx.moveTo(preview.x1, preview.y1);
    // dotted flight path
    const vx = dx * 3, vy = dy * 3, G = gravity();
    for (let k = 1; k <= 24; k++) { const tt = k * 0.04; cx.lineTo(preview.x1 + vx * tt, preview.y1 + vy * tt + 0.5 * G * tt * tt); }
    cx.stroke(); cx.setLineDash([]);
  }
  if (eraseTrail.length) {
    cx.strokeStyle = "rgba(255,120,120,.35)"; cx.lineWidth = 26; cx.lineCap = "round"; cx.lineJoin = "round";
    cx.beginPath(); cx.moveTo(eraseTrail[0], eraseTrail[1]);
    for (let i = 2; i < eraseTrail.length; i += 2) cx.lineTo(eraseTrail[i], eraseTrail[i + 1]); cx.stroke();
  }
}

/* ================= input ================= */
const ptrs = new Map();
function segCross(ax, ay, bx, by, cx1, cy1, dx1, dy1) {
  const r1x = bx - ax, r1y = by - ay, r2x = dx1 - cx1, r2y = dy1 - cy1, den = r1x * r2y - r1y * r2x;
  if (Math.abs(den) < 1e-9) return null;
  const u = ((cx1 - ax) * r2y - (cy1 - ay) * r2x) / den, v = ((cx1 - ax) * r1y - (cy1 - ay) * r1x) / den;
  return u >= 0 && u <= 1 && v >= 0 && v <= 1 ? [ax + r1x * u, ay + r1y * u] : null;
}
function distSeg(px, py, s) {
  const dx = s.x2 - s.x1, dy = s.y2 - s.y1, L2 = dx * dx + dy * dy || 1;
  let t = ((px - s.x1) * dx + (py - s.y1) * dy) / L2; t = Math.max(0, Math.min(1, t));
  return [Math.hypot(px - s.x1 - dx * t, py - s.y1 - dy * t), s.x1 + dx * t, s.y1 + dy * t];
}
function nearString(x, y, r) { let best = null, bd = r; for (const s of strings) { const [d] = distSeg(x, y, s); if (d < bd) { bd = d; best = s; } } return best; }
function nearSource(x, y, r) { return sources.find(e => Math.hypot(e.x - x, e.y - y) < r) || null; }
/* ---- rearranging: grab a peg (retune), a whole string, or a source ---- */
function nearPeg(x, y, r) {
  let best = null, bd = r;
  for (const s of strings) for (const end of [1, 2]) { const d = Math.hypot(s["x" + end] - x, s["y" + end] - y); if (d < bd) { bd = d; best = { s, end }; } }
  return best;
}
function grabAt(x, y) {
  const e = nearSource(x, y, 30); if (e) return { kind: "src", e, dx: e.x - x, dy: e.y - y };
  const p = nearPeg(x, y, 24); if (p) return { kind: "peg", s: p.s, end: p.end };
  const s = nearString(x, y, 18); if (s) return { kind: "body", s, ax: s.x1 - x, ay: s.y1 - y, bx: s.x2 - x, by: s.y2 - y };
  return null;
}
const clampX = v => Math.max(6, Math.min(W - 6, v)), clampY = v => Math.max(6, Math.min(H - 6, v));
function dragTo(g, x, y) {
  if (g.kind === "src") { g.e.x = clampX(x + g.dx); g.e.y = clampY(y + g.dy); return; }
  const s = g.s;
  if (g.kind === "body") { s.x1 = x + g.ax; s.y1 = y + g.ay; s.x2 = x + g.bx; s.y2 = y + g.by; return; }
  // peg: snap to another string's peg so shapes close neatly; never shorter than 36 px
  let px = clampX(x), py = clampY(y);
  const o = g.end === 1 ? 2 : 1;
  for (const t of strings) if (t !== s) for (const k of [1, 2]) if (Math.hypot(t["x" + k] - px, t["y" + k] - py) < 14) { px = t["x" + k]; py = t["y" + k]; }
  const ox = s["x" + o], oy = s["y" + o], L = Math.hypot(px - ox, py - oy);
  if (L < 36) { const k = 36 / (L || 1); px = ox + (px - ox) * k; py = oy + (py - oy) * k; }
  s["x" + g.end] = px; s["y" + g.end] = py;
  const semi = noteForLength(len(s));
  if (semi !== s.semi) { // retuning click: the new note sounds softly as you stretch the string
    s.semi = semi; const tt = now();
    if (tt - (g.tickT || 0) > 0.07) { g.tickT = tt; pluck(s, 0.22, px, py); }
  }
}
function strum(x0, y0, x1, y1) {
  const sp = Math.hypot(x1 - x0, y1 - y0);
  for (const s of strings) { const p = segCross(x0, y0, x1, y1, s.x1, s.y1, s.x2, s.y2); if (p) pluck(s, Math.min(1, 0.25 + sp / 60), p[0], p[1]); }
}
function eraseAt(x, y) {
  let changed = false;
  for (let i = strings.length - 1; i >= 0; i--) if (distSeg(x, y, strings[i])[0] < 16) { sparkBurst(strings[i]); strings.splice(i, 1); changed = true; }
  for (let i = sources.length - 1; i >= 0; i--) if (Math.hypot(sources[i].x - x, sources[i].y - y) < 26) { sources.splice(i, 1); changed = true; }
  if (changed) save();
}
function sparkBurst(s) {
  for (let i = 0; i < 14; i++) { const k = Math.random(); sparks.push({ x: s.x1 + (s.x2 - s.x1) * k, y: s.y1 + (s.y2 - s.y1) * k, vx: (Math.random() - 0.5) * 80, vy: -Math.random() * 60, life: 0.6, semi: s.semi }); }
}
cv.addEventListener("pointerdown", ev => {
  firstTouch(); closePop();
  const x = ev.clientX, y = ev.clientY;
  cv.setPointerCapture(ev.pointerId);
  const st = { x0: x, y0: y, x, y, moved: false, t0: now() };
  if (tool === "move") {
    const g = grabAt(x, y);
    if (g) { st.mode = "drag"; st.grab = g; if (g.kind !== "src") g.s.lift = 1; else g.e.lift = 1; }
    else { st.mode = "none"; toast("Візьми кілочок, струну або джерело"); }
  } else if (tool === "string") {
    const pg = nearPeg(x, y, 18), s = pg ? null : nearString(x, y, 14);
    if (pg) { st.mode = "drag"; st.grab = { kind: "peg", s: pg.s, end: pg.end }; st.tapPluck = true; pg.s.lift = 1; }
    else if (s) { st.mode = "tap"; st.target = s; } else { st.mode = "draw"; preview = { kind: "string", x1: x, y1: y, x2: x, y2: y }; st.prev = preview; }
  } else if (tool === "source") {
    const e = nearSource(x, y, 28);
    st.mode = "aim"; st.src = e; const ox = e ? e.x : x, oy = e ? e.y : y;
    st.ox = ox; st.oy = oy; preview = { kind: "aim", x1: ox, y1: oy, x2: ox, y2: oy }; st.prev = preview;
  } else if (tool === "play") {
    st.mode = "play"; const s = nearString(x, y, 12); if (s) { const [, px, py] = distSeg(x, y, s); pluck(s, 0.5, px, py); st.skip = s.id; }
  } else { st.mode = "erase"; eraseTrail = [x, y]; eraseAt(x, y); }
  ptrs.set(ev.pointerId, st);
});
cv.addEventListener("pointermove", ev => {
  const st = ptrs.get(ev.pointerId); if (!st) return;
  const x = ev.clientX, y = ev.clientY;
  if (Math.hypot(x - st.x0, y - st.y0) > 8) st.moved = true;
  if (st.mode === "draw" || st.mode === "aim") { st.prev.x2 = x; st.prev.y2 = y; }
  else if (st.mode === "drag") { if (st.moved) dragTo(st.grab, x, y); }
  else if (st.mode === "play") { strum(st.x, st.y, x, y); }
  else if (st.mode === "erase") { eraseTrail.push(x, y); if (eraseTrail.length > 40) eraseTrail.splice(0, 2); eraseAt(x, y); }
  st.x = x; st.y = y;
});
function endPtr(ev) {
  const st = ptrs.get(ev.pointerId); if (!st) return; ptrs.delete(ev.pointerId);
  const x = ev.clientX, y = ev.clientY;
  if (st.mode === "draw") {
    if (Math.hypot(x - st.x0, y - st.y0) >= 36) { const s = addString(st.x0, st.y0, x, y); pluck(s, 0.45, (s.x1 + s.x2) / 2, (s.y1 + s.y2) / 2); }
    preview = null;
  } else if (st.mode === "tap") {
    const s = st.target, [, px, py] = distSeg(x, y, s); pluck(s, 0.55, px, py);
  } else if (st.mode === "aim") {
    const dx = x - st.ox, dy = y - st.oy, far = Math.hypot(dx, dy) > 20;
    if (st.src) {
      if (far) { st.src.vx = dx * 3; st.src.vy = dy * 3; toast("Напрям змінено"); }
      else { const i = PERIODS.indexOf(st.src.period); st.src.period = PERIODS[(i + 1) % PERIODS.length]; toast(`Кулька кожну ${st.src.period} ${st.src.period === 1 ? "долю" : st.src.period < 5 ? "долі" : "доль"}`); }
      save();
    } else addSource(st.ox, st.oy, far ? dx * 3 : 0, far ? dy * 3 : 0, 2);
    preview = null;
  } else if (st.mode === "drag") {
    const g = st.grab, obj = g.kind === "src" ? g.e : g.s; obj.lift = 0;
    if (!st.moved && g.kind !== "src") { const [, px, py] = distSeg(x, y, g.s); pluck(g.s, 0.5, px, py); }
    else if (st.moved) { if (g.kind !== "src") { g.s.semi = noteForLength(len(g.s)); pluck(g.s, 0.4, (g.s.x1 + g.s.x2) / 2, (g.s.y1 + g.s.y2) / 2); } warmCache(); save(); }
  } else if (st.mode === "erase") { if (!ptrs.size) eraseTrail = []; }
}
cv.addEventListener("pointerup", endPtr);
cv.addEventListener("pointercancel", ev => {
  const st = ptrs.get(ev.pointerId); if (st && st.mode === "drag") { (st.grab.kind === "src" ? st.grab.e : st.grab.s).lift = 0; save(); }
  ptrs.delete(ev.pointerId); preview = null; eraseTrail = [];
});

let started = false;
function firstTouch() {
  initAudio(); warmCache();
  if (!started) { started = true; $("hint").style.opacity = 0; setTimeout(() => $("title").style.opacity = 0, 2500); }
}

/* ================= UI ================= */
let toastT;
function toast(msg) { const t = $("toast"); t.textContent = msg; t.style.opacity = 1; clearTimeout(toastT); toastT = setTimeout(() => t.style.opacity = 0, 1600); }
document.querySelectorAll("[data-tool]").forEach(b => b.addEventListener("click", () => {
  firstTouch(); closePop(); tool = b.dataset.tool;
  document.querySelectorAll("[data-tool]").forEach(o => o.classList.toggle("on", o === b));
}));
function showVals() {
  $("vScale").textContent = SCALES[scaleIx].name; $("vVoice").textContent = VOICES[voiceIx].name; $("vTempo").textContent = TEMPOS[tempoIx];
}
let popFor = null;
function closePop() { $("pop").hidden = true; popFor = null; }
function openPop(kind, items, cur, pick) {
  if (popFor === kind) { closePop(); return; }
  popFor = kind; const p = $("pop"); p.hidden = false;
  p.innerHTML = items.map((it, i) => `<button class="chip${i === cur ? " on" : ""}" data-i="${i}"><b>${it.name}</b><span>${it.sub || ""}</span></button>`).join("");
  p.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => { pick(+c.dataset.i); closePop(); }));
}
function setScale(i) {
  scaleIx = i; NOTES = scaleNotes(); store.set("scale", i);
  for (const s of strings) s.semi = noteForLength(len(s));
  showVals(); warmCache(); save();
  // little run through the strings so the new mood is heard right away
  strings.slice().sort((a, b) => a.semi - b.semi).slice(0, 8).forEach((s, k) => setTimeout(() => pluck(s, 0.35, (s.x1 + s.x2) / 2, (s.y1 + s.y2) / 2), k * 110));
}
$("bScale").addEventListener("click", () => { firstTouch(); openPop("scale", SCALES, scaleIx, setScale); });
$("bVoice").addEventListener("click", () => { firstTouch(); openPop("voice", VOICES, voiceIx, i => { voiceIx = i; store.set("voice", i); showVals(); warmCache(); }); });
$("bTempo").addEventListener("click", () => {
  firstTouch(); openPop("tempo", TEMPOS.map(t => ({ name: t + " уд/хв", sub: t < 80 ? "повільно" : t < 105 ? "спокійно" : "жваво" })), tempoIx, i => { tempoIx = i; store.set("tempo", i); showVals(); beatT0 = now(); beatN = -1; });
});
$("bPause").addEventListener("click", () => {
  firstTouch(); paused = !paused;
  $("iPause").innerHTML = paused ? '<path d="M8 5l11 7-11 7z"/>' : '<path d="M8 5v14M16 5v14"/>';
  $("bPause").lastChild.textContent = paused ? "Далі" : "Пауза";
  $("bPause").classList.toggle("on", paused);
});
$("bScenes").addEventListener("click", () => {
  firstTouch();
  const items = SCENES.map(s => ({ name: s.name, sub: s.sub })).concat([{ name: "Чисте полотно", sub: "прибрати все" }]);
  openPop("scenes", items, -1, i => { if (i < SCENES.length) loadScene(i); else { strings = []; sources = []; balls = []; save(); toast("Полотно чисте — малюй струни"); } });
});
$("bMore").addEventListener("click", () => { closePop(); $("panel").classList.add("open"); });
$("close").addEventListener("click", () => $("panel").classList.remove("open"));

function renderDiary() {
  const log = (window.CHANGELOG || []).slice().sort((a, b) => b.day - a.day);
  $("diary").innerHTML = log.map(e => `<div class="entry"><span class="d">ДЕНЬ ${e.day} · ${e.date.split("-").reverse().join(".")}</span><b>${e.title}</b><p>${e.text}</p></div>`).join("");
  if (log.length) $("dayline2").textContent = `День ${log[0].day} · щоранку щось нове`;
  const v = app ? app.version() : ""; if (v) $("foot").textContent = `Версія ${v} · Лабораторія Claude`;
  const seen = store.get("seenDay", 0);
  if (log.length && log[0].day > seen) { store.set("seenDay", log[0].day); if (seen) setTimeout(() => toast(`Нове: ${log[0].title}`), 1500); }
}

/* ================= scenes ================= */
// coordinates are fractions of the screen so they fit any tablet
const SCENES = [
  { name: "Водоспад", sub: "кулька збігає сходами",
    strings: [[0.06, 0.20, 0.40, 0.30], [0.58, 0.34, 0.32, 0.44], [0.26, 0.50, 0.46, 0.58], [0.66, 0.58, 0.51, 0.64], [0.40, 0.72, 0.51, 0.77], [0.66, 0.80, 0.74, 0.84]],
    sources: [[0.12, 0.14, 0, 0, 2], [0.50, 0.12, 0, 0, 3]] },
  { name: "Колиска", sub: "дві кульки в різному ритмі",
    strings: [[0.18, 0.46, 0.46, 0.66], [0.82, 0.46, 0.54, 0.66], [0.30, 0.30, 0.42, 0.36], [0.70, 0.30, 0.58, 0.36], [0.40, 0.86, 0.60, 0.86]],
    sources: [[0.36, 0.10, 0, 0, 3], [0.64, 0.10, 0, 0, 4]] },
  { name: "Ліра", sub: "віяло зі струн",
    strings: (() => { const a = []; for (let i = 0; i < 7; i++) { const t = -0.9 + i * 0.3, L = 0.10 + 0.045 * Math.abs(3 - i); a.push([0.5 + Math.sin(t) * 0.12, 0.62 - Math.cos(t) * 0.12 + 0.12, 0.5 + Math.sin(t) * (0.12 + L), 0.74 - Math.cos(t) * (0.12 + L)]); } return a; })(),
    sources: [[0.42, 0.06, 0, 0, 2], [0.58, 0.06, 0, 0, 3]] },
  { name: "Дощ", sub: "краплі на коротких струнах",
    strings: [[0.12, 0.40, 0.20, 0.44], [0.30, 0.34, 0.40, 0.31], [0.52, 0.42, 0.60, 0.46], [0.72, 0.36, 0.84, 0.33], [0.20, 0.62, 0.30, 0.66], [0.42, 0.58, 0.52, 0.55], [0.64, 0.64, 0.74, 0.68], [0.82, 0.58, 0.90, 0.55], [0.30, 0.82, 0.44, 0.80], [0.58, 0.84, 0.70, 0.86]],
    sources: [[0.16, 0.08, 0, 0, 3], [0.36, 0.06, 0, 0, 4], [0.56, 0.08, 0, 0, 6], [0.78, 0.06, 0, 0, 2]] },
  { name: "Маятник", sub: "кулька літає між стінками",
    strings: [[0.12, 0.25, 0.20, 0.75], [0.88, 0.25, 0.80, 0.75], [0.30, 0.86, 0.70, 0.86], [0.42, 0.50, 0.58, 0.50]],
    sources: [[0.30, 0.20, 260, -80, 4], [0.70, 0.20, -260, -80, 6]] }
];
function loadScene(i) {
  const sc = SCENES[i]; strings = []; sources = []; balls = []; rings = [];
  for (const [a, b, c, d] of sc.strings) { const s = { id: uid++, x1: a * W, y1: b * H, x2: c * W, y2: d * H, semi: 0, amp: 0, ph: 0, t: 9, born: now() + Math.random() * 0.3 }; s.semi = noteForLength(len(s)); strings.push(s); }
  const k = Math.min(W, H) / 800;
  for (const [x, y, vx, vy, p] of sc.sources) sources.push({ id: uid++, x: x * W, y: y * H, vx: vx * k * 1.4, vy: vy * k * 1.4, period: p, flash: 0, born: now() });
  beatT0 = now(); beatN = -1; warmCache(); save(); toast(sc.name);
}
function save() {
  store.set("world", { w: W, h: H, s: strings.map(s => [s.x1 / W, s.y1 / H, s.x2 / W, s.y2 / H]), e: sources.map(e => [e.x / W, e.y / H, e.vx, e.vy, e.period]) });
}
function restore() {
  const w = store.get("world", null); if (!w || (!w.s.length && !w.e.length)) return false;
  for (const [a, b, c, d] of w.s) { const s = { id: uid++, x1: a * W, y1: b * H, x2: c * W, y2: d * H, semi: 0, amp: 0, ph: 0, t: 9, born: now() }; s.semi = noteForLength(len(s)); strings.push(s); }
  for (const [x, y, vx, vy, p] of w.e) sources.push({ id: uid++, x: x * W, y: y * H, vx, vy, period: p, flash: 0, born: now() });
  return true;
}

/* ================= lifecycle ================= */
window.pauseAll = () => { if (ac && ac.state === "running") ac.suspend(); save(); };
window.resumeAll = () => { if (ac && audioOn) ac.resume(); beatT0 = now(); beatN = -1; };
document.addEventListener("visibilitychange", () => { if (document.hidden) window.pauseAll(); else window.resumeAll(); });
let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 200); });

resize(); showVals(); renderDiary();
if (Q.get("scene") != null) loadScene(+Q.get("scene")); else if (!restore()) loadScene(0);
if (Q.get("tool")) document.querySelector(`[data-tool="${Q.get("tool")}"]`)?.click();

let last = now(), pausedAt = 0;
function loop() {
  requestAnimationFrame(loop);
  const t = now(); let dt = Math.min(0.05, t - last); last = t;
  if (paused) { if (!pausedAt) pausedAt = t; dt = 0; }
  else { if (pausedAt) { beatT0 += t - pausedAt; pausedAt = 0; } fireSources(t); stepBalls(dt); }
  render(t, dt);
}
requestAnimationFrame(loop);
window.__struny = { get hits() { return HITS; }, get strings() { return strings; }, get balls() { return balls; }, loadScene, strum, setScale, grabAt, dragTo, get sources() { return sources; } };
