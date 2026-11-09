// «Квартира» — 3D model of the apartment from its floor plan. three.js only; build with ../build.sh.
import * as THREE from '../../../ruina/web/vendor/three.module.js';
import { PLAN, withCloset } from './plan.js';
import { STYLES, extraFloors, buildInterior } from './interior.js';
import { rbox, radiusFor } from './detail.js';
import { mergeStatic } from './merge.js';
import { outdoorGlow } from './sun.js';
import { sunAt, kyivDate, dirTo, sunWindow, hhmm, buildSurroundings } from './sun.js';

const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search);
const app = window.Kvartyra || null;
const store = {
  get(k, d) { try { const v = localStorage.getItem('kv.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('kv.' + k, JSON.stringify(v)); } catch (e) {} }
};
const H = PLAN.height;
// layout: 'plan' — as on the developer's plan, 'closet' — with the walk-in wardrobe the user drew
const LAYOUT = Q.get('layout') || store.get('layout', 'plan');
if (LAYOUT === 'closet') withCloset(PLAN);

/* ================= renderer & scene ================= */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
// Sharp when still, lighter while moving: a still frame is drawn once at full resolution, moving frames at a
// resolution that tunes itself to what the tablet can keep smooth (see tune()).
const DPR = window.devicePixelRatio || 1, MOVE_MAX = Math.min(DPR, 1.5);
// Picture quality: 'auto' tunes itself, 'lite' is the simplest shading (for a weak or hot tablet), 'high' never lowers anything.
let quality = Q.get('q') || store.get('q', 'auto'), lite = quality === 'lite' || (quality === 'auto' && store.get('autoLite', false));
const stillPR = () => Math.min(DPR, lite ? 1.5 : 2, Math.sqrt(5.2e6 / Math.max(1, innerWidth * innerHeight)));
let movePR = quality === 'high' ? MOVE_MAX : Math.max(0.6, Math.min(MOVE_MAX, store.get('movePR', Math.min(DPR, 1.25)))), prCeil = MOVE_MAX, curPR = stillPR();
renderer.setPixelRatio(curPR);
renderer.shadowMap.enabled = true;
renderer.shadowMap.autoUpdate = false; // the shadow map is redrawn only when the sun, a door or the furniture changes
let dirty = 3, shadowDirty = true, lastActive = 0;
function invalidate(shadow) { dirty = Math.max(dirty, 2); lastActive = performance.now(); if (shadow) shadowDirty = true; }
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.12;
document.body.prepend(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 200);

const hemi = new THREE.HemisphereLight(0xf1f0ee, 0xa89e90, 1.2);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff1dc, 2.4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); sun.shadow.radius = 3;
Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 100 });
sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.02;
sun.shadow.camera.layers.enable(1); // the building across the street casts shadows even when hidden from view
scene.add(sun, sun.target);
const CX = PLAN.width / 2, CZ = PLAN.depth / 2;
sun.target.position.set(CX, 0, CZ);

/* ================= procedural textures (no files, works offline) ================= */
function canvasTex(w, h, draw, rx, ry) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function rnd(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
function woodTex(base, seed) {
  return canvasTex(1024, 1024, (g, w, h) => {
    const r = rnd(seed), ph = 128;
    for (let y = 0; y < h; y += ph) {
      let x = -r() * 600;
      while (x < w) {
        const len = 520 + r() * 420, l = (r() - 0.5) * 11, hue = base[0] + (r() - 0.5) * 5, sat = base[1] + (r() - 0.5) * 6;
        g.save(); g.beginPath(); g.rect(x, y, len, ph); g.clip();
        g.fillStyle = `hsl(${hue},${sat}%,${base[2] + l}%)`; g.fillRect(x, y, len, ph);
        // long fibres
        for (let k = 0; k < 26; k++) {
          const yy = y + r() * ph, dark = r() > 0.35;
          g.globalAlpha = 0.03 + r() * 0.07; g.strokeStyle = dark ? '#3a2412' : '#fff3dc'; g.lineWidth = 0.6 + r() * 1.6;
          g.beginPath(); g.moveTo(x, yy); g.bezierCurveTo(x + len * 0.3, yy + (r() - 0.5) * 10, x + len * 0.7, yy + (r() - 0.5) * 10, x + len, yy + (r() - 0.5) * 6); g.stroke();
        }
        // now and then a cathedral figure or a small knot
        if (r() > 0.55) {
          const cx = x + len * (0.25 + r() * 0.5), cy = y + ph * (0.35 + r() * 0.3);
          g.strokeStyle = '#3a2412'; g.lineWidth = 1.2;
          for (let k = 1; k < 6; k++) { g.globalAlpha = 0.05 + 0.012 * k; g.beginPath(); g.ellipse(cx, cy, k * (26 + r() * 10), k * 5.5, 0, 0, 7); g.stroke(); }
        }
        if (r() > 0.86) { const cx = x + len * r(), cy = y + ph * (0.2 + r() * 0.6); const gr = g.createRadialGradient(cx, cy, 0, cx, cy, 9); gr.addColorStop(0, 'rgba(50,28,12,.55)'); gr.addColorStop(1, 'rgba(50,28,12,0)'); g.globalAlpha = 1; g.fillStyle = gr; g.fillRect(cx - 10, cy - 10, 20, 20); }
        // a plank is a little lighter along its middle
        const gv = g.createLinearGradient(0, y, 0, y + ph); gv.addColorStop(0, 'rgba(0,0,0,.07)'); gv.addColorStop(0.5, 'rgba(255,255,255,.04)'); gv.addColorStop(1, 'rgba(0,0,0,.09)');
        g.globalAlpha = 1; g.fillStyle = gv; g.fillRect(x, y, len, ph);
        g.restore();
        g.fillStyle = 'rgba(30,18,8,.42)'; g.fillRect(x, y, 2, ph);
        x += len;
      }
      g.fillStyle = 'rgba(30,18,8,.42)'; g.fillRect(0, y, w, 2); g.fillStyle = 'rgba(255,255,255,.07)'; g.fillRect(0, y + 2, w, 1);
    }
  }, 0.7, 0.7);
}
function tileTex(c1, c2, n) {
  return canvasTex(512, 512, (g, w, h) => {
    const s = w / n, r = rnd(7);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      g.fillStyle = (i + j) % 2 ? c1 : c2; g.fillRect(i * s, j * s, s, s);
      g.globalAlpha = 0.03 + r() * 0.05; g.fillStyle = r() > 0.5 ? '#fff' : '#000'; g.fillRect(i * s, j * s, s, s); g.globalAlpha = 1;
      // faint clouding inside each tile
      for (let k = 0; k < 3; k++) { const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1); gr.addColorStop(0, r() > 0.5 ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.05)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.save(); g.beginPath(); g.rect(i * s, j * s, s, s); g.clip(); g.translate(i * s + r() * s, j * s + r() * s); g.scale(s * 0.6, s * 0.35); g.fillStyle = gr; g.fillRect(-1, -1, 2, 2); g.restore(); }
    }
    g.strokeStyle = 'rgba(70,70,68,.35)'; g.lineWidth = 3;
    for (let i = 0; i <= n; i++) { g.beginPath(); g.moveTo(i * s, 0); g.lineTo(i * s, h); g.moveTo(0, i * s); g.lineTo(w, i * s); g.stroke(); }
    g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 1;
    for (let i = 0; i <= n; i++) { g.beginPath(); g.moveTo(i * s + 2.5, 0); g.lineTo(i * s + 2.5, h); g.moveTo(0, i * s + 2.5); g.lineTo(w, i * s + 2.5); g.stroke(); }
  }, 1.6, 1.6);
}
function concreteTex() {
  return canvasTex(512, 512, (g, w, h) => {
    const r = rnd(5); g.fillStyle = '#a3a29d'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { const v = 140 + r() * 50 | 0; g.fillStyle = `rgba(${v},${v},${v - 3},${0.04 + r() * 0.06})`; const s = 1 + r() * 7; g.fillRect(r() * w, r() * h, s, s); }
    for (let i = 0; i < 40; i++) { const v = 120 + r() * 70 | 0; const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1); gr.addColorStop(0, `rgba(${v},${v},${v},.10)`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.save(); g.translate(r() * w, r() * h); g.scale(40 + r() * 90, 40 + r() * 90); g.fillStyle = gr; g.fillRect(-1, -1, 2, 2); g.restore(); }
  }, 0.4, 0.4);
}
// floor textures are painted only when a look first needs them (faster start, less memory on the tablet)
const FLOOR_MAKERS = {
  concrete: concreteTex,
  oak: () => woodTex([32, 45, 58], 11),
  light: () => woodTex([36, 40, 70], 23),
  walnut: () => woodTex([26, 38, 44], 37),
  tile: () => tileTex('#d9dde0', '#cfd4d8', 4),
  stone: () => tileTex('#bfb6aa', '#b5ab9e', 3)
};
Object.assign(FLOOR_MAKERS, extraFloors(canvasTex, woodTex, tileTex, rnd));
const floorCache = {};
const floorTex = key => floorCache[key] || (floorCache[key] = (FLOOR_MAKERS[key] || FLOOR_MAKERS.oak)());

/* ================= build the apartment ================= */
const M = {
  wall: new THREE.MeshStandardMaterial({ color: 0xf8f7f4, roughness: 0.92 }),
  wallTop: new THREE.MeshStandardMaterial({ color: 0x3b3f4a, roughness: 0.8 }),
  ext: new THREE.MeshStandardMaterial({ color: 0xe6ddd0, roughness: 0.95 }),
  glass: new THREE.MeshStandardMaterial({ color: 0xcfe6f5, transparent: true, opacity: 0.2, roughness: 0.03, metalness: 0, depthWrite: false, envMapIntensity: 2.2 }),
  base: new THREE.MeshStandardMaterial({ color: 0xf3f2ee, roughness: 0.55 }),
  frame: new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.5 }),
  door: new THREE.MeshStandardMaterial({ color: 0x8a6a4c, roughness: 0.6 }),
  entry: new THREE.MeshStandardMaterial({ color: 0x4a4f58, roughness: 0.5, metalness: 0.3 }),
  white: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25 }),
  counter: new THREE.MeshStandardMaterial({ color: 0xd8d2c8, roughness: 0.4 }),
  cabinet: new THREE.MeshStandardMaterial({ color: 0x6f7a6c, roughness: 0.6 }),
  steel: new THREE.MeshStandardMaterial({ color: 0x9aa0a6, roughness: 0.3, metalness: 0.7 }),
  ground: new THREE.MeshStandardMaterial({ color: 0x5f6b55, roughness: 1 })
};
const house = new THREE.Group(); scene.add(house);
const wallsG = new THREE.Group(); house.add(wallsG);
const solids = []; // 2D boxes for walking collisions: [x1,z1,x2,z2]
const fullWalls = []; // wall pieces that stand from floor to ceiling

function box(x1, z1, x2, z2, y1, y2, mat, parent, opts = {}) {
  const w = x2 - x1, d = z2 - z1, h = y2 - y1;
  // furniture and fixtures get rounded edges; walls stay crisp
  const r = opts.round || (parent && parent.userData.round) ? radiusFor(w, h, d, false) : 0;
  const m = new THREE.Mesh(r > 0 ? rbox(w, h, d, r) : new THREE.BoxGeometry(w, h, d), mat);
  m.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
  m.castShadow = opts.cast !== false; m.receiveShadow = true;
  (parent || wallsG).add(m);
  return m;
}
// a straight wall along X (z1..z2 is its thickness) or along Z, with window / door holes
function wall(axis, t1, t2, from, to, holes, mat) {
  holes = (holes || []).slice().sort((a, b) => a.a - b.a);
  const seg = (a, b, y1, y2, m) => axis === 'x' ? box(a, t1, b, t2, y1, y2, m) : box(t1, a, t2, b, y1, y2, m);
  const solid = (a, b, full) => { const q = axis === 'x' ? [a, t1, b, t2] : [t1, a, t2, b]; solids.push(q); if (full) fullWalls.push(q); };
  let p = from;
  for (const h of holes) {
    if (h.a > p) { seg(p, h.a, 0, H, mat); solid(p, h.a, true); }
    const top = h.type === 'win' || h.type === 'balcony' || h.type === 'fixed' ? P.winTop : 2.1, sill = P.winSill; // the balcony door is panoramic too
    seg(h.a, h.b, top, H, mat);
    if (h.type === 'fixed') { // fixed glass beside the balcony door, with a transom like the door's crossbar
      seg(h.a, h.b, 0, sill, mat); solid(h.a, h.b);
      const mid = (t1 + t2) / 2, tr = sill + 0.95;
      box(h.a, mid - 0.01, h.b, mid + 0.01, sill, top, M.glass).castShadow = false;
      box(h.a, t1 - 0.02, h.b, t2 + 0.02, sill - 0.03, sill, M.frame);
      box(h.a, mid - 0.04, h.b, mid + 0.04, tr - 0.03, tr + 0.03, M.frame);
      box(h.a, mid - 0.04, h.b, mid + 0.04, top - 0.04, top, M.frame);
      box(h.b - 0.05, mid - 0.04, h.b, mid + 0.04, sill, top, M.frame);
    }
    if (h.type === 'win') {
      seg(h.a, h.b, 0, sill, mat); solid(h.a, h.b);
      const mid = (t1 + t2) / 2;
      // window unit as in the photos (seen from inside): a wide fixed part on the left, a narrower part on the right —
      // looking out the window +X is on the left, so the wide part is at the high-X end;
      // a transom across both at ≈1 m; only the upper right pane tilts open (tap it)
      const split = h.b - (h.b - h.a) * 0.6, tr = sill + 0.95;
      if (axis === 'x') {
        box(split, mid - 0.01, h.b, mid + 0.01, sill, top, M.glass).castShadow = false;
        box(h.a, mid - 0.01, split, mid + 0.01, sill, tr, M.glass).castShadow = false;
        const sw = split - h.a - 0.05, sh = top - tr - 0.03, sg = new THREE.Group(); sg.position.set(h.a + 0.02, tr + 0.03, t1 + 0.03);
        const gl = new THREE.Mesh(new THREE.BoxGeometry(sw, sh - 0.06, 0.02), M.glass); gl.position.set(sw / 2, sh / 2, 0);
        const fr = new THREE.Group();
        for (const [w2, h2, x2, y2] of [[sw, 0.05, sw / 2, 0.025], [sw, 0.05, sw / 2, sh - 0.025], [0.05, sh, 0.025, sh / 2], [0.05, sh, sw - 0.025, sh / 2]]) {
          const fb = new THREE.Mesh(new THREE.BoxGeometry(w2, h2, 0.06), M.frame); fb.position.set(x2, y2, 0); fb.castShadow = true; fr.add(fb);
        }
        const handle = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.03, 0.05), M.steel); handle.position.set(sw / 2, sh - 0.12, -0.05);
        sg.add(gl, fr, handle); wallsG.add(sg);
        sg.traverse(o => { o.userData.openable = sg; });
        openables.push({ g: sg, kind: 'win', axis: 'x', a0: 0, a1: -0.14, open: false, cur: 0 }); // tilt only: the top opens a little
        // frame: sill, mullion, transom, head
        box(h.a, t1 - 0.02, h.b, t2 + 0.02, sill - 0.03, sill, M.frame);
        box(split - 0.035, mid - 0.04, split + 0.035, mid + 0.04, sill, top, M.frame);
        box(h.a, mid - 0.04, h.b, mid + 0.04, tr - 0.03, tr + 0.03, M.frame);
        box(h.a, mid - 0.04, h.b, mid + 0.04, top - 0.04, top, M.frame);
      } else { box(mid - 0.01, h.a, mid + 0.01, h.b, sill, top, M.glass).castShadow = false; }
      if (axis !== 'x') box(t1 - 0.02, h.a, t2 + 0.02, h.b, sill - 0.03, sill, M.frame);
    }
    p = h.b;
  }
  if (to > p) { seg(p, to, 0, H, mat); solid(p, to, true); }
}
// door leaf, standing open at an angle; hinge at (hx,hz)
const openables = [];
function doorLeaf(hx, hz, width, angle, mat, thick, glazed) {
  const g = new THREE.Group();
  let leaf;
  if (glazed) { // balcony door: white frame with glass, like the windows
    leaf = new THREE.Group(); const hh = P.winTop - 0.03;
    for (const [w2, h2, x2, y2] of [[width, 0.08, width / 2, 0.04], [width, 0.08, width / 2, hh - 0.04], [0.08, hh, 0.04, hh / 2], [0.08, hh, width - 0.04, hh / 2], [width, 0.06, width / 2, P.winSill + 0.95]]) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w2, h2, 0.06), M.frame); b.position.set(x2, y2, 0); b.castShadow = true; leaf.add(b);
    }
    const gl = new THREE.Mesh(new THREE.BoxGeometry(width - 0.12, hh - 0.12, 0.02), M.glass); gl.position.set(width / 2, hh / 2, 0); leaf.add(gl);
  } else {
    leaf = new THREE.Mesh(new THREE.BoxGeometry(width, 2.05, thick || 0.04), mat || M.door);
    leaf.position.set(width / 2, 1.025, 0); leaf.castShadow = true; leaf.receiveShadow = true;
  }
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), M.steel);
  knob.position.set(width - 0.08, 1.0, 0.04);
  g.add(leaf, knob); g.position.set(hx, 0, hz); g.rotation.y = angle;
  wallsG.add(g); return g;
}

const P = PLAN;
for (const w of P.walls) wall(w.axis, w.t1, w.t2, w.from, w.to, w.holes, w.ext ? M.ext : M.wall);
const innerDoors = [];
for (const d of P.doors) {
  const open = d.angle * Math.PI / 180, closed = Math.round(open / (Math.PI / 2)) * (Math.PI / 2) || 0;
  const startOpen = !d.entry; // the entrance door starts closed, the rest open
  const g = doorLeaf(d.x, d.z, d.w, startOpen ? open : closed, d.entry ? M.entry : d.white ? M.frame : M.door, d.entry ? 0.07 : 0.04, !!d.white);
  if (!d.entry && !d.white) innerDoors.push(g);
  // a closed door is a wall for walking
  const ex = d.x + Math.cos(closed) * d.w, ez = d.z - Math.sin(closed) * d.w;
  const block = [Math.min(d.x, ex) - 0.03, Math.min(d.z, ez) - 0.03, Math.max(d.x, ex) + 0.03, Math.max(d.z, ez) + 0.03, 3];
  const o = { g, kind: 'door', a0: closed, a1: open, open: startOpen, cur: startOpen ? 1 : 0, block, inner: !d.entry && !d.white };
  if (!startOpen) solids.push(block);
  g.traverse(m => { m.userData.openable = g; });
  openables.push(o);
}
function toggleOpenable(o) {
  o.open = !o.open;
  if (o.block) { const i = solids.indexOf(o.block); if (o.open && i >= 0) solids.splice(i, 1); if (!o.open && i < 0) solids.push(o.block); }
}
function animateOpenables(dt) { // true while something is still swinging
  let busy = false;
  for (const o of openables) {
    const t = o.open ? 1 : 0; if (o.cur === t) continue;
    busy = true;
    o.cur += Math.sign(t - o.cur) * Math.min(Math.abs(t - o.cur), dt * 1.6);
    const e = o.cur * o.cur * (3 - 2 * o.cur); o.g.rotation[o.axis || 'y'] = o.a0 + (o.a1 - o.a0) * e;
  }
  return busy;
}
function tapOpenable(x, y) { // returns true when a door or window sash was tapped
  ndc.set(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const targets = openables.filter(o => o.g.visible && (o.g.parent && o.g.parent.visible)).map(o => o.g);
  const hit = ray.intersectObjects(targets, true)[0];
  if (!hit || (mode === 'walk' && hit.distance > 5)) return false;
  const o = openables.find(q => q.g === hit.object.userData.openable); if (!o) return false;
  if (o.inner && raw) return false;
  toggleOpenable(o); return true;
}

// floors per room (slightly under the walls so they never flicker)
const roomLabels = [], floorMats = [];
for (const r of P.rooms) {
  for (const [x1, z1, x2, z2] of r.rects) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(x2 - x1, z2 - z1), M.wall);
    floorMats.push({ m, room: r.name, as: r.floorAs, w: x2 - x1, h: z2 - z1, key: r.floor });
    m.rotation.x = -Math.PI / 2; m.position.set((x1 + x2) / 2, 0.001, (z1 + z2) / 2); m.receiveShadow = true;
    house.add(m);
  }
  const area = r.area || r.rects.reduce((s, [x1, z1, x2, z2]) => s + (x2 - x1) * (z2 - z1), 0);
  roomLabels.push({ name: r.name, area, pos: new THREE.Vector3(r.label[0], 0.05, r.label[1]) });
}
// what is really there: a radiator in front of every window; the only railing is the balcony's
const railMat = new THREE.MeshStandardMaterial({ color: 0x1f2226, roughness: 0.5, metalness: 0.4 });
const radMat = new THREE.MeshStandardMaterial({ color: 0xf6f6f4, roughness: 0.45 });
const finBatch = [];
const radG = new THREE.Group(); radG.userData.round = true; house.add(radG);
// balcony: open, with a black bar railing (top rail, bottom rail, vertical bars) on each side
for (const b of P.balcony) {
  const [x1, z1, x2, z2] = b, alongX = x2 - x1 > z2 - z1, cx = (x1 + x2) / 2, cz = (z1 + z2) / 2;
  const L = alongX ? x2 - x1 : z2 - z1, r = 0.02;
  const bar = (a1, a2, y1, y2, th) => alongX ? box(a1, cz - th, a2, cz + th, y1, y2, railMat, wallsG, { cast: false }) : box(cx - th, a1, cx + th, a2, y1, y2, railMat, wallsG, { cast: false });
  const a = alongX ? x1 : z1;
  bar(a, a + L, 1.0, 1.05, 0.025); bar(a, a + L, 0.1, 0.13, r);
  for (let t = a + 0.06; t < a + L - 0.03; t += 0.12) bar(t - 0.009, t + 0.009, 0.0, 1.0, 0.009);
  solids.push(b);
}
for (const w of P.walls) for (const h of (w.holes || [])) {
  if ((h.type !== 'win' && h.type !== 'fixed') || w.axis !== 'x' || w.t1 < 1) continue;
  const c = h.type === 'fixed' ? (h.a + h.b) / 2 + 0.05 : h.b - (h.b - h.a) * 0.3, rw = Math.min(1.0, h.type === 'fixed' ? h.b - h.a - 0.25 : (h.b - h.a) * 0.6 - 0.15); // under the wide fixed part, as in the photos
  box(c - rw / 2, w.t1 - 0.17, c + rw / 2, w.t1 - 0.07, 0.12, 0.62, radMat, radG);
  for (let x = c - rw / 2 + 0.03; x < c + rw / 2 - 0.02; x += 0.05) finBatch.push([x, w.t1 - 0.175]);
  box(c - 0.015, w.t1 - 0.12, c + 0.015, w.t1 - 0.07, 0.0, 0.12, M.steel, radG);
  solids.push([c - rw / 2, w.t1 - 0.17, c + rw / 2, w.t1 - 0.07]);
}

{ // radiator fins: one instanced mesh
  const fin = new THREE.InstancedMesh(new THREE.BoxGeometry(0.012, 0.44, 0.008), new THREE.MeshStandardMaterial({ color: 0xdedede, roughness: 0.5 }), finBatch.length);
  const mm = new THREE.Matrix4(); finBatch.forEach(([x, z], i) => { mm.makeTranslation(x, 0.37, z); fin.setMatrixAt(i, mm); }); house.add(fin);
}
// door architraves (finished looks only): a white frame around every interior door opening, on both faces
const archG = new THREE.Group(); wallsG.add(archG);
for (const w of P.walls) if (!w.ext) for (const h of (w.holes || [])) if (h.type === 'door') {
  for (const [t1, t2] of [[w.t1 - 0.014, w.t1], [w.t2, w.t2 + 0.014]]) {
    const piece = (a1, a2, y1, y2) => w.axis === 'x' ? box(a1, t1, a2, t2, y1, y2, M.frame, archG, { round: true }) : box(t1, a1, t2, a2, y1, y2, M.frame, archG, { round: true });
    piece(h.a - 0.07, h.a, 0, 2.17); piece(h.b, h.b + 0.07, 0, 2.17); piece(h.a - 0.07, h.b + 0.07, 2.1, 2.17);
  }
}

// fixtures: kitchen, bathroom
const fx = new THREE.Group(); fx.userData.round = true; house.add(fx);
for (const f of P.fixtures) {
  const [x1, z1, x2, z2] = f.r;
  if (f.type === 'kitchen') {
    box(x1, z1, x2, z2, 0, 0.86, M.cabinet, fx); box(x1 - 0.02, z1, x2 + 0.02, z2 + 0.02, 0.86, 0.9, M.counter, fx);
    // sink and hob
    const zs = z1 + (z2 - z1) * 0.7, zh = z1 + (z2 - z1) * 0.25;
    box((x1 + x2) / 2 - 0.2, zs - 0.2, (x1 + x2) / 2 + 0.2, zs + 0.2, 0.9, 0.91, M.steel, fx, { cast: false });
    box((x1 + x2) / 2 - 0.25, zh - 0.25, (x1 + x2) / 2 + 0.25, zh + 0.25, 0.9, 0.905, new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.2 }), fx, { cast: false });
    solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'counter') { // kitchen run along a wall; sink / hob are X ranges on top
    box(x1, z1, x2, z2, 0.1, 0.86, M.cabinet, fx); box(x1, z1 + 0.04, x2, z2 - 0.04, 0, 0.1, M.wallTop, fx, { cast: false });
    box(x1, z1, x2, z2 + 0.02, 0.86, 0.9, M.counter, fx);
    if (f.sink) box(f.sink[0], z1 + 0.08, f.sink[1], z2 - 0.1, 0.9, 0.905, M.steel, fx, { cast: false });
    if (f.hob) box(f.hob[0], z1 + 0.06, f.hob[1], z2 - 0.06, 0.9, 0.906, new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.2 }), fx, { cast: false });
    solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'tall' || f.type === 'fridge') {
    box(x1, z1, x2, z2, 0, f.type === 'tall' ? 2.25 : 2.0, f.type === 'tall' ? M.cabinet : M.white, fx); solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'washer') {
    box(x1, z1, x2, z2, 0, 0.85, M.white, fx); solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'vent') {
    box(x1, z1, x2, z2, 0, H, M.wall); solids.push([x1, z1, x2, z2]); fullWalls.push([x1, z1, x2, z2]);
  } else if (f.type === 'bath') {
    box(x1, z1, x2, z2, 0, 0.56, M.white, fx);
    box(x1 + 0.08, z1 + 0.08, x2 - 0.08, z2 - 0.08, 0.4, 0.565, new THREE.MeshStandardMaterial({ color: 0xcfe6ef, roughness: 0.1 }), fx, { cast: false });
    solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'toilet') {
    const cx = (x1 + x2) / 2 - 0.05, cz = (z1 + z2) / 2;
    // wall-hung toilet: an egg-shaped bowl, a seat and a flush plate on the wall
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 16), M.white); bowl.scale.set(1.35, 0.95, 0.95); bowl.position.set(cx, 0.32, cz); bowl.castShadow = true; fx.add(bowl);
    const seat = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.035, 10, 28), M.white); seat.rotation.x = Math.PI / 2; seat.scale.set(1.3, 1, 1); seat.position.set(cx, 0.43, cz); fx.add(seat);
    const f2 = f.back;
    box(f2[0], f2[1], f2[2], f2[3], 0.2, 1.15, M.white, fx);
    box(f2[0] - 0.012, cz - 0.12, f2[0], cz + 0.12, 0.95, 1.1, M.steel, fx);
    solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'sink') {
    box(x1, z1, x2, z2, 0.15, 0.8, M.cabinet, fx);
    box(x1, z1, x2, z2, 0.8, 0.86, M.white, fx);
    const basin = new THREE.Mesh(new THREE.SphereGeometry(0.17, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xe9eef0, roughness: 0.15, side: THREE.DoubleSide }));
    basin.scale.set(1.1, 0.5, 0.9); basin.position.set((x1 + x2) / 2, 0.865, (z1 + z2) / 2); fx.add(basin);
    const fz = Math.abs(z2 - z1) < Math.abs(x2 - x1) ? (z2 > 2 ? z2 - 0.05 : z1 + 0.05) : (z1 + z2) / 2;
    const tap = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.2, 10), M.steel); tap.position.set((x1 + x2) / 2, 0.96, fz); fx.add(tap);
    solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'panel') {
    box(x1, z1, x2, z2, 1.35, 1.85, M.frame, wallsG);
  }
}

// ceiling lamps (lit in the evening): a flat ceiling light in the finished looks, a bare bulb on a wire as it is now
const lamps = [];
const bulbMat = new THREE.MeshBasicMaterial({ color: 0x8c8c8c }), lampRim = new THREE.MeshStandardMaterial({ color: 0xf4f3f0, roughness: 0.5 });
const lampFin = new THREE.Group(), lampRaw = new THREE.Group(), glowG = new THREE.Group(); house.add(lampFin, lampRaw, glowG);
const glowTex = canvasTex(128, 128, (g, w) => { const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, 'rgba(255,236,200,1)'); gr.addColorStop(0.25, 'rgba(255,214,160,.45)'); gr.addColorStop(1, 'rgba(255,200,140,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, w); }, 1, 1);
const glowMat = new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.85, fog: false });
for (const [x, z] of P.lamps) {
  const l = new THREE.PointLight(0xffd29a, 0, 6, 1.6); l.position.set(x, H - 0.3, z); house.add(l);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.2, 0.012, 32), bulbMat); disc.position.set(x, H - 0.062, z);
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.055, 32, 1, true), lampRim); rim.position.set(x, H - 0.03, z);
  lampFin.add(disc, rim);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), bulbMat); bulb.position.set(x, H - 0.3, z);
  const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.26, 5), M.entry); wire.position.set(x, H - 0.13, z);
  lampRaw.add(bulb, wire);
  const glow = new THREE.Sprite(glowMat); glow.scale.setScalar(1.1); glow.position.set(x, H - 0.16, z); glowG.add(glow);
  lamps.push({ l });
}
mergeStatic(lampFin); mergeStatic(lampRaw);
// electrical points (sockets, switches…) — heights from the plan legend
export const POWER = {
  socket: { h: 0.3, c: 0xffffff, name: 'Розетка', note: '30 см' },
  socket2: { h: 0.3, c: 0xffffff, name: 'Подвійна розетка', note: '30 см' },
  kitchen: { h: 1.0, c: 0xf2b45c, name: 'Подвійна розетка над стільницею', note: '100 см' },
  net: { h: 0.3, c: 0x5cc8e8, name: 'Інтернет', note: '30 см' },
  intercom: { h: 1.3, c: 0x9b7bf0, name: 'Домофон', note: '130 см' },
  hood: { h: 2.1, c: 0xe87a5c, name: 'Витяжка', note: '210 см' },
  boiler: { h: 2.1, c: 0xe85c8a, name: 'Бойлер', note: '210 см' },
  ac: { h: 2.4, c: 0x5ce8b0, name: 'Кондиціонер', note: '240 см' },
  switch: { h: 0.9, c: 0xc9733a, name: 'Вимикач', note: '90 см' },
  switch2: { h: 0.9, c: 0xc9733a, name: 'Подвійний вимикач', note: '90 см' },
  km: { h: 0.3, c: 0x9aa0a6, name: 'Монтажна коробка', note: '30 см' },
  panel: { h: 1.6, c: 0x777f8a, name: 'Щиток квартирний', note: '160 см' }
};
const powerG = new THREE.Group(); powerG.visible = false; house.add(powerG);
let elecMode = false, dimsMode = false;
const NORM = { N: [0, -1], S: [0, 1], E: [1, 0], W: [-1, 0] };
const plateGeo = new THREE.BoxGeometry(0.09, 0.09, 0.015), dotGeo = new THREE.SphereGeometry(0.032, 12, 8), plateMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }), dotMats = {};
for (const p of P.power) {
  const k = POWER[p.k], [nx, nz] = NORM[p.f];
  const plate = new THREE.Mesh(plateGeo, plateMat);
  const wide = p.k === 'socket2' || p.k === 'kitchen' || p.k === 'switch2';
  if (wide) plate.scale.x = 1.9;
  plate.position.set(p.x + nx * 0.008, k.h, p.z + nz * 0.008);
  if (nx) plate.rotation.y = Math.PI / 2;
  const dot = new THREE.Mesh(dotGeo, dotMats[k.c] || (dotMats[k.c] = new THREE.MeshBasicMaterial({ color: k.c })));
  dot.position.set(p.x + nx * 0.06, k.h, p.z + nz * 0.06);
  powerG.add(plate, dot);
}
// daylight through the windows: a soft wide spot just inside each glazed opening, pointing into the room
const winLights = []; let roofShade = null;
for (const w of P.walls) if (w.ext && w.axis === 'x' && w.t1 > 1) for (const h of (w.holes || [])) if (h.type !== 'door') {
  const cx = (h.a + h.b) / 2, L = new THREE.SpotLight(0xf3f1ec, 0, 11, 1.25, 1, 1.6);
  L.position.set(cx, 1.5, w.t1 - 0.12); L.target.position.set(cx, 0.4, w.t1 - 4); house.add(L, L.target);
  winLights.push({ L, w: h.b - h.a });
}
// the rest of our building around the flat (the floor above, the roof, the neighbours' flats beside us) — invisible,
// but it casts shadows, so sunlight can only come in through the windows and never through the ceiling
{
  const shadowOnly = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
  const block = (x1, z1, x2, z2, y1, y2) => { const m = new THREE.Mesh(new THREE.BoxGeometry(x2 - x1, y2 - y1, z2 - z1), shadowOnly); m.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2); m.castShadow = true; m.layers.set(2); scene.add(m); return m; };
  roofShade = block(-40, -16, P.width + 40, P.depth + 0.3, H + 0.001, H + 3.6);      // floor above + roof (only while walking: the doll-house has no lid, so the sun shines in)
  block(-40, -16, -0.3, P.depth + 0.3, 0, H + 0.001);                   // flats on the left
  block(P.width + 0.3, -16, P.width + 40, P.depth + 0.3, 0, H + 0.001); // flats on the right
  block(-0.3, -16, P.width + 0.3, -0.3, 0, H + 0.001);                  // the corridor side
  sun.shadow.camera.layers.enable(2);
}
// ceiling — only while walking, so the doll-house view stays open
const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(P.width + 0.6, P.depth + 0.6), new THREE.MeshStandardMaterial({ color: 0xfbfaf7, roughness: 1, envMapIntensity: 1.7 }));
ceiling.rotation.x = Math.PI / 2; ceiling.position.set(CX, H, CZ); ceiling.visible = false; house.add(ceiling);
// ground outside
const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), M.ground);
ground.rotation.x = -Math.PI / 2; ground.position.set(CX, -0.02, CZ); ground.receiveShadow = true; ground.visible = false; scene.add(ground);

/* ================= finishing touches: skirting boards, merged geometry, soft contact shadows, sky, reflections ================= */
// skirting boards along every full-height wall (finished looks only)
const baseG = new THREE.Group(); house.add(baseG);
{
  const inWall = (x, z) => fullWalls.some(([x1, z1, x2, z2]) => x > x1 && x < x2 && z > z1 && z < z2);
  const BH = 0.07, BT = 0.012, STEP = 0.02;
  const piece = (x1, z1, x2, z2) => box(Math.min(x1, x2), Math.min(z1, z2), Math.max(x1, x2), Math.max(z1, z2), 0, BH, M.base, baseG, { cast: false });
  const run = (fixed, a, b, alongX, out) => { // out: ±1 — the side on which the wall stands
    let start = null;
    for (let t = a; t <= b + STEP; t += STEP) {
      const tt = t + STEP / 2, hit = tt < b && (alongX ? inWall(tt, fixed + out * 0.04) : inWall(fixed + out * 0.04, tt));
      if (hit && start == null) start = t;
      if (!hit && start != null) { if (t - start > 0.06) alongX ? piece(start, fixed, Math.min(t, b), fixed - out * BT) : piece(fixed, start, fixed - out * BT, Math.min(t, b)); start = null; }
    }
  };
  for (const r of P.rooms) if (r.name !== 'Балкон') for (const [x1, z1, x2, z2] of r.rects) { run(z1, x1, x2, true, -1); run(z2, x1, x2, true, 1); run(x1, z1, z2, false, -1); run(x2, z1, z2, false, 1); }
  for (const f of P.fixtures) if (f.type === 'vent') { const [x1, z1, x2, z2] = f.r; piece(x2, z1, x2 + BT, z2 + BT); piece(x1, z2, x2, z2 + BT); }
}
// everything that never moves becomes one mesh per material: a few dozen draw calls instead of several hundred
for (const o of openables) { mergeStatic(o.g, true); o.g.traverse(m => { m.userData.openable = o.g; }); } // a door or a sash: one mesh per material, still tappable
mergeStatic(baseG); mergeStatic(radG); mergeStatic(archG); archG.userData.keep = true; mergeStatic(fx); mergeStatic(powerG); mergeStatic(wallsG);

// walls get a little darker towards the floor and (under a ceiling) towards the ceiling — cheap ambient occlusion in the shader
const wallAO = { value: 0 };
function addWallAO(mat) {
  mat.onBeforeCompile = sh => {
    sh.uniforms.uCeil = wallAO;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vKvY;').replace('#include <project_vertex>', '#include <project_vertex>\nvKvY = (modelMatrix * vec4(transformed, 1.0)).y;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vKvY;\nuniform float uCeil;')
      .replace('#include <color_fragment>', `#include <color_fragment>\ndiffuseColor.rgb *= 1.0 - 0.16 * exp(-max(vKvY, 0.0) * 6.0) - uCeil * 0.24 * exp(-max(${H.toFixed(2)} - vKvY, 0.0) * 5.0);`);
  };
  return mat;
}
addWallAO(M.wall);

// soft shadows painted once on a small canvas: along the walls and under the furniture (floor), along the walls (ceiling)
const AOK = 48, aoBox = { x0: -0.3, z0: -0.3, x1: P.width + 0.3, z1: P.depth + 0.3 };
function aoPaint(c, furniture) {
  const g = c.getContext('2d'), OFF = 4000;
  g.shadowColor = 'transparent'; g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
  const blob = (x1, z1, x2, z2, blur, a, grow) => {
    g.shadowColor = `rgba(0,0,0,${a})`; g.shadowBlur = blur; g.shadowOffsetX = OFF; g.fillStyle = '#000';
    g.fillRect((x1 - grow - aoBox.x0) * AOK - OFF, (z1 - grow - aoBox.z0) * AOK, (x2 - x1 + grow * 2) * AOK, (z2 - z1 + grow * 2) * AOK);
  };
  for (const q of solids) {
    if (q[4] === 3) continue;
    if (!q[4]) blob(q[0], q[1], q[2], q[3], 24, 0.5, 0.03);
    else if (furniture && !elecMode && !(q[4] === 1 && raw)) blob(q[0], q[1], q[2], q[3], 13, 0.42, 0.01);
  }
}
function aoPlane(y, side) {
  const c = document.createElement('canvas'); c.width = Math.round((aoBox.x1 - aoBox.x0) * AOK); c.height = Math.round((aoBox.z1 - aoBox.z0) * AOK);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(aoBox.x1 - aoBox.x0, aoBox.z1 - aoBox.z0),
    new THREE.MeshBasicMaterial({ map: t, blending: THREE.MultiplyBlending, premultipliedAlpha: true, transparent: true, depthWrite: false, toneMapped: false, fog: false, side }));
  m.rotation.x = -Math.PI / 2; m.position.set((aoBox.x0 + aoBox.x1) / 2, y, (aoBox.z0 + aoBox.z1) / 2); m.renderOrder = 2; house.add(m);
  return { c, t, m };
}
const aoFloor = aoPlane(0.004, THREE.FrontSide), aoCeil = aoPlane(H - 0.003, THREE.BackSide);
aoPaint(aoCeil.c, false); aoCeil.t.needsUpdate = true; aoCeil.m.visible = false;
function refreshAO() { aoPaint(aoFloor.c, true); aoFloor.t.needsUpdate = true; }

// sky: a soft gradient with the sun's glow where the real sun stands
const skyU = { top: { value: new THREE.Color() }, hor: { value: new THREE.Color() }, sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunK: { value: 0 } };
const skyDome = new THREE.Mesh(new THREE.SphereGeometry(150, 32, 16), new THREE.ShaderMaterial({
  uniforms: skyU, side: THREE.BackSide, depthWrite: false, fog: false,
  vertexShader: 'varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
    void main(){ vec3 d = normalize(vDir); float h = d.y;
      vec3 c = mix(hor, top, pow(clamp(h, 0.0, 1.0), 0.55)); c = mix(c, hor * 0.92, smoothstep(0.0, -0.3, h));
      float s = max(dot(d, sunDir), 0.0);
      c += vec3(1.0, 0.86, 0.66) * sunK * (pow(s, 600.0) * 4.0 + pow(s, 24.0) * 0.28 + pow(s, 4.0) * 0.08);
      gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`
}));
skyDome.renderOrder = 10; skyDome.frustumCulled = false; scene.add(skyDome);

// reflections: a tiny painted room with a bright window wall on the +Z side (where our windows are), blurred once into an environment map
let envOK = false, envTex = null;
try {
  if (!renderer.capabilities.isWebGL2 || !(renderer.extensions.has('EXT_color_buffer_float') || renderer.extensions.has('EXT_color_buffer_half_float'))) throw new Error('no float targets');
  const pm = new THREE.PMREMGenerator(renderer), es = new THREE.Scene();
  es.add(new THREE.Mesh(new THREE.SphereGeometry(20, 24, 12), new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: 'varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `varying vec3 vDir; void main(){ vec3 d = normalize(vDir);
      vec3 c = mix(vec3(0.5, 0.47, 0.43), vec3(0.78, 0.77, 0.75), smoothstep(-0.5, 0.2, d.y)); c = mix(c, vec3(0.98, 0.97, 0.95), smoothstep(0.35, 0.9, d.y));
      c *= 0.75 + 0.35 * smoothstep(-0.6, 0.8, d.z);
      gl_FragColor = vec4(c, 1.0); }`
  })));
  const pane = new THREE.Mesh(new THREE.PlaneGeometry(8, 3.4), new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(4.6, 4.8, 5.1), side: THREE.DoubleSide }));
  pane.position.set(0, 1.2, 9); es.add(pane);
  envTex = pm.fromScene(es, 0.03).texture; pm.dispose(); envOK = true;
} catch (e) { /* no reflections on very old devices — everything else still works */ }

// outside: the courtyard and the building across it; our floor is the 3rd (≈6,4 m above the ground)
const SUN = { orient: store.get('orient', 150), gap: store.get('gap', 18), live: true, y: 0, m: 0, d: 0, h: 12 };
if (store.get('sunV', 0) < 2) { SUN.orient = 150; SUN.gap = 18; store.set('orient', 150); store.set('gap', 18); store.set('sunV', 2); } // checked against the satellite map: windows face SE ≈150°
let outside = null;
function buildOutside() {
  if (outside) { scene.remove(outside.group); outside.group.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
  outside = buildSurroundings(P, { below: 6.45, gap: SUN.gap, floors: 4 });
  scene.add(outside.group); invalidate(true);
}
buildOutside();
function kyivNow() {
  const n = new Date(), f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Kyiv', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' });
  try { const p = Object.fromEntries(f.formatToParts(n).map(x => [x.type, x.value])); return { y: +p.year, m: +p.month - 1, d: +p.day, h: +p.hour + +p.minute / 60 }; }
  catch (e) { return { y: n.getFullYear(), m: n.getMonth(), d: n.getDate(), h: n.getHours() + n.getMinutes() / 60 }; }
}
Object.assign(SUN, kyivNow());
if (Q.get('date')) { const [y, m, d] = Q.get('date').split('-').map(Number); Object.assign(SUN, { y, m: m - 1, d, live: false }); }
if (Q.get('hour')) { SUN.h = +Q.get('hour'); SUN.live = false; }
if (Q.get('orient')) SUN.orient = +Q.get('orient');
const blockAt = dl => Math.atan2(outside.top - 1.2, SUN.gap / Math.max(0.2, Math.cos(dl * Math.PI / 180))) * 180 / Math.PI;

/* ================= views ================= */
let mode = Q.get('mode') || store.get('mode', 'doll'); // doll | walk | plan
let lowWalls = store.get('low', false), evening = Q.get('night') ? true : store.get('evening', false);
const orbit = { yaw: store.get('yaw', -0.5), pitch: 0.95, dist: 15, tx: CX, tz: CZ + 0.3 };
const walker = { x: P.start[0], z: P.start[1], yaw: P.start[2], pitch: -0.05, bob: 0, goal: null };
if (Q.get('yaw')) orbit.yaw = +Q.get('yaw');
if (Q.get('wx')) { walker.x = +Q.get('wx'); walker.z = +Q.get('wz'); walker.yaw = +(Q.get('wyaw') || 0); }

function applyWalls() {
  const s = mode === 'walk' ? 1 : lowWalls ? 0.42 : 1;
  wallsG.scale.y = s; ceiling.visible = aoCeil.m.visible = roofShade.visible = mode === 'walk'; wallAO.value = mode === 'walk' ? 1 : 0;
  const full = mode === 'walk' || !lowWalls;
  if (interiorG) interiorG.traverse(o => { if (o.userData.wallLike) { o.scale.y = s; o.position.y = (o.userData.y1 + o.userData.h / 2) * s; } if (o.userData.hideLow) o.visible = full; });
  lampFin.visible = full && !raw; lampRaw.visible = full && raw; glowG.visible = full && lampsLit;
  invalidate(true);
}
// interior look: 'raw' (as it is now), 'base' (first finished version) or a designed style from interior.js
let look = Q.get('look') || (Q.get('raw') === '0' ? 'base' : Q.get('raw') === '1' ? 'raw' : null) || store.get('look', store.get('raw', true) ? 'raw' : 'base');
if (!STYLES.some(st => st.id === look)) look = 'raw';
let raw = look === 'raw', interiorG = null, lampsLit = false;
const DEF = { wall: M.wall.color.getHex(), door: M.door.color.getHex(), cabinet: M.cabinet.color.getHex(), counter: M.counter.color.getHex() };
const styleFloorMats = new Map();
function styleFloor(f, key) {
  const k = key + ':' + f.w.toFixed(2) + ':' + f.h.toFixed(2);
  if (!styleFloorMats.has(k)) {
    const coarse = key === 'polished' || key === 'concrete';
    const t = floorTex(key).clone(); t.repeat.set(f.w * (coarse ? 0.4 : 0.7), f.h * (coarse ? 0.4 : 0.7)); t.needsUpdate = true;
    styleFloorMats.set(k, new THREE.MeshStandardMaterial({ map: t, roughness: key.startsWith('tile') ? 0.22 : key === 'polished' ? 0.32 : key === 'concrete' ? 0.95 : key === 'stone' ? 0.6 : 0.5, envMapIntensity: key === 'concrete' ? 0.6 : 1 }));
  }
  return styleFloorMats.get(k);
}
function applyFinish() {
  const S = STYLES.find(st => st.id === look); raw = look === 'raw';
  const styled = !!S.wall;
  for (const f of floorMats) f.m.material = styleFloor(f, raw ? 'concrete' : styled ? (S.floors[f.room] || S.floors[f.as] || 'oak') : f.key);
  fx.visible = !raw && !elecMode; archG.visible = baseG.visible = !raw; for (const d of innerDoors) d.visible = !raw;
  if (raw) for (const o of openables) if (o.inner && !o.open) toggleOpenable(o);
  M.wall.color.set(styled ? S.wall : DEF.wall); M.door.color.set(styled ? S.door : DEF.door);
  M.cabinet.color.set(styled ? S.cabinet : DEF.cabinet); M.counter.color.set(styled ? S.counter : DEF.counter);
  if (interiorG) { house.remove(interiorG); interiorG.traverse(o => { if (o.geometry && !o.geometry.userData.cached) o.geometry.dispose(); if (o.material && o.material.userData.own) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } }); interiorG = null; }
  for (let i = solids.length - 1; i >= 0; i--) if (solids[i][4] === 2) solids.splice(i, 1);
  if (styled) { interiorG = buildInterior(S, P, solids, { canvasTex, addWallAO }); mergeStatic(interiorG); interiorG.visible = !elecMode; house.add(interiorG); }
  refreshAO();
  for (const l of lamps) l.l.color.set(styled ? S.lamp : 0xffd29a);
  $('vFinish').textContent = S.short; $('bFinish').classList.toggle('on', look !== 'raw');
  applyWalls();
}
function openStyles() {
  const p = $('styles');
  if (!p.hidden) { p.hidden = true; return; }
  const LAYOUTS = [['plan', 'Як у забудовника', 'відкритий передпокій'], ['closet', 'З гардеробною', 'гардеробна біля кухні, прохід 80 см']];
  p.innerHTML = '<div class="sec">Планування</div>' + LAYOUTS.map(([id, n, sub]) => `<button class="chip${id === LAYOUT ? ' on' : ''}" data-layout="${id}"><b>${n}</b><span>${sub}</span></button>`).join('') +
    '<div class="sec">Інтер\'єр</div>' + STYLES.map(st => `<button class="chip${st.id === look ? ' on' : ''}" data-id="${st.id}"><b>${st.name}</b><span>${st.sub}</span></button>`).join('');
  p.querySelectorAll('[data-layout]').forEach(c => c.addEventListener('click', () => { if (c.dataset.layout === LAYOUT) { p.hidden = true; return; } store.set('layout', c.dataset.layout); location.reload(); }));
  p.querySelectorAll('.chip[data-id]').forEach(c => c.addEventListener('click', () => { look = c.dataset.id; store.set('look', look); applyFinish(); p.hidden = true; }));
  p.hidden = false;
}
const SKY_DAY = new THREE.Color(0xcfe0ee), SKY_DUSK = new THREE.Color(0xe8b48a), SKY_NIGHT = new THREE.Color(0x0e1222);
const TOP_DAY = new THREE.Color(0x4f8fd8), TOP_DUSK = new THREE.Color(0x5d6f9e), TOP_NIGHT = new THREE.Color(0x04060e);
function applyLight() {
  const st = sunAt(kyivDate(SUN.y, SUN.m, SUN.d, SUN.h));
  const el = evening ? -20 : st.el, day = THREE.MathUtils.smoothstep(el, -6, 12);
  const sky = SKY_NIGHT.clone().lerp(SKY_DUSK, THREE.MathUtils.smoothstep(el, -8, 2)).lerp(SKY_DAY, THREE.MathUtils.smoothstep(el, 2, 18));
  scene.background = sky; if (scene.fog) scene.fog.color.copy(sky); else scene.fog = new THREE.Fog(sky, 60, 160);
  const dusk = THREE.MathUtils.smoothstep(el, -8, 2), noon = THREE.MathUtils.smoothstep(el, 2, 18);
  skyU.hor.value.copy(sky); skyU.top.value.copy(TOP_NIGHT).lerp(TOP_DUSK, dusk).lerp(TOP_DAY, noon);
  skyU.sunDir.value.copy(dirTo(st.az, st.el, SUN.orient)); skyU.sunK.value = evening ? 0 : THREE.MathUtils.smoothstep(st.el, -3, 5);
  // inside, daylight comes only through the windows; the sky fill is kept low while walking
  const walkM = mode === 'walk';
  const useEnv = envOK && !lite; // 'lite' shading: no reflections and no window lamps, the sky fill makes up for them
  if (scene.environment !== (useEnv ? envTex : null)) scene.environment = useEnv ? envTex : null;
  hemi.intensity = walkM ? 0.04 + 0.2 * day : 0.1 + 0.5 * day;
  scene.environmentIntensity = walkM ? 0.08 + 0.44 * day : 0.08 + 0.3 * day;
  if (!useEnv) hemi.intensity = walkM ? 0.12 + 0.85 * day : 0.2 + 0.8 * day;
  hemi.groundColor.set(useEnv ? 0xa89e90 : 0xd6d0c6);
  for (const { L, w } of winLights) { L.intensity = evening ? 0 : (walkM ? 5 : 3) * w * day; L.visible = !lite && L.intensity > 0.02; }
  outdoorGlow(walkM ? 0.22 * day : 0.04 * day);
  const night = evening || el < -4;
  document.body.classList.toggle('night', night);
  sun.intensity = el > 0 ? 2.8 * THREE.MathUtils.smoothstep(el, 0, 10) : 0; sun.visible = sun.intensity > 0.02;
  sun.color.setHSL(0.09, 0.9, 0.55 + 0.4 * THREE.MathUtils.smoothstep(el, 0, 25));
  sun.position.copy(dirTo(st.az, Math.max(el, 1), SUN.orient).multiplyScalar(45)).add(sun.target.position);
  const lampsOn = evening || el < 2;
  lampsLit = lampsOn;
  for (const { l } of lamps) { l.intensity = lampsOn ? 3.2 : 0; l.visible = lampsOn; }
  bulbMat.color.set(lampsOn ? 0xfff2d6 : 0xb9b8b4); glowG.visible = lampsOn && (walkM || !lowWalls);
  $('bLight').classList.toggle('on', evening);
  $('vLight').textContent = evening ? 'Вечір' : 'День';
  $('vSun').textContent = hhmm(SUN.h); $('bSun').title = SUN.d + ' ' + MNAMES[SUN.m];
  outside.setSeason(SUN.m);
  if (!$('sunp').hidden) { sunPanelText(st); if ($('sunYear')) { $('sunYear').innerHTML = sunYearHTML(); $('sunYear').querySelectorAll('[data-m]').forEach(el => el.onclick = () => { SUN.m = +el.dataset.m; SUN.d = 21; SUN.live = false; p2close(); applyLight(); openSun(); }); } }
  if ($('sunFacts')) $('sunFacts').innerHTML = sunFactsHTML();
  invalidate(true);
}
const DIRS = [['Пн', 0], ['ПнСх', 45], ['Сх', 90], ['ПдСх', 135], ['Пд', 180], ['ПдЗх', 225], ['Зх', 270], ['ПнЗх', 315]];
const DATES = [['Сьогодні', null], ['Весна', [3, 20]], ['Літо', [6, 15]], ['Осінь', [9, 15]], ['Зима', [0, 20]]];
const MNAMES = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
const doy = (m, d) => Math.round((Date.UTC(2026, m, d) - Date.UTC(2026, 0, 1)) / 864e5) + 1;
const fromDoy = n => { const t = new Date(Date.UTC(2026, 0, n)); return [t.getUTCMonth(), t.getUTCDate()]; };
function sunPanelText(st) {
  const w = sunWindow(SUN.y, SUN.m, SUN.d, SUN.orient, blockAt);
  const dname = DIRS.reduce((a, b) => Math.abs(((SUN.orient - b[1] + 540) % 360) - 180) < Math.abs(((SUN.orient - a[1] + 540) % 360) - 180) ? b : a)[0];
  $('sunInfo').innerHTML = `Схід ${hhmm(w.rise)} · захід ${hhmm(w.set)}<br>` +
    (w.from != null ? `Пряме сонце у вікнах: <b>${hhmm(w.from)}–${hhmm(w.to)}</b>` : 'Цього дня пряме сонце у вікна не потрапляє') +
    `<br><small>Вікна дивляться на ${SUN.orient}° (${dname}); будинок навпроти — 4 поверхи, ${SUN.gap} м. Зараз сонце: висота ${st.el.toFixed(0)}°, азимут ${st.az.toFixed(0)}°.</small>`;
}
function sunFactsHTML() {
  const nm = DIRS.reduce((a, b) => Math.abs(((SUN.orient - b[1] + 540) % 360) - 180) < Math.abs(((SUN.orient - a[1] + 540) % 360) - 180) ? b : a)[0];
  const row = (a, b) => `<div class="row"><span>${a}</span><b>${b}</b></div>`;
  const w = (m, d) => { const x = sunWindow(SUN.y, m, d, SUN.orient, blockAt); return x.from != null ? hhmm(x.from) + '–' + hhmm(x.to) : 'немає'; };
  return row('Вікна дивляться', `${nm}, ${SUN.orient}°`) + row('Поверх', '3-й, ≈6,4 м над землею') + row('Будинок навпроти', `4 поверхи, ≈${SUN.gap} м`) +
    row('Сонце у вікнах 21 червня', w(5, 21)) + row('21 березня / 23 вересня', w(2, 21) + ' / ' + w(8, 23)) + row('21 грудня', w(11, 21));
}
const MONTHS = ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'];
function sunYearHTML() {
  return MONTHS.map((n, m) => { const w = sunWindow(SUN.y, m, 21, SUN.orient, blockAt); const h = w.from != null ? w.to - w.from : 0;
    return `<div data-m="${m}" class="${m === SUN.m ? 'on' : ''}"><span>${n}</span><i style="width:${Math.round(h / 11 * 100)}%"></i><b>${w.from != null ? hhmm(w.from) + '–' + hhmm(w.to) : 'немає'}</b></div>`; }).join('');
}
function p2close() { $('sunp').hidden = true; }
function openSun() {
  const p = $('sunp'); if (!p.hidden) { p.hidden = true; return; }
  $('styles').hidden = true;
  const today = kyivNow();
  p.innerHTML = `<b class="ttl">Сонце над Львовом</b>
    <div class="row2">${DATES.map(([n, v], i) => `<button class="mini${(v ? v[0] === SUN.m && v[1] === SUN.d : SUN.m === today.m && SUN.d === today.d) ? ' on' : ''}" data-date="${i}">${n}</button>`).join('')}</div>
    <label class="lab">Дата: <b id="sunD">${SUN.d} ${MNAMES[SUN.m]}</b></label>
    <input type="range" id="sunDay" min="1" max="365" step="1" value="${doy(SUN.m, SUN.d)}">
    <label class="lab">Час: <b id="sunT">${hhmm(SUN.h)}</b> <button class="mini" id="sunNow">Зараз</button></label>
    <input type="range" id="sunH" min="4" max="22" step="0.0833" value="${SUN.h}">
    <label class="lab">Куди дивляться вікна</label>
    <div class="row2">${DIRS.map(([n, a]) => `<button class="mini${Math.abs(SUN.orient - a) < 23 ? ' on' : ''}" data-or="${a}">${n}</button>`).join('')}</div>
    <input type="range" id="sunO" min="0" max="359" step="1" value="${SUN.orient}">
    <label class="lab">До будинку навпроти: <b id="sunGv">${SUN.gap} м</b></label>
    <input type="range" id="sunG" min="12" max="50" step="1" value="${SUN.gap}">
    <div id="sunInfo" class="info"></div>
    <label class="lab">Сонце у вікнах протягом року</label>
    <div id="sunYear" class="year"></div>`;
  p.hidden = false;
  p.querySelectorAll('[data-date]').forEach(b => b.onclick = () => { const v = DATES[+b.dataset.date][1], t = kyivNow(); SUN.y = t.y; if (v) { SUN.m = v[0]; SUN.d = v[1]; } else { SUN.m = t.m; SUN.d = t.d; } SUN.live = false; p.hidden = true; applyLight(); openSun(); });
  p.querySelectorAll('[data-or]').forEach(b => b.onclick = () => { SUN.orient = +b.dataset.or; store.set('orient', SUN.orient); p.hidden = true; applyLight(); openSun(); });
  $('sunDay').oninput = e => { const [m, d] = fromDoy(+e.target.value); SUN.m = m; SUN.d = d; SUN.live = false; $('sunD').textContent = d + ' ' + MNAMES[m]; applyLight(); };
  $('sunH').oninput = e => { SUN.h = +e.target.value; SUN.live = false; $('sunT').textContent = hhmm(SUN.h); applyLight(); };
  $('sunO').oninput = e => { SUN.orient = +e.target.value; store.set('orient', SUN.orient); applyLight(); };
  $('sunG').oninput = e => { SUN.gap = +e.target.value; store.set('gap', SUN.gap); $('sunGv').textContent = SUN.gap + ' м'; buildOutside(); applyLight(); };
  $('sunNow').onclick = () => { Object.assign(SUN, kyivNow(), { live: true }); p.hidden = true; applyLight(); openSun(); };
  applyLight();
}
setInterval(() => { if (SUN.live) { Object.assign(SUN, kyivNow()); applyLight(); } }, 60000);
function setMode(m) {
  mode = m; store.set('mode', m);
  document.body.classList.toggle('walking', m === 'walk');
  document.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
  $('joy').hidden = m !== 'walk'; $('bWalls').hidden = m === 'walk';
  if (m === 'plan') { orbit.tx = CX + 0.6; orbit.tz = P.depthWithBalcony / 2 - 0.3; } else if (m === 'doll') { orbit.tx = CX; orbit.tz = CZ + 0.3; }
  applyWalls(); resize(); applyLight();
}

function updateCamera() {
  if (mode === 'walk') camera.layers.enable(1); else camera.layers.disable(1); // hide the building across the street in the doll-house and plan views
  if (mode === 'walk') {
    camera.fov = 70;
    const eye = 1.6 + Math.sin(walker.bob) * 0.025;
    camera.position.set(walker.x, eye, walker.z);
    const cp = Math.cos(walker.pitch);
    camera.lookAt(walker.x + Math.sin(walker.yaw) * cp, eye + Math.sin(walker.pitch), walker.z - Math.cos(walker.yaw) * cp);
  } else {
    const pitch = mode === 'plan' ? Math.PI / 2 - 0.001 : orbit.pitch, yaw = mode === 'plan' ? 0 : orbit.yaw;
    camera.fov = mode === 'plan' ? 30 : 45;
    const d = mode === 'plan' ? planDist() : orbit.dist;
    camera.position.set(orbit.tx + Math.sin(yaw) * Math.cos(pitch) * d, Math.sin(pitch) * d, orbit.tz + Math.cos(yaw) * Math.cos(pitch) * d);
    camera.lookAt(orbit.tx, 0, orbit.tz);
  }
  camera.updateProjectionMatrix(); skyDome.position.copy(camera.position);
}
function planDist() { // fit the whole plan on screen
  const a = camera.aspect, f = Math.tan(THREE.MathUtils.degToRad(30 / 2));
  return Math.max((P.depthWithBalcony + 2.4) / 2 / f, (P.width + 3.2) / 2 / f / a) + H;
}

/* ================= walking with collisions ================= */
const RAD = 0.22;
function blocked(x, z) {
  if (x < -0.05 || z < -0.05 || x > P.width + 0.05 || z > P.depthWithBalcony) return true;
  for (const [x1, z1, x2, z2, isFx] of solids) {
    if (isFx && raw) continue;
    const cx = Math.max(x1, Math.min(x, x2)), cz = Math.max(z1, Math.min(z, z2));
    if ((x - cx) ** 2 + (z - cz) ** 2 < RAD * RAD) return true;
  }
  return false;
}
function walk(dx, dz) {
  const nx = walker.x + dx, nz = walker.z + dz;
  if (!blocked(nx, nz)) { walker.x = nx; walker.z = nz; }
  else if (!blocked(nx, walker.z)) walker.x = nx;
  else if (!blocked(walker.x, nz)) walker.z = nz;
}

/* ================= input ================= */
const cv = renderer.domElement;
const ptrs = new Map();
let joy = null; // {id, ox, oy, x, y}
cv.addEventListener('pointerdown', e => {
  cv.setPointerCapture(e.pointerId);
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now() });
  hideTip();
});
cv.addEventListener('pointermove', e => {
  const p = ptrs.get(e.pointerId); if (!p) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  if (ptrs.size === 1) {
    if (mode === 'walk') { walker.yaw += dx * 0.005; walker.pitch = Math.max(-1.1, Math.min(1.1, walker.pitch - dy * 0.004)); }
    else if (mode === 'doll') { orbit.yaw -= dx * 0.006; orbit.pitch = Math.max(0.25, Math.min(1.45, orbit.pitch + dy * 0.004)); }
    else panBy(dx, dy);
  } else if (ptrs.size === 2 && mode !== 'walk') {
    const [a, b] = [...ptrs.values()];
    const before = Math.hypot(a.x - b.x, a.y - b.y);
    p.x = e.clientX; p.y = e.clientY;
    const after = Math.hypot(a.x - b.x, a.y - b.y);
    if (mode === 'doll') orbit.dist = Math.max(4, Math.min(28, orbit.dist * before / Math.max(1, after)));
    panBy(dx / 2, dy / 2);
    return;
  }
  p.x = e.clientX; p.y = e.clientY;
});
function panBy(dx, dy) {
  const k = (mode === 'plan' ? planDist() : orbit.dist) * 0.0016;
  const yaw = mode === 'plan' ? 0 : orbit.yaw;
  const s = Math.sin(yaw), c = Math.cos(yaw);
  orbit.tx -= (c * dx + s * dy) * k;
  orbit.tz -= (-s * dx + c * dy) * k;
  orbit.tx = Math.max(-2, Math.min(P.width + 2, orbit.tx)); orbit.tz = Math.max(-2, Math.min(P.depthWithBalcony + 2, orbit.tz));
}
function endPtr(e) {
  const p = ptrs.get(e.pointerId); ptrs.delete(e.pointerId);
  if (p && performance.now() - p.t < 300 && Math.hypot(e.clientX - p.sx, e.clientY - p.sy) < 8) tapAt(e.clientX, e.clientY);
  invalidate();
}
cv.addEventListener('pointerup', endPtr);
cv.addEventListener('pointercancel', e => ptrs.delete(e.pointerId));
cv.addEventListener('wheel', e => { orbit.dist = Math.max(4, Math.min(28, orbit.dist * (1 + e.deltaY * 0.001))); invalidate(); }, { passive: true });
// any button, slider or key may change the picture
for (const ev of ['click', 'input', 'keydown', 'keyup']) addEventListener(ev, () => invalidate(true), true);
window.resumeAll = () => invalidate(true);

// joystick for walking
const jb = $('joy'), jk = $('knob');
jb.addEventListener('pointerdown', e => { e.stopPropagation(); jb.setPointerCapture(e.pointerId); const r = jb.getBoundingClientRect(); joy = { id: e.pointerId, cx: r.left + r.width / 2, cy: r.top + r.height / 2, x: 0, y: 0 }; moveJoy(e); });
jb.addEventListener('pointermove', e => { if (joy && joy.id === e.pointerId) moveJoy(e); });
const endJoy = () => { joy = null; jk.style.transform = ''; };
jb.addEventListener('pointerup', endJoy); jb.addEventListener('pointercancel', endJoy);
function moveJoy(e) {
  let dx = e.clientX - joy.cx, dy = e.clientY - joy.cy; const L = Math.hypot(dx, dy), R = 46;
  if (L > R) { dx *= R / L; dy *= R / L; }
  joy.x = dx / R; joy.y = dy / R; jk.style.transform = `translate(${dx}px,${dy}px)`;
}
const keys = new Set();
addEventListener('keydown', e => keys.add(e.key)); addEventListener('keyup', e => keys.delete(e.key));

// tap a room in doll/plan view → walk into it
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
function tapAt(x, y) {
  if (tapOpenable(x, y)) return;
  if (mode === 'walk') { // tap the floor → walk there
    ndc.set(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
    const hit = new THREE.Vector3(); if (!ray.ray.intersectPlane(floorPlane, hit)) return;
    if (hit.distanceTo(camera.position) > 14) return;
    walker.goal = { x: hit.x, z: hit.z, stuck: 0 }; showMarker(hit.x, hit.z); return;
  }
  ndc.set(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const hit = new THREE.Vector3(); if (!ray.ray.intersectPlane(floorPlane, hit)) return;
  const room = P.rooms.find(r => r.rects.some(([x1, z1, x2, z2]) => hit.x >= x1 && hit.x <= x2 && hit.z >= z1 && hit.z <= z2));
  if (!room) return;
  showTip(x, y, room, hit);
}
let tipRoom = null, tipHit = null;
function showTip(x, y, room, hit) {
  const t = $('tip'); tipRoom = room; tipHit = hit.clone();
  const lab = roomLabels.find(l => l.name === room.name);
  t.innerHTML = `<b>${room.name}</b><span>${lab.area.toFixed(2).replace('.', ',')} м²</span><button id="goIn">Зайти сюди</button>`;
  t.hidden = false; t.style.left = Math.min(innerWidth - 190, x + 10) + 'px'; t.style.top = Math.max(10, y - 90) + 'px';
  $('goIn').onclick = () => {
    if (!blocked(tipHit.x, tipHit.z)) { walker.x = tipHit.x; walker.z = tipHit.z; }
    else { walker.x = room.label[0]; walker.z = room.label[1]; }
    // look towards the room's window side
    walker.yaw = Math.PI; walker.pitch = -0.05; hideTip(); setMode('walk');
  };
}
function hideTip() { $('tip').hidden = true; }

/* ================= walking helpers: target ring and minimap ================= */
const marker = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.22, 32), new THREE.MeshBasicMaterial({ color: 0xc9733a, transparent: true, opacity: 0.85, depthWrite: false }));
marker.rotation.x = -Math.PI / 2; marker.visible = false; scene.add(marker);
function showMarker(x, z) { marker.position.set(x, 0.02, z); marker.visible = true; }
function hideMarker() { marker.visible = false; }
const mm = $('minimap'), mx = mm.getContext('2d');
const MM_PAD = 8;
function mmScale() { const r = mm.getBoundingClientRect(); return { w: r.width, h: r.height, k: Math.min((r.width - MM_PAD * 2) / (P.width + 0.6), (r.height - MM_PAD * 2) / (P.depthWithBalcony + 0.6)) }; }
function drawMinimap() {
  const show = mode === 'walk'; mm.hidden = !show; if (!show) return;
  const { w, h, k } = mmScale(), dpr = Math.min(2, devicePixelRatio || 1);
  if (mm.width !== Math.round(w * dpr)) { mm.width = Math.round(w * dpr); mm.height = Math.round(h * dpr); }
  mx.setTransform(dpr, 0, 0, dpr, 0, 0); mx.clearRect(0, 0, w, h);
  const ox = MM_PAD + 0.3 * k, oz = MM_PAD + 0.3 * k, X = x => ox + x * k, Z = z => oz + z * k;
  for (const r of P.rooms) for (const [x1, z1, x2, z2] of r.rects) {
    const here = walker.x >= x1 && walker.x <= x2 && walker.z >= z1 && walker.z <= z2;
    mx.fillStyle = here ? 'rgba(201,115,58,.28)' : 'rgba(255,255,255,.55)'; mx.fillRect(X(x1), Z(z1), (x2 - x1) * k, (z2 - z1) * k);
  }
  mx.fillStyle = '#3a3f4a';
  for (const [x1, z1, x2, z2, f] of solids) if (!f) mx.fillRect(X(x1), Z(z1), Math.max(1, (x2 - x1) * k), Math.max(1, (z2 - z1) * k));
  // me: dot + view cone
  const px = X(walker.x), pz = Z(walker.z), a = walker.yaw;
  mx.fillStyle = 'rgba(201,115,58,.35)'; mx.beginPath(); mx.moveTo(px, pz);
  mx.arc(px, pz, 26, a - Math.PI / 2 - 0.6, a - Math.PI / 2 + 0.6); mx.closePath(); mx.fill();
  mx.fillStyle = '#c9733a'; mx.beginPath(); mx.arc(px, pz, 5, 0, 7); mx.fill();
  mx.strokeStyle = '#fff'; mx.lineWidth = 2; mx.stroke();
  if (walker.goal) { mx.strokeStyle = '#c9733a'; mx.beginPath(); mx.arc(X(walker.goal.x), Z(walker.goal.z), 4, 0, 7); mx.stroke(); }
}
mm.addEventListener('pointerdown', e => { // tap the minimap → jump there
  e.stopPropagation();
  const r = mm.getBoundingClientRect(), { k } = mmScale();
  const x = (e.clientX - r.left - MM_PAD) / k - 0.3, z = (e.clientY - r.top - MM_PAD) / k - 0.3;
  for (let rr = 0; rr < 1; rr += 0.05) for (let i = 0; i < 12; i++) { const tx = x + Math.cos(i * 0.52) * rr, tz = z + Math.sin(i * 0.52) * rr; if (!blocked(tx, tz)) { walker.x = tx; walker.z = tz; walker.goal = null; hideMarker(); invalidate(); return; } }
});

/* ================= size and socket tags ================= */
const fmt = v => v.toFixed(2).replace('.', ',');
const tags = []; // { pos, html, kind: 'dims' | 'elec', el }
const dimsG = new THREE.Group(); dimsG.visible = false; scene.add(dimsG);
const dimMat = new THREE.LineBasicMaterial({ color: 0xc9733a });
function dimLine(a, b, tick) { // a, b: Vector3; ticks across the line at both ends
  const pts = [a, b];
  if (tick) for (const p of [a, b]) { pts.push(p.clone().add(tick), p.clone().sub(tick)); }
  const geo = new THREE.BufferGeometry().setFromPoints(pts.length > 2 ? [a, b, pts[2], pts[3], pts[4], pts[5]] : pts);
  dimsG.add(new THREE.LineSegments(geo, dimMat));
}
function tag(pos, html, kind) { const el = document.createElement('div'); el.className = 'tag ' + kind; el.innerHTML = html; $('tags').appendChild(el); tags.push({ pos, el, kind }); }
for (const r of P.rooms) {
  const [x1, z1, x2, z2] = r.rects[0], y = 0.03;
  dimLine(new THREE.Vector3(x1 + 0.05, y, z1 + 0.25), new THREE.Vector3(x2 - 0.05, y, z1 + 0.25), new THREE.Vector3(0, 0, 0.08));
  tag(new THREE.Vector3((x1 + x2) / 2, y, z1 + 0.25), fmt(x2 - x1) + ' м', 'dims');
  dimLine(new THREE.Vector3(x1 + 0.25, y, z1 + 0.05), new THREE.Vector3(x1 + 0.25, y, z2 - 0.05), new THREE.Vector3(0.08, 0, 0));
  tag(new THREE.Vector3(x1 + 0.25, y, (z1 + z2) / 2), fmt(z2 - z1) + ' м', 'dims');
  if (r.name !== 'Балкон') {
    const hx = x2 - 0.3, hz = z2 - 0.3;
    dimLine(new THREE.Vector3(hx, 0, hz), new THREE.Vector3(hx, H, hz), new THREE.Vector3(0.08, 0, 0));
    tag(new THREE.Vector3(hx, H / 2, hz), 'стеля ' + fmt(H) + ' м', 'dims');
  }
}
for (const w of P.walls) for (const h of (w.holes || [])) {
  const isWin = h.type === 'win' || h.type === 'fixed', top = (isWin || h.type === 'balcony') ? P.winTop : 2.1, bottom = isWin ? P.winSill : 0;
  const mid = (w.t1 + w.t2) / 2, side = w.ext ? (w.t1 > 1 ? -0.1 : 0.1) : 0;
  const at = (a, y) => w.axis === 'x' ? new THREE.Vector3(a, y, mid + side * 1.5) : new THREE.Vector3(mid + side * 1.5, y, a);
  dimLine(at(h.a + 0.02, top + 0.06), at(h.b - 0.02, top + 0.06), new THREE.Vector3(0, 0.05, 0));
  dimLine(at(h.a + 0.12, bottom), at(h.a + 0.12, top), w.axis === 'x' ? new THREE.Vector3(0.05, 0, 0) : new THREE.Vector3(0, 0, 0.05));
  const name = h.type === 'door' ? (w.ext ? 'вхідні двері' : 'двері') : h.type === 'balcony' ? 'балконні двері' : 'вікно';
  tag(at((h.a + h.b) / 2, top + 0.14), `${name} ${fmt(h.b - h.a)} × ${fmt(top - bottom)} м`, 'dims');
}
for (const p of P.power) {
  const k = POWER[p.k], [nx, nz] = NORM[p.f];
  tag(new THREE.Vector3(p.x + nx * 0.12, k.h + 0.08, p.z + nz * 0.12), `${k.name.replace('Подвійна розетка над стільницею', 'Розетка над стільницею')} · <b>${k.note}</b>`, 'elec');
}
tag(new THREE.Vector3(7.57, 1.95, 0.15), 'Щиток · <b>160 см</b>', 'elec');
const tagRay = new THREE.Raycaster(); let tagFrame = 0, wallMeshes = null;
function drawTags(final) {
  // while walking, hide tags that are behind a wall (checked every few frames)
  const check = mode === 'walk' && (final || tagFrame++ % 8 === 0);
  if (check && !wallMeshes) { wallMeshes = []; wallsG.traverse(o => { if (o.isMesh && o.material !== M.glass) wallMeshes.push(o); }); }
  for (const t of tags) {
    const on = t.kind === 'dims' ? dimsMode : elecMode;
    if (!on) { t.el.style.display = 'none'; continue; }
    const dist = t.pos.distanceTo(camera.position);
    if (mode === 'walk' && dist > 7) { t.el.style.display = 'none'; continue; }
    if (check) { tagRay.set(camera.position, t.pos.clone().sub(camera.position).normalize()); tagRay.far = dist - 0.2; t.hid = tagRay.intersectObjects(wallMeshes, false).length > 0; }
    if (mode === 'walk' && t.hid) { t.el.style.display = 'none'; continue; }
    v3.copy(t.pos).project(camera);
    if (v3.z > 1 || Math.abs(v3.x) > 1.1 || Math.abs(v3.y) > 1.1) { t.el.style.display = 'none'; continue; }
    t.el.style.display = ''; t.el.style.transform = `translate(${(v3.x + 1) / 2 * innerWidth}px,${(1 - v3.y) / 2 * innerHeight}px) translate(-50%,-50%)`;
  }
}

/* ================= labels ================= */
const labelEls = roomLabels.map(l => { const d = document.createElement('div'); d.className = 'lbl'; d.innerHTML = `${l.name}<small>${l.area.toFixed(2).replace('.', ',')} м²</small>`; $('labels').appendChild(d); return d; });
const v3 = new THREE.Vector3();
function drawLabels() {
  const show = mode !== 'walk' && $('bLabels').classList.contains('on');
  roomLabels.forEach((l, i) => {
    const el = labelEls[i];
    if (!show) { el.style.display = 'none'; return; }
    v3.copy(l.pos).project(camera);
    if (v3.z > 1) { el.style.display = 'none'; return; }
    el.style.display = ''; el.style.transform = `translate(${(v3.x + 1) / 2 * innerWidth}px,${(1 - v3.y) / 2 * innerHeight}px) translate(-50%,-50%)`;
  });
  if (mode === 'walk') {
    const room = P.rooms.find(r => r.rects.some(([x1, z1, x2, z2]) => walker.x >= x1 && walker.x <= x2 && walker.z >= z1 && walker.z <= z2));
    $('where').textContent = room ? room.name : '';
  } else $('where').textContent = '';
}

/* ================= UI ================= */
document.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
$('bWalls').addEventListener('click', () => { lowWalls = !lowWalls; store.set('low', lowWalls); $('bWalls').classList.toggle('on', lowWalls); applyWalls(); });
$('bFinish').addEventListener('click', () => { $('sunp').hidden = true; openStyles(); });
$('bSun').addEventListener('click', openSun);
$('bLight').addEventListener('click', () => { evening = !evening; store.set('evening', evening); applyLight(); });
$('bLabels').addEventListener('click', () => { $('bLabels').classList.toggle('on'); store.set('labels', $('bLabels').classList.contains('on')); });
function setElec(on) { // electricity view: no furniture, every socket and switch visible with its height
  elecMode = on; powerG.visible = on; store.set('power', on); $('bPower').classList.toggle('on', on); $('legend').hidden = !on;
  if (interiorG) interiorG.visible = !on; fx.visible = !raw && !on;
  refreshAO(); invalidate(true);
}
$('bPower').addEventListener('click', () => setElec(!elecMode));
$('bDims').addEventListener('click', () => { dimsMode = !dimsMode; dimsG.visible = dimsMode; store.set('dims', dimsMode); $('bDims').classList.toggle('on', dimsMode); });
if (store.get('power', false) || Q.get('power')) setElec(true);
if (store.get('dims', false) || Q.get('dims')) $('bDims').click();
$('legend').innerHTML = Object.values(POWER).filter((v, i, a) => a.findIndex(o => o.c === v.c && o.h === v.h) === i)
  .map(v => `<div><i style="background:#${v.c.toString(16).padStart(6, '0')}"></i>${v.name.replace('Подвійна розетка над стільницею', 'Розетки кухні').replace('Подвійна розетка', 'Розетка')}<em>${v.note}</em></div>`).join('');
$('bMore').addEventListener('click', () => $('panel').classList.add('open'));
$('close').addEventListener('click', () => $('panel').classList.remove('open'));
$('bWalls').classList.toggle('on', lowWalls);
$('bLabels').classList.toggle('on', store.get('labels', true));
function renderDiary() {
  const log = (window.CHANGELOG || []).slice().sort((a, b) => b.day - a.day);
  $('diary').innerHTML = log.map(e => `<div class="entry"><span class="d">ДЕНЬ ${e.day} · ${e.date.split('-').reverse().join('.')}</span><b>${e.title}</b><p>${e.text}</p></div>`).join('');
  if (log.length) $('dayline').textContent = `День ${log[0].day} · щоранку щось нове`;
  const v = app ? app.version() : ''; if (v) $('foot').textContent = `Версія ${v} · Лабораторія Claude`;
  const total = roomLabels.reduce((s, l) => s + l.area * (l.name === 'Балкон' ? 0.3 : 1), 0);
  $('facts').innerHTML = roomLabels.map(l => `<div class="row"><span>${l.name}</span><b>${l.area.toFixed(2).replace('.', ',')} м²</b></div>`).join('') +
    `<div class="row sum"><span>Разом (балкон × 0,3)</span><b>${total.toFixed(1).replace('.', ',')} м²</b></div><div class="row"><span>За документом</span><b>${P.officialArea} м²</b></div>`;
}

function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  if (mode === 'doll') orbit.dist = Math.max(orbit.dist, camera.aspect < 1 ? 17 : 13);
  invalidate();
}
addEventListener('resize', resize);

/* ================= loop ================= */
setMode(mode); applyLight(); applyFinish(); renderDiary();
if (LAYOUT === 'closet') document.querySelector('.title p').textContent = '77,3 м² · дві кімнати · з гардеробною';
if (Q.get('dist')) orbit.dist = +Q.get('dist');
let last = performance.now(), streak = 0, ema = 16, tuneN = 0;
// keeps moving frames smooth: if they get slow, the moving resolution steps down; if there is headroom, it creeps back up
function tune(ms) {
  if (++streak < 6) return; // skip the frames right after a resolution switch
  ema += (Math.min(ms, 100) - ema) * 0.08;
  if (++tuneN < 45) return; tuneN = 0;
  if (quality === 'high') return;
  if (ema > 24 && movePR > 0.6) { prCeil = movePR * 0.97; movePR = Math.max(0.6, movePR * 0.87); store.set('movePR', movePR); ema = 18; }
  else if (ema > 30 && quality === 'auto' && !lite && ++slowRuns >= 3) { store.set('autoLite', true); setQuality('auto'); } // still slow at the lowest resolution → simpler shading
  else if (ema < 17.8 && movePR < prCeil - 0.02) { movePR = Math.min(prCeil, movePR * 1.07); store.set('movePR', movePR); }
}
let slowRuns = 0;
function setQuality(q, init) {
  quality = q;
  if (!init) { store.set('q', q); if (q !== 'auto') store.set('autoLite', false); }
  lite = q === 'lite' || (q === 'auto' && store.get('autoLite', false));
  if (q === 'high') movePR = MOVE_MAX; else if (q === 'lite') movePR = Math.min(movePR, 1);
  slowRuns = 0; ema = 16; tuneN = 0;
  document.querySelectorAll('[data-q]').forEach(b => b.classList.toggle('on', b.dataset.q === q));
  $('qNote').textContent = q === 'auto' ? (lite ? 'Авто: планшету було важко, тож увімкнено легший малюнок.' : 'Авто: поки рухаєшся — малюнок трохи простіший, зупинишся — стає чітким. Саме підлаштовується під планшет.')
    : q === 'lite' ? 'Легка: без відблисків і м\'якого світла з вікон — для слабкого планшета або щоб менше грівся.' : 'Найкраща: нічого не спрощується навіть у русі.';
  applyLight();
}
document.querySelectorAll('[data-q]').forEach(b => b.addEventListener('click', () => setQuality(b.dataset.q)));
let frames = 0;
function loop(t) {
  requestAnimationFrame(loop);
  const rawDt = t - last, dt = Math.min(0.05, rawDt / 1000); last = t;
  let moving = ptrs.size > 0 || !!joy;
  if (mode === 'walk') {
    let fx = 0, fz = 0;
    if (joy) { fx = joy.x; fz = joy.y; }
    if (keys.has('w') || keys.has('ArrowUp')) fz = -1; if (keys.has('s') || keys.has('ArrowDown')) fz = 1;
    if (keys.has('a') || keys.has('ArrowLeft')) fx = -1; if (keys.has('d') || keys.has('ArrowRight')) fx = 1;
    if (fx || fz) {
      walker.goal = null; hideMarker(); moving = true;
      const sp = 1.6 * dt, s = Math.sin(walker.yaw), c = Math.cos(walker.yaw);
      walk((c * fx - s * fz) * sp, (s * fx + c * fz) * sp); walker.bob += dt * 9 * Math.min(1, Math.hypot(fx, fz));
    } else if (walker.goal) {
      moving = true;
      const g = walker.goal, dx = g.x - walker.x, dz = g.z - walker.z, L = Math.hypot(dx, dz);
      // turn smoothly towards the goal, then step
      const want = Math.atan2(dx, -dz); let dy = ((want - walker.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      walker.yaw += dy * Math.min(1, dt * 5);
      if (L < 0.15) { walker.goal = null; hideMarker(); }
      else {
        const sp = Math.min(L, 1.4 * dt) * (Math.abs(dy) > 1.2 ? 0.3 : 1), ox = walker.x, oz = walker.z;
        walk(dx / L * sp, dz / L * sp); walker.bob += dt * 9;
        if (Math.hypot(walker.x - ox, walker.z - oz) < sp * 0.2) { if (++g.stuck > 20) { walker.goal = null; hideMarker(); } } else g.stuck = 0;
      }
    }
  } else if (mode === 'doll' && !ptrs.size && Q.get('still') == null && idle(t)) { orbit.yaw += dt * 0.04; moving = true; }
  if (animateOpenables(dt)) { moving = true; shadowDirty = true; }
  if (moving) lastActive = t;
  // moving → lighter resolution; a moment after everything stops → one sharp frame, then nothing is drawn until something changes
  const pr = t - lastActive < 200 ? movePR : stillPR();
  if (Math.abs(pr - curPR) > 0.01) { curPR = pr; renderer.setPixelRatio(pr); dirty = Math.max(dirty, 1); }
  if (!moving && dirty <= 0) { streak = 0; return; }
  if (dirty > 0) dirty--;
  if (moving) tune(rawDt); else streak = 0;
  updateCamera();
  if (shadowDirty) { renderer.shadowMap.needsUpdate = true; shadowDirty = false; }
  renderer.render(scene, camera); frames++;
  drawLabels(); drawTags(!moving); drawMinimap();
}
let lastTouch = 0; cv.addEventListener('pointerdown', () => lastTouch = performance.now());
const idle = t => t - lastTouch > 8000;
setQuality(quality, true);
requestAnimationFrame(loop);
setInterval(() => store.set('yaw', orbit.yaw), 5000);
window.__kv = { setMode, walker, orbit, solids, P, openables, stats: () => ({ calls: renderer.info.render.calls, tris: renderer.info.render.triangles, geos: renderer.info.memory.geometries, tex: renderer.info.memory.textures, progs: renderer.info.programs.length, frames, free: (x, z) => !blocked(x, z), pr: curPR, movePR, quality, lite }), invalidate, renderer, scene, sun };
