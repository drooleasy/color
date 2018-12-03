const Color = require("../src/color.js");

test('pojo from rgb', () => {

  const c = new Color({r:255,g:119,b:0, a:.5});
  const p = c.pojo();
  expect(p).not.toBe(c);
  expect(p instanceof Color).toBe(false)
  expect(p.r).toBeCloseTo(255);
  expect(p.g).toBeCloseTo(119);
  expect(p.b).toBeCloseTo(0);
  expect(p.h).toBeCloseTo(28);
  expect(p.s).toBeCloseTo(100);
  expect(p.l).toBeCloseTo(50);
  expect(p.a).toBeCloseTo(.5);


});


test('pojo from hsl', () => {

  const c = new Color({h:28,s:100,l:50, a:.5});
  const p = c.pojo();
  expect(p).not.toBe(c);
  expect(p instanceof Color).toBe(false)
  expect(p.r).toBeCloseTo(255);
  expect(p.g).toBeCloseTo(119);
  expect(p.b).toBeCloseTo(0);
  expect(p.h).toBeCloseTo(28);
  expect(p.s).toBeCloseTo(100);
  expect(p.l).toBeCloseTo(50);
  expect(p.a).toBeCloseTo(.5);


});
