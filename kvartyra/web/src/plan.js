// Plan of the apartment, measured from the developer's floor plan (photo, perspective-corrected).
// Metres. X runs left→right on the plan, Z runs top (entrance side) → bottom (windows side).
// Interior box is W×D; exterior walls sit outside it. Accuracy ≈ ±10 cm — good for a feel, not for ordering furniture.
const W = 10.1, D = 7.75;
export const PLAN = {
  width: W, depth: D, depthWithBalcony: 9.25, height: 2.7, officialArea: '77,3',
  walls: [
    { axis: 'x', t1: -0.3, t2: 0, from: -0.3, to: W + 0.3, ext: 1, holes: [{ a: 5.92, b: 6.89, type: 'door' }] },
    { axis: 'x', t1: D, t2: D + 0.3, from: -0.3, to: W + 0.3, ext: 1, holes: [
      { a: 0.98, b: 2.65, type: 'win' }, { a: 4.51, b: 6.27, type: 'win' }, { a: 7.63, b: 8.35, type: 'balcony' }, { a: 8.35, b: 9.39, type: 'win' }] },
    { axis: 'z', t1: -0.3, t2: 0, from: 0, to: D, ext: 1 },
    { axis: 'z', t1: W, t2: W + 0.3, from: 0, to: D, ext: 1 },
    { axis: 'z', t1: 3.76, t2: 3.88, from: 2.83, to: D },
    { axis: 'z', t1: 6.91, t2: 7.03, from: 2.83, to: D },
    { axis: 'x', t1: 2.83, t2: 2.95, from: 3.76, to: W, holes: [{ a: 5.5, b: 6.3, type: 'door' }, { a: 7.15, b: 7.95, type: 'door' }] },
    { axis: 'z', t1: 8.19, t2: 8.31, from: 0, to: 2.83, holes: [{ a: 0.28, b: 1.0, type: 'door' }, { a: 1.74, b: 2.38, type: 'door' }] },
    { axis: 'x', t1: 1.04, t2: 1.16, from: 8.31, to: W }
  ],
  // door leaves: hinge point, width, opening angle (degrees, three.js Y rotation of a leaf pointing +X)
  doors: [
    { x: 5.92, z: -0.15, w: 0.95, angle: 70, entry: 1 },
    { x: 5.5, z: 2.89, w: 0.8, angle: -72 },
    { x: 7.95, z: 2.89, w: 0.8, angle: -108 },
    { x: 8.25, z: 0.28, w: 0.72, angle: -120 },
    { x: 8.25, z: 1.74, w: 0.64, angle: -120 },
    { x: 8.35, z: 7.9, w: 0.72, angle: 108, white: 1 }
  ],
  rooms: [
    { name: 'Кухня-вітальня', floor: 'oak', rects: [[0, 0, 5.6, 2.83], [0, 2.83, 3.76, D]], label: [1.9, 3.6] },
    { name: 'Передпокій', floor: 'stone', rects: [[5.6, 0, 8.19, 2.83]], label: [6.9, 1.5] },
    { name: 'Кімната', floor: 'light', rects: [[3.88, 2.95, 6.91, D]], label: [5.4, 5.3] },
    { name: 'Спальня', floor: 'walnut', rects: [[7.03, 2.95, W, D]], label: [8.55, 5.0] },
    { name: 'Ванна', floor: 'tile', rects: [[8.31, 1.16, W, 2.83]], label: [9.2, 2.0] },
    { name: 'Туалет', floor: 'tile', rects: [[8.31, 0, W, 1.04]], label: [9.1, 0.5] },
    { name: 'Балкон', floor: 'stone', rects: [[7.41, D + 0.3, 9.7, 9.15]], label: [8.55, 8.6] }
  ],
  balcony: [[7.31, D + 0.3, 7.41, 9.25], [9.7, D + 0.3, 9.8, 9.25], [7.31, 9.15, 9.8, 9.25]],
  fixtures: [
    { type: 'kitchen', r: [3.5, 0, 4.1, 1.15] },
    { type: 'panel', r: [7.0, 0, 7.35, 0.08] },
    { type: 'bath', r: [9.35, 1.2, W, 2.75] },
    { type: 'sink', r: [8.35, 1.2, 8.95, 1.62] },
    { type: 'toilet', r: [9.55, 0.3, W, 0.75], back: [9.92, 0.3, W, 0.75] },
    { type: 'sink', r: [8.4, 0.62, 8.85, 1.04] }
  ],
  lamps: [[1.67, 1.51], [6.1, 1.42], [1.78, 5.14], [5.35, 5.23], [8.5, 5.23], [9.2, 2.0], [9.2, 0.5]],
  start: [6.4, 0.9, 3.7]
};
