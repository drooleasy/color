const Color = require("../src/color.js");

test('sring.rgb2hsl(66,33,99,1) to be {h:270, s:50, l:26,a:1}', () => {
  var hsv = Color.rgb2hsl(66,33,99,1);
  expect(hsv.h).toBeCloseTo(270,0);
  expect(hsv.s).toBeCloseTo(50,0);
  expect(hsv.l).toBeCloseTo(26,0);
  expect(hsv.a).toBeCloseTo(1,0);
});

test('sring.rgb2hsl(66,33,99,.5) to be {h:270, s:50, l:26,a:.5}', () => {
  var hsv = Color.rgb2hsl(66,33,99,.5);
  expect(hsv.h).toBeCloseTo(270,0);
  expect(hsv.s).toBeCloseTo(50,0);
  expect(hsv.l).toBeCloseTo(26,0);
  expect(hsv.a).toBeCloseTo(.5,0);
});



test('sring.rgb2hsl(255,0,0,1) to be {h:0, s:100, l:50, a:1}', () => {
  var hsv = Color.rgb2hsl(255,0,0,1);
  expect(hsv.h).toBeCloseTo(0,0);
  expect(hsv.s).toBeCloseTo(100,0);
  expect(hsv.l).toBeCloseTo(50,0);
  expect(hsv.a).toBeCloseTo(1,0);
});


test('sring.rgb2hsl(0,255,0,1) to be {h:120, s:100, l:50, a:1}', () => {
  var hsv = Color.rgb2hsl(0,255,0,1);
  expect(hsv.h).toBeCloseTo(120,0);
  expect(hsv.s).toBeCloseTo(100,0);
  expect(hsv.l).toBeCloseTo(50,0);
  expect(hsv.a).toBeCloseTo(1,0);
});

test('sring.rgb2hsl(0,0,255,1) to be {h:240, s:100, l:50, a:1}', () => {
  var hsv = Color.rgb2hsl(0,0,255,1);
  expect(hsv.h).toBeCloseTo(240,0);
  expect(hsv.s).toBeCloseTo(100,0);
  expect(hsv.l).toBeCloseTo(50,0);
  expect(hsv.a).toBeCloseTo(1,0);
});




test('sring.hsl2rgb(0,100,50,1) to be {r:255,g:0,b:0,a:1}', () => {
  var rgb = Color.hsl2rgb(0,100,50,1);
  expect(rgb.r).toBeCloseTo(255,0);
  expect(rgb.g).toBeCloseTo(0,0);
  expect(rgb.b).toBeCloseTo(0,0);
  expect(rgb.a).toBeCloseTo(1,0);
});

test('sring.hsl2rgb(120,100,50,1) to be {r:0,g:255,b:0,a:1}', () => {
  var rgb = Color.hsl2rgb(120,100,50,1);
  expect(rgb.r).toBeCloseTo(0,0);
  expect(rgb.g).toBeCloseTo(255,0);
  expect(rgb.b).toBeCloseTo(0,0);
  expect(rgb.a).toBeCloseTo(1,0);
});

test('sring.hsl2rgb(240,100,50,1) to be {r:0,g:0,b:255,a:1}', () => {
  var rgb = Color.hsl2rgb(240,100,50,1);
  expect(rgb.r).toBeCloseTo(0,0);
  expect(rgb.g).toBeCloseTo(0,0);
  expect(rgb.b).toBeCloseTo(255,0);
  expect(rgb.a).toBeCloseTo(1,0);
});

test('sring.hsl2rgb(240,100,50,.5) to be {r:0,g:0,b:255,a:.5}', () => {
  var rgb = Color.hsl2rgb(240,100,50,.5);
  expect(rgb.r).toBeCloseTo(0,0);
  expect(rgb.g).toBeCloseTo(0,0);
  expect(rgb.b).toBeCloseTo(255,0);
  expect(rgb.a).toBeCloseTo(.5,0);
});

test('sring.hsl2rgb(240,100,0,1, true) to be {r:0,g:0,b:0,a:1}', () => {
  var rgb = Color.hsl2rgb(240,100,0,1);
  expect(rgb.r).toBeCloseTo(0,0);
  expect(rgb.g).toBeCloseTo(0,0);
  expect(rgb.b).toBeCloseTo(0,0);
  expect(rgb.a).toBeCloseTo(1,0);
});

test('sring.hsl2rgb(240,100,100,1, true) to be {r:255,g:255,b:255,a:1}', () => {
  var rgb = Color.hsl2rgb(240,100,100,1);
  expect(rgb.r).toBeCloseTo(255,0);
  expect(rgb.g).toBeCloseTo(255,0);
  expect(rgb.b).toBeCloseTo(255,0);
  expect(rgb.a).toBeCloseTo(1,0);
});
