// Soft, rounded shapes for «Квартира» (so furniture is not made of sharp boxes).
import * as THREE from '../../../ruina/web/vendor/three.module.js';

/** A box with rounded edges and corners (after three.js RoundedBoxGeometry, without UVs). */
function roundedBox(w, h, d, r, seg = 2) {
  const n = seg * 2 + 1;
  r = Math.max(0.0005, Math.min(r, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4));
  const geo = new THREE.BoxGeometry(1, 1, 1, n, n, n).toNonIndexed();
  const pos = geo.attributes.position.array, nor = geo.attributes.normal.array;
  const half = new THREE.Vector3(w / 2 - r, h / 2 - r, d / 2 - r), p = new THREE.Vector3(), q = new THREE.Vector3(), hs = 0.5 / n;
  for (let i = 0; i < pos.length; i += 3) {
    p.fromArray(pos, i); q.copy(p);
    q.x -= Math.sign(q.x) * hs; q.y -= Math.sign(q.y) * hs; q.z -= Math.sign(q.z) * hs; q.normalize();
    pos[i] = half.x * Math.sign(p.x) + q.x * r; pos[i + 1] = half.y * Math.sign(p.y) + q.y * r; pos[i + 2] = half.z * Math.sign(p.z) + q.z * r;
    nor[i] = q.x; nor[i + 1] = q.y; nor[i + 2] = q.z;
  }
  geo.deleteAttribute('uv');
  geo.attributes.position.needsUpdate = true;
  return geo;
}
const cache = new Map();
/** Cached rounded box geometry (sizes rounded to millimetres). Marked so nobody disposes it. */
export function rbox(w, h, d, r) {
  const k = [w, h, d, r].map(v => Math.round(v * 1000)).join(':');
  let g = cache.get(k);
  if (!g) { g = roundedBox(Math.abs(w), Math.abs(h), Math.abs(d), r, r > 0.03 ? 3 : 2); g.userData.cached = true; cache.set(k, g); }
  return g;
}
/** Edge radius that suits a piece: soft things (fabric) get round edges, hard ones a small bevel. */
export function radiusFor(w, h, d, soft) {
  const m = Math.min(Math.abs(w), Math.abs(h), Math.abs(d));
  if (m < 0.012) return 0;
  return soft ? Math.min(0.08, m * 0.45) : Math.min(0.018, m * 0.3);
}
