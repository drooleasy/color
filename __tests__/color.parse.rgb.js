const Color = require("../src/color.js");

test('Parse rgb(0,0,0) to equal {r:0,g:0,b:0,a:1}', () => {
  expect(Color.parse.rgb("rgb(0,0,0)", true)).toEqual({r:0,g:0,b:0,a:1});
});

test('Parse rgb(255,255,255) to equal {r:255,g:255,b:255,a:1}', () => {
  expect(Color.parse.rgb("rgb(255,255,255)", true)).toEqual({r:255,g:255,b:255,a:1});
});

test('Parse rgb(136,136,136) to equal {r:136,g:136,b:136,a:1}', () => {
  expect(Color.parse.rgb("rgb(136,136,136)", true)).toEqual({r:136,g:136,b:136,a:1});
});

test('Parse rgb(102,51,153) to equal {r:102,g:51,b:153,a:1}', () => {
  expect(Color.parse.rgb("rgb(102,51,153)", true)).toEqual({r:102,g:51,b:153,a:1});
});


test('Parse rgb  (  102  ,  51  ,   153  ) to equal {r:102,g:51,b:153,a:1}', () => {
  expect(Color.parse.rgb("  rgb  (  102  ,  51  ,   153  )  ", true)).toEqual({r:102,g:51,b:153,a:1});
});

test('Parse empty string to equal false', () => {
  expect(Color.parse.rgb("", true)).toBe(false);
});

test('Parse "gibberish" string to equal false', () => {
  expect(Color.parse.rgb("gibberish", true)).toBe(false);
});

test('Parse "#AA" string to equal false', () => {
  expect(Color.parse.rgb("#AA", true)).toBe(false);
});

test('Parse "rgb(255)" string to equal false', () => {
  expect(Color.parse.rgb("rgb(255)", true)).toBe(false);
});

test('Parse "rgb(255, 255,255, 255)" string to equal false', () => {
  expect(Color.parse.rgb("rgb(255, 255,255, 255)", true)).toBe(false);
});
