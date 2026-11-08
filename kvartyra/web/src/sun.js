// Real sun over Lviv + what stands outside the windows. Pure maths, no network.
import * as THREE from '../../../ruina/web/vendor/three.module.js';

export const LAT = 49.84, LON = 24.03; // Lviv
const rad = Math.PI / 180;

/** Kyiv local wall-clock → UTC Date (EET +2, EEST +3 from the last Sunday of March to the last Sunday of October). */
export function kyivDate(y, m, d, hours) {
  const lastSun = mm => { const t = new Date(Date.UTC(y, mm + 1, 0)); return t.getUTCDate() - t.getUTCDay(); };
  const md = m * 100 + d, dstOn = 2 * 100 + lastSun(2), dstOff = 9 * 100 + lastSun(9);
  const off = md > dstOn && md < dstOff ? 3 : md === dstOn ? (hours >= 3 ? 3 : 2) : md === dstOff ? (hours < 4 ? 3 : 2) : 2;
  return new Date(Date.UTC(y, m, d) + (hours - off) * 3600e3);
}

/** Solar azimuth (degrees clockwise from north) and elevation (degrees) at a UTC moment. */
export function sunAt(date, lat = LAT, lon = LON) {
  const d = date.getTime() / 86400000 - 10957.5; // days since J2000
  const g = (357.529 + 0.98560028 * d) * rad, q = 280.459 + 0.98564736 * d;
  const L = (q + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * rad, e = (23.439 - 0.00000036 * d) * rad;
  const ra = Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L)), dec = Math.asin(Math.sin(e) * Math.sin(L));
  const gmst = (18.697374558 + 24.06570982441908 * d) % 24;
  const H = ((gmst * 15 + lon) * rad - ra), la = lat * rad;
  const el = Math.asin(Math.sin(la) * Math.sin(dec) + Math.cos(la) * Math.cos(dec) * Math.cos(H));
  const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(la) - Math.tan(dec) * Math.cos(la)) / rad + 180;
  return { az: (az + 360) % 360, el: el / rad };
}

/** Direction (plan frame) to a compass azimuth, when the windows (+Z) face `orient` degrees. Looking out, +X is on the left. */
export function dirTo(az, el, orient) {
  const dl = (az - orient) * rad, c = Math.cos(el * rad);
  return new THREE.Vector3(-Math.sin(dl) * c, Math.sin(el * rad), Math.cos(dl) * c);
}

/** When does direct sun come in through the windows on a given day? Accounts for the building opposite. */
export function sunWindow(y, m, d, orient, blockAt) {
  let from = null, to = null, rise = null, set = null;
  for (let t = 3; t <= 22.5; t += 1 / 30) {
    const s = sunAt(kyivDate(y, m, d, t));
    if (s.el > 0) { if (rise == null) rise = t; set = t; }
    let dl = ((s.az - orient + 540) % 360) - 180;
    if (s.el > 0 && Math.abs(dl) < 85 && s.el > blockAt(dl)) { if (from == null) from = t; to = t; }
  }
  return { from, to, rise, set };
}
export const hhmm = t => t == null ? '—' : `${Math.floor(t)}:${String(Math.round((t % 1) * 60) % 60).padStart(2, '0')}`;

/* ---------- the street and the building across it, after the photos of the neighbourhood ----------
   4-storey blocks with white / sand / lavender sections, tall anthracite windows with a transom,
   small cantilever balconies with black bars, AC units, low black fences, hedges, young trees, benches, lamps. */
const unitBox = new THREE.BoxGeometry(1, 1, 1);
class Batch { // many boxes of one material → one InstancedMesh (cheap on a tablet)
  constructor(mat, cast = true) { this.mat = mat; this.m = []; this.cast = cast; }
  add(x1, y1, z1, x2, y2, z2) {
    const m = new THREE.Matrix4().compose(new THREE.Vector3((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2), new THREE.Quaternion(), new THREE.Vector3(Math.abs(x2 - x1) || 0.001, Math.abs(y2 - y1) || 0.001, Math.abs(z2 - z1) || 0.001));
    this.m.push(m);
  }
  mesh() { const im = new THREE.InstancedMesh(unitBox, this.mat, this.m.length); this.m.forEach((m, i) => im.setMatrixAt(i, m)); im.castShadow = this.cast; im.receiveShadow = true; return im; }
}
const outsideMats = []; // outdoor materials get a little self-light so the street stays sunny when the indoor fill is low
const std = (c, r = 0.85, m = 0) => { const mt = new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m }); outsideMats.push(mt); return mt; };
/** k ∈ [0,1]: how much outdoor daylight to add on top of the scene lights. */
export function outdoorGlow(k) { for (const m of outsideMats) { if (m.userData.keepEmissive) continue; m.emissive.copy(m.color).multiplyScalar(k); } }

/** Builds a residential block whose street facade is at z = fz and looks along `dir` (+1 → +Z, −1 → −Z); the body extends behind it. */
function block(g, B, o) {
  const { x0, x1, fz, dir, y0, floors, fh, seed } = o, depth = 13;
  let s = seed; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const COLORS = [0xf3f0ea, 0xdcc6a6, 0xaab0d8, 0xf3f0ea, 0xe7ddcc];
  const top = y0 + 0.45 + floors * fh;
  let x = x0, k = (seed % 3);
  while (x < x1 - 0.5) {
    const w = Math.min(x1 - x, 9 + r() * 7), col = COLORS[k++ % COLORS.length], off = (k % 2 ? 0.0 : 0.18) * dir;
    const zFront = fz + off, zBack = zFront - dir * depth;
    const body = new THREE.Mesh(unitBox, std(col, 0.92)); body.scale.set(w, top - y0, depth); body.position.set(x + w / 2, (top + y0) / 2, (zFront + zBack) / 2);
    body.castShadow = true; body.receiveShadow = true; g.add(body);
    B.parapet.add(x, top, Math.min(zFront, zBack), x + w, top + 0.12, Math.max(zFront, zBack));
    B.plinth.add(x, y0, zFront - dir * 0.03, x + w, y0 + 0.45, zFront + dir * 0.02);
    // window columns
    const n = Math.max(2, Math.round(w / 2.9)), step = w / n;
    for (let c = 0; c < n; c++) {
      const cx = x + step * (c + 0.5), ww = 1.25 + (c % 2) * 0.35, balcony = (c + k) % 3 === 0 && w > 10;
      for (let f = 0; f < floors; f++) {
        const fy = y0 + 0.45 + f * fh, wy1 = fy + 0.12, wy2 = fy + 2.45, zf = zFront + dir * 0.005;
        if (f === 0 && c === Math.floor(n / 2) && k % 3 === 1) { // entrance with a canopy
          B.glass.add(cx - 0.8, fy, zf, cx + 0.8, fy + 2.4, zf + dir * 0.02);
          B.frame.add(cx - 0.85, fy + 2.4, zf, cx + 0.85, fy + 2.5, zf + dir * 0.06);
          B.frame.add(cx - 0.02, fy, zf, cx + 0.02, fy + 2.4, zf + dir * 0.06);
          B.slab.add(cx - 1.2, fy + 2.7, zf, cx + 1.2, fy + 2.82, zf + dir * 1.2);
          B.lamp.add(cx - 0.05, fy + 2.62, zf + dir * 0.6, cx + 0.05, fy + 2.68, zf + dir * 0.7);
          continue;
        }
        B.glass.add(cx - ww / 2, wy1, zf, cx + ww / 2, wy2, zf + dir * 0.01);
        // anthracite frame: sides, head, sill, mullion, transom
        B.frame.add(cx - ww / 2 - 0.06, wy1, zf, cx - ww / 2, wy2, zf + dir * 0.07);
        B.frame.add(cx + ww / 2, wy1, zf, cx + ww / 2 + 0.06, wy2, zf + dir * 0.07);
        B.frame.add(cx - ww / 2 - 0.06, wy2, zf, cx + ww / 2 + 0.06, wy2 + 0.06, zf + dir * 0.07);
        B.frame.add(cx - ww / 2 - 0.06, wy1 - 0.05, zf, cx + ww / 2 + 0.06, wy1, zf + dir * 0.09);
        B.frame.add(cx - 0.03 + ww * 0.1, wy1, zf, cx + 0.03 + ww * 0.1, wy2, zf + dir * 0.06);
        B.frame.add(cx - ww / 2, wy1 + 0.95, zf, cx + ww / 2, wy1 + 1.0, zf + dir * 0.06);
        if (r() < 0.25) B.curtain.add(cx - ww / 2 + 0.05, wy1 + 0.1, zf - dir * 0.05, cx - ww / 2 + 0.35, wy2 - 0.05, zf - dir * 0.04);
        if (f > 0 && balcony) { // cantilever balcony with black bars
          const bw = ww + 0.5, bd = 1.05, bz1 = zFront, bz2 = zFront + dir * bd;
          B.slab.add(cx - bw / 2, fy - 0.05, bz1, cx + bw / 2, fy + 0.13, bz2);
          B.bar.add(cx - bw / 2, fy + 1.05, bz2 - dir * 0.02, cx + bw / 2, fy + 1.09, bz2);
          B.bar.add(cx - bw / 2, fy + 1.05, bz1, cx - bw / 2 + 0.04, fy + 1.09, bz2);
          B.bar.add(cx + bw / 2 - 0.04, fy + 1.05, bz1, cx + bw / 2, fy + 1.09, bz2);
          for (let t = -bw / 2 + 0.05; t <= bw / 2 - 0.04; t += 0.11) B.bar.add(cx + t - 0.01, fy + 0.13, bz2 - dir * 0.02, cx + t + 0.01, fy + 1.05, bz2 - dir * 0.0);
          for (let t = 0.12; t < bd - 0.05; t += 0.11) { B.bar.add(cx - bw / 2, fy + 0.13, zFront + dir * t, cx - bw / 2 + 0.02, fy + 1.05, zFront + dir * (t + 0.02)); B.bar.add(cx + bw / 2 - 0.02, fy + 0.13, zFront + dir * t, cx + bw / 2, fy + 1.05, zFront + dir * (t + 0.02)); }
        } else if (f > 0 && r() < 0.18) { // AC unit beside the window
          const ax = cx + ww / 2 + 0.25; B.ac.add(ax, fy + 0.4, zFront, ax + 0.75, fy + 0.95, zFront + dir * 0.3);
        }
      }
    }
    x += w;
  }
  return top;
}

/** The courtyard side street and the building across it. y = 0 is our floor; the ground is `below` metres lower. */
export function buildSurroundings(P, opt) {
  const g = new THREE.Group();
  const W = P.width, D = P.depth, below = opt.below, gap = opt.gap, floors = opt.floors, fh = 3.0;
  const ground = -below, f0 = D + 0.3, f1 = f0 + gap, X0 = W / 2 - 38, X1 = W / 2 + 38;
  const mk = () => ({
    glass: new Batch((() => { const m = std(0x3b4a5a, 0.15, 0.45); m.emissive.set(0x1d2a38); m.userData.keepEmissive = true; return m; })(), false), frame: new Batch(std(0x30343a, 0.5, 0.3)), slab: new Batch(std(0x9d9d9b, 0.9)),
    bar: new Batch(std(0x1c1e21, 0.5, 0.5)), ac: new Batch(std(0xf1f1ef, 0.6)), parapet: new Batch(std(0x8f9296, 0.8)), plinth: new Batch(std(0x6f7275, 0.9)),
    curtain: new Batch(std(0xe9e2d4, 1), false), lamp: new Batch(new THREE.MeshBasicMaterial({ color: 0xfff1d0 }), false),
    curb: new Batch(std(0xbdb9b0, 0.9), false), fence: new Batch(std(0x1c1e21, 0.5, 0.5)), hedge: new Batch(std(0x3f6a35, 1)),
    bench: new Batch(std(0xc79a62, 0.7)), benchF: new Batch(std(0x2b2e33, 0.5, 0.5)), pole: new Batch(std(0x2b2e33, 0.5, 0.5)),
    line: new Batch(std(0xeeeeea, 0.8), false)
  });
  const B = mk(), BF = mk(); BF.glass = B.glass; // BF: the building across the street (camera layer 1, hidden in the doll-house view)
  BF.glass = new Batch(B.glass.mat, false);
  const far = new THREE.Group(); g.add(far);
  // our own building below our flat (two floors of the same facade, facing the street), plus the sections beside it
  const ourSeed = 11;
  block(g, B, { x0: X0 + 8, x1: X1 - 8, fz: f0, dir: 1, y0: ground, floors: 2, fh, seed: ourSeed });
  // the building across the street, facing us
  const top = block(far, BF, { x0: X0, x1: X1, fz: f1, dir: -1, y0: ground, floors, fh, seed: 7 });
  // ground: lawn, sidewalks, road with a dashed line, curbs
  const lawn = std(0x6f8a55, 1), pave = std(0xa8a49b, 0.95), asphalt = std(0x3e4146, 0.95);
  const plane = (x1, z1, x2, z2, m, y = 0) => { const p = new THREE.Mesh(new THREE.PlaneGeometry(x2 - x1, Math.abs(z2 - z1)), m); p.rotation.x = -Math.PI / 2; p.position.set((x1 + x2) / 2, ground + y, (z1 + z2) / 2); p.receiveShadow = true; g.add(p); return p; };
  plane(W / 2 - 90, f0 - 30, W / 2 + 90, f1 + 40, lawn, -0.01);
  const k = gap / 18, sw1 = f0 + 3 * k, road1 = sw1 + 2 * k, road2 = f1 - 7 * k, sw2 = road2 + 2 * k;
  plane(X0 - 10, sw1, X1 + 10, road1, pave, 0.02); plane(X0 - 10, road2, X1 + 10, sw2, pave, 0.02);
  plane(X0 - 10, road1, X1 + 10, road2, asphalt, 0.015);
  for (let x = X0 - 10; x < X1 + 10; x += 6) B.line.add(x, ground + 0.02, (road1 + road2) / 2 - 0.06, x + 3, ground + 0.025, (road1 + road2) / 2 + 0.06);
  B.curb.add(X0 - 10, ground, road1 - 0.08, X1 + 10, ground + 0.15, road1 + 0.04); B.curb.add(X0 - 10, ground, road2 - 0.04, X1 + 10, ground + 0.15, road2 + 0.08);
  // front gardens: low black fence + hedge on both sides
  for (const [fz, hz] of [[sw1 - 0.15, sw1 - 0.75], [sw2 + 0.15, sw2 + 0.75]]) {
    B.fence.add(X0, ground + 0.95, fz - 0.02, X1, ground + 1.0, fz + 0.02); B.fence.add(X0, ground + 0.1, fz - 0.015, X1, ground + 0.14, fz + 0.015);
    for (let x = X0; x < X1; x += 0.14) B.fence.add(x - 0.008, ground, fz - 0.008, x + 0.008, ground + 1.0, fz + 0.008);
    B.hedge.add(X0, ground, Math.min(hz, fz) - 0.3, X1, ground + 0.85, Math.min(hz, fz) + 0.3 + Math.abs(hz - fz) - 0.6 + 0.35);
  }
  // street lamps and benches along the far sidewalk, a few parked cars
  for (let x = X0 + 4; x < X1; x += 14) {
    B.pole.add(x - 0.05, ground, sw2 - 0.4, x + 0.05, ground + 4.2, sw2 - 0.3); B.pole.add(x - 0.25, ground + 4.15, sw2 - 0.45, x + 0.25, ground + 4.3, sw2 - 0.25);
    B.lamp.add(x - 0.2, ground + 4.1, sw2 - 0.42, x + 0.2, ground + 4.15, sw2 - 0.28);
    const bx = x + 6, bz = sw2 - 1.0;
    for (let i = 0; i < 4; i++) B.bench.add(bx - 0.9, ground + 0.45 + (i < 3 ? 0 : 0.2), bz - 0.25 + i * 0.13 * (i < 3 ? 1 : 0.6), bx + 0.9, ground + 0.48 + (i < 3 ? 0 : 0.35), bz - 0.15 + i * 0.13 * (i < 3 ? 1 : 0.6));
    B.benchF.add(bx - 0.85, ground, bz - 0.3, bx - 0.8, ground + 0.9, bz + 0.2); B.benchF.add(bx + 0.8, ground, bz - 0.3, bx + 0.85, ground + 0.9, bz + 0.2);
  }
  const carCols = [0x8a1f24, 0xd9dadb, 0x2b3a55, 0x45484c, 0x9aa3ab];
  let cs = 5; const cr = () => (cs = (cs * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 6; i++) {
    const cx = X0 + 6 + i * 11 + cr() * 4, cz = (i % 2 ? road2 - 1.2 : road1 + 1.2), body = std(carCols[i % carCols.length], 0.35, 0.5);
    const car = new THREE.Group();
    const b1 = new THREE.Mesh(unitBox, body); b1.scale.set(4.3, 0.7, 1.8); b1.position.y = 0.55; car.add(b1);
    const b2 = new THREE.Mesh(unitBox, body); b2.scale.set(2.3, 0.55, 1.6); b2.position.set(-0.2, 1.15, 0); car.add(b2);
    const win = new THREE.Mesh(unitBox, B.glass.mat); win.scale.set(2.2, 0.45, 1.62); win.position.set(-0.2, 1.15, 0); car.add(win);
    for (const [wx, wz] of [[-1.35, -0.85], [1.35, -0.85], [-1.35, 0.85], [1.35, 0.85]]) { const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.33, 0.24, 14), std(0x1a1a1a, 0.8)); wh.rotation.x = Math.PI / 2; wh.position.set(wx, 0.33, wz); car.add(wh); }
    car.position.set(cx, ground, cz); car.traverse(o => { if (o.isMesh) o.castShadow = true; }); g.add(car);
  }
  // trees: young street trees on both sides + a couple of firs, with the seasons
  const leaf = [0x4f7a4a, 0x5d8a50, 0x6a8f3e].map(c => std(c, 0.9));
  const trunk = std(0x5b4636, 1), fir = std(0x2f5a3a, 0.95);
  const crowns = [], branches = [];
  let ts = 3; const tr = () => (ts = (ts * 16807) % 2147483647) / 2147483647;
  const tree = (x, z, h) => {
    const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.14, h, 7), trunk); t1.position.set(x, ground + h / 2, z); t1.castShadow = true; g.add(t1);
    const cl = new THREE.Group(); cl.position.set(x, ground + h, z);
    for (let i = 0; i < 5; i++) { const a = i * 1.3 + tr(), rr = i ? 0.55 : 0; const sp = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7 + tr() * 0.4, 1), leaf[i % 3]); sp.position.set(Math.cos(a) * rr, 0.4 + (i ? tr() * 0.6 : 0.9), Math.sin(a) * rr); sp.castShadow = true; cl.add(sp); }
    g.add(cl); crowns.push(cl);
    for (let k2 = 0; k2 < 5; k2++) { const br = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.05, 1.3, 5), trunk); const a = k2 * 1.25 + tr(); br.position.set(x + Math.cos(a) * 0.35, ground + h + 0.3, z + Math.sin(a) * 0.35); br.rotation.set(Math.sin(a) * 0.6, 0, -Math.cos(a) * 0.6); g.add(br); branches.push(br); }
  };
  for (let x = X0 + 2; x < X1; x += 8 + tr() * 3) { tree(x, sw1 + 0.6, 2.6 + tr() * 1.2); tree(x + 4, sw2 - 0.6 - 0.9, 2.8 + tr() * 1.4); }
  for (const x of [W / 2 - 12, W / 2 + 17]) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.9, 3.2, 10), fir); c.position.set(x, ground + 1.9, f1 + 2.0); c.castShadow = true; g.add(c); const t2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.6, 6), trunk); t2.position.set(x, ground + 0.3, f1 + 2.0); g.add(t2); }
  // snow on the roofs (winter)
  const snowRoof = new THREE.Mesh(unitBox, std(0xf4f7fa, 0.9)); snowRoof.scale.set(X1 - X0, 0.1, 12.6); snowRoof.position.set((X0 + X1) / 2, top + 0.13, f1 + 6.5); far.add(snowRoof);
  for (const b of Object.values(B)) if (b.m.length) g.add(b.mesh());
  for (const b of Object.values(BF)) if (b.m.length) far.add(b.mesh());
  far.traverse(o => o.layers.set(1));
  const SEASON = [ // month → [lawn, crowns(3), crown scale, snow]
    [0xe9eef2, null, 0, 1], [0xe3e8ea, null, 0, 1], [0x8a9a5a, null, 0, 0], [0x8db35a, [0xb5d98a, 0xf2c6d6, 0x9ccc65], 0.8, 0],
    [0x7fa955, [0x7cb342, 0x8bc34a, 0x6a9f3e], 1, 0], [0x6f9a50, [0x4f7a4a, 0x5d8a50, 0x6a8f3e], 1, 0], [0x6f8a55, [0x4a7344, 0x557f48, 0x648a3c], 1, 0],
    [0x7a8a52, [0x4f7a4a, 0x6a8f3e, 0x7f8f3a], 1, 0], [0x7f8a55, [0x8f9a3a, 0xd9a23a, 0x6a8f3e], 1, 0], [0x8a8455, [0xe08a2e, 0xc9562e, 0xe6b33a], 0.95, 0],
    [0x7d7a5a, [0xa0652e, 0x8a5a2e, 0xb07a3a], 0.55, 0], [0xdfe5e8, null, 0, 1]
  ];
  function setSeason(m) {
    const [lw, cols, sc, snow] = SEASON[m];
    lawn.color.set(lw); pave.color.set(snow ? 0xd9dde1 : 0xa8a49b);
    crowns.forEach(c => { c.visible = !!cols; if (cols) c.scale.setScalar(sc); });
    if (cols) leaf.forEach((l, i) => l.color.set(cols[i]));
    branches.forEach(b => { b.visible = !cols || sc < 0.7; });
    snowRoof.visible = !!snow;
  }
  return { group: g, top: top, setSeason }; // `top` — roof height above our floor (our floor is y = 0)
}
