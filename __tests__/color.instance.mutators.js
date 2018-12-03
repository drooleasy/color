const Color = require("../src/color.js");

test('rgb mutators', () => {

  const c = new Color(); // rgb(0,0,0,0)

  expect(c.r).toBeCloseTo(0, 0);
  expect(c.g).toBeCloseTo(0, 0);
  expect(c.b).toBeCloseTo(0, 0);
  expect(c.h).toBeCloseTo(0, 0);
  expect(c.s).toBeCloseTo(0, 0);
  expect(c.l).toBeCloseTo(0, 0);
  expect(c.a).toBeCloseTo(0, 0);

  c.r = 255;
  c.g = 128;
  c.b = 0;
  c.a = .66;

  expect(c.r).toBeCloseTo(255, 0);
  expect(c.g).toBeCloseTo(128, 0);
  expect(c.b).toBeCloseTo(0, 0);
  expect(c.h).toBeCloseTo(30, 0);
  expect(c.s).toBeCloseTo(100, 0);
  expect(c.l).toBeCloseTo(50, 0);
  expect(c.a).toBeCloseTo(.66, 0);
});


test('hsl mutators', () => {

  const c = new Color({h:0,s:0,l:0, a:0});

  expect(c.r).toBeCloseTo(0, 0);
  expect(c.g).toBeCloseTo(0, 0);
  expect(c.b).toBeCloseTo(0, 0);
  expect(c.h).toBeCloseTo(0, 0);
  expect(c.l).toBeCloseTo(0, 0);
  expect(c.s).toBeCloseTo(0, 0);
  expect(c.a).toBeCloseTo(0, 0);

  c.h = 30;
  c.s = 100;
  c.l = 50;
  c.a = .66;

  expect(c.r).toBeCloseTo(255, 0);
  expect(c.g).toBeCloseTo(128, 0);
  expect(c.b).toBeCloseTo(0, 0);
  expect(c.h).toBeCloseTo(30, 0);
  expect(c.s).toBeCloseTo(100, 0);
  expect(c.l).toBeCloseTo(50, 0);
  expect(c.a).toBeCloseTo(.66, 0);
});
