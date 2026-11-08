// «Квартира» — 3D model of the apartment from its floor plan. three.js only; build with ../build.sh.
import * as THREE from '../../../ruina/web/vendor/three.module.js';
import { PLAN } from './plan.js';
import { STYLES, extraFloors, buildInterior } from './interior.js';
import { sunAt, kyivDate, dirTo, sunWindow, hhmm, buildSurroundings } from './sun.js';

const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search);
const app = window.Kvartyra || null;
const store = {
  get(k, d) { try { const v = localStorage.getItem('kv.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('kv.' + k, JSON.stringify(v)); } catch (e) {} }
};
const H = PLAN.height;

/* ================= renderer & scene ================= */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
document.body.prepend(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 200);

const hemi = new THREE.HemisphereLight(0xdfe9ff, 0x6b5a48, 1.2);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff1dc, 2.4);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 100 });
sun.shadow.bias = -0.0008;
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
  return canvasTex(512, 512, (g, w, h) => {
    const r = rnd(seed), ph = 64;
    for (let y = 0; y < h; y += ph) {
      let x = -r() * 300;
      while (x < w) {
        const len = 260 + r() * 200, l = (r() - 0.5) * 14;
        g.fillStyle = `hsl(${base[0] + (r() - 0.5) * 4},${base[1]}%,${base[2] + l}%)`;
        g.fillRect(x, y, len, ph);
        g.globalAlpha = 0.08; g.strokeStyle = '#000';
        for (let k = 0; k < 6; k++) { g.beginPath(); const yy = y + 6 + r() * (ph - 12); g.moveTo(x, yy); g.bezierCurveTo(x + len * 0.3, yy + (r() - 0.5) * 8, x + len * 0.7, yy + (r() - 0.5) * 8, x + len, yy); g.stroke(); }
        g.globalAlpha = 0.35; g.fillStyle = '#2a1a0c'; g.fillRect(x, y, 2, ph); g.globalAlpha = 1;
        x += len;
      }
      g.fillStyle = 'rgba(30,18,8,.4)'; g.fillRect(0, y, w, 2);
    }
  }, 0.7, 0.7);
}
function tileTex(c1, c2, n) {
  return canvasTex(256, 256, (g, w, h) => {
    const s = w / n, r = rnd(7);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      g.fillStyle = (i + j) % 2 ? c1 : c2; g.fillRect(i * s, j * s, s, s);
      g.globalAlpha = 0.06; g.fillStyle = r() > 0.5 ? '#fff' : '#000'; g.fillRect(i * s, j * s, s, s); g.globalAlpha = 1;
    }
    g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 2;
    for (let i = 0; i <= n; i++) { g.beginPath(); g.moveTo(i * s, 0); g.lineTo(i * s, h); g.moveTo(0, i * s); g.lineTo(w, i * s); g.stroke(); }
  }, 1.6, 1.6);
}
function concreteTex() {
  return canvasTex(512, 512, (g, w, h) => {
    const r = rnd(5); g.fillStyle = '#a3a29d'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { const v = 140 + r() * 50 | 0; g.fillStyle = `rgba(${v},${v},${v - 3},${0.04 + r() * 0.06})`; const s = 1 + r() * 7; g.fillRect(r() * w, r() * h, s, s); }
    for (let i = 0; i < 40; i++) { const v = 120 + r() * 70 | 0; const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1); gr.addColorStop(0, `rgba(${v},${v},${v},.10)`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.save(); g.translate(r() * w, r() * h); g.scale(40 + r() * 90, 40 + r() * 90); g.fillStyle = gr; g.fillRect(-1, -1, 2, 2); g.restore(); }
  }, 0.4, 0.4);
}
const FLOORS = {
  concrete: concreteTex(),
  oak: woodTex([32, 45, 58], 11),
  light: woodTex([36, 40, 70], 23),
  walnut: woodTex([26, 38, 44], 37),
  tile: tileTex('#d9dde0', '#cfd4d8', 4),
  stone: tileTex('#bfb6aa', '#b5ab9e', 3)
};

Object.assign(FLOORS, extraFloors(canvasTex, woodTex, tileTex, rnd));

/* ================= build the apartment ================= */
const M = {
  wall: new THREE.MeshStandardMaterial({ color: 0xf8f7f4, roughness: 0.92 }),
  wallTop: new THREE.MeshStandardMaterial({ color: 0x3b3f4a, roughness: 0.8 }),
  ext: new THREE.MeshStandardMaterial({ color: 0xe6ddd0, roughness: 0.95 }),
  glass: new THREE.MeshPhysicalMaterial({ color: 0xbfe3ff, transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0, depthWrite: false }),
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

function box(x1, z1, x2, z2, y1, y2, mat, parent, opts = {}) {
  const w = x2 - x1, d = z2 - z1, h = y2 - y1;
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
  m.castShadow = opts.cast !== false; m.receiveShadow = true;
  (parent || wallsG).add(m);
  return m;
}
// a straight wall along X (z1..z2 is its thickness) or along Z, with window / door holes
function wall(axis, t1, t2, from, to, holes, mat) {
  holes = (holes || []).slice().sort((a, b) => a.a - b.a);
  const seg = (a, b, y1, y2, m) => axis === 'x' ? box(a, t1, b, t2, y1, y2, m) : box(t1, a, t2, b, y1, y2, m);
  const solid = (a, b) => solids.push(axis === 'x' ? [a, t1, b, t2] : [t1, a, t2, b]);
  let p = from;
  for (const h of holes) {
    if (h.a > p) { seg(p, h.a, 0, H, mat); solid(p, h.a); }
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
  if (to > p) { seg(p, to, 0, H, mat); solid(p, to); }
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
function animateOpenables(dt) {
  for (const o of openables) {
    const t = o.open ? 1 : 0; if (o.cur === t) continue;
    o.cur += Math.sign(t - o.cur) * Math.min(Math.abs(t - o.cur), dt * 1.6);
    const e = o.cur * o.cur * (3 - 2 * o.cur); o.g.rotation[o.axis || 'y'] = o.a0 + (o.a1 - o.a0) * e;
  }
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
  const tex = FLOORS[r.floor].clone(); tex.needsUpdate = true;
  for (const [x1, z1, x2, z2] of r.rects) {
    const t = tex.clone(); t.repeat.set((x2 - x1) * 0.7, (z2 - z1) * 0.7); t.needsUpdate = true;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(x2 - x1, z2 - z1), new THREE.MeshStandardMaterial({ map: t, roughness: r.floor === 'tile' ? 0.35 : 0.75 }));
    const tc = FLOORS.concrete.clone(); tc.repeat.set((x2 - x1) * 0.4, (z2 - z1) * 0.4); tc.needsUpdate = true;
    floorMats.push({ m, room: r.name, w: x2 - x1, h: z2 - z1, fin: m.material, raw: new THREE.MeshStandardMaterial({ map: tc, roughness: 0.95 }) });
    m.rotation.x = -Math.PI / 2; m.position.set((x1 + x2) / 2, 0.001, (z1 + z2) / 2); m.receiveShadow = true;
    house.add(m);
  }
  const area = r.area || r.rects.reduce((s, [x1, z1, x2, z2]) => s + (x2 - x1) * (z2 - z1), 0);
  roomLabels.push({ name: r.name, area, pos: new THREE.Vector3(r.label[0], 0.05, r.label[1]) });
}
// what is really there: a radiator in front of every window; the only railing is the balcony's
const railMat = new THREE.MeshStandardMaterial({ color: 0x1f2226, roughness: 0.5, metalness: 0.4 });
const radMat = new THREE.MeshStandardMaterial({ color: 0xf6f6f4, roughness: 0.45 });
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
  box(c - rw / 2, w.t1 - 0.17, c + rw / 2, w.t1 - 0.07, 0.12, 0.62, radMat, house);
  solids.push([c - rw / 2, w.t1 - 0.17, c + rw / 2, w.t1 - 0.07]);
}

// fixtures: kitchen, bathroom
const fx = new THREE.Group(); house.add(fx);
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
    box(x1, z1, x2, z2, 0, H, M.wall); solids.push([x1, z1, x2, z2]);
  } else if (f.type === 'bath') {
    box(x1, z1, x2, z2, 0, 0.56, M.white, fx);
    box(x1 + 0.08, z1 + 0.08, x2 - 0.08, z2 - 0.08, 0.4, 0.565, new THREE.MeshStandardMaterial({ color: 0xcfe6ef, roughness: 0.1 }), fx, { cast: false });
    solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'toilet') {
    const cx = (x1 + x2) / 2, cz = (z1 + z2) / 2;
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.16, 0.42, 20), M.white);
    bowl.position.set(cx, 0.21, cz); bowl.castShadow = true; fx.add(bowl);
    const f2 = f.back;
    box(f2[0], f2[1], f2[2], f2[3], 0.3, 0.8, M.white, fx);
    solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'sink') {
    box(x1, z1, x2, z2, 0, 0.8, M.cabinet, fx);
    box(x1, z1, x2, z2, 0.8, 0.86, M.white, fx);
    solids.push([x1, z1, x2, z2, 1]);
  } else if (f.type === 'panel') {
    box(x1, z1, x2, z2, 1.35, 1.85, M.frame, wallsG);
  }
}

// ceiling lamps (lit in the evening)
const lamps = [];
for (const [x, z] of P.lamps) {
  const l = new THREE.PointLight(0xffd29a, 0, 6, 1.6); l.position.set(x, H - 0.25, z); house.add(l);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 8), new THREE.MeshBasicMaterial({ color: 0x777777 }));
  bulb.position.copy(l.position); house.add(bulb);
  lamps.push({ l, bulb });
}
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
const NORM = { N: [0, -1], S: [0, 1], E: [1, 0], W: [-1, 0] };
const plateGeo = new THREE.BoxGeometry(0.09, 0.09, 0.015), dotGeo = new THREE.SphereGeometry(0.032, 12, 8);
for (const p of P.power) {
  const k = POWER[p.k], [nx, nz] = NORM[p.f];
  const plate = new THREE.Mesh(plateGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }));
  const wide = p.k === 'socket2' || p.k === 'kitchen' || p.k === 'switch2';
  if (wide) plate.scale.x = 1.9;
  plate.position.set(p.x + nx * 0.008, k.h, p.z + nz * 0.008);
  if (nx) plate.rotation.y = Math.PI / 2;
  const dot = new THREE.Mesh(dotGeo, new THREE.MeshBasicMaterial({ color: k.c }));
  dot.position.set(p.x + nx * 0.06, k.h, p.z + nz * 0.06);
  powerG.add(plate, dot);
}
// ceiling — only while walking, so the doll-house view stays open
const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(P.width + 0.6, P.depth + 0.6), new THREE.MeshStandardMaterial({ color: 0xfbfaf7, roughness: 1, emissive: 0x9c9a96 }));
ceiling.rotation.x = Math.PI / 2; ceiling.position.set(CX, H, CZ); ceiling.visible = false; house.add(ceiling);
// ground outside
const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), M.ground);
ground.rotation.x = -Math.PI / 2; ground.position.set(CX, -0.02, CZ); ground.receiveShadow = true; ground.visible = false; scene.add(ground);
// outside: the courtyard and the building across it; our floor is the 3rd (≈6,4 m above the ground)
const SUN = { orient: store.get('orient', 150), gap: store.get('gap', 18), live: true, y: 0, m: 0, d: 0, h: 12 };
if (store.get('sunV', 0) < 2) { SUN.orient = 150; SUN.gap = 18; store.set('orient', 150); store.set('gap', 18); store.set('sunV', 2); } // checked against the satellite map: windows face SE ≈150°
let outside = null;
function buildOutside() {
  if (outside) { scene.remove(outside.group); outside.group.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
  outside = buildSurroundings(P, { below: 6.45, gap: SUN.gap, floors: 4 });
  scene.add(outside.group);
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
  wallsG.scale.y = s; ceiling.visible = mode === 'walk';
  if (interiorG) interiorG.traverse(o => { if (o.userData.wallLike) { o.scale.y = s; o.position.y = (o.geometry.parameters.height / 2 + 0.02) * s; } });
  for (const l of lamps) l.bulb.visible = mode === 'walk' || !lowWalls;
}
// interior look: 'raw' (as it is now), 'base' (first finished version) or a designed style from interior.js
let look = Q.get('look') || (Q.get('raw') === '0' ? 'base' : Q.get('raw') === '1' ? 'raw' : null) || store.get('look', store.get('raw', true) ? 'raw' : 'base');
if (!STYLES.some(st => st.id === look)) look = 'raw';
let raw = look === 'raw', interiorG = null;
const DEF = { wall: M.wall.color.getHex(), door: M.door.color.getHex(), cabinet: M.cabinet.color.getHex(), counter: M.counter.color.getHex() };
const styleFloorMats = new Map();
function styleFloor(f, key) {
  const k = key + ':' + f.w.toFixed(2) + ':' + f.h.toFixed(2);
  if (!styleFloorMats.has(k)) {
    const t = FLOORS[key].clone(); t.repeat.set(f.w * (key === 'polished' ? 0.4 : 0.7), f.h * (key === 'polished' ? 0.4 : 0.7)); t.needsUpdate = true;
    styleFloorMats.set(k, new THREE.MeshStandardMaterial({ map: t, roughness: key.startsWith('tile') ? 0.3 : key === 'polished' ? 0.4 : 0.7 }));
  }
  return styleFloorMats.get(k);
}
function applyFinish() {
  const S = STYLES.find(st => st.id === look); raw = look === 'raw';
  const styled = !!S.wall;
  for (const f of floorMats) f.m.material = raw ? f.raw : styled ? styleFloor(f, S.floors[f.room] || 'oak') : f.fin;
  fx.visible = !raw; for (const d of innerDoors) d.visible = !raw;
  if (raw) for (const o of openables) if (o.inner && !o.open) toggleOpenable(o);
  M.wall.color.set(styled ? S.wall : DEF.wall); M.door.color.set(styled ? S.door : DEF.door);
  M.cabinet.color.set(styled ? S.cabinet : DEF.cabinet); M.counter.color.set(styled ? S.counter : DEF.counter);
  if (interiorG) { house.remove(interiorG); interiorG.traverse(o => { if (o.geometry) o.geometry.dispose(); }); interiorG = null; }
  for (let i = solids.length - 1; i >= 0; i--) if (solids[i][4] === 2) solids.splice(i, 1);
  if (styled) { interiorG = buildInterior(S, P, solids); house.add(interiorG); }
  for (const l of lamps) l.l.color.set(styled ? S.lamp : 0xffd29a);
  $('vFinish').textContent = S.short; $('bFinish').classList.toggle('on', look !== 'raw');
  applyWalls();
}
function openStyles() {
  const p = $('styles');
  if (!p.hidden) { p.hidden = true; return; }
  p.innerHTML = STYLES.map(st => `<button class="chip${st.id === look ? ' on' : ''}" data-id="${st.id}"><b>${st.name}</b><span>${st.sub}</span></button>`).join('');
  p.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { look = c.dataset.id; store.set('look', look); applyFinish(); p.hidden = true; }));
  p.hidden = false;
}
const SKY_DAY = new THREE.Color(0xcfe0ee), SKY_DUSK = new THREE.Color(0xe8b48a), SKY_NIGHT = new THREE.Color(0x0e1222);
function applyLight() {
  const st = sunAt(kyivDate(SUN.y, SUN.m, SUN.d, SUN.h));
  const el = evening ? -20 : st.el, day = THREE.MathUtils.smoothstep(el, -6, 12);
  const sky = SKY_NIGHT.clone().lerp(SKY_DUSK, THREE.MathUtils.smoothstep(el, -8, 2)).lerp(SKY_DAY, THREE.MathUtils.smoothstep(el, 2, 18));
  scene.background = sky; scene.fog = new THREE.Fog(sky, 60, 160);
  hemi.intensity = 0.18 + 1.0 * day;
  const night = evening || el < -4;
  document.body.classList.toggle('night', night);
  sun.intensity = el > 0 ? 2.8 * THREE.MathUtils.smoothstep(el, 0, 10) : 0;
  sun.color.setHSL(0.09, 0.9, 0.55 + 0.4 * THREE.MathUtils.smoothstep(el, 0, 25));
  sun.position.copy(dirTo(st.az, Math.max(el, 1), SUN.orient).multiplyScalar(45)).add(sun.target.position);
  const lampsOn = evening || el < 2;
  for (const { l, bulb } of lamps) { l.intensity = lampsOn ? 3.2 : 0; bulb.material.color.set(lampsOn ? 0xffe6b8 : 0x8c8c8c); }
  ceiling.material.emissive.set(night ? 0x1a1814 : new THREE.Color(0x9c9a96).multiplyScalar(0.3 + 0.7 * day));
  M.wall.emissive.set(night ? 0x000000 : new THREE.Color(0x3a3936).multiplyScalar(day));
  $('bLight').classList.toggle('on', evening);
  $('vLight').textContent = evening ? 'Вечір' : 'День';
  $('vSun').textContent = hhmm(SUN.h); $('bSun').title = SUN.d + ' ' + MNAMES[SUN.m];
  outside.setSeason(SUN.m);
  if (!$('sunp').hidden) { sunPanelText(st); if ($('sunYear')) { $('sunYear').innerHTML = sunYearHTML(); $('sunYear').querySelectorAll('[data-m]').forEach(el => el.onclick = () => { SUN.m = +el.dataset.m; SUN.d = 21; SUN.live = false; p2close(); applyLight(); openSun(); }); } }
  if ($('sunFacts')) $('sunFacts').innerHTML = sunFactsHTML();
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
  document.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
  $('joy').hidden = m !== 'walk'; $('bWalls').hidden = m === 'walk';
  if (m === 'plan') { orbit.tx = CX + 0.6; orbit.tz = P.depthWithBalcony / 2 - 0.3; } else if (m === 'doll') { orbit.tx = CX; orbit.tz = CZ + 0.3; }
  applyWalls(); resize();
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
  camera.updateProjectionMatrix();
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
}
cv.addEventListener('pointerup', endPtr);
cv.addEventListener('pointercancel', e => ptrs.delete(e.pointerId));
cv.addEventListener('wheel', e => { orbit.dist = Math.max(4, Math.min(28, orbit.dist * (1 + e.deltaY * 0.001))); }, { passive: true });

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
  for (let rr = 0; rr < 1; rr += 0.05) for (let i = 0; i < 12; i++) { const tx = x + Math.cos(i * 0.52) * rr, tz = z + Math.sin(i * 0.52) * rr; if (!blocked(tx, tz)) { walker.x = tx; walker.z = tz; walker.goal = null; hideMarker(); return; } }
});

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
$('bPower').addEventListener('click', () => { powerG.visible = !powerG.visible; store.set('power', powerG.visible); $('bPower').classList.toggle('on', powerG.visible); $('legend').hidden = !powerG.visible; });
if (store.get('power', false) || Q.get('power')) $('bPower').click();
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
}
addEventListener('resize', resize);

/* ================= loop ================= */
setMode(mode); applyLight(); applyFinish(); renderDiary();
if (Q.get('dist')) orbit.dist = +Q.get('dist');
let last = performance.now();
function loop(t) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (t - last) / 1000); last = t;
  if (mode === 'walk') {
    let fx = 0, fz = 0;
    if (joy) { fx = joy.x; fz = joy.y; }
    if (keys.has('w') || keys.has('ArrowUp')) fz = -1; if (keys.has('s') || keys.has('ArrowDown')) fz = 1;
    if (keys.has('a') || keys.has('ArrowLeft')) fx = -1; if (keys.has('d') || keys.has('ArrowRight')) fx = 1;
    if (fx || fz) {
      walker.goal = null;
      const sp = 1.6 * dt, s = Math.sin(walker.yaw), c = Math.cos(walker.yaw);
      walk((c * fx - s * fz) * sp, (s * fx + c * fz) * sp); walker.bob += dt * 9 * Math.min(1, Math.hypot(fx, fz));
    } else if (walker.goal) {
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
  } else if (mode === 'doll' && !ptrs.size && Q.get('still') == null && idle(t)) orbit.yaw += dt * 0.04;
  animateOpenables(dt);
  updateCamera();
  renderer.render(scene, camera);
  drawLabels(); drawMinimap();
}
let lastTouch = 0; cv.addEventListener('pointerdown', () => lastTouch = performance.now());
const idle = t => t - lastTouch > 8000;
requestAnimationFrame(loop);
setInterval(() => store.set('yaw', orbit.yaw), 5000);
window.__kv = { setMode, walker, orbit, solids, P, openables };
