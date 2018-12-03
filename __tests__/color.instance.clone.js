const Color = require("../src/color.js");

test('cloning', () => {

  const a = new Color({r:255,g:128,b:33, a:.5});
  const b = a.clone();

  expect(b.h).toBe(a.h);
  expect(b.s).toBe(a.s);
  expect(b.l).toBe(a.l);
  expect(b.r).toBe(a.r);
  expect(b.g).toBe(a.g);
  expect(b.b).toBe(a.b);
  expect(b.a).toBe(a.a);

  expect(b).not.toBe(a);

  b.h = 0;
  expect(b.h).not.toBe(a.h);
  expect(b.h).toBe(0);

  b.r = 120;
  expect(b.r).not.toBe(a.r);
  expect(b.r).toBe(120);
  expect(a.r).toBe(255);

  b.a = .66;
  expect(b.a).not.toBe(a.a);
  expect(b.a).toBe(.66);
  expect(a.a).toBe(.5);

});
