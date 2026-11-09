// «Руйнівник» — 3D destruction game. three.js renders, cannon-es simulates; build with ../build.sh.
import * as THREE from '../vendor/three.module.js';
import * as CANNON from '../vendor/cannon/cannon-es.ts';

const app = window.Ruina || null;
const $ = id => document.getElementById(id);
const store = {
  get(k, d) { try { const v = localStorage.getItem('ruina.' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('ruina.' + k, JSON.stringify(v)); } catch (e) {} }
};
const rnd = Math.random, rr = (a, b) => a + (b - a) * rnd();

/* ================= renderer, scene, light ================= */
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xcfd9e6, 70, 220);
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 600);

{ // sky dome: warm horizon, deep blue top
  const g = new THREE.SphereGeometry(400, 32, 16), c = [], top = new THREE.Color(0x3d6fb3), mid = new THREE.Color(0xa9c6e6), hor = new THREE.Color(0xf3d9b8);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i) / 400, col = y > 0.15 ? mid.clone().lerp(top, Math.min(1, (y - 0.15) / 0.6)) : hor.clone().lerp(mid, Math.max(0, (y + 0.05) / 0.2)); c.push(col.r, col.g, col.b); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  scene.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false })));
}
scene.add(new THREE.HemisphereLight(0xdbe8ff, 0x6a5a45, 1.1));
const sun = new THREE.DirectionalLight(0xfff1dd, 2.6);
sun.position.set(30, 45, 20);
sun.castShadow = true;
sun.shadow.mapSize.set(1536, 1536);
Object.assign(sun.shadow.camera, { left: -32, right: 32, top: 32, bottom: -32, near: 1, far: 140 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.02;
scene.add(sun);
const flash = new THREE.PointLight(0xffb060, 0, 40, 1.6);
scene.add(flash);

/* ================= physics ================= */
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0), allowSleep: true });
world.broadphase = new CANNON.SAPBroadphase(world);
world.solver.iterations = 9;
world.defaultContactMaterial.friction = 0.6;
world.defaultContactMaterial.restitution = 0.04;

/* ================= block types ================= */
const TYPES = {
  brick:    { color: 0xb4553d, dens: 18, v: 0.10 },
  concrete: { color: 0xa3a39d, dens: 24, v: 0.05 },
  wood:     { color: 0x9a6a3e, dens: 7,  v: 0.10 },
  steel:    { color: 0x5b6574, dens: 40, v: 0.04, metal: true },
  glass:    { color: 0xa9dcf2, dens: 10, v: 0.02, glass: true },
  stone:    { color: 0xcdb68b, dens: 20, v: 0.08 },
  car:      { color: 0xd8463a, dens: 6,  v: 0.25 }
};
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
let meshes = {}, blocks = [], groundBody = null, groundGroup = null, extras = [];

function makeMaterial(t) {
  const T = TYPES[t];
  if (T.glass) return new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.38, depthWrite: false });
  return new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: T.metal ? 0.45 : 0.85, metalness: T.metal ? 0.6 : 0.0 });
}

/* level-building collects specs first, then makes one InstancedMesh per type */
let specs = [];
function box(type, x, y, z, sx, sy, sz, ry = 0) { specs.push({ type, x, y, z, sx, sy, sz, ry }); }

function materialize() {
  const byType = {};
  for (const s of specs) (byType[s.type] = byType[s.type] || []).push(s);
  const tmpQ = new THREE.Quaternion(), col = new THREE.Color();
  for (const type in byType) {
    const list = byType[type], T = TYPES[type];
    const m = new THREE.InstancedMesh(boxGeo, makeMaterial(type), list.length);
    m.castShadow = !T.glass; m.receiveShadow = true; m.frustumCulled = false;
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(m); meshes[type] = m;
    list.forEach((s, idx) => {
      const vol = s.sx * s.sy * s.sz;
      const body = new CANNON.Body({ mass: Math.max(0.3, vol * T.dens), shape: new CANNON.Box(new CANNON.Vec3(s.sx / 2, s.sy / 2, s.sz / 2)) });
      body.position.set(s.x, s.y, s.z);
      body.quaternion.setFromEuler(0, s.ry, 0);
      body.sleepSpeedLimit = 0.22; body.sleepTimeLimit = 0.5;
      body.linearDamping = 0.03; body.angularDamping = 0.08;
      world.addBody(body); body.sleep();
      const b = { body, type, mesh: m, idx, size: new THREE.Vector3(s.sx, s.sy, s.sz), start: new THREE.Vector3(s.x, s.y, s.z), startQ: body.quaternion.clone(), gone: false, glass: !!T.glass };
      body.userData = b;
      if (b.glass) body.addEventListener('collide', glassHit);
      body.addEventListener('collide', impact);
      blocks.push(b);
      const base = new THREE.Color(T.color); const k = 1 + (rnd() - 0.5) * 2 * T.v;
      if (type === 'car') base.setHSL(rnd(), 0.55, 0.5);
      col.setRGB(base.r * k, base.g * k, base.b * k);
      m.setColorAt(idx, col);
      syncBlock(b, tmpQ);
    });
    m.instanceColor.needsUpdate = true;
  }
  specs = [];
}
const _m = new THREE.Matrix4(), _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _zero = new THREE.Vector3(0, 0, 0);
function syncBlock(b) {
  if (b.gone) _m.compose(_p.set(0, -999, 0), _q.identity(), _zero);
  else _m.compose(_p.copy(b.body.position), _q.copy(b.body.quaternion), b.size);
  b.mesh.setMatrixAt(b.idx, _m);
}

/* ================= ground ================= */
const grassMat = new THREE.MeshStandardMaterial({ color: 0x7c9a57, roughness: 1 });
const dirtMat = new THREE.MeshStandardMaterial({ color: 0x6b5a45, roughness: 1 });
function makeGround(river) {
  groundBody = new CANNON.Body({ type: CANNON.Body.STATIC, mass: 0 });   // becomes kinematic only while the earth shakes
  groundGroup = new THREE.Group(); scene.add(groundGroup);
  const add = (hx, hy, hz, x, y, z, mat) => {
    groundBody.addShape(new CANNON.Box(new CANNON.Vec3(hx, hy, hz)), new CANNON.Vec3(x, y, z));
    const mesh = new THREE.Mesh(boxGeo, mat); mesh.scale.set(hx * 2, hy * 2, hz * 2); mesh.position.set(x, y, z); mesh.receiveShadow = true; groundGroup.add(mesh);
  };
  if (river) {
    add(95, 5, 100, -9 - 95, -5, 0, grassMat); add(95, 5, 100, 9 + 95, -5, 0, grassMat);
    add(9, 2, 100, 0, -8, 0, dirtMat);
    const water = new THREE.Mesh(new THREE.PlaneGeometry(18, 200), new THREE.MeshStandardMaterial({ color: 0x3f86b8, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.78 }));
    water.rotation.x = -Math.PI / 2; water.position.y = -3.2; groundGroup.add(water);
  } else add(150, 5, 150, 0, -5, 0, grassMat);
  world.addBody(groundBody);
}

/* ================= levels ================= */
const LEVELS = [
  { id: 'pyramid', name: 'Піраміда', desc: 'Розминка: кам\'яні сходи до неба', ammo: { ball: 6, bomb: 3, meteor: 0, quake: 0, crane: 1 }, goal: 0.6, cam: [24, 14, 3], build: pyramid },
  { id: 'house', name: 'Будинок', desc: 'Цегла, бетонні перекриття і скло', ammo: { ball: 5, bomb: 2, meteor: 1, quake: 0, crane: 1 }, goal: 0.7, cam: [24, 9, 3.5], build: house },
  { id: 'tower', name: 'Вежа', desc: 'Кругла цегляна вежа з зубцями', ammo: { ball: 5, bomb: 2, meteor: 1, quake: 1, crane: 1 }, goal: 0.7, cam: [26, 10, 4.5], build: tower },
  { id: 'bridge', name: 'Міст', desc: 'Сталеві балки над річкою', ammo: { ball: 4, bomb: 3, meteor: 1, quake: 0, crane: 1 }, goal: 0.65, cam: [26, 9, -1], build: bridge, river: true },
  { id: 'sky', name: 'Хмарочос', desc: 'Тонкі колони, важкі поверхи', ammo: { ball: 3, bomb: 2, meteor: 1, quake: 1, crane: 1 }, goal: 0.7, cam: [30, 14, 9], build: skyscraper },
  { id: 'castle', name: 'Замок', desc: 'Мури, вежі й бійниці', ammo: { ball: 6, bomb: 3, meteor: 2, quake: 1, crane: 2 }, goal: 0.7, cam: [34, 16, 3], build: castle }
];

function pyramid() {
  const s = 1.2, n = 8;
  for (let l = 0; l < n; l++) { const k = n - l, o = (k - 1) * s / 2;
    for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) box('stone', i * s - o, l * s + s / 2, j * s - o, s * 0.99, s * 0.99, s * 0.99); }
}
function house() {
  const H = 0.5, courses = 6;
  const wall = (floor) => {
    const y0 = floor * (courses * H + 0.3);
    for (let c = 0; c < courses; c++) {
      const y = y0 + c * H + H / 2, odd = c % 2;
      const win = c >= 2 && c <= 4;
      // long walls (front z=+2.75, back z=-2.75)
      const xs = odd ? [-3, -2, -1, 0, 1, 2, 3] : [-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5];
      for (const z of [2.75, -2.75]) for (const x of xs) {
        if (win && (Math.abs(x + 2) < 0.6 || Math.abs(x - 2) < 0.6)) continue;               // two windows
        if (floor === 0 && z > 0 && c <= 4 && Math.abs(x) < 0.6) continue;                  // front door
        box('brick', x, y, z, odd ? 0.98 : 0.98, H * 0.98, 0.5);
      }
      const zs = odd ? [-2.5, -1.5, -0.5, 0.5, 1.5, 2.5] : [-2, -1, 0, 1, 2];
      for (const x of [3.75, -3.75]) for (const z of zs) {
        if (win && Math.abs(z) < 0.6) continue;
        box('brick', x, y, z, 0.5, H * 0.98, 0.98);
      }
    }
    // glass panes in the windows
    const wy = y0 + 3.5 * H;
    for (const z of [2.75, -2.75]) for (const x of [-2, 2]) box('glass', x, wy, z, 0.95, 1.45, 0.08);
    for (const x of [3.75, -3.75]) box('glass', x, wy, 0, 0.08, 1.45, 0.95);
    // floor slab on top, in four pieces
    const sy = y0 + courses * H + 0.15;
    for (const sx of [-2, 2]) for (const sz of [-1.5, 1.5]) box('concrete', sx, sy, sz, 4, 0.3, 3, 0);
  };
  wall(0); wall(1);
  const top = 2 * (courses * H + 0.3);
  for (let c = 0; c < 4; c++) for (const [x, z] of [[2.2, -1.2], [2.8, -1.2], [2.2, -0.6], [2.8, -0.6]]) box('brick', x, top + c * 0.4 + 0.2, z, 0.58, 0.39, 0.58);
}
function tower() {
  const R = 3.2, n = 18, rings = 17, H = 0.5;
  const len = 2 * Math.PI * (R - 0.3) / n * 0.98;                                          // no overlap on the inner face
  for (let r = 0; r < rings; r++) for (let i = 0; i < n; i++) {
    if (r === rings - 1 && i % 2) continue;                                                    // crenellations
    if (r >= 2 && r <= 5 && i === 0) continue;                                                 // a doorway
    if (r >= 10 && r <= 12 && (i === 5 || i === 14)) continue;                                 // slit windows
    const a = (i + (r % 2) * 0.5) / n * Math.PI * 2;
    box('brick', Math.cos(a) * R, r * H + H / 2, Math.sin(a) * R, len, H * 0.98, 0.55, -a + Math.PI / 2);
  }
  const top = rings * H - H;                                                                  // wooden floor inside under the top
  for (let i = -2; i <= 2; i++) box('wood', i * 1.1, top - 0.1, 0, 1.05, 0.2, 5.4);
}
function bridge() {
  for (const px of [-3, 3]) for (let l = 0; l < 6; l++) box('concrete', px, -6 + l + 0.5, 0, 2, 0.98, 3.2);   // two piers from the river bed
  const spans = [[-10.5, -3.1], [-2.9, 2.9], [3.1, 10.5]];
  for (const [a, b] of spans) for (const z of [-1.2, 1.2]) box('steel', (a + b) / 2, 0.2, z, b - a, 0.4, 0.45);
  for (let x = -10.2; x <= 10.2; x += 0.62) box('wood', x, 0.48, 0, 0.58, 0.15, 3.4);
  for (let x = -9.9; x <= 9.9; x += 1.65) for (const z of [-1.6, 1.6]) box('wood', x, 1.06, z, 0.14, 1, 0.14);
  for (let x = -9.9 + 0.825; x < 9.9; x += 1.65) for (const z of [-1.6, 1.6]) box('wood', x, 1.62, z, 1.6, 0.12, 0.14);
  box('car', -5, 1.2, 0.6, 2.2, 1.2, 1.1); box('car', 4.5, 1.2, -0.6, 2.2, 1.2, 1.1);
}
function skyscraper() {
  const F = 6, h = 2.7, half = 3;
  let y = 0;
  for (let f = 0; f < F; f++) {
    for (const x of [-half, 0, half]) for (const z of [-half, 0, half]) if (!(x === 0 && z === 0)) box('steel', x, y + h / 2, z, 0.4, h, 0.4);
    for (const [cx, cz, sx, sz] of [[-1.5, -half, 2.5, 0.06], [1.5, -half, 2.5, 0.06], [-1.5, half, 2.5, 0.06], [1.5, half, 2.5, 0.06],
                                    [-half, -1.5, 0.06, 2.5], [-half, 1.5, 0.06, 2.5], [half, -1.5, 0.06, 2.5], [half, 1.5, 0.06, 2.5]])
      box('glass', cx, y + h / 2, cz, sx, h * 0.92, sz);
    y += h;
    for (const sx of [-1.6, 1.6]) for (const sz of [-1.6, 1.6]) box('concrete', sx, y + 0.15, sz, 3.16, 0.3, 3.16);
    y += 0.3;
  }
  box('steel', 0, y + 1.5, 0, 0.25, 3, 0.25);                                                  // antenna
}
function castle() {
  const W = 7, s = 1.5;
  for (let c = 0; c < 3; c++) {                                                               // curtain walls
    const along = c % 2 ? [-3.75, -2.25, -0.75, 0.75, 2.25, 3.75] : [-3.75, -2.25, -0.75, 0.75, 2.25, 3.75];
    for (const x of along) for (const z of [-W, W]) {
      if (z > 0 && c < 2 && Math.abs(x) < 1) continue;                                       // gate
      box('stone', x, c + 0.5, z, s * 0.98, 0.98, 1);
    }
    for (const z of along) for (const x of [-W, W]) box('stone', x, c + 0.5, z, 1, 0.98, s * 0.98);
  }
  for (const x of [-3.75, -1.25, 1.25, 3.75]) for (const z of [-W, W]) box('stone', x, 3.4, z, 0.8, 0.8, 0.9);
  for (const z of [-3.75, -1.25, 1.25, 3.75]) for (const x of [-W, W]) box('stone', x, 3.4, z, 0.9, 0.8, 0.8);
  for (const cx of [-W, W]) for (const cz of [-W, W]) {                                      // corner towers
    for (let l = 0; l < 6; l++) {
      const ring = l % 2 ? [[-1, -0.5, 2, 1], [1, 0.5, 2, 1], [0.5, -1, 1, 2], [-0.5, 1, 1, 2]] : [[-0.5, -1, 2, 1], [0.5, 1, 2, 1], [1, -0.5, 1, 2], [-1, 0.5, 1, 2]];
      for (const [dx, dz, sx, sz] of ring) box('stone', cx + dx, l + 0.5, cz + dz, sx * 0.98, 0.98, sz * 0.98);
    }
    for (const [dx, dz] of [[-1, -1], [1, 1], [-1, 1], [1, -1]]) box('stone', cx + dx, 6.4, cz + dz, 0.7, 0.8, 0.7);
  }
  for (let l = 0; l < 3; l++) box('wood', 0, l * 1.2 + 0.6, 0, 1.2 - l * 0.3, 1.18, 1.2 - l * 0.3);   // a little keep in the yard
}

/* ================= game state ================= */
let level = null, free = false, ammo = {}, weapon = 'ball', state = 'menu', lastShot = 0, shots = 0, ended = false;
let projectiles = [], bombs = [], quake = null, shake = 0, simTime = 0;
const orbit = { theta: 0.6, phi: 1.15, r: 26, target: new THREE.Vector3(0, 3, 0) };

function clearWorld() {
  if (rp) endReplay();
  for (const b of blocks) world.removeBody(b.body);
  for (const p of projectiles) { world.removeBody(p.body); scene.remove(p.mesh); }
  for (const b of bombs) scene.remove(b.mesh);
  for (const m of Object.values(meshes)) { scene.remove(m); m.material.dispose(); m.dispose(); }
  removeCrane();
  if (groundBody) world.removeBody(groundBody);
  if (groundGroup) scene.remove(groundGroup);
  blocks = []; meshes = {}; projectiles = []; bombs = []; quake = null;
  rec.buf = null; rec.count = 0;
}
function startLevel(lv, isFree) {
  clearWorld();
  particles.clear(); shake = 0;
  level = lv; free = !!isFree; ended = false; shots = 0; lastShot = 0; simTime = 0;
  ammo = { ...lv.ammo };
  if (free) ammo = { ball: Infinity, bomb: Infinity, meteor: Infinity, quake: Infinity, crane: Infinity };
  makeGround(!!lv.river);
  lv.build(); materialize(); recReset();
  orbit.r = lv.cam[0]; orbit.target.set(0, lv.cam[2], 0); orbit.theta = 0.55; orbit.phi = Math.atan2(lv.cam[0], lv.cam[1] * 1.3);
  weapon = 'ball'; if (!ammo.ball) weapon = Object.keys(ammo).find(k => ammo[k] > 0) || 'ball';
  state = 'play';
  $('menu').hidden = true; $('result').hidden = true; $('hud').hidden = false;
  $('lvname').textContent = lv.name + (free ? ' · вільний режим' : '');
  buildWeapons(); updateHud(0);
  if (!store.get('hinted', false)) { $('hint').hidden = false; store.set('hinted', true); setTimeout(() => $('hint').hidden = true, 5000); }
}

/* ================= destruction ================= */
const _v = new THREE.Vector3(), _qa = new CANNON.Quaternion();
function destruction() {
  if (!blocks.length) return 0;
  let n = 0;
  for (const b of blocks) {
    if (b.gone) { n++; continue; }
    const p = b.body.position;
    const moved = _v.set(p.x - b.start.x, p.y - b.start.y, p.z - b.start.z).length();
    b.startQ.conjugate(_qa); const d = _qa.mult(b.body.quaternion);
    const ang = 2 * Math.acos(Math.min(1, Math.abs(d.w)));
    if (moved > 0.9 || ang > 0.55) n++;
  }
  return n / blocks.length;
}

/* ================= weapons ================= */
const WEAPONS = [
  { id: 'ball', name: 'Ядро', icon: '●' },
  { id: 'bomb', name: 'Бомба', icon: '✸' },
  { id: 'meteor', name: 'Метеорит', icon: '☄' },
  { id: 'quake', name: 'Землетрус', icon: '≋' },
  { id: 'crane', name: 'Баба', icon: '⚲' }
];
const ballGeo = new THREE.SphereGeometry(1, 24, 16);
const ballMat = new THREE.MeshStandardMaterial({ color: 0x2b2d33, roughness: 0.35, metalness: 0.7 });
const meteorMat = new THREE.MeshStandardMaterial({ color: 0x4a2b1c, roughness: 0.9, emissive: 0xff5a1a, emissiveIntensity: 1.4 });
const bombMat = new THREE.MeshStandardMaterial({ color: 0xd92b2b, roughness: 0.4, emissive: 0xff2020, emissiveIntensity: 0.6 });
const raycaster = new THREE.Raycaster();

function aim(px, py) {
  const ndc = new THREE.Vector2(px / innerWidth * 2 - 1, -(py / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const targets = Object.values(meshes).concat(groundGroup ? groundGroup.children : []);
  for (const m of Object.values(meshes)) m.computeBoundingSphere();
  const hits = raycaster.intersectObjects(targets, false);
  return { ray: raycaster.ray.clone(), hit: hits[0] || null };
}
function fire(px, py) {
  if (state !== 'play' || ended) return;
  if (weapon === 'crane') { if (crane && !crane.leaving) return; if (ammo.crane > 0) callCrane(); else toast('Кран уже поїхав — оберіть іншу зброю'); return; }
  if (!(ammo[weapon] > 0)) { toast('Цей набій закінчився — оберіть інший'); return; }
  const { ray, hit } = aim(px, py);
  if (weapon === 'ball') {
    spend(); sfx.shoot();
    const dir = ray.direction.clone();
    const start = camera.position.clone().addScaledVector(dir, 2).add(new THREE.Vector3(0, -0.6, 0));
    recEvent('shot', start.x, start.y, start.z, 0);
    launch(start, dir.multiplyScalar(46), 0.5, 90, ballMat);
  } else if (weapon === 'bomb') {
    if (!hit) { toast('Торкніться будівлі, щоб закласти бомбу'); return; }
    spend();
    const mesh = new THREE.Mesh(ballGeo, bombMat); mesh.scale.setScalar(0.35); mesh.position.copy(hit.point); scene.add(mesh);
    bombs.push({ mesh, t: 0.9, pos: hit.point.clone() }); sfx.tick(); recEvent('tick', hit.point.x, hit.point.y, hit.point.z, 0);
  } else if (weapon === 'meteor') {
    const p = hit ? hit.point : ray.at(30, new THREE.Vector3());
    spend(); sfx.whoosh();
    const start = new THREE.Vector3(p.x + 8, 55, p.z + 4); recEvent('whoosh', p.x, p.y, p.z, 0);
    const v = p.clone().sub(start).normalize().multiplyScalar(38);
    const pr = launch(start, v, 1.5, 900, meteorMat); pr.meteor = true;
  } else if (weapon === 'quake') {
    spend(); quake = { t: 0, dur: 4.5, a: 0.28, f: 2.3, dir: rnd() * Math.PI }; groundBody.type = CANNON.Body.KINEMATIC;
    for (const b of blocks) b.body.wakeUp(); sfx.rumble(); haptic(80); recEvent('quake', 0, 0, 0, quake.dur);
  }
}
function callCrane() { spend(); startCrane(); orbit.r = Math.max(orbit.r, Math.min(70, level.cam[0] * 1.35)); orbit.phi = Math.min(orbit.phi, 1.2); toast('Тягніть пальцем — баба полетить слідом. Камера — двома пальцями'); }
function spend() { if (ammo[weapon] !== Infinity) ammo[weapon]--; shots++; lastShot = simTime; buildWeapons(); }
function launch(pos, vel, r, mass, mat) {
  const body = new CANNON.Body({ mass, shape: new CANNON.Sphere(r), linearDamping: 0.01 });
  body.position.set(pos.x, pos.y, pos.z); body.velocity.set(vel.x, vel.y, vel.z);
  body.allowSleep = false;
  const mesh = new THREE.Mesh(ballGeo, mat); mesh.scale.setScalar(r); mesh.castShadow = true; scene.add(mesh);
  const p = { body, mesh, age: 0 };
  body.addEventListener('collide', e => {
    if (p.meteor && !p.boomed) { p.boomed = true; const q = body.position; explode(new THREE.Vector3(q.x, q.y, q.z), 7.5, 22); }
    else { const v = e.contact.getImpactVelocityAlongNormal(); if (Math.abs(v) > 8) { sfx.thud(Math.min(1, Math.abs(v) / 40)); haptic(15); } }
  });
  world.addBody(body); projectiles.push(p);
  if (projectiles.length > 10) { const o = projectiles.shift(); world.removeBody(o.body); scene.remove(o.mesh); }
  return p;
}
function explode(c, R, power) {
  for (const b of blocks) {
    if (b.gone) continue;
    const p = b.body.position, dx = p.x - c.x, dy = p.y - c.y, dz = p.z - c.z, d = Math.hypot(dx, dy, dz);
    if (d > R) continue;
    if (b.glass && d < R * 0.8) { shatter(b); continue; }
    const k = power * (1 - d / R), inv = 1 / Math.max(0.3, d);
    b.body.wakeUp();
    b.body.applyImpulse(new CANNON.Vec3(dx * inv * k * b.body.mass, (dy * inv + 0.45) * k * b.body.mass, dz * inv * k * b.body.mass));
    b.body.angularVelocity.set(rr(-1, 1) * k * 0.4, rr(-1, 1) * k * 0.4, rr(-1, 1) * k * 0.4);
  }
  for (const pr of projectiles) { const p = pr.body.position, d = Math.hypot(p.x - c.x, p.y - c.y, p.z - c.z); if (d < R && d > 0.1) pr.body.applyImpulse(new CANNON.Vec3((p.x - c.x) / d * pr.body.mass * 4, 2 * pr.body.mass, (p.z - c.z) / d * pr.body.mass * 4)); }
  burst(c, R); recEvent('boom', c.x, c.y, c.z, R);
  flash.position.copy(c); flash.intensity = 900;
  shake = Math.min(1.4, shake + R / 6);
  sfx.boom(Math.min(1, R / 7)); haptic(60);
}
function shatter(b) {
  if (b.gone) return;
  b.gone = true; world.removeBody(b.body); syncBlock(b); b.mesh.instanceMatrix.needsUpdate = true;
  const p = b.body.position;
  glassBits(p, b.size); recEvent('glass', p.x, p.y, p.z, blocks.indexOf(b));
  sfx.glass();
}
function glassBits(p, sz) {
  for (let i = 0; i < 26; i++) particles.spawn(p.x + rr(-sz.x, sz.x) / 2, p.y + rr(-sz.y, sz.y) / 2, p.z + rr(-sz.z, sz.z) / 2,
    rr(-3, 3), rr(0, 4), rr(-3, 3), 0.75 + rnd() * 0.25, 0.88, 0.97, 0.9, rr(0.08, 0.16), rr(0.8, 1.6), 1);
}
function dustPuff(x, y, z, v) {
  const n = Math.min(10, 2 + v * 0.6);
  for (let i = 0; i < n; i++) particles.spawn(x, y, z, rr(-1.5, 1.5), rr(0.2, 2), rr(-1.5, 1.5), 0.62, 0.56, 0.5, 0.55, rr(0.5, 1.1), rr(1, 2.2), 0.08);
}
function glassHit(e) { const v = Math.abs(e.contact.getImpactVelocityAlongNormal()); if (v > 3.5 && e.target && e.target.userData) pendingShatter.add(e.target.userData); }
const pendingShatter = new Set();
let dustBudget = 0;
function impact(e) {
  const v = Math.abs(e.contact.getImpactVelocityAlongNormal());
  if (v < 5 || dustBudget <= 0) return;
  dustBudget--;
  const bi = e.contact.bi, ri = e.contact.ri, x = bi.position.x + ri.x, y = bi.position.y + ri.y, z = bi.position.z + ri.z;
  dustPuff(x, y, z, v); recEvent('dust', x, y, z, v);
  if (rnd() < 0.3) sfx.thud(Math.min(1, v / 25));
}

/* ================= crane with a wrecking ball =================
   A tower crane stands beside the target. Its hook is a kinematic body that follows the finger
   (projected onto the ball's height plane); the ball hangs on a rigid cable (DistanceConstraint),
   so it lags behind, swings and smashes whatever it meets. One charge = CRANE_TIME seconds. */
const CRANE_TIME = 25, MAST = new THREE.Vector3(-12, 0, -14);
let crane = null;
function latticeTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  g.strokeStyle = '#fff'; g.lineWidth = 7; g.strokeRect(3.5, 3.5, 57, 57);
  g.lineWidth = 4; g.beginPath(); g.moveTo(4, 4); g.lineTo(60, 60); g.moveTo(60, 4); g.lineTo(4, 60); g.stroke();
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
const latticeTex = latticeTexture();
function latticeMat(rx, ry) { const t = latticeTex.clone(); t.needsUpdate = true; t.repeat.set(rx, ry); return new THREE.MeshStandardMaterial({ color: 0xf2b705, map: t, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.6, metalness: 0.2 }); }
const wreckMat = new THREE.MeshStandardMaterial({ color: 0x23252b, roughness: 0.4, metalness: 0.75 });
const cableMat = new THREE.MeshStandardMaterial({ color: 0x1b1b1e, roughness: 0.7, metalness: 0.5 });
const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 8);

function structureTop() { let t = 1; for (const b of blocks) if (!b.gone) t = Math.max(t, b.start.y + b.size.y / 2); return t; }
function buildCraneVisual(hookY, R = 1.1) {
  const g = new THREE.Group(); scene.add(g);
  const mastH = hookY + 0.7;
  const mast = new THREE.Mesh(boxGeo, latticeMat(1, mastH / 1.2)); mast.scale.set(1.2, mastH, 1.2); mast.position.set(MAST.x, mastH / 2, MAST.z); mast.castShadow = true; g.add(mast);
  const foot = new THREE.Mesh(boxGeo, dirtMat); foot.scale.set(3, 0.5, 3); foot.position.set(MAST.x, 0.25, MAST.z); foot.receiveShadow = true; g.add(foot);
  const cab = new THREE.Mesh(boxGeo, new THREE.MeshStandardMaterial({ color: 0xf2b705, roughness: 0.5 })); cab.scale.set(1.6, 1.3, 1.6); cab.position.set(MAST.x, mastH - 0.1, MAST.z); cab.castShadow = true; g.add(cab);
  const jib = new THREE.Mesh(boxGeo, latticeMat(10, 1)); jib.castShadow = true; g.add(jib);
  const counter = new THREE.Mesh(boxGeo, latticeMat(5, 1)); counter.castShadow = true; g.add(counter);
  const weight = new THREE.Mesh(boxGeo, new THREE.MeshStandardMaterial({ color: 0x8d8d88, roughness: 0.9 })); weight.scale.set(1.4, 1.6, 1.6); weight.castShadow = true; g.add(weight);
  const trolley = new THREE.Mesh(boxGeo, cableMat); trolley.scale.set(0.9, 0.35, 0.9); g.add(trolley);
  const cable = new THREE.Mesh(cylGeo, cableMat); cable.scale.set(0.06, 1, 0.06); cable.castShadow = true; g.add(cable);
  const ballMesh = new THREE.Mesh(ballGeo, wreckMat); ballMesh.scale.setScalar(R); ballMesh.castShadow = true; g.add(ballMesh);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.08, 6, 14), cableMat); g.add(ring);
  return { g, jib, counter, weight, trolley, cable, ballMesh, ring, mastH, hookY };
}
function disposeCraneVisual(v) { scene.remove(v.g); v.g.traverse(o => { if (o.material && o.material.map) o.material.map.dispose(); }); }
function startCrane() {
  const top = structureTop(), hookY = top + 5, restY = Math.max(1.5, top * 0.45), L = hookY - restY, R = 1.1;
  const vis = buildCraneVisual(hookY, R);

  // hook starts between the mast and the target, so the ball never spawns inside the building
  const start = MAST.clone().lerp(new THREE.Vector3(0, 0, 0), 0.35);
  const hook = new CANNON.Body({ type: CANNON.Body.KINEMATIC, mass: 0 });
  const hs = new CANNON.Sphere(0.1); hs.collisionResponse = false; hook.addShape(hs); hook.collisionFilterMask = 0; hook.collisionFilterGroup = 0;
  hook.position.set(start.x, hookY, start.z); hook.allowSleep = false;
  const ball = new CANNON.Body({ mass: 650, shape: new CANNON.Sphere(R), linearDamping: 0.04, angularDamping: 0.3 });
  ball.position.set(start.x, hookY - 2, start.z); ball.allowSleep = false;
  const rope = new CANNON.DistanceConstraint(hook, ball, 2, 2e6);
  world.addBody(hook); world.addBody(ball); world.addConstraint(rope);
  ball.addEventListener('collide', e => {
    const v = Math.abs(e.contact.getImpactVelocityAlongNormal());
    if (v > 2.5) { sfx.clang(Math.min(1, v / 14)); haptic(Math.round(10 + v * 3)); shake = Math.min(1.2, shake + v * 0.03); recEvent('clang', ball.position.x, ball.position.y, ball.position.z, v); }
  });
  crane = { ...vis, hook, ball, rope, restY, L, target: start.clone(), t: CRANE_TIME, lower: 0, leaving: 0 };
  sfx.crane();
}
function removeCrane() {
  if (!crane) return;
  world.removeConstraint(crane.rope); world.removeBody(crane.hook); world.removeBody(crane.ball);
  disposeCraneVisual(crane);
  crane = null;
}
const _up = new THREE.Vector3(0, 1, 0), _a = new THREE.Vector3(), _b = new THREE.Vector3(), _plane = new THREE.Plane();
function steerCrane(px, py) {
  if (!crane || crane.leaving) return;
  const ndc = new THREE.Vector2(px / innerWidth * 2 - 1, -(py / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  _plane.set(_up, -crane.restY);
  if (!raycaster.ray.intersectPlane(_plane, _a)) return;
  const d = Math.hypot(_a.x, _a.z); if (d > 24) _a.multiplyScalar(24 / d);
  crane.target.set(_a.x, 0, _a.z);
}
function updateCrane(dt) {
  if (!crane) return;
  const c = crane, h = c.hook.position;
  if (!free && !c.leaving) c.t -= dt;                                   // free mode: unlimited, retracts when you pick another weapon
  if (free && weapon !== 'crane' && !c.leaving) c.leaving = 0.001;
  if (c.t <= 0 && !c.leaving) { c.leaving = 0.001; toast('Кран своє відпрацював'); }
  // lower the ball on arrival, raise it when leaving
  if (c.leaving) { c.leaving += dt; c.rope.distance = Math.max(1.5, c.rope.distance - dt * 9); }
  else if (c.rope.distance < c.L) c.rope.distance = Math.min(c.L, c.rope.distance + dt * 7);
  // the hook chases the finger with limited speed and acceleration
  const dx = c.target.x - h.x, dz = c.target.z - h.z, d = Math.hypot(dx, dz);
  const want = c.leaving ? 0 : Math.min(15, d * 3.2), k = d > 1e-3 ? want / d : 0;
  const vx = c.hook.velocity.x, vz = c.hook.velocity.z, ax = dx * k - vx, az = dz * k - vz, am = Math.hypot(ax, az), lim = 30 * dt;
  const s = am > lim ? lim / am : 1;
  c.hook.velocity.set(vx + ax * s, 0, vz + az * s);
  poseCrane(c, h.x, h.y, h.z, c.ball.position, c.ball.quaternion);
  if (c.leaving > 1.6) removeCrane();
}
// visuals: jib turns toward the hook, cable from hook to ball (also used by the replay's ghost crane)
function poseCrane(c, hx, hy, hz, bp, bq) {
  const h = { x: hx, y: hy, z: hz };
  const jx = h.x - MAST.x, jz = h.z - MAST.z, jl = Math.hypot(jx, jz) + 1.6, ang = Math.atan2(-jz, jx), y = c.mastH + 0.75;
  c.jib.scale.set(jl, 0.8, 0.8); c.jib.rotation.y = ang; c.jib.position.set(MAST.x + Math.cos(ang) * jl / 2, y, MAST.z - Math.sin(ang) * jl / 2);
  c.jib.material.map.repeat.set(jl / 0.8, 1);
  c.counter.scale.set(5, 0.7, 0.7); c.counter.rotation.y = ang; c.counter.position.set(MAST.x - Math.cos(ang) * 2.5, y, MAST.z + Math.sin(ang) * 2.5);
  c.weight.rotation.y = ang; c.weight.position.set(MAST.x - Math.cos(ang) * 4.4, y - 0.9, MAST.z + Math.sin(ang) * 4.4);
  c.trolley.rotation.y = ang; c.trolley.position.set(h.x, c.hookY + 0.3, h.z);
  c.ballMesh.position.set(bp.x, bp.y, bp.z); c.ballMesh.quaternion.set(bq.x, bq.y, bq.z, bq.w);
  _a.set(h.x, h.y, h.z); _b.set(bp.x, bp.y, bp.z);
  const top = _b.clone().addScaledVector(_a.clone().sub(_b).normalize(), 1.15);
  c.ring.position.copy(top); c.ring.lookAt(_a); c.ring.rotateY(Math.PI / 2);
  c.cable.position.copy(_a).add(top).multiplyScalar(0.5); c.cable.scale.y = _a.distanceTo(top);
  c.cable.quaternion.setFromUnitVectors(_up, _a.clone().sub(top).normalize());
}
const craneActive = () => crane && !crane.leaving && weapon === 'crane';

/* ================= particles ================= */
const particles = (() => {
  const MAX = 2200, pos = new Float32Array(MAX * 3), colr = new Float32Array(MAX * 4), size = new Float32Array(MAX);
  const vel = new Float32Array(MAX * 3), life = new Float32Array(MAX), maxLife = new Float32Array(MAX), grav = new Float32Array(MAX), alpha0 = new Float32Array(MAX), size0 = new Float32Array(MAX);
  let head = 0;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('aColor', new THREE.BufferAttribute(colr, 4).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1).setUsage(THREE.DynamicDrawUsage));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { scale: { value: 400 } },
    vertexShader: 'attribute vec4 aColor; attribute float aSize; uniform float scale; varying vec4 vC; void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }',
    fragmentShader: 'varying vec4 vC; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; gl_FragColor=vec4(vC.rgb, vC.a*(1.0-r)); }'
  });
  const pts = new THREE.Points(g, mat); pts.frustumCulled = false; scene.add(pts);
  return {
    spawn(x, y, z, vx, vy, vz, r, gg, b, a, s, l, gr) {
      const i = head; head = (head + 1) % MAX;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z; vel[i * 3] = vx; vel[i * 3 + 1] = vy; vel[i * 3 + 2] = vz;
      colr[i * 4] = r; colr[i * 4 + 1] = gg; colr[i * 4 + 2] = b; colr[i * 4 + 3] = a; alpha0[i] = a; size0[i] = s; size[i] = s;
      life[i] = l; maxLife[i] = l; grav[i] = gr;
    },
    update(dt) {
      for (let i = 0; i < MAX; i++) {
        if (life[i] <= 0) { if (colr[i * 4 + 3] !== 0) colr[i * 4 + 3] = 0; continue; }
        life[i] -= dt; const t = Math.max(0, life[i] / maxLife[i]);
        vel[i * 3 + 1] -= 9.8 * grav[i] * dt; const drag = 1 - (grav[i] < 0.5 ? 1.6 : 0.3) * dt;
        vel[i * 3] *= drag; vel[i * 3 + 1] *= drag; vel[i * 3 + 2] *= drag;
        pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
        if (pos[i * 3 + 1] < 0.05 && grav[i] > 0.5 && !level?.river) { pos[i * 3 + 1] = 0.05; vel[i * 3 + 1] *= -0.3; }
        colr[i * 4 + 3] = alpha0[i] * t; if (grav[i] < 0.5) size[i] = size0[i] * (1 + (1 - t) * 1.8);
      }
      g.attributes.position.needsUpdate = true; g.attributes.aColor.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
    },
    clear() { life.fill(0); },
    mat
  };
})();
function burst(c, R) {
  for (let i = 0; i < 70; i++) { const a = rnd() * 6.28, e = rnd() * 1.2, s = rr(4, 14);
    particles.spawn(c.x, c.y, c.z, Math.cos(a) * Math.cos(e) * s, Math.sin(e) * s + 2, Math.sin(a) * Math.cos(e) * s, 1, rr(0.45, 0.85), 0.15, 1, rr(0.4, 0.9), rr(0.3, 0.7), 0.1); }
  for (let i = 0; i < 60; i++) { const a = rnd() * 6.28, s = rr(1, R * 0.8);
    particles.spawn(c.x + rr(-1, 1), c.y + rr(0, 1), c.z + rr(-1, 1), Math.cos(a) * s, rr(1, 5), Math.sin(a) * s, rr(0.25, 0.45), rr(0.23, 0.4), rr(0.22, 0.36), 0.65, rr(1.2, 2.4), rr(1.8, 3.5), 0.02); }
}

/* ================= sound (synthesized, no files) ================= */
const sfx = (() => {
  let ac = null, noise = null;
  const ensure = () => { if (ac) return true; try { ac = new (window.AudioContext || window.webkitAudioContext)(); const n = ac.sampleRate * 2; noise = ac.createBuffer(1, n, ac.sampleRate); const d = noise.getChannelData(0); for (let i = 0; i < n; i++) d[i] = rnd() * 2 - 1; return true; } catch (e) { return false; } };
  const on = () => store.get('sound', true);
  function burstN(dur, freq, vol, q = 0.7, type = 'lowpass', sweep = 0) {
    if (!on() || !ensure()) return;
    const s = ac.createBufferSource(); s.buffer = noise; s.playbackRate.value = rr(0.8, 1.2);
    const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(30, freq * sweep), ac.currentTime + dur);
    const g = ac.createGain(); g.gain.setValueAtTime(vol, ac.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    s.connect(f); f.connect(g); g.connect(ac.destination); s.start(); s.stop(ac.currentTime + dur);
  }
  function tone(f0, f1, dur, vol, type = 'sine') {
    if (!on() || !ensure()) return;
    const o = ac.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, ac.currentTime); o.frequency.exponentialRampToValueAtTime(f1, ac.currentTime + dur);
    const g = ac.createGain(); g.gain.setValueAtTime(vol, ac.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + dur);
  }
  let lastThud = 0;
  return {
    unlock() { if (ensure() && ac.state === 'suspended') ac.resume(); },
    shoot() { burstN(0.35, 900, 0.5, 1, 'lowpass', 0.2); tone(160, 50, 0.25, 0.5); },
    boom(k) { burstN(1.6, 600, 0.9 * (0.5 + k / 2), 0.8, 'lowpass', 0.08); tone(90, 30, 0.9, 0.7 * k); },
    thud(k) { const t = performance.now(); if (t - lastThud < 60) return; lastThud = t; burstN(0.25, 250 + k * 300, 0.25 + k * 0.35, 1, 'lowpass', 0.4); },
    glass() { burstN(0.4, 5000, 0.25, 4, 'bandpass', 1.4); },
    tick() { tone(1400, 1300, 0.08, 0.2, 'square'); },
    whoosh() { burstN(1.6, 300, 0.4, 2, 'bandpass', 6); },
    rumble() { burstN(4.5, 120, 0.8, 1, 'lowpass', 0.6); },
    clang(k) { const t = performance.now(); if (t - lastThud < 90) return; lastThud = t; tone(220 + k * 90, 140, 0.7, 0.25 + k * 0.3, 'triangle'); tone(523, 470, 0.5, 0.08 + k * 0.1, 'sine'); burstN(0.4, 400 + k * 500, 0.4 + k * 0.4, 1, 'lowpass', 0.3); },
    crane() { tone(70, 90, 1.4, 0.25, 'sawtooth'); burstN(1.4, 900, 0.12, 6, 'bandpass', 1.5); }
  };
})();
function haptic(ms) { if (app && store.get('vibro', true)) try { app.tick(ms); } catch (e) {} }

/* ================= slow-motion replay =================
   While you play, the last 8 seconds are recorded 30 times a second: every block, projectile, bomb,
   the crane's hook and ball, the ground (it slides in an earthquake) and events like explosions,
   shattering glass and dust. The replay plays that tape back with interpolation, slowing to ×0.3
   around every hit, re-spawning the particles and sounds, while the camera slowly circles. */
const REC_HZ = 30, REC_N = 240, MAXD = 16;
const rec = { nb: 0, buf: null, dyn: new Float32Array(REC_N * MAXD * 9), dn: new Uint8Array(REC_N), cr: new Float32Array(REC_N * 14), t: new Float64Array(REC_N), head: 0, count: 0, next: 0, events: [] };
const SLOW_EV = { shot: 1, tick: 1, whoosh: 1, quake: 1, boom: 1, glass: 1, clang: 1 };
function recReset() { rec.nb = blocks.length; rec.buf = new Float32Array(REC_N * rec.nb * 7); rec.head = 0; rec.count = 0; rec.next = 0; rec.events = []; }
function recEvent(kind, x, y, z, a) {
  if (state !== 'play' || !rec.buf) return;
  rec.events.push({ t: simTime, kind, x, y, z, a });
  if (rec.events.length > 600) rec.events.splice(0, 100);
}
const recIdx = k => (rec.head - rec.count + k + REC_N) % REC_N;
function recFrame() {
  if (!rec.buf || simTime < rec.next) return;
  rec.next = simTime + 1 / REC_HZ - 1e-4;
  const f = rec.head; rec.head = (f + 1) % REC_N; rec.count = Math.min(REC_N, rec.count + 1); rec.t[f] = simTime;
  const B = rec.buf; let o = f * rec.nb * 7;
  for (const b of blocks) {
    const p = b.body.position, q = b.body.quaternion;
    B[o] = p.x; B[o + 1] = b.gone ? -999 : p.y; B[o + 2] = p.z; B[o + 3] = q.x; B[o + 4] = q.y; B[o + 5] = q.z; B[o + 6] = q.w; o += 7;
  }
  let n = 0; const D = rec.dyn;
  const put = (k, p, q, s) => { if (n >= MAXD) return; const j = (f * MAXD + n++) * 9; D[j] = k; D[j + 1] = p.x; D[j + 2] = p.y; D[j + 3] = p.z; D[j + 4] = q.x; D[j + 5] = q.y; D[j + 6] = q.z; D[j + 7] = q.w; D[j + 8] = s; };
  for (const pr of projectiles) put(pr.meteor ? 1 : 0, pr.body.position, pr.body.quaternion, pr.mesh.scale.x);
  for (const bm of bombs) put(2, bm.mesh.position, _q.identity(), 0.35);
  rec.dn[f] = n;
  const C = rec.cr, j = f * 14;
  if (crane) { const h = crane.hook.position, bp = crane.ball.position, bq = crane.ball.quaternion; C[j] = 1; C[j + 1] = h.x; C[j + 2] = h.y; C[j + 3] = h.z; C[j + 4] = bp.x; C[j + 5] = bp.y; C[j + 6] = bp.z; C[j + 7] = bq.x; C[j + 8] = bq.y; C[j + 9] = bq.z; C[j + 10] = bq.w; }
  else C[j] = 0;
  const gp = groundBody ? groundBody.position : { x: 0, y: 0, z: 0 }; C[j + 11] = gp.x; C[j + 12] = gp.y; C[j + 13] = gp.z;
}
function replayRange() {
  if (rec.count < 4) return null;
  const oldest = rec.t[recIdx(0)], newest = rec.t[recIdx(rec.count - 1)];
  const ev = rec.events.filter(e => e.t >= oldest && e.t <= newest);
  const big = ev.filter(e => SLOW_EV[e.kind]);
  if (!big.length) return null;
  return { t0: Math.max(oldest, big[0].t - 0.7), t1: Math.min(newest, Math.max(big[big.length - 1].t + 3.5, ev[ev.length - 1].t + 0.8)), ev };
}
const hasReplay = () => rec.events.some(e => SLOW_EV[e.kind] && simTime - e.t < REC_N / REC_HZ);

const dynMats = [ballMat, meteorMat, bombMat.clone()];
const dynPool = [];
function dynMesh(i) { if (!dynPool[i]) { const m = new THREE.Mesh(ballGeo, ballMat); m.castShadow = true; m.visible = false; scene.add(m); dynPool[i] = m; } return dynPool[i]; }

let rp = null;
function startReplay() {
  if (rp) return;
  const r = replayRange();
  if (!r) { toast('Ще нема чого повторювати — спершу щось зруйнуйте'); return; }
  rp = { ...r, rt: r.t0, speed: 1, prev: state, evi: 0, ghost: null, focus: orbit.target.clone(), real: 0,
         saved: { theta: orbit.theta, phi: orbit.phi, r: orbit.r, target: orbit.target.clone() } };
  while (rp.evi < rp.ev.length && rp.ev[rp.evi].t < rp.t0) rp.evi++;
  state = 'replay';
  particles.clear(); flash.intensity = 0; shake = 0;
  for (const p of projectiles) p.mesh.visible = false;
  for (const b of bombs) b.mesh.visible = false;
  if (crane) crane.g.visible = false;
  orbit.r = Math.max(10, orbit.r * 0.88); orbit.phi = Math.min(1.3, orbit.phi + 0.08);
  $('hud').hidden = true; $('result').hidden = true; $('toast').style.opacity = 0;
  const el = $('replay'); el.hidden = false; el.classList.remove('in'); void el.offsetWidth; el.classList.add('in');
  haptic(10);
}
function endReplay() {
  if (!rp) return;
  for (const b of blocks) syncBlock(b);
  for (const m of Object.values(meshes)) m.instanceMatrix.needsUpdate = true;
  for (const p of projectiles) p.mesh.visible = true;
  for (const b of bombs) b.mesh.visible = true;
  for (const m of dynPool) m.visible = false;
  if (rp.ghost) disposeCraneVisual(rp.ghost);
  if (crane) crane.g.visible = true;
  if (groundGroup && groundBody) groundGroup.position.copy(groundBody.position);
  Object.assign(orbit, { theta: rp.saved.theta, phi: rp.saved.phi, r: rp.saved.r }); orbit.target.copy(rp.saved.target);
  particles.clear(); flash.intensity = 0; shake = 0;
  state = rp.prev; rp = null;
  $('replay').hidden = true;
  if (state === 'result') $('result').hidden = false; else if (state === 'play') $('hud').hidden = false;
}
function playEvent(e) {
  const pos = new THREE.Vector3(e.x, e.y, e.z);
  switch (e.kind) {
    case 'boom': burst(pos, e.a); flash.position.copy(pos); flash.intensity = 900; shake = Math.min(1.4, shake + e.a / 6); sfx.boom(Math.min(1, e.a / 7)); haptic(40); break;
    case 'glass': { const b = blocks[e.a]; glassBits(pos, b ? b.size : new THREE.Vector3(1, 1, 1)); sfx.glass(); break; }
    case 'dust': dustPuff(e.x, e.y, e.z, e.a); if (rnd() < 0.25) sfx.thud(Math.min(1, e.a / 25)); break;
    case 'shot': sfx.shoot(); break;
    case 'tick': sfx.tick(); break;
    case 'whoosh': sfx.whoosh(); break;
    case 'quake': sfx.rumble(); break;
    case 'clang': sfx.clang(Math.min(1, e.a / 14)); shake = Math.min(1.2, shake + e.a * 0.03); break;
  }
  if (SLOW_EV[e.kind] && e.kind !== 'quake') rp.focus.set(e.x, Math.max(1, e.y), e.z);
}
const _qa2 = new THREE.Quaternion(), _qb2 = new THREE.Quaternion(), _pa = new THREE.Vector3(), _pb = new THREE.Vector3();
function poseAt(t) {
  // find the two recorded frames around t
  let lo = 0, hi = rec.count - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (rec.t[recIdx(mid)] <= t) lo = mid; else hi = mid; }
  const fa = recIdx(lo), fb = recIdx(hi), ta = rec.t[fa], tb = rec.t[fb];
  const al = tb > ta ? Math.min(1, Math.max(0, (t - ta) / (tb - ta))) : 0;
  const B = rec.buf, nb = rec.nb;
  for (let i = 0; i < nb; i++) {
    const a = (fa * nb + i) * 7, c = (fb * nb + i) * 7, b = blocks[i];
    if (B[a + 1] < -500 || (al > 0.5 && B[c + 1] < -500)) { _m.compose(_p.set(0, -999, 0), _q.identity(), _zero); b.mesh.setMatrixAt(b.idx, _m); continue; }
    _pa.set(B[a], B[a + 1], B[a + 2]); _pb.set(B[c], B[c + 1], B[c + 2]); _pa.lerp(_pb, al);
    _qa2.set(B[a + 3], B[a + 4], B[a + 5], B[a + 6]); _qb2.set(B[c + 3], B[c + 4], B[c + 5], B[c + 6]); _qa2.slerp(_qb2, al);
    _m.compose(_pa, _qa2, b.size); b.mesh.setMatrixAt(b.idx, _m);
  }
  for (const m of Object.values(meshes)) m.instanceMatrix.needsUpdate = true;
  // projectiles and bombs
  const D = rec.dyn, na = rec.dn[fa], nB = rec.dn[fb];
  for (let i = 0; i < MAXD; i++) {
    const m = dynPool[i];
    if (i >= na) { if (m) m.visible = false; continue; }
    const j = (fa * MAXD + i) * 9, k = (fb * MAXD + i) * 9, mesh = dynMesh(i), kind = D[j];
    mesh.material = dynMats[kind] || ballMat; mesh.scale.setScalar(D[j + 8]); mesh.visible = true;
    _pa.set(D[j + 1], D[j + 2], D[j + 3]); _qa2.set(D[j + 4], D[j + 5], D[j + 6], D[j + 7]);
    let fast = 0;
    if (i < nB && D[k] === kind) { _pb.set(D[k + 1], D[k + 2], D[k + 3]); const d = _pa.distanceTo(_pb); if (d < 8) { fast = d * REC_HZ; _pa.lerp(_pb, al); _qb2.set(D[k + 4], D[k + 5], D[k + 6], D[k + 7]); _qa2.slerp(_qb2, al); } }
    mesh.position.copy(_pa); mesh.quaternion.copy(_qa2);
    if (kind === 2) mesh.material.emissiveIntensity = 0.4 + Math.abs(Math.sin(t * 18)) * 2;
    if (kind === 1 && fast > 12 && rnd() < 0.35 + rp.speed) for (let n = 0; n < 2; n++) particles.spawn(_pa.x + rr(-1, 1), _pa.y + rr(-1, 1), _pa.z + rr(-1, 1), rr(-1, 1), rr(0, 2), rr(-1, 1), 1, rr(0.4, 0.7), 0.2, 0.9, rr(0.9, 1.8), rr(0.4, 0.9), 0);
  }
  // crane (a ghost copy, so it shows even after the real one has driven away)
  const C = rec.cr, ca = fa * 14, cb = fb * 14;
  if (C[ca]) {
    if (!rp.ghost) rp.ghost = buildCraneVisual(C[ca + 2]);
    rp.ghost.g.visible = true;
    const w = C[cb] ? al : 0, L = (x, y) => C[ca + x] + (C[cb + x] - C[ca + x]) * w;
    _qa2.set(C[ca + 7], C[ca + 8], C[ca + 9], C[ca + 10]); if (w) { _qb2.set(C[cb + 7], C[cb + 8], C[cb + 9], C[cb + 10]); _qa2.slerp(_qb2, w); }
    poseCrane(rp.ghost, L(1), L(2), L(3), { x: L(4), y: L(5), z: L(6) }, _qa2);
  } else if (rp.ghost) rp.ghost.g.visible = false;
  if (groundGroup) groundGroup.position.set(C[ca + 11] + (C[cb + 11] - C[ca + 11]) * al, C[ca + 12] + (C[cb + 12] - C[ca + 12]) * al, C[ca + 13] + (C[cb + 13] - C[ca + 13]) * al);
}
function updateReplay(dt) {
  const near = rp.ev.some(e => SLOW_EV[e.kind] && e.t > rp.rt - 1.6 && e.t < rp.rt + 0.3);
  const want = near ? 0.3 : 1;
  rp.speed += (want - rp.speed) * Math.min(1, dt * (want < rp.speed ? 6 : 1.5));
  const sdt = dt * rp.speed; rp.rt += sdt; rp.real += dt;
  while (rp.evi < rp.ev.length && rp.ev[rp.evi].t <= rp.rt) playEvent(rp.ev[rp.evi++]);
  poseAt(Math.min(rp.rt, rp.t1));
  // cinematic camera: slow drift around, gently leaning toward the latest hit
  orbit.theta += dt * 0.09;
  _pa.copy(rp.focus); _pa.y = Math.min(_pa.y, level ? level.cam[2] * 1.6 + 2 : 6);
  orbit.target.lerp(_pa.lerp(rp.saved.target, 0.55), Math.min(1, dt * 0.8));
  $('rpFill').style.width = Math.min(100, (rp.rt - rp.t0) / (rp.t1 - rp.t0) * 100) + '%';
  $('rpSpeed').textContent = '×' + rp.speed.toFixed(1).replace('.', ',');
  $('replay').classList.toggle('slow', rp.speed < 0.6);
  if (rp.rt >= rp.t1 + 0.4) endReplay();
  return sdt;
}

/* ================= camera controls ================= */
const pointers = new Map(); let gesture = null;
canvas.addEventListener('pointerdown', e => {
  sfx.unlock(); canvas.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) { gesture = { x0: e.clientX, y0: e.clientY, t0: performance.now(), moved: 0, multi: false }; if (craneActive() && state === 'play') steerCrane(e.clientX, e.clientY); }
  else if (gesture) gesture.multi = true;
});
canvas.addEventListener('pointermove', e => {
  const p = pointers.get(e.pointerId); if (!p) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  if (pointers.size === 1) {
    if (gesture) gesture.moved += Math.abs(dx) + Math.abs(dy);
    if (craneActive() && state === 'play') steerCrane(e.clientX, e.clientY);
    else if (!gesture || gesture.moved > 8) { orbit.theta -= dx * 0.006; orbit.phi = Math.min(1.5, Math.max(0.25, orbit.phi - dy * 0.005)); }
  } else if (pointers.size === 2) {
    const [a, b] = [...pointers.values()], before = Math.hypot(a.x - b.x, a.y - b.y), mx0 = (a.x + b.x) / 2, my0 = (a.y + b.y) / 2;
    p.x = e.clientX; p.y = e.clientY;
    const [c, d] = [...pointers.values()], after = Math.hypot(c.x - d.x, c.y - d.y), mx1 = (c.x + d.x) / 2, my1 = (c.y + d.y) / 2;
    orbit.r = Math.min(80, Math.max(8, orbit.r * before / Math.max(1, after)));
    orbit.theta -= (mx1 - mx0) * 0.006; orbit.phi = Math.min(1.5, Math.max(0.25, orbit.phi - (my1 - my0) * 0.005));   // two fingers also turn the camera
    return;
  }
  p.x = e.clientX; p.y = e.clientY;
});
const endPtr = e => {
  if (!pointers.has(e.pointerId)) return;
  pointers.delete(e.pointerId);
  if (pointers.size === 0 && gesture && !gesture.multi && gesture.moved < 10 && performance.now() - gesture.t0 < 400) fire(e.clientX, e.clientY);
  if (pointers.size === 0) gesture = null;
};
canvas.addEventListener('pointerup', endPtr); canvas.addEventListener('pointercancel', endPtr);
canvas.addEventListener('wheel', e => { orbit.r = Math.min(80, Math.max(8, orbit.r * (1 + Math.sign(e.deltaY) * 0.1))); }, { passive: true });

function placeCamera() {
  const r = orbit.r, t = orbit.target;
  camera.position.set(t.x + r * Math.sin(orbit.phi) * Math.sin(orbit.theta), t.y + r * Math.cos(orbit.phi), t.z + r * Math.sin(orbit.phi) * Math.cos(orbit.theta));
  if (camera.position.y < 0.6) camera.position.y = 0.6;
  if (shake > 0.01) camera.position.add(new THREE.Vector3(rr(-1, 1), rr(-1, 1), rr(-1, 1)).multiplyScalar(shake * 0.35));
  camera.lookAt(t);
}

/* ================= HUD ================= */
function buildWeapons() {
  const el = $('weapons'); el.innerHTML = '';
  for (const w of WEAPONS) {
    const n = ammo[w.id]; if (!free && level && level.ammo[w.id] === 0) continue;
    const b = document.createElement('button'); b.className = 'wpn' + (weapon === w.id ? ' on' : '') + (n > 0 || (w.id === 'crane' && crane && !crane.leaving) ? '' : ' empty');
    const badge = w.id === 'crane' && crane && !crane.leaving ? (free ? '●' : Math.ceil(crane.t) + 'с') : n === Infinity ? '∞' : n;
    b.innerHTML = `<b>${w.icon}</b><span>${w.name}</span><em>${badge}</em>`;
    b.onclick = () => { weapon = w.id; buildWeapons(); haptic(8); if (w.id === 'quake' && ammo.quake > 0) toast('Торкніться екрана — і земля затруситься');
      if (w.id === 'crane' && state === 'play' && !ended) { if (crane && !crane.leaving) toast('Тягніть пальцем — баба полетить слідом'); else if (ammo.crane > 0) callCrane(); } };
    el.appendChild(b);
  }
}
let shownPct = 0;
function updateHud(p) {
  shownPct += (p - shownPct) * 0.2;
  $('pct').textContent = Math.round(shownPct * 100) + '%';
  $('fill').style.width = (shownPct * 100) + '%';
  $('goal').style.left = (level ? level.goal * 100 : 70) + '%';
  $('goal').hidden = free;
  $('fill').classList.toggle('won', !free && level && shownPct >= level.goal);
}
function toast(t) { const el = $('toast'); el.textContent = t; el.style.opacity = 1; clearTimeout(toast.h); toast.h = setTimeout(() => el.style.opacity = 0, 2200); }

function finish(p) {
  ended = true; state = 'result';
  const stars = p >= 0.95 ? 3 : p >= Math.min(0.85, level.goal + 0.15) ? 2 : p >= level.goal ? 1 : 0;
  const all = store.get('stars', {}); if (stars > (all[level.id] || 0)) { all[level.id] = stars; store.set('stars', all); }
  $('rTitle').textContent = stars ? ['', 'Є!', 'Чудово!', 'Нищівно!'][stars] : 'Ще стоїть';
  $('rPct').textContent = Math.round(p * 100) + '%';
  $('rStars').innerHTML = [1, 2, 3].map(i => `<i class="${i <= stars ? 'on' : ''}">★</i>`).join('');
  $('rText').textContent = stars ? `Зруйновано ${Math.round(p * 100)}% за ${shots} ${plural(shots)}.` : `Потрібно ${Math.round(level.goal * 100)}%. Спробуйте влучати в опори.`;
  const ix = LEVELS.indexOf(level), next = LEVELS[ix + 1];
  $('rNext').hidden = !(stars && next); $('rNext').onclick = () => startLevel(next);
  $('rReplay').hidden = !replayRange();
  $('result').hidden = false; haptic(stars ? 40 : 10);
}
const plural = n => n % 10 === 1 && n % 100 !== 11 ? 'постріл' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? 'постріли' : 'пострілів';

function showMenu() {
  state = 'menu'; $('hud').hidden = true; $('result').hidden = true; $('menu').hidden = false;
  const all = store.get('stars', {}); const grid = $('levels'); grid.innerHTML = '';
  LEVELS.forEach((lv, i) => {
    const prev = i === 0 || (all[LEVELS[i - 1].id] || 0) > 0, s = all[lv.id] || 0;
    const b = document.createElement('button'); b.className = 'lvl' + (prev ? '' : ' locked');
    b.innerHTML = `<span class="n">${i + 1}</span><b>${lv.name}</b><span class="d">${lv.desc}</span><span class="st">${[1, 2, 3].map(k => `<i class="${k <= s ? 'on' : ''}">★</i>`).join('')}</span>`;
    b.onclick = () => prev ? startLevel(lv) : toast('Спершу зруйнуйте попередню споруду');
    grid.appendChild(b);
  });
  const fr = $('freeList'); fr.innerHTML = '';
  for (const lv of LEVELS) { const b = document.createElement('button'); b.className = 'chip'; b.textContent = lv.name; b.onclick = () => startLevel(lv, true); fr.appendChild(b); }
  // a slowly turning demo in the background
  if (!blocks.length) { startLevel(LEVELS[2], true); state = 'menu'; $('hud').hidden = true; $('menu').hidden = false; }
}
$('btnMenu').onclick = showMenu;
$('btnReplay').onclick = startReplay;
$('rReplay').onclick = startReplay;
$('rpSkip').onclick = endReplay;
$('btnRestart').onclick = () => startLevel(level, free);
$('rAgain').onclick = () => startLevel(level, free);
$('rMenu').onclick = showMenu;
$('btnDiary').onclick = () => $('diary').classList.add('open');
$('closeDiary').onclick = () => $('diary').classList.remove('open');
const sound = $('optSound'), vib = $('optVibro');
sound.checked = store.get('sound', true); vib.checked = store.get('vibro', true);
sound.onchange = () => store.set('sound', sound.checked); vib.onchange = () => store.set('vibro', vib.checked);

function renderDiary() {
  const log = (window.CHANGELOG || []).slice().sort((a, b) => b.day - a.day);
  $('diaryList').innerHTML = log.map(e => `<div class="entry"><span class="d">ДЕНЬ ${e.day} · ${e.date.split('-').reverse().join('.')}</span><b>${e.title}</b><p>${e.text}</p></div>`).join('');
  const v = app ? app.version() : ''; if (v) $('ver').textContent = 'Версія ' + v + ' · Лабораторія Claude';
}

/* ================= main loop ================= */
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); particles.mat.uniforms.scale.value = h * renderer.getPixelRatio() * 0.9; }
addEventListener('resize', resize); resize();

let last = performance.now(), frame = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - last) / 1000); last = now; frame++;
  dustBudget = 6;
  if (state === 'menu') orbit.theta += dt * 0.08;
  if (state === 'replay') {
    const sdt = updateReplay(dt);
    if (rp) { particles.update(sdt); flash.intensity *= Math.pow(0.02, sdt); shake *= Math.pow(0.05, dt); placeCamera(); renderer.render(scene, camera); return; }
  }

  // earthquake: the whole ground slides back and forth
  if (quake && groundBody) {
    quake.t += dt; const w = quake.f * Math.PI * 2, k = quake.t < quake.dur ? Math.min(1, quake.t * 2) * Math.min(1, (quake.dur - quake.t) * 2) : 0;
    const v = quake.a * w * Math.cos(w * quake.t) * k;
    groundBody.velocity.set(Math.cos(quake.dir) * v, 0.25 * v * Math.sin(w * quake.t * 1.7), Math.sin(quake.dir) * v);
    shake = Math.max(shake, 0.3 * k);
    if (quake.t >= quake.dur) { groundBody.velocity.set(0, 0, 0); groundBody.position.set(0, 0, 0); groundBody.type = CANNON.Body.STATIC; quake = null; }
  }
  world.step(1 / 60, dt, 3); simTime += dt;
  if (groundGroup && groundBody) groundGroup.position.copy(groundBody.position);

  updateCrane(dt);
  if (crane && frame % 15 === 0 && state === 'play') buildWeapons();
  for (const b of pendingShatter) shatter(b); pendingShatter.clear();

  // bombs tick, blink and go off
  for (let i = bombs.length - 1; i >= 0; i--) { const bm = bombs[i]; bm.t -= dt; bm.mesh.material.emissiveIntensity = 0.4 + Math.abs(Math.sin(bm.t * 18)) * 2;
    if (bm.t <= 0) { scene.remove(bm.mesh); bombs.splice(i, 1); explode(bm.pos, 5.5, 17); } }

  // projectiles: render, trail, retire
  for (let i = projectiles.length - 1; i >= 0; i--) { const pr = projectiles[i]; pr.age += dt; pr.mesh.position.copy(pr.body.position); pr.mesh.quaternion.copy(pr.body.quaternion);
    if (pr.meteor && !pr.boomed) for (let k = 0; k < 3; k++) particles.spawn(pr.body.position.x + rr(-1, 1), pr.body.position.y + rr(-1, 1), pr.body.position.z + rr(-1, 1), rr(-1, 1), rr(0, 2), rr(-1, 1), 1, rr(0.4, 0.7), 0.2, 0.9, rr(0.9, 1.8), rr(0.4, 0.9), 0);
    if (pr.age > 14 || pr.body.position.y < -40) { world.removeBody(pr.body); scene.remove(pr.mesh); projectiles.splice(i, 1); } }

  // a falling block wakes its sleeping neighbours (otherwise they would hover)
  if (frame % 2 === 0) for (const b of blocks) {
    if (b.gone || b.body.sleepState === CANNON.Body.SLEEPING) continue;
    const v = b.body.velocity; if (v.x * v.x + v.y * v.y + v.z * v.z < 1) continue;
    const p = b.body.position;
    for (const o of blocks) { if (o.gone || o.body.sleepState !== CANNON.Body.SLEEPING) continue; const q = o.body.position;
      if (Math.abs(q.x - p.x) < 2.6 && Math.abs(q.y - p.y) < 2.6 && Math.abs(q.z - p.z) < 2.6) o.body.wakeUp(); }
  }

  // sync instances; drop blocks that fell out of the world
  const dirty = {};
  for (const b of blocks) { if (b.gone) continue;
    if (b.body.position.y < -40) { b.gone = true; world.removeBody(b.body); syncBlock(b); dirty[b.type] = 1; continue; }
    if (b.body.sleepState !== CANNON.Body.SLEEPING || quake || frame < 3) { syncBlock(b); dirty[b.type] = 1; } }
  for (const t in dirty) meshes[t].instanceMatrix.needsUpdate = true;
  if (state === 'play') recFrame();

  particles.update(dt);
  flash.intensity *= Math.pow(0.02, dt);
  shake *= Math.pow(0.05, dt);
  placeCamera();
  renderer.render(scene, camera);

  if (state === 'play' && frame % 10 === 0) {
    const p = destruction(); updateHud(p); $('btnReplay').classList.toggle('off', !hasReplay());
    if (!free && !ended) {
      const left = Object.values(ammo).reduce((a, b) => a + b, 0) + bombs.length + (crane ? 1 : 0);
      const awake = blocks.filter(b => !b.gone && b.body.sleepState !== CANNON.Body.SLEEPING).length;
      const calm = !crane && simTime - lastShot > 2.5 && awake < blocks.length * 0.03 && !quake;
      if ((left === 0 && (calm || simTime - lastShot > 9)) || p >= 0.995) setTimeout(() => { if (!ended && state === 'play') finish(destruction()); }, 600);
    }
  }
}
window.__ruina = { startLevel, LEVELS, fire, get state() { return state; }, destruction, explode: (x, y, z, R, p) => explode(new THREE.Vector3(x, y, z), R, p), setWeapon: w => { weapon = w; buildWeapons(); }, callCrane, steerCrane, get crane() { return crane; }, get blocks() { return blocks.length; }, startReplay, endReplay, get replay() { return rp; }, finish: () => finish(destruction()) };

renderDiary();
showMenu();
requestAnimationFrame(loop);
