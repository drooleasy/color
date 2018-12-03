const Color = require("../src/color.js");

test('constructor with color name', () => {
  const black = new Color("black");
  expect(black.hexString()).toBe("#000000");
  expect(black.a).toBe(1);
  const white = new Color("white");
  expect(white.hexString()).toBe("#FFFFFF");
  expect(white.a).toBe(1);
  const red = new Color("red");
  expect(red.hexString()).toBe("#FF0000");
  expect(red.a).toBe(1);
});

test('Constructor with POJO hsla and rgba', () => {

  const rgb = new Color({r:255,g:128,b:33, a:.5});
  expect(rgb.r).toBe(255);
  expect(rgb.g).toBe(128);
  expect(rgb.b).toBe(33);
  expect(rgb.a).toBe(.5);

  const hsl = new Color({h: 120, s: 80, l: 55, a: .6});
  expect(hsl.h).toBe(120);
  expect(hsl.s).toBe(80);
  expect(hsl.l).toBe(55);
  expect(hsl.a).toBe(.6);

});

test("constructor with css rgb string", () => {
  const c1 = new Color("rgb(66,33,99)");
  expect(c1.r).toBe(66);
  expect(c1.g).toBe(33);
  expect(c1.b).toBe(99);
  expect(c1.a).toBe(1);

  const c2 = new Color("rgba(66,33,99, .66)");
  expect(c2.r).toBe(66);
  expect(c2.g).toBe(33);
  expect(c2.b).toBe(99);
  expect(c2.a).toBe(.66);

})

test("constructor with css hex string", () => {
  const c1 = new Color("#FF990F");
  expect(c1.r).toBe(255);
  expect(c1.g).toBe(153);
  expect(c1.b).toBe(15);
  expect(c1.a).toBe(1);

  const c2 = new Color("#F91");
  expect(c2.r).toBe(255);
  expect(c2.g).toBe(153);
  expect(c2.b).toBe(17);
  expect(c2.a).toBe(1);

  const c3 = new Color("#FF990F10");
  expect(c3.r).toBe(255);
  expect(c3.g).toBe(153);
  expect(c3.b).toBe(15);
  expect(c3.a).toBeCloseTo(0.0627);


  const c4 = new Color("#F912");
  expect(c4.r).toBe(255);
  expect(c4.g).toBe(153);
  expect(c4.b).toBe(17);
  expect(c4.a).toBeCloseTo(0.13333);

})

test("cosntructor with css hsl string", () => {

  const c1 = new Color("hsl(120,66%,50%)");
  expect(c1.h).toBe(120);
  expect(c1.s).toBe(66);
  expect(c1.l).toBe(50);
  expect(c1.a).toBe(1);


  const c2 = new Color("hsla(120,66%,50%, .66)");
  expect(c2.h).toBe(120);
  expect(c2.s).toBe(66);
  expect(c2.l).toBe(50);
  expect(c2.a).toBeCloseTo(.66)
})

test("Constructor with 'transparent' keyword", () => {
  const c = new Color("transparent");
  expect(c.toString()).toBe("rgba(0, 0, 0, 0)");

})

test("Constructor with no argument", () => {
  const c = new Color();
  expect(c.toString()).toBe("rgba(0, 0, 0, 0)");

})

test("Constructor with invalid argument", () => {
  const c1 = new Color("foobar");
  expect(c1.toString()).toBe("rgba(0, 0, 0, 0)");
  const c2 = new Color(42);
  expect(c2.toString()).toBe("rgba(0, 0, 0, 0)");
})
