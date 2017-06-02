
const em = require('./build/lapacklite');

const ddot_wrap = em.cwrap('ddot_',
	'number',
	['number', 'number', 'number', 'number', 'number']);

let vx = new Float32Array([1,2,3,4]);
let vy = new Float32Array([2,3,4,5]);

const SIZE_INT = 4;
const SIZE_DOUBLE = 8;

let n = vx.length,
	pn = em._malloc(SIZE_INT),
  pdx = em._malloc(n * SIZE_DOUBLE),
  pincx = em._malloc(SIZE_INT),
  pdy = em._malloc(n * SIZE_DOUBLE),
  pincy = em._malloc(SIZE_INT),
  dx = new Float64Array(em.HEAPF64.buffer, pdx, n),
  dy = new Float64Array(em.HEAPF64.buffer, pdy, n);

em.setValue(pn, n, 'i32');
em.setValue(pincx, 1, 'i32');
em.setValue(pincy, 1, 'i32');
dx.set(vx);
dy.set(vy);

console.log(ddot_wrap(pn, pdx, pincx, pdy, pincy));

