// Fewer draw calls for the tablet: static meshes that share a material are baked into one mesh.
import * as THREE from '../../../ruina/web/vendor/three.module.js';

const _m = new THREE.Matrix4(), _n = new THREE.Matrix3(), _v = new THREE.Vector3();

/** Concatenates geometries (position + normal only), each with its own matrix. */
export function mergeGeoms(items) {
  let count = 0;
  for (const it of items) count += it.geo.index ? it.geo.index.count : it.geo.attributes.position.count;
  const pos = new Float32Array(count * 3), nor = new Float32Array(count * 3);
  let o = 0;
  for (const { geo, matrix } of items) {
    const p = geo.attributes.position, n = geo.attributes.normal, idx = geo.index;
    _n.getNormalMatrix(matrix);
    const total = idx ? idx.count : p.count;
    for (let i = 0; i < total; i++) {
      const k = idx ? idx.getX(i) : i;
      _v.fromBufferAttribute(p, k).applyMatrix4(matrix); pos[o] = _v.x; pos[o + 1] = _v.y; pos[o + 2] = _v.z;
      _v.fromBufferAttribute(n, k).applyMatrix3(_n).normalize(); nor[o] = _v.x; nor[o + 1] = _v.y; nor[o + 2] = _v.z;
      o += 3;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  return g;
}

/**
 * Bakes every plain static mesh under `root` into one mesh per material.
 * Left alone: instanced meshes, textured materials, hidden meshes and any subtree flagged
 * userData.keep / wallLike / openable / hideLow (things that move, scale or get toggled on their own) — unless `all` is set.
 */
export function mergeStatic(root, all) {
  root.updateWorldMatrix(true, true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map(), gone = [];
  const visit = o => {
    for (const c of o.children) {
      const u = c.userData;
      if (!all && (u.keep || u.wallLike || u.openable || u.hideLow || !c.visible)) continue;
      if (c.isMesh && !c.isInstancedMesh && !Array.isArray(c.material) && !c.material.map && c.geometry.attributes.normal && !c.children.length) {
        const key = c.material.uuid + ':' + (c.castShadow ? 1 : 0) + (c.receiveShadow ? 1 : 0) + ':' + c.layers.mask + ':' + c.renderOrder;
        if (!buckets.has(key)) buckets.set(key, { sample: c, items: [] });
        buckets.get(key).items.push({ geo: c.geometry, matrix: new THREE.Matrix4().multiplyMatrices(inv, c.matrixWorld) });
        gone.push(c);
      } else if (!c.isMesh && !c.isLight && !c.isLine && !c.isLineSegments && !c.isSprite) visit(c);
    }
  };
  visit(root);
  for (const c of gone) c.parent.remove(c);
  for (const { sample, items } of buckets.values()) {
    const m = new THREE.Mesh(mergeGeoms(items), sample.material);
    m.castShadow = sample.castShadow; m.receiveShadow = sample.receiveShadow; m.layers.mask = sample.layers.mask; m.renderOrder = sample.renderOrder;
    root.add(m);
  }
  // groups left empty are harmless
  return root;
}
