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
  box(0.6, 0, 3.45, 0.36, 1.45, 2.25, mat(S.upper, 0.55));
  box(0.62, 0.36, 3.43, 0.365, 1.47, 2.23, mat(S.upper, 0.4)); // fronts
  for (let x = 0.6 + 0.57; x < 3.45; x += 0.57) box(x - 0.004, 0.362, x + 0.004, 0.37, 1.47, 2.23, mat(0x222222, 0.6));
  const steel = mat(0xb9bec4, 0.25, 0.9);
  for (let x = 0.6 + 0.285; x < 3.45; x += 0.57) { box(x - 0.09, 0.37, x + 0.09, 0.39, 1.5, 1.515, steel); box(x - 0.09, 0.6, x + 0.09, 0.625, 0.78, 0.795, steel); } // handles
  for (let x = 0.6 + 0.57; x < 3.45; x += 0.57) box(x - 0.003, 0.598, x + 0.003, 0.606, 0.12, 0.84, mat(0x333333, 0.6)); // gaps between base fronts
  cyl(1.6, 0.1, 0.022, 0.026, 0.9, 1.18, steel); { const sp = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.016, 8, 16, Math.PI), steel); sp.position.set(1.6, 1.18, 0.21); sp.rotation.y = Math.PI / 2; g.add(sp); } // faucet
  for (const [hx, hz, rr] of [[2.65, 0.18, 0.09], [2.95, 0.18, 0.07], [2.65, 0.42, 0.07], [2.95, 0.42, 0.09]]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(rr, 0.006, 6, 28), mat(0x555555, 0.5)); ring.rotation.x = Math.PI / 2; ring.position.set(hx, 0.908, hz); g.add(ring); } // hob rings
  // dining table with four chairs
  const tx = 2.0, tz = 2.15;
  if (S.classic) { cyl(tx, tz, 0.55, 0.55, 0.72, 0.76, wood, 32); cyl(tx, tz, 0.06, 0.12, 0, 0.72, wood); }
  else { box(tx - 0.7, tz - 0.42, tx + 0.7, tz + 0.42, 0.72, 0.76, wood, true); for (const [dx, dz] of [[-0.62, -0.34], [0.62, -0.34], [-0.62, 0.34], [0.62, 0.34]]) box(tx + dx - 0.025, tz + dz - 0.025, tx + dx + 0.025, tz + dz + 0.025, 0, 0.72, S.id === 'loft' ? metal : wood); }
  if (S.classic) solids.push([tx - 0.55, tz - 0.55, tx + 0.55, tz + 0.55, 2]);
  const chair = (x, z, face) => { // face: direction the sitter looks, ±1 along X
    const seat = S.id === 'scandi' ? mat(0xf2f0ea, 0.6) : S.id === 'loft' ? mat(0x8a4f2a, 0.8) : S.classic ? mat(S.sofa, 0.95) : wood;
    box(x - 0.21, z - 0.21, x + 0.21, z + 0.21, 0.44, 0.48, seat);
    for (const [dx, dz] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) box(x + dx - 0.015, z + dz - 0.015, x + dx + 0.015, z + dz + 0.015, 0, 0.44, S.id === 'loft' ? metal : wood);
    const bx = x - face * 0.2; box(bx - 0.02, z - 0.2, bx + 0.02, z + 0.2, 0.48, 0.9, seat);
  };
  chair(tx - 0.95, tz - 0.2, 1); chair(tx - 0.95, tz + 0.25, 1); chair(tx + 0.95, tz - 0.2, -1); chair(tx + 0.95, tz + 0.25, -1);
  for (const dx of S.classic ? [0] : [-0.4, 0.4]) {
    box(tx + dx - 0.004, tz - 0.004, tx + dx + 0.004, tz + 0.004, 1.75, 2.7, metal);
    const sh = new THREE.Mesh(new THREE.ConeGeometry(S.classic ? 0.32 : 0.17, 0.22, 24, 1, true), mat(S.shade, 0.6, S.id === 'loft' ? 0.5 : 0));
    sh.material.side = THREE.DoubleSide; sh.position.set(tx + dx, 1.68, tz); g.add(sh);
    ball(tx + dx, 1.6, tz, 0.05, new THREE.MeshBasicMaterial({ color: S.lamp }));
  }

  // ---- living zone: sofa on the left wall, TV on the partition, coffee table, rug ----
  const sx1 = 0.02, sz1 = 4.2, sx2 = 0.95, sz2 = 6.5;
  box(sx1, sz1, sx2, sz2, legH, legH + 0.3, fabric, true);                 // base
  box(sx1, sz1, sx1 + 0.24, sz2, legH + 0.3, legH + 0.78, fabric);         // back
  box(sx1, sz1, sx2, sz1 + 0.18, legH + 0.3, legH + 0.55, fabric);         // arms
  box(sx1, sz2 - 0.18, sx2, sz2, legH + 0.3, legH + 0.55, fabric);
  for (const z of [4.55, 5.35, 6.15]) box(sx1 + 0.24, z - 0.36, sx2 - 0.04, z + 0.36, legH + 0.3, legH + 0.42, fabric); // seat cushions
  box(sx1 + 0.24, 4.5, sx1 + 0.36, 4.95, legH + 0.42, legH + 0.82, cush); box(sx1 + 0.24, 5.85, sx1 + 0.36, 6.3, legH + 0.42, legH + 0.82, cush);
  if (!S.low) for (const [x, z] of [[sx1 + 0.06, sz1 + 0.06], [sx2 - 0.06, sz1 + 0.06], [sx1 + 0.06, sz2 - 0.06], [sx2 - 0.06, sz2 - 0.06]]) box(x - 0.02, z - 0.02, x + 0.02, z + 0.02, 0, legH, metal);
  // rug + coffee table
  box(0.6, 4.0, 3.2, 6.7, 0.002, 0.012, mat(S.rug, 1));
  if (S.classic) box(0.75, 4.15, 3.05, 6.55, 0.0125, 0.014, mat(S.rug2, 1));
  if (S.low || S.classic) { cyl(1.8, 5.35, 0.45, 0.45, 0.32, 0.36, wood, 32); cyl(1.8, 5.35, 0.36, 0.36, 0.0, 0.32, wood, 32); solids.push([1.4, 4.95, 2.2, 5.75, 2]); }
  else { box(1.4, 4.85, 2.2, 5.85, 0.36, 0.4, S.id === 'loft' ? mat(0x5a3b26, 0.5) : wood, true); for (const [x, z] of [[1.43, 4.88], [2.17, 4.88], [1.43, 5.82], [2.17, 5.82]]) box(x - 0.015, z - 0.015, x + 0.015, z + 0.015, 0, 0.36, metal); }
  ball(1.8, 0.45, 5.35, 0.07, mat(S.cushion, 0.5)); // a vase / bowl
  // TV wall: low console + TV on the partition
  box(3.62, 4.4, 4.04, 6.3, S.low ? 0.0 : 0.2, 0.55, S.id === 'loft' ? metal : wood, true);
  box(3.99, 4.75, 4.04, 5.95, 1.0, 1.68, mat(0x0c0d0f, 0.25, 0.3));
  // armchair by the window
  const ax = 3.15, az = 6.75;
  box(ax - 0.4, az - 0.4, ax + 0.4, az + 0.4, legH, legH + 0.32, cush, true);
  box(ax - 0.4, az + 0.22, ax + 0.4, az + 0.4, legH + 0.32, legH + 0.8, cush);
  // floor lamp
  cyl(0.45, 6.95, 0.14, 0.16, 0, 0.03, metal); cyl(0.45, 6.95, 0.012, 0.012, 0.03, 1.5, metal);
  const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.28, 24, 1, true), mat(S.shade, 0.8)); fl.material.side = THREE.DoubleSide; fl.position.set(0.45, 1.6, 6.95); g.add(fl);
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
  box(0.6, 0.001, 3.45, 0.012, 0.9, 1.45, mat(S.id === 'loft' ? 0x3a3c40 : S.id === 'lviv' ? 0xe9e4d6 : 0xf3f1ec, 0.18));
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
  art(W - 0.013, 1.9, 5.2, 1.1, 0.6, -1, 13);

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
  const bx2 = W - 0.01, bx1 = bx2 - 2.05, bz1 = 4.4, bz2 = 6.0;
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
  box(7.8, 3.9, 9.6, 6.6, 0.002, 0.012, mat(S.rug, 1));
  // wardrobe on the left wall
  box(7.3, 3.7, 7.92, 5.7, 0, 2.4, mat(S.id === 'scandi' ? 0xf4f2ec : S.id === 'loft' ? 0x26282b : S.id === 'lviv' ? 0xf4efe6 : 0xd9cbb5, 0.6), true);
  for (const z of [4.2, 4.7, 5.2]) box(7.92, z - 0.003, 7.93, z + 0.003, 0.05, 2.35, mat(0x333333, 0.6));

  // ---- hall: wardrobe, bench, round mirror ----
  box(4.35, 0.01, 5.95, 0.6, 0, 2.5, mat(S.id === 'loft' ? 0x26282b : S.upper, 0.55), true);
  for (const x of [4.75, 5.15, 5.55]) box(x - 0.003, 0.6, x + 0.003, 0.61, 0.05, 2.45, mat(0x333333, 0.6));
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
