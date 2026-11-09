// Plan of the apartment in metres, from the developer's dimensioned plan (room widths 4,05 / 3,00 / 3,00, depth 7,70, bedroom depth 4,75).
// X runs left→right on the plan, Z runs top (entrance side) → bottom (windows side). Interior box is W×D; exterior walls sit outside it.
const W = 10.29, D = 7.7, RT = 2.83, RB = 2.95; // RT..RB — wall between hall and the two rooms
export const PLAN = {
  width: W, depth: D, depthWithBalcony: D + 0.3 + 0.97, height: 2.62, officialArea: '77,3',
  // windows are panoramic: glass from the floor almost to the ceiling
  winSill: 0.05, winTop: 2.42,
  walls: [
    { axis: 'x', t1: -0.3, t2: 0, from: -0.3, to: W + 0.3, ext: 1, holes: [{ a: 6.2, b: 7.2, type: 'door' }] },
    { axis: 'x', t1: D, t2: D + 0.3, from: -0.3, to: W + 0.3, ext: 1, holes: [
      { a: 1.09, b: 2.91, type: 'win' }, { a: 4.74, b: 6.51, type: 'win' }, { a: 7.85, b: 8.65, type: 'balcony' }, { a: 8.65, b: 9.66, type: 'fixed' }] }, // bedroom: two sections — the door and a fixed pane
    { axis: 'z', t1: -0.3, t2: 0, from: 0, to: D, ext: 1 },
    { axis: 'z', t1: W, t2: W + 0.3, from: 0, to: D, ext: 1 },
    { axis: 'z', t1: 4.05, t2: 4.17, from: RT, to: D },
    { axis: 'z', t1: 7.17, t2: 7.29, from: RT, to: D },
    { axis: 'x', t1: RT, t2: RB, from: 4.05, to: W, holes: [{ a: 5.77, b: 6.6, type: 'door' }, { a: 7.42, b: 8.25, type: 'door' }] },
    { axis: 'z', t1: 8.47, t2: 8.59, from: 0, to: RT, holes: [{ a: 0.26, b: 0.9, type: 'door' }, { a: 1.75, b: 2.43, type: 'door' }] },
    { axis: 'x', t1: 1.0, t2: 1.12, from: 8.59, to: W }
  ],
  // door leaves: hinge point, width, opening angle (degrees, three.js Y rotation of a leaf pointing +X)
  doors: [
    { x: 7.2, z: -0.15, w: 0.95, angle: 150, entry: 1 },
    { x: 5.77, z: 2.89, w: 0.8, angle: -35 },
    { x: 7.42, z: 2.89, w: 0.8, angle: -35 },
    { x: 8.53, z: 0.26, w: 0.62, angle: -125 },
    { x: 8.53, z: 2.43, w: 0.66, angle: 125 },
    { x: 7.88, z: 7.85, w: 0.75, angle: 35, white: 1 }
  ],
  rooms: [
    { name: 'Кухня-вітальня', area: 31.18, floor: 'oak', rects: [[0, 0, 4.05, D]], label: [2.0, 3.9] },
    { name: 'Передпокій', area: 12.62, floor: 'stone', rects: [[4.05, 0, 8.47, RT]], label: [6.2, 1.5] },
    { name: 'Кімната', area: 14.2, floor: 'light', rects: [[4.17, RB, 7.17, D]], label: [5.67, 5.3] },
    { name: 'Спальня', area: 14.25, floor: 'walnut', rects: [[7.29, RB, W, D]], label: [8.8, 5.3] },
    { name: 'Ванна', area: 2.8, floor: 'tile', rects: [[8.59, 1.12, W, RT]], label: [9.2, 2.0] },
    { name: 'Туалет', area: 1.65, floor: 'tile', rects: [[8.59, 0, W, 1.0]], label: [9.2, 0.5] },
    { name: 'Балкон', area: 2.13, floor: 'stone', rects: [[7.79, D + 0.3, 9.89, D + 1.17]], label: [8.84, D + 0.75] }
  ],
  balcony: [[7.69, D + 0.3, 7.79, D + 1.27], [9.89, D + 0.3, 9.99, D + 1.27], [7.69, D + 1.17, 9.99, D + 1.27]],
  fixtures: [
    { type: 'tall', r: [0, 0, 0.6, 1.18] },
    { type: 'fridge', r: [0, 1.18, 0.65, 1.82] },
    { type: 'counter', r: [0.6, 0, 4.05, 0.6], sink: [1.32, 1.88], hob: [2.52, 3.08] },
    { type: 'vent', r: [4.05, 0, 4.3, 0.66] }, // вентиляційний блок до стелі (між кухнею-вітальнею й передпокоєм)
    { type: 'panel', r: [7.4, 0, 7.75, 0.08] },
    { type: 'bath', r: [9.52, 1.15, W, 2.8] },
    { type: 'washer', r: [8.86, 1.15, 9.3, 1.75] },
    { type: 'sink', r: [8.8, 2.35, 9.43, RT] },
    { type: 'toilet', r: [9.6, 0.24, W, 0.68], back: [10.08, 0.24, W, 0.68] }
  ],
  // electrical points following the developer's plan legend (positions approximate); f = which way the wall face looks
  power: [
    { x: 2.0, z: 0, f: 'S', k: 'kitchen' }, { x: 3.2, z: 0, f: 'S', k: 'kitchen' }, { x: 2.8, z: 0, f: 'S', k: 'hood' },
    { x: 0, z: 3.24, f: 'E', k: 'socket' }, { x: 0, z: 5.31, f: 'E', k: 'socket2' }, { x: 0, z: 6.7, f: 'E', k: 'socket' },
    { x: 4.05, z: 3.3, f: 'W', k: 'switch' },
    { x: 6.05, z: 0, f: 'S', k: 'intercom' }, { x: 6.05, z: 0, f: 'S', k: 'switch2' }, { x: 8.0, z: 0, f: 'S', k: 'net' },
    { x: 4.17, z: 4.2, f: 'E', k: 'socket' }, { x: 4.17, z: 6.33, f: 'E', k: 'socket2' }, { x: 7.17, z: 5.27, f: 'W', k: 'socket' }, { x: 6.75, z: RB, f: 'S', k: 'switch' }, { x: 5.4, z: RB, f: 'S', k: 'net' },
    { x: W, z: 3.97, f: 'W', k: 'socket' }, { x: W, z: 6.11, f: 'W', k: 'socket2' }, { x: 7.29, z: 5.1, f: 'E', k: 'socket' }, { x: 8.4, z: RB, f: 'S', k: 'switch' }, { x: 9.2, z: RB, f: 'S', k: 'ac' },
    { x: 9.9, z: 1.12, f: 'S', k: 'boiler' }, { x: 8.59, z: 2.6, f: 'E', k: 'km' }, { x: 8.47, z: 1.3, f: 'W', k: 'switch2' }
  ],
  lamps: [[2.0, 1.7], [2.0, 5.3], [6.3, 1.4], [5.67, 5.3], [8.8, 5.3], [9.4, 2.0], [9.4, 0.5]],
  start: [6.7, 0.9, 3.7]
};
