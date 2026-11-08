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

/** The courtyard and the building across it. y = 0 is our floor; the ground is `below` metres lower. */
export function buildSurroundings(P, opt) {
  const g = new THREE.Group();
  const W = P.width, D = P.depth, below = opt.below, gap = opt.gap, floors = opt.floors, fh = 3.0;
  const facadeZ = D + 0.3 + gap, height = 3.4 + (floors - 1) * fh + 1.0;
  // our own building under the flat (so it does not float) and the neighbour sections left and right, below our floor
  const ext = new THREE.MeshStandardMaterial({ color: 0xe6ddd0, roughness: 0.95 });
  const under = new THREE.Mesh(new THREE.BoxGeometry(W + 30, below, D + 0.6), ext);
  under.position.set(W / 2, -below / 2 - 0.02, D / 2); under.receiveShadow = true; g.add(under);
  // facade texture: rows of windows, a light ground floor
  const tex = (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 256; const x = c.getContext('2d');
    x.fillStyle = '#e9e1d4'; x.fillRect(0, 0, 256, 256);
    x.fillStyle = '#3c4654'; x.fillRect(48, 34, 70, 190); x.fillRect(138, 34, 70, 190);
    x.fillStyle = 'rgba(255,255,255,.25)'; x.fillRect(52, 38, 30, 182); x.fillRect(142, 38, 30, 182);
    x.fillStyle = '#f7f4ee'; x.fillRect(48, 120, 70, 6); x.fillRect(138, 120, 70, 6); x.fillRect(81, 34, 4, 190); x.fillRect(171, 34, 4, 190);
    x.fillStyle = '#1f2226'; for (let i = 0; i < 9; i++) { x.fillRect(48 + i * 8.5, 150, 2, 74); x.fillRect(138 + i * 8.5, 150, 2, 74); }
    x.fillRect(48, 150, 70, 3); x.fillRect(138, 150, 70, 3);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
  })();
  const len = 64, depth = 13;
  const ft = tex.clone(); ft.needsUpdate = true;
  const plain = new THREE.MeshStandardMaterial({ color: 0xe9e1d4, roughness: 0.95 });
  const facade = new THREE.MeshStandardMaterial({ map: ft, roughness: 0.9 });
  const bodyH = (floors - 1) * fh + 1.0;
  ft.repeat.set(len / 6, bodyH / fh);
  const body = new THREE.Mesh(new THREE.BoxGeometry(len, bodyH, depth), [plain, plain, plain, plain, plain, facade]);
  body.position.set(W / 2 - 4, -below + 3.4 + bodyH / 2, facadeZ + depth / 2); body.castShadow = true; body.receiveShadow = true; g.add(body);
  const base = new THREE.Mesh(new THREE.BoxGeometry(len, 3.4, depth), new THREE.MeshStandardMaterial({ color: 0xcfc6b8, roughness: 0.9 }));
  base.position.set(body.position.x, -below + 1.7, facadeZ + depth / 2); base.castShadow = true; g.add(base);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(len + 0.4, 0.6, depth + 0.4), new THREE.MeshStandardMaterial({ color: 0x55585e, roughness: 0.8 }));
  roof.position.set(body.position.x, -below + height - 0.3, facadeZ + depth / 2); roof.castShadow = true; g.add(roof);
  // courtyard: lawn, paths, trees, a playground
  const lawn = new THREE.MeshStandardMaterial({ color: 0x6f8a55, roughness: 1 }), path = new THREE.MeshStandardMaterial({ color: 0xc9c2b4, roughness: 1 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(160, 160), lawn); ground.rotation.x = -Math.PI / 2; ground.position.set(W / 2, -below, D / 2 + 20); ground.receiveShadow = true; g.add(ground);
  const p1 = new THREE.Mesh(new THREE.PlaneGeometry(len, 2.2), path); p1.rotation.x = -Math.PI / 2; p1.position.set(W / 2, -below + 0.02, D + 0.3 + gap * 0.5); p1.receiveShadow = true; g.add(p1);
  const p2 = new THREE.Mesh(new THREE.PlaneGeometry(2.2, gap), path); p2.rotation.x = -Math.PI / 2; p2.position.set(W / 2 + 3, -below + 0.021, D + 0.3 + gap / 2); g.add(p2);
  const leaf = [0x4f7a4a, 0x5d8a50, 0x6a8f3e].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 }));
  const trunk = new THREE.MeshStandardMaterial({ color: 0x5b4636, roughness: 1 });
  let s = 3; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 9; i++) {
    const x = -14 + i * 4.6 + r() * 2, z = D + 0.3 + 4 + r() * (gap - 9), h = 3 + r() * 3.5;
    if (Math.abs(x - (W / 2 + 3)) < 2) continue;
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, h, 8), trunk); tr.position.set(x, -below + h / 2, z); tr.castShadow = true; g.add(tr);
    const cr = new THREE.Mesh(new THREE.SphereGeometry(1.3 + r(), 12, 9), leaf[i % 3]); cr.position.set(x, -below + h + 0.6, z); cr.scale.y = 1.2; cr.castShadow = true; g.add(cr);
  }
  const play = new THREE.MeshStandardMaterial({ color: 0xd8835a, roughness: 0.9 });
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(8, 6), new THREE.MeshStandardMaterial({ color: 0x9fb8c8, roughness: 1 })); pad.rotation.x = -Math.PI / 2; pad.position.set(W / 2 - 7, -below + 0.03, D + 0.3 + gap * 0.55); g.add(pad);
  for (const [dx, dz, h] of [[-1.5, -1, 2.2], [1.5, 1, 1.4]]) { const m = new THREE.Mesh(new THREE.BoxGeometry(1.4, h, 1.4), play); m.position.set(W / 2 - 7 + dx, -below + h / 2, D + 0.3 + gap * 0.55 + dz); m.castShadow = true; g.add(m); }
  return { group: g, top: height - below }; // `top` — roof height above our floor
}
