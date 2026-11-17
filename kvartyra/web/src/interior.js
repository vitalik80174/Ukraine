// Interior variants for «Квартира»: palettes + one furniture layout built from simple shapes.
// Coordinates are metres in the plan's frame (see plan.js). Each style recolours the same layout and adds its own touches.
import * as THREE from '../../../ruina/web/vendor/three.module.js';
import { rbox, radiusFor } from './detail.js';

export const STYLES = [
  { id: 'raw', short: 'Як є', name: 'Як є', sub: 'зараз: стяжка, білі стіни, без дверей' },
  { id: 'base', short: 'Ремонт', name: 'Ремонт', sub: 'перший варіант: підлога, кухня, ванна' },
  {
    id: 'scandi', short: 'Сканді', name: 'Скандинавський', sub: 'світлий дуб, біле, сіре й гірчичне',
    wall: 0xf7f6f2, door: 0xf2f0ea, cabinet: 0xf4f2ec, counter: 0xc9a77c, upper: 0xf4f2ec,
    floors: { 'Кухня-вітальня': 'ash', 'Передпокій': 'ash', 'Кімната': 'ash', 'Спальня': 'ash', 'Ванна': 'tileWhite', 'Туалет': 'tileWhite', 'Балкон': 'stone' },
    accent: { living: 0xe8e3d8, bedroom: 0xb9c4bf, room: 0xf0ebe0 },
    sofa: 0xb8bbbd, cushion: 0xd9a63e, wood: 0xd4b48c, metal: 0x1e1f22, rug: 0xe9e4da, rug2: 0xcfc8bb,
    bed: 0xf1efe9, duvet: 0xdcdfe0, throw: 0xd9a63e, textile: 0xf3f1ec, plants: 3, shade: 0xffffff, lamp: 0xffe2b0
  },
  {
    id: 'japandi', short: 'Japandi', name: 'Japandi', sub: 'теплий мінімалізм: беж, горіх, оливка',
    wall: 0xece4d7, door: 0xb79a78, cabinet: 0x7f8562, counter: 0xe9e2d4, upper: 0xe9e2d4,
    floors: { 'Кухня-вітальня': 'oakWarm', 'Передпокій': 'oakWarm', 'Кімната': 'oakWarm', 'Спальня': 'oakWarm', 'Ванна': 'tileSand', 'Туалет': 'tileSand', 'Балкон': 'stone' },
    accent: { living: 0xd9cbb5, bedroom: 0xcbb79a, room: 0xe3d7c4 },
    sofa: 0xd8ccb8, cushion: 0xb5653f, wood: 0x6b4a32, metal: 0x2a2622, rug: 0xcdbfa6, rug2: 0xb9a888,
    bed: 0x6b4a32, duvet: 0xe7dfd0, throw: 0x8a8f6a, textile: 0xe4d9c6, plants: 2, shade: 0xf1e6cf, lamp: 0xffd39a, low: true
  },
  {
    id: 'loft', short: 'Лофт', name: 'Лофт', sub: 'графіт, горіх, коньячна шкіра й чорний метал',
    wall: 0xe9e8e5, door: 0x2b2d30, cabinet: 0x26282b, counter: 0x8d6a4a, upper: 0x26282b,
    floors: { 'Кухня-вітальня': 'walnutDark', 'Передпокій': 'polished', 'Кімната': 'walnutDark', 'Спальня': 'walnutDark', 'Ванна': 'tileDark', 'Туалет': 'tileDark', 'Балкон': 'polished' },
    accent: { living: 0x9a9c9e, bedroom: 0x5d6064, room: 0xa3a5a7 },
    sofa: 0x8a4f2a, cushion: 0xd8d2c6, wood: 0x5a3b26, metal: 0x151618, rug: 0x5c5f63, rug2: 0x3e4044,
    bed: 0x2b2d30, duvet: 0xbfc2c4, throw: 0x8a4f2a, textile: 0x8f9396, plants: 2, shade: 0x151618, lamp: 0xffc070
  },
  {
    id: 'lviv', short: 'Класика', name: 'Львівська класика', sub: 'смарагд, ялинка-паркет, латунь і оксамит',
    wall: 0xf4efe6, door: 0xf4efe6, cabinet: 0x2f4a3f, counter: 0xece7dd, upper: 0xf4efe6,
    floors: { 'Кухня-вітальня': 'herring', 'Передпокій': 'herring', 'Кімната': 'herring', 'Спальня': 'herring', 'Ванна': 'tileGreen', 'Туалет': 'tileGreen', 'Балкон': 'stone' },
    accent: { living: 0x2f4a3f, bedroom: 0x6b3a3f, room: 0x2e3f5c },
    sofa: 0x2e3f5c, cushion: 0xc9a14a, wood: 0x6d4a2f, metal: 0xb8914a, rug: 0x8c3b34, rug2: 0xd9c49c,
    bed: 0x6b3a3f, duvet: 0xf2ede2, throw: 0xc9a14a, textile: 0xe7dcc8, plants: 3, shade: 0xf1e6cf, lamp: 0xffd08a, classic: true
  },
  {
    id: 'avtor', short: 'Авторський', name: 'Авторський', sub: 'глина й чорнильна ялина, латунь, ялинка-паркет',
    // стеля 2,62 → низькі меблі (low), верхні шафи в колір стін «розчиняються»; кухня в глибині — темний якір,
    // світло тікає до вікон; тепла база під південно-східне сонце; латунь замість сталі
    wall: 0xefe9df, door: 0xe3dccd, cabinet: 0x2a362e, counter: 0xd9cfbc, upper: 0xefe9df,
    floors: { 'Кухня-вітальня': 'herring', 'Передпокій': 'herring', 'Кімната': 'herring', 'Спальня': 'herring', 'Ванна': 'tileSand', 'Туалет': 'tileSand', 'Балкон': 'stone' },
    accent: { living: 0xa9643f, bedroom: 0x2f4147, room: 0xcbb795 },
    sofa: 0xe5ded1, cushion: 0xb3572f, wood: 0x5f4530, metal: 0xb08d57, rug: 0xc9bca4, rug2: 0x9e8e72,
    bed: 0x5f4530, duvet: 0xe9e2d4, throw: 0xc08a3e, textile: 0xe8e0d0, plants: 3, shade: 0xefe4cf, lamp: 0xffd9a0, low: true
  }
];

// extra floor textures the styles use
export function extraFloors(canvasTex, woodTex, tileTex, rnd) {
  const herring = () => canvasTex(512, 512, (g, w, h) => {
    const r = rnd(41), L = 128, Wd = 32;
    g.fillStyle = '#7a5434'; g.fillRect(0, 0, w, h);
    for (let row = -2; row < 12; row++) for (let col = -2; col < 10; col++) {
      for (const flip of [0, 1]) {
        g.save(); g.translate(col * 2 * Wd * 1.414 + (flip ? Wd * 1.414 : 0), row * L * 0.707 * 0.7 + (flip ? 0 : 0));
        g.rotate(flip ? -Math.PI / 4 : Math.PI / 4);
        const l = (r() - 0.5) * 16;
        g.fillStyle = `hsl(${28 + (r() - 0.5) * 6},45%,${36 + l}%)`; g.fillRect(0, 0, L, Wd);
        g.strokeStyle = 'rgba(30,15,5,.45)'; g.lineWidth = 1.5; g.strokeRect(0, 0, L, Wd);
        g.restore();
      }
    }
  }, 0.9, 0.9);
  const polished = () => canvasTex(512, 512, (g, w, h) => {
    const r = rnd(9); g.fillStyle = '#b4b3ae'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 6000; i++) { const v = 150 + r() * 60 | 0; g.fillStyle = `rgba(${v},${v},${v},${0.03 + r() * 0.05})`; const s = 1 + r() * 5; g.fillRect(r() * w, r() * h, s, s); }
  }, 0.4, 0.4);
  return {
    herring, polished,
    ash: () => woodTex([38, 30, 76], 51),
    oakWarm: () => woodTex([30, 42, 60], 61),
    walnutDark: () => woodTex([24, 35, 30], 71),
    tileWhite: () => tileTex('#f2f3f3', '#eceeee', 3),
    tileSand: () => tileTex('#d8ccb6', '#d2c5ae', 3),
    tileDark: () => tileTex('#4a4d51', '#45484c', 3),
    tileGreen: () => tileTex('#5d7d6c', '#577665', 5)
  };
}

/** Builds the furniture group for a style. `solids` gets 2D boxes for walking. */
export function buildInterior(S, P, solids, hooks = {}) {
  const g = new THREE.Group();
  const mats = new Map();
  const mat = (c, rough = 0.7, metal = 0) => {
    const k = c + ':' + rough + ':' + metal;
    if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color: c, roughness: rough, metalness: metal }));
    return mats.get(k);
  };
  // every piece gets rounded edges: fabric (rough ≥ 0.9) soft and plump, the rest a small bevel
  const box = (x1, z1, x2, z2, y1, y2, m, solid) => {
    const w = Math.abs(x2 - x1), h = y2 - y1, d = Math.abs(z2 - z1), r = radiusFor(w, h, d, m.roughness >= 0.9 && m.metalness === 0);
    const mesh = new THREE.Mesh(r > 0 ? rbox(w, h, d, r) : new THREE.BoxGeometry(w, h, d), m);
    mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2); mesh.castShadow = true; mesh.receiveShadow = true; mesh.userData.y1 = y1; mesh.userData.h = h;
    g.add(mesh); if (solid) solids.push([Math.min(x1, x2), Math.min(z1, z2), Math.max(x1, x2), Math.max(z1, z2), 2]);
    return mesh;
  };
  const cyl = (x, z, r1, r2, y1, y2, m, seg = 16) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, y2 - y1, seg), m);
    mesh.position.set(x, (y1 + y2) / 2, z); mesh.castShadow = true; g.add(mesh); return mesh;
  };
  const ball = (x, y, z, r, m) => { const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 10), m); mesh.position.set(x, y, z); mesh.castShadow = true; g.add(mesh); return mesh; };
  const W = P.width, D = P.depth, RB = 2.95;
  const wood = mat(S.wood, 0.6), metal = mat(S.metal, 0.4, 0.6), fabric = mat(S.sofa, 0.95), cush = mat(S.cushion, 0.95);
  const textile = mat(S.textile, 0.95), white = mat(0xfafafa, 0.5);
  const legH = S.low ? 0.05 : 0.14;

  // ---- feature walls (thin paint layers) ----
  const paint = (x1, z1, x2, z2, c) => { const pm = new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 }); if (hooks.addWallAO) hooks.addWallAO(pm); const m = box(x1, z1, x2, z2, 0, P.height - 0.01, pm); m.userData.wallLike = true; m.castShadow = false; };
  paint(0.001, 2.6, 0.012, D, S.accent.living);            // living: wall behind the sofa
  paint(W - 0.012, RB + 0.02, W - 0.001, D, S.accent.bedroom); // bedroom: wall behind the bed
  paint(4.18, RB + 0.02, 4.19, D, S.accent.room);           // room: left wall

  // ---- kitchen: upper cabinets + pendant lamps over the table ----
  const KX = 4.05, KS = 0.65, KM = (KX - KS) / 5; // uppers/counter run from the oven пенал to the vent block: five modules
  const upM = hooks.addDepth ? hooks.addDepth(new THREE.MeshStandardMaterial({ color: S.upper, roughness: 0.55 })) : mat(S.upper, 0.55); upM.userData.own = true;
  box(KS, 0, KX, 0.36, 1.45, 2.25, upM);
  box(KS + 0.02, 0.36, KX - 0.02, 0.365, 1.47, 2.23, mat(S.upper, 0.4)); // fronts
  for (let x = KS + KM; x < KX - 0.05; x += KM) box(x - 0.004, 0.362, x + 0.004, 0.37, 1.47, 2.23, mat(0x222222, 0.6));
  const steel = mat(0xb9bec4, 0.25, 0.9);
  for (let x = KS + KM / 2; x < KX; x += KM) { box(x - 0.09, 0.37, x + 0.09, 0.39, 1.5, 1.515, steel); box(x - 0.09, 0.6, x + 0.09, 0.625, 0.78, 0.795, steel); } // handles
  for (let x = KS + KM; x < KX - 0.05; x += KM) box(x - 0.003, 0.598, x + 0.003, 0.606, 0.12, 0.84, mat(0x333333, 0.6)); // gaps between base fronts
  cyl(1.6, 0.1, 0.022, 0.026, 0.9, 1.18, steel); { const sp = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.016, 8, 16, Math.PI), steel); sp.position.set(1.6, 1.18, 0.21); sp.rotation.y = Math.PI / 2; g.add(sp); } // faucet
  for (const [hx, hz, rr] of [[2.65, 0.18, 0.09], [2.95, 0.18, 0.07], [2.65, 0.42, 0.07], [2.95, 0.42, 0.09]]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(rr, 0.006, 6, 28), mat(0x555555, 0.5)); ring.rotation.x = Math.PI / 2; ring.position.set(hx, 0.908, hz); g.add(ring); } // hob rings
  // ---- built-in appliances: Г-kitchen — integrated green fridge + oven/microwave пенал on the WEST wall (facing +X), hood over the hob ----
  {
    const dg = mat(0x121418, 0.1, 0.35), inner = mat(0x1b1d20, 0.3), ksteel = mat(0xc2c7cc, 0.22, 0.85), ctrl = mat(0x26282b, 0.35);
    const fx2 = 0.6; // east face of the west columns, facing the room
    // integrated fridge (z 0.6–1.2): long vertical handle + fridge/freezer split
    box(fx2, 0.66, fx2 + 0.02, 0.69, 0.25, 2.05, ksteel);
    box(fx2, 0.6, fx2 + 0.006, 1.2, 1.28, 1.31, mat(0x1f2a24, 0.5));
    // oven пенал (z 1.2–1.8): oven + microwave above it
    const oz1 = 1.26, oz2 = 1.74;
    box(fx2, oz1, fx2 + 0.025, oz2, 0.82, 1.42, dg); box(fx2 + 0.012, oz1 + 0.03, fx2 + 0.02, oz2 - 0.03, 0.9, 1.3, inner);
    box(fx2 + 0.025, oz1, fx2 + 0.035, oz2, 1.34, 1.4, ctrl); box(fx2 + 0.035, oz1 + 0.05, fx2 + 0.045, oz2 - 0.05, 1.355, 1.37, ksteel);
    box(fx2, oz1, fx2 + 0.025, oz2, 1.47, 1.8, dg); box(fx2 + 0.012, oz1 + 0.03, fx2 + 0.02, oz2 - 0.22, 1.52, 1.74, inner);
    box(fx2 + 0.012, oz2 - 0.2, fx2 + 0.02, oz2 - 0.04, 1.54, 1.76, ctrl); box(fx2 + 0.035, oz1 + 0.05, fx2 + 0.045, oz2 - 0.05, 1.78, 1.792, ksteel);
    // hood — integrated glass visor under the cabinets over the hob (north wall)
    box(2.42, 0, 3.18, 0.4, 1.36, 1.5, mat(S.upper, 0.5), false); box(2.47, 0.36, 3.13, 0.5, 1.28, 1.42, dg);
    box(2.5, 0.05, 3.1, 0.38, 1.345, 1.36, ksteel); ball(2.8, 1.375, 0.3, 0.028, new THREE.MeshBasicMaterial({ color: 0xfff1d6 }));
  }



  // ===== dining + living: three arrangements (LAY 0/1/2). The kitchen never leaves the north wall / vent block. =====
  const LAY = (((hooks.layout | 0) % 8) + 8) % 8;
  const chair = (x, z, face) => { // face: direction the sitter looks, ±1 along X
    const seat = S.id === 'scandi' ? mat(0xf2f0ea, 0.6) : S.id === 'loft' ? mat(0x8a4f2a, 0.8) : S.classic ? mat(S.sofa, 0.95) : wood;
    box(x - 0.21, z - 0.21, x + 0.21, z + 0.21, 0.44, 0.48, seat);
    for (const [dx, dz] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) box(x + dx - 0.015, z + dz - 0.015, x + dx + 0.015, z + dz + 0.015, 0, 0.44, S.id === 'loft' ? metal : wood);
    const bx = x - face * 0.2; box(bx - 0.02, z - 0.2, bx + 0.02, z + 0.2, 0.48, 0.9, seat);
  };
  const buildDining = (tx, tz) => {
    box(tx - 1.1, tz - 0.9, tx + 1.1, tz + 0.9, 0.001, 0.011, mat(S.rug2, 1)); // rug under the table
    if (S.classic) { cyl(tx, tz, 0.55, 0.55, 0.72, 0.76, wood, 32); cyl(tx, tz, 0.06, 0.12, 0, 0.72, wood); solids.push([tx - 0.55, tz - 0.55, tx + 0.55, tz + 0.55, 2]); }
    else { box(tx - 0.7, tz - 0.42, tx + 0.7, tz + 0.42, 0.72, 0.76, wood, true); for (const [dx, dz] of [[-0.62, -0.34], [0.62, -0.34], [-0.62, 0.34], [0.62, 0.34]]) box(tx + dx - 0.025, tz + dz - 0.025, tx + dx + 0.025, tz + dz + 0.025, 0, 0.72, S.id === 'loft' ? metal : wood); }
    chair(tx - 0.95, tz - 0.2, 1); chair(tx - 0.95, tz + 0.25, 1); chair(tx + 0.95, tz - 0.2, -1); chair(tx + 0.95, tz + 0.25, -1);
    cyl(tx, tz, 0.05, 0.07, 0.76, 0.97, mat(0x9aa08a, 0.5)); // ваза з гілкою
    for (const [gx, gy, gz] of [[0.06, 1.06, 0.02], [-0.05, 1.12, -0.03], [0.01, 1.18, 0.05]]) ball(tx + gx, gy, tz + gz, 0.045, mat(0x5d7d5a, 0.9));
    for (const dx of S.classic ? [0] : [-0.4, 0.4]) {
      box(tx + dx - 0.004, tz - 0.004, tx + dx + 0.004, tz + 0.004, 1.75, 2.7, metal);
      const sh = new THREE.Mesh(new THREE.ConeGeometry(S.classic ? 0.32 : 0.17, 0.22, 24, 1, true), mat(S.shade, 0.6, S.id === 'loft' ? 0.5 : 0));
      sh.material.side = THREE.DoubleSide; sh.position.set(tx + dx, 1.68, tz); g.add(sh);
      ball(tx + dx, 1.6, tz, 0.05, new THREE.MeshBasicMaterial({ color: S.lamp }));
    }
  };
  // 3-seat sofa, backrest on the west wall (x = x1), seat facing +X; optional L-chaise returning toward the window
  const buildSofa = (x1, z1, x2, z2, chaise) => {
    box(x1, z1, x2, z2, legH, legH + 0.3, fabric, true);                 // base
    box(x1, z1, x1 + 0.24, z2, legH + 0.3, legH + 0.78, fabric);         // back
    box(x1, z1, x2, z1 + 0.18, legH + 0.3, legH + 0.55, fabric);         // arms
    box(x1, z2 - 0.18, x2, z2, legH + 0.3, legH + 0.55, fabric);
    const n = Math.max(2, Math.round((z2 - z1 - 0.3) / 0.8)), sp = (z2 - z1 - 0.3) / n;
    for (let i = 0; i < n; i++) { const z = z1 + 0.15 + sp * (i + 0.5); box(x1 + 0.24, z - sp / 2 + 0.03, x2 - 0.04, z + sp / 2 - 0.03, legH + 0.3, legH + 0.42, fabric); }
    box(x1 + 0.24, z1 + 0.3, x1 + 0.36, z1 + 0.75, legH + 0.42, legH + 0.82, cush); box(x1 + 0.24, z2 - 0.75, x1 + 0.36, z2 - 0.3, legH + 0.42, legH + 0.82, cush);
    box(x1 + 0.26, z2 - 0.88, x2 - 0.05, z2 - 0.32, legH + 0.43, legH + 0.475, mat(S.throw, 0.95)); box(x2 - 0.05, z2 - 0.88, x2 + 0.04, z2 - 0.32, legH + 0.08, legH + 0.44, mat(S.throw, 0.95)); // плед
    if (!S.low) for (const [x, z] of [[x1 + 0.06, z1 + 0.06], [x2 - 0.06, z1 + 0.06], [x1 + 0.06, z2 - 0.06], [x2 - 0.06, z2 - 0.06]]) box(x - 0.02, z - 0.02, x + 0.02, z + 0.02, 0, legH, metal);
    if (chaise) { box(x1, z2 - 0.02, x2 + 0.78, z2 + 0.9, legH, legH + 0.3, fabric, true); box(x1, z2 + 0.72, x2 + 0.78, z2 + 0.9, legH + 0.3, legH + 0.55, fabric); } // chaise + its low back
  };
  const coffeeTable = (cx, cz) => {
    if (S.low || S.classic) { cyl(cx, cz, 0.45, 0.45, 0.32, 0.36, wood, 32); cyl(cx, cz, 0.36, 0.36, 0.0, 0.32, wood, 32); solids.push([cx - 0.4, cz - 0.4, cx + 0.4, cz + 0.4, 2]); }
    else { box(cx - 0.4, cz - 0.5, cx + 0.4, cz + 0.5, 0.36, 0.4, S.id === 'loft' ? mat(0x5a3b26, 0.5) : wood, true); for (const [x, z] of [[cx - 0.37, cz - 0.47], [cx + 0.37, cz - 0.47], [cx - 0.37, cz + 0.47], [cx + 0.37, cz + 0.47]]) box(x - 0.015, z - 0.015, x + 0.015, z + 0.015, 0, 0.36, metal); }
    const ty = (S.low || S.classic) ? 0.365 : 0.405;
    const b1 = box(cx - 0.3, cz - 0.32, cx - 0.02, cz - 0.1, ty, ty + 0.022, mat(0x2e3f5c, 0.7)); b1.rotation.y = 0.16;
    const b2 = box(cx - 0.27, cz - 0.3, cx - 0.05, cz - 0.12, ty + 0.022, ty + 0.04, mat(0xc9a14a, 0.7)); b2.rotation.y = -0.09;
    ball(cx, 0.45, cz, 0.07, mat(S.cushion, 0.5));
  };
  const tvWall = (z1, z2) => { // low console + TV on the partition (x ≈ 4.0, from z ≥ 2.83)
    box(3.62, z1, 4.04, z2, S.low ? 0.0 : 0.2, 0.55, S.id === 'loft' ? metal : wood, true);
    box(3.99, (z1 + z2) / 2 - 0.6, 4.04, (z1 + z2) / 2 + 0.6, 1.0, 1.68, mat(0x0c0d0f, 0.25, 0.3));
  };
  let _rugM = null; // woven rug texture, generated once per build
  const rugMat = () => {
    if (_rugM) return _rugM;
    if (!hooks.canvasTex) return _rugM = mat(S.rug, 1);
    const hx = v => '#' + v.toString(16).padStart(6, '0');
    const tex = hooks.canvasTex(256, 256, (c, w, h) => {
      c.fillStyle = hx(S.rug); c.fillRect(0, 0, w, h);
      c.strokeStyle = hx(S.rug2); c.lineWidth = 2;
      c.globalAlpha = 0.4; for (let y = 3; y < h; y += 7) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); }
      c.globalAlpha = 0.14; for (let x = 3; x < w; x += 7) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, h); c.stroke(); }
    }, 1.6, 1.6);
    _rugM = new THREE.MeshStandardMaterial({ map: tex, roughness: 1 }); _rugM.userData.own = true; return _rugM;
  };
  const rugAt = (x1, z1, x2, z2) => { box(x1, z1, x2, z2, 0.002, 0.012, rugMat()); if (S.classic) box(x1 + 0.15, z1 + 0.15, x2 - 0.15, z2 - 0.15, 0.0125, 0.014, mat(S.rug2, 1)); };
  const armchairAt = (ax, az) => {
    box(ax - 0.4, az - 0.4, ax + 0.4, az + 0.4, legH, legH + 0.32, cush, true);
    box(ax - 0.4, az + 0.22, ax + 0.4, az + 0.4, legH + 0.32, legH + 0.8, cush);
  };
  // kitchen island: turns the straight run into a П — sink, hob and risers stay on the north wall
  const kitchenIsland = () => {
    const cab = mat(S.cabinet, 0.5), top = mat(S.counter, 0.35);
    box(1.2, 1.2, 2.8, 1.92, 0, 0.86, cab, true);          // body
    box(1.12, 1.12, 2.88, 2.06, 0.86, 0.9, top);           // worktop with a south overhang for stools
    for (const x of [1.5, 2.0, 2.5]) { cyl(x, 2.3, 0.18, 0.21, 0.58, 0.62, mat(S.id === 'loft' ? 0x8a4f2a : S.wood, 0.6), 20); cyl(x, 2.3, 0.02, 0.02, 0, 0.58, metal); }
    solids.push([1.2, 1.2, 2.8, 2.5, 2]);
  };
  // sofa with the backrest on the NORTH side (z = z1), seat faces +Z (the windows)
  const sofaN = (x1, z1, x2, z2) => {
    box(x1, z1, x2, z2, legH, legH + 0.3, fabric, true);
    box(x1, z1, x2, z1 + 0.24, legH + 0.3, legH + 0.78, fabric);
    box(x1, z1, x1 + 0.18, z2, legH + 0.3, legH + 0.55, fabric);
    box(x2 - 0.18, z1, x2, z2, legH + 0.3, legH + 0.55, fabric);
    const n = Math.max(2, Math.round((x2 - x1 - 0.3) / 0.8)), sp = (x2 - x1 - 0.3) / n;
    for (let i = 0; i < n; i++) { const x = x1 + 0.15 + sp * (i + 0.5); box(x - sp / 2 + 0.03, z1 + 0.24, x + sp / 2 - 0.03, z2 - 0.04, legH + 0.3, legH + 0.42, fabric); }
    box(x1 + 0.3, z1 + 0.24, x1 + 0.75, z1 + 0.36, legH + 0.42, legH + 0.82, cush); box(x2 - 0.75, z1 + 0.24, x2 - 0.3, z1 + 0.36, legH + 0.42, legH + 0.82, cush);
    box(x2 - 0.88, z1 + 0.26, x2 - 0.32, z2 - 0.05, legH + 0.43, legH + 0.475, mat(S.throw, 0.95)); box(x2 - 0.88, z2 - 0.05, x2 - 0.32, z2 + 0.04, legH + 0.08, legH + 0.44, mat(S.throw, 0.95)); // плед
    if (!S.low) for (const [x, z] of [[x1 + 0.06, z1 + 0.06], [x2 - 0.06, z1 + 0.06], [x1 + 0.06, z2 - 0.06], [x2 - 0.06, z2 - 0.06]]) box(x - 0.02, z - 0.02, x + 0.02, z + 0.02, 0, legH, metal);
  };
  // sofa with the backrest on the EAST side (x = x2, the partition), seat faces -X
  const sofaE = (x1, z1, x2, z2) => {
    box(x1, z1, x2, z2, legH, legH + 0.3, fabric, true);
    box(x2 - 0.24, z1, x2, z2, legH + 0.3, legH + 0.78, fabric);
    box(x1, z1, x2, z1 + 0.18, legH + 0.3, legH + 0.55, fabric);
    box(x1, z2 - 0.18, x2, z2, legH + 0.3, legH + 0.55, fabric);
    const n = Math.max(2, Math.round((z2 - z1 - 0.3) / 0.8)), sp = (z2 - z1 - 0.3) / n;
    for (let i = 0; i < n; i++) { const z = z1 + 0.15 + sp * (i + 0.5); box(x1 + 0.04, z - sp / 2 + 0.03, x2 - 0.24, z + sp / 2 - 0.03, legH + 0.3, legH + 0.42, fabric); }
    box(x2 - 0.36, z1 + 0.3, x2 - 0.24, z1 + 0.75, legH + 0.42, legH + 0.82, cush); box(x2 - 0.36, z2 - 0.75, x2 - 0.24, z2 - 0.3, legH + 0.42, legH + 0.82, cush);
    box(x1 + 0.05, z2 - 0.88, x2 - 0.26, z2 - 0.32, legH + 0.43, legH + 0.475, mat(S.throw, 0.95)); box(x1 - 0.04, z2 - 0.88, x1 + 0.05, z2 - 0.32, legH + 0.08, legH + 0.44, mat(S.throw, 0.95)); // плед
    if (!S.low) for (const [x, z] of [[x1 + 0.06, z1 + 0.06], [x2 - 0.06, z1 + 0.06], [x1 + 0.06, z2 - 0.06], [x2 - 0.06, z2 - 0.06]]) box(x - 0.02, z - 0.02, x + 0.02, z + 0.02, 0, legH, metal);
  };
  // desk against the window (faces +Z), with a chair and a monitor
  const deskAt = (dx, dz) => {
    box(dx - 0.5, dz - 0.28, dx + 0.5, dz + 0.28, 0.72, 0.75, wood, true);
    for (const [x, z] of [[dx - 0.46, dz - 0.24], [dx + 0.46, dz - 0.24], [dx - 0.46, dz + 0.24], [dx + 0.46, dz + 0.24]]) box(x - 0.02, z - 0.02, x + 0.02, z + 0.02, 0, 0.72, S.id === 'loft' ? metal : wood);
    box(dx - 0.22, dz + 0.22, dx + 0.22, dz + 0.25, 0.75, 1.22, mat(0x0c0d0f, 0.3)); box(dx - 0.06, dz + 0.2, dx + 0.06, dz + 0.24, 0.75, 0.9, metal);
    box(dx - 0.22, dz - 0.78, dx + 0.22, dz - 0.36, 0.44, 0.48, cush); box(dx - 0.22, dz - 0.78, dx + 0.22, dz - 0.74, 0.48, 0.86, cush);
    solids.push([dx - 0.55, dz - 0.85, dx + 0.55, dz + 0.3, 2]);
  };
  // peninsula: the worktop returns down the WEST wall from the fridge column — a Г-shaped kitchen
  const peninsulaG = () => {
    const cab = mat(S.cabinet, 0.5), top = mat(S.counter, 0.35);
    box(0, 1.82, 0.72, 3.5, 0, 0.86, cab, true);
    box(0, 1.78, 0.8, 3.56, 0.86, 0.9, top);
    for (const z of [2.35, 3.05]) { cyl(0.98, z, 0.18, 0.21, 0.58, 0.62, mat(S.id === 'loft' ? 0x8a4f2a : S.wood, 0.6), 20); cyl(0.98, z, 0.02, 0.02, 0, 0.58, metal); }
    solids.push([0, 1.82, 1.2, 3.5, 2]);
  };

  if (LAY === 0) {          // вздовж стіни
    rugAt(0.6, 4.0, 3.2, 6.7); buildSofa(0.02, 4.2, 0.95, 6.5, false); coffeeTable(1.8, 5.35); tvWall(4.4, 6.3); armchairAt(3.15, 6.75); buildDining(2.0, 2.15);
  } else if (LAY === 1) {   // їдальня біля вікна + острів (П-кухня)
    buildDining(2.0, 6.5); rugAt(0.6, 2.55, 3.2, 5.05); buildSofa(0.02, 2.7, 0.95, 5.0, false); coffeeTable(1.8, 3.85); tvWall(2.95, 4.8); armchairAt(3.45, 6.95); kitchenIsland();
  } else if (LAY === 2) {   // кутовий диван
    rugAt(0.6, 3.9, 3.5, 6.9); buildSofa(0.02, 4.0, 0.95, 6.4, true); coffeeTable(2.15, 5.0); tvWall(4.4, 6.3); buildDining(2.0, 2.15);
  } else if (LAY === 3) {   // диван до вікна: лаунж на краєвид + два крісла
    rugAt(0.6, 4.4, 3.5, 7.0); sofaN(0.9, 4.65, 3.3, 5.6); coffeeTable(2.1, 6.15); armchairAt(0.6, 6.55); armchairAt(3.4, 6.55); tvWall(3.0, 4.4); buildDining(2.0, 2.15);
  } else if (LAY === 4) {   // два дивани навпроти, вікно як фокус
    rugAt(0.55, 3.6, 3.5, 6.2); buildSofa(0.02, 3.7, 0.9, 6.0, false); sofaE(3.15, 3.7, 4.03, 6.0); coffeeTable(2.0, 4.85); buildDining(2.0, 2.15);
  } else if (LAY === 5) {   // робочий кут: стіл-офіс біля вікна
    rugAt(0.6, 4.0, 3.2, 6.1); buildSofa(0.02, 4.2, 0.95, 6.5, false); coffeeTable(1.8, 5.35); tvWall(4.4, 6.3); deskAt(3.3, 7.05); buildDining(2.0, 2.15);
  } else if (LAY === 6) {   // острів по центру: їмо за островом, лаунж до вікон
    kitchenIsland(); rugAt(0.6, 4.1, 3.4, 6.7); sofaN(0.9, 4.3, 3.0, 5.2); coffeeTable(1.95, 5.7); tvWall(3.6, 5.2);
  } else {                  // Г-кухня з півостровом, їдальня біля вікна
    peninsulaG(); rugAt(0.7, 3.8, 3.4, 6.3); buildSofa(0.02, 3.75, 0.9, 6.0, false); coffeeTable(1.7, 4.85); tvWall(4.0, 5.6); buildDining(2.6, 6.4);
  }
  // floor lamp in a free window corner, per arrangement
  const LAMP = [[0.45, 6.95], [0.45, 6.95], [3.5, 7.0], [2.05, 7.25], [2.0, 6.9], [0.45, 6.95], [2.0, 6.95], [3.6, 6.9]];
  const [lx, lz] = LAMP[LAY] || [0.45, 6.95];
  cyl(lx, lz, 0.14, 0.16, 0, 0.03, metal); cyl(lx, lz, 0.012, 0.012, 0.03, 1.5, metal);
  const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.28, 24, 1, true), mat(S.shade, 0.8)); fl.material.side = THREE.DoubleSide; fl.position.set(lx, 1.6, lz); g.add(fl);
  // curtains by the living window and bedroom window
  // curtains: cloth gathered in folds, hanging from a thin rod
  const curtainMat = new THREE.MeshStandardMaterial({ color: S.textile, roughness: 1, side: THREE.DoubleSide });
  const curtain = (x, z1, w) => {
    const hgt = P.height - 0.12, geo = new THREE.PlaneGeometry(w, hgt, 30, 1), pos = geo.attributes.position, folds = Math.max(3, Math.round(w / 0.085));
    for (let i = 0; i < pos.count; i++) { const u = pos.getX(i) / w + 0.5; pos.setZ(i, Math.sin(u * Math.PI * 2 * folds) * 0.03 + Math.sin(u * 9.4 + x) * 0.012); }
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, curtainMat); m.position.set(x, 0.02 + hgt / 2, z1 + 0.05); m.castShadow = true; m.receiveShadow = true;
    m.userData.wallLike = true; m.userData.y1 = 0.02; m.userData.h = hgt; g.add(m);
  };
  const rod = (x1, x2) => { box(x1, D - 0.225, x2, D - 0.205, P.height - 0.1, P.height - 0.08, metal).userData.wallLike = true; };
  curtain(0.85, D - 0.26, 0.42); curtain(3.15, D - 0.26, 0.42); rod(0.55, 3.45);
  curtain(4.5, D - 0.26, 0.34); curtain(6.8, D - 0.26, 0.34); rod(4.28, 7.05);
  curtain(7.6, D - 0.26, 0.34); curtain(9.9, D - 0.26, 0.42); rod(7.4, 10.18);
  // tiled splash-back between the worktop and the upper cabinets
  box(KS, 0.001, KX, 0.012, 0.9, 1.45, mat(S.id === 'loft' ? 0x3a3c40 : S.id === 'lviv' ? 0xe9e4d6 : 0xf3f1ec, 0.18));
  // посуд на стільниці: дошка, чайник, миска з фруктами
  const brd = box(3.22, 0.14, 3.68, 0.46, 0.905, 0.925, mat(0x8a6a48, 0.7)); brd.rotation.y = 0.12;
  cyl(1.55, 0.3, 0.1, 0.12, 0.9, 1.08, mat(S.id === 'loft' ? 0x2b2d30 : 0xd8d2c6, 0.35, 0.4)); ball(1.55, 1.1, 0.3, 0.04, metal);
  cyl(2.2, 0.3, 0.16, 0.1, 0.9, 0.99, mat(S.counter, 0.5));
  for (const [fx, fz] of [[2.13, 0.26], [2.27, 0.31], [2.2, 0.37]]) ball(fx, 1.0, fz, 0.05, mat(0xd98f3c, 0.6));
  // pictures: an abstract print for each room in the colours of the style
  const hex = v => '#' + v.toString(16).padStart(6, '0');
  const art = (cx, cy, cz, w, h, face, seed) => { // face +1: hangs on a wall at x = cx and looks along +X; −1: looks along −X
    if (!hooks.canvasTex) return;
    const tex = hooks.canvasTex(256, Math.round(256 * h / w), (c, cw, ch) => {
      let q = seed; const r = () => (q = (q * 16807) % 2147483647) / 2147483647;
      const pal = [S.cushion, S.sofa, S.wood, S.accent.bedroom, S.throw].map(hex);
      c.fillStyle = hex(S.id === 'loft' ? 0xd8d6d0 : 0xf4f0e6); c.fillRect(0, 0, cw, ch);
      for (let i = 0; i < 5; i++) {
        c.globalAlpha = 0.82; c.fillStyle = pal[(i + seed) % pal.length]; c.beginPath();
        const px = cw * (0.18 + r() * 0.64), py = ch * (0.3 + r() * 0.45), pr = ch * (0.16 + r() * 0.22);
        if (i % 2) c.arc(px, py, pr, Math.PI, Math.PI * 2); else c.ellipse(px, py, pr * 1.2, pr * 0.75, r() * 3, 0, 7);
        c.fill();
      }
      c.globalAlpha = 1; c.strokeStyle = '#26282b'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(cw * 0.08, ch * 0.78); c.bezierCurveTo(cw * 0.35, ch * 0.5, cw * 0.6, ch * 0.95, cw * 0.93, ch * 0.62); c.stroke();
      c.fillStyle = hex(S.cushion); c.beginPath(); c.arc(cw * 0.78, ch * 0.24, ch * 0.07, 0, 7); c.fill();
    }, 1, 1);
    const pm = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 }); pm.userData.own = true;
    const pic = new THREE.Mesh(new THREE.PlaneGeometry(w, h), pm); pic.position.set(cx + face * 0.024, cy, cz); pic.rotation.y = face * Math.PI / 2; pic.userData.hideLow = true; g.add(pic);
    const fr = box(Math.min(cx, cx + face * 0.022), cz - w / 2 - 0.025, Math.max(cx, cx + face * 0.022), cz + w / 2 + 0.025, cy - h / 2 - 0.025, cy + h / 2 + 0.025, S.classic ? mat(S.metal, 0.35, 0.8) : S.id === 'loft' ? metal : wood);
    fr.userData.hideLow = true; fr.castShadow = false;
  };
  art(0.013, 1.62, 5.35, 1.35, 0.85, 1, 5);
  art(4.192, 1.6, 5.2, 0.7, 0.95, 1, 9);
  art(W - 0.013, 1.9, 5.6, 1.1, 0.6, -1, 13);

  // ---- room (study / guest): daybed, desk at the window, bookcase ----
  box(4.19, 4.2, 5.05, 6.2, legH, legH + 0.36, textile, true);
  box(4.19, 4.2, 4.4, 6.2, legH + 0.36, legH + 0.8, textile);
  box(4.42, 4.35, 4.55, 4.85, legH + 0.36, legH + 0.75, cush); box(4.42, 5.55, 4.55, 6.05, legH + 0.36, legH + 0.75, cush);
  box(6.45, 5.5, 7.16, 7.0, 0.72, 0.75, wood, true);
  for (const [x, z] of [[6.48, 5.53], [7.13, 5.53], [6.48, 6.97], [7.13, 6.97]]) box(x - 0.02, z - 0.02, x + 0.02, z + 0.02, 0, 0.72, metal);
  box(7.1, 5.95, 7.14, 6.55, 0.98, 1.36, mat(0x0c0d0f, 0.3)); box(7.0, 6.2, 7.08, 6.3, 0.75, 0.98, metal); // monitor
  box(6.0, 6.0, 6.4, 6.4, 0.45, 0.5, mat(S.cushion, 0.8)); box(5.97, 6.0, 6.0, 6.4, 0.5, 0.95, mat(S.cushion, 0.8)); cyl(6.2, 6.2, 0.02, 0.02, 0, 0.45, metal);
  box(4.19, 3.15, 4.55, 3.95, 0, 2.1, wood, true);
  const r = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  const bookCols = [0x8c3b34, 0x2e3f5c, 0xc9a14a, 0x5d7d6c, 0xe7dcc8, 0x3a3a3a];
  for (let shelf = 0; shelf < 5; shelf++) {
    const y = 0.05 + shelf * 0.41; box(4.2, 3.17, 4.55, 3.93, y, y + 0.02, mat(S.wood, 0.6));
    let z = 3.2; while (z < 3.85) { const t = 0.03 + r() * 0.04, hh = 0.22 + r() * 0.1; box(4.25, z, 4.5, z + t, y + 0.02, y + 0.02 + hh, mat(bookCols[(r() * 6) | 0], 0.8)); z += t + 0.005; }
  }
  box(4.6, 4.0, 6.3, 6.4, 0.002, 0.012, mat(S.rug2, 1));

  // ---- bedroom: bed against the right wall, nightstands, wardrobe, rug ----
  const bx2 = W - 0.01, bx1 = bx2 - 2.05, bz1 = 4.8, bz2 = 6.4;
  box(bx1, bz1, bx2, bz2, S.low ? 0.0 : 0.12, 0.34, mat(S.bed, 0.8), true);
  box(bx1 + 0.04, bz1 + 0.04, bx2 - 0.05, bz2 - 0.04, 0.34, 0.56, white);
  box(bx1 + 0.02, bz1 + 0.02, bx2 - 0.55, bz2 - 0.02, 0.56, 0.6, mat(S.duvet, 0.95));
  box(bx1 + 0.02, bz1 + 0.02, bx1 + 0.5, bz2 - 0.02, 0.6, 0.63, mat(S.throw, 0.95));
  box(bx2 - 0.5, bz1 + 0.1, bx2 - 0.12, bz1 + 0.75, 0.56, 0.7, white); box(bx2 - 0.5, bz2 - 0.75, bx2 - 0.12, bz2 - 0.1, 0.56, 0.7, white);
  box(bx2 - 0.1, bz1 - 0.1, bx2, bz2 + 0.1, 0, S.classic ? 1.35 : 1.1, mat(S.classic ? S.sofa : S.bed, 0.9));
  for (const z of [bz1 - 0.5, bz2 + 0.05]) {
    box(bx2 - 0.45, z, bx2 - 0.02, z + 0.45, S.low ? 0 : 0.12, 0.5, wood, true);
    cyl(bx2 - 0.22, z + 0.22, 0.07, 0.09, 0.5, 0.75, mat(S.shade, 0.6)); ball(bx2 - 0.22, 0.8, z + 0.22, 0.03, new THREE.MeshBasicMaterial({ color: S.lamp }));
  }
  box(7.8, 4.3, 9.6, 7.0, 0.002, 0.012, mat(S.rug, 1));
  // wardrobe along the wall by the door (right of the switch, under the AC outlet) — the left side of the room stays a free path to the balcony
  box(8.52, 2.96, W - 0.01, 3.56, 0, 2.25, mat(S.id === 'scandi' ? 0xf4f2ec : S.id === 'loft' ? 0x26282b : S.id === 'lviv' ? 0xf4efe6 : 0xd9cbb5, 0.6), true);
  for (const x of [9.11, 9.7]) box(x - 0.003, 3.56, x + 0.003, 3.57, 0.05, 2.2, mat(0x333333, 0.6));
  for (const x of [9.0, 9.22, 9.59, 9.81]) box(x - 0.008, 3.57, x + 0.008, 3.6, 0.95, 1.35, mat(0xb9bec4, 0.25, 0.9)); // handles

  // ---- hall: wardrobe, bench, round mirror ----
  if (!P.closet) {
    box(4.35, 0.01, 5.95, 0.6, 0, 2.5, mat(S.id === 'loft' ? 0x26282b : S.upper, 0.55), true);
    for (const x of [4.75, 5.15, 5.55]) box(x - 0.003, 0.6, x + 0.003, 0.61, 0.05, 2.45, mat(0x333333, 0.6));
  } else { // walk-in wardrobe: an open system along the back wall and the left wall
    const C = P.closet, carc = mat(S.id === 'loft' ? 0x26282b : S.id === 'lviv' ? 0xf4efe6 : S.upper, 0.55), rail = mat(0xb9bec4, 0.25, 0.9);
    const clothes = [S.sofa, S.textile, S.throw, S.cushion, S.duvet, 0x2e3440, 0xd9d4ca, 0x7a8a9a].map(c => mat(c, 0.95));
    let q = 3; const r2 = () => (q = (q * 16807) % 2147483647) / 2147483647;
    // back wall (z = 0): two hanging sections and a column of shelves, kept clear of the door's swing
    const bx1 = C.x1 + 0.02, bx2 = C.x2 - 0.38, bd = 0.56;
    for (const x of [bx1, (bx1 + bx2) / 2 - 0.25, (bx1 + bx2) / 2 + 0.25, bx2 - 0.02]) box(x - 0.01, 0.01, x + 0.01, bd, 0, 2.3, carc, true);
    box(bx1, 0.01, bx2, bd, 2.28, 2.3, carc); box(bx1, 0.01, bx2, bd, 0, 0.06, carc);
    for (const [a, b] of [[bx1 + 0.01, (bx1 + bx2) / 2 - 0.26], [(bx1 + bx2) / 2 + 0.26, bx2 - 0.03]]) {
      box(a, 0.01, b, bd, 1.9, 1.92, carc); box(a, bd / 2 - 0.01, b, bd / 2 + 0.01, 1.78, 1.8, rail); // shelf + rail
      for (let x = a + 0.05; x < b - 0.04; x += 0.045 + r2() * 0.03) { const len = 0.65 + r2() * 0.35; box(x - 0.012, 0.07, x + 0.012, bd - 0.05, 1.78 - len, 1.77, clothes[(r2() * clothes.length) | 0]); }
      box(a + 0.02, 0.05, b - 0.02, bd - 0.05, 0.12, 0.14, carc); // shoe shelf
      for (let x = a + 0.1; x < b - 0.1; x += 0.22) box(x - 0.08, 0.1, x + 0.08, 0.36, 0.14, 0.24, clothes[5]);
    }
    for (let y = 0.4; y < 2.2; y += 0.36) box((bx1 + bx2) / 2 - 0.25, 0.01, (bx1 + bx2) / 2 + 0.25, bd, y, y + 0.02, carc); // middle shelves
    for (let y = 0.42; y < 2.2; y += 0.36) box((bx1 + bx2) / 2 - 0.2, 0.08, (bx1 + bx2) / 2 + 0.2, bd - 0.08, y, y + 0.18, clothes[(r2() * 4) | 0]); // folded things
    // left wall: shelves for boxes and bags
    const lx2 = C.x1 + 0.42, lz1 = bd + 0.02, lz2 = C.z2 - 0.02;
    box(C.x1 + 0.01, lz1, lx2, lz1 + 0.02, 0, 2.3, carc, true); box(C.x1 + 0.01, lz2 - 0.02, lx2, lz2, 0, 2.3, carc, true);
    for (let y = 0.05; y < 2.35; y += 0.45) box(C.x1 + 0.01, lz1, lx2, lz2, y, y + 0.02, carc, true);
    for (let y = 0.07; y < 2.2; y += 0.45) for (let z = lz1 + 0.06; z < lz2 - 0.3; z += 0.36) if (r2() > 0.25) box(C.x1 + 0.05, z, lx2 - 0.04, z + 0.3, y, y + 0.2 + r2() * 0.12, mat([0xd9c8a8, 0xe8e4dc, S.cushion, 0x9aa0a6][(r2() * 4) | 0], 0.85));
    // a tall mirror on the passage wall
    box(C.x2 - 0.012, C.door[1] + 0.1, C.x2 - 0.002, C.z2 - 0.05, 0.3, 2.0, new THREE.MeshStandardMaterial({ color: 0xcfd8de, roughness: 0.05, metalness: 0.9 }));
  }
  box(7.78, 0.02, 8.12, 0.4, 0.0, 0.45, wood, true);
  const mirror = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.02, 40), new THREE.MeshStandardMaterial({ color: 0xcfd8de, roughness: 0.05, metalness: 0.9 }));
  mirror.rotation.x = Math.PI / 2; mirror.position.set(7.95, 1.25, 0.012); mirror.scale.set(0.7, 1, 0.7); g.add(mirror);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.015, 8, 40), metal); ring.position.copy(mirror.position); ring.position.z += 0.005; ring.scale.set(0.7, 0.7, 1); g.add(ring);

  // ---- plants ----
  const leaf = mat(0x4f7a4a, 0.9), leaf2 = mat(0x3f6a3d, 0.9);
  const plant = (x, z, h) => {
    cyl(x, z, 0.16, 0.12, 0, 0.32, mat(S.id === 'loft' ? 0x2b2d30 : S.classic ? 0xb8914a : 0xe9e2d4, 0.7));
    for (let i = 0; i < 7; i++) { const a = i * 0.9, rr = 0.08 + (i % 3) * 0.05; ball(x + Math.cos(a) * rr, 0.32 + h * (0.45 + (i % 4) * 0.15), z + Math.sin(a) * rr, 0.14 + (i % 2) * 0.05, i % 2 ? leaf : leaf2); }
    solids.push([x - 0.2, z - 0.2, x + 0.2, z + 0.2, 2]);
  };
  plant(0.4, 7.35, 1.0); if (S.plants > 1) plant(9.95, 7.3, 0.8); if (S.plants > 2) plant(4.6, 7.05, 0.7);
  return g;
}
