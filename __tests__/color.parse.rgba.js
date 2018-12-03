const Color = require("../src/color.js");

test('Parse rgba(0,0,0,0) to equal {r:0,g:0,b:0,a:0}', () => {
  expect(Color.parse.rgba("rgba(0,0,0,0)", true)).toEqual({r:0,g:0,b:0,a:0});
});

test('Parse rgba(255,255,255,1) to equal {r:255,g:255,b:255,a:1}', () => {
  expect(Color.parse.rgba("rgba(255,255,255,1)", true)).toEqual({r:255,g:255,b:255,a:1});
});

test('Parse rgba(136,136,136,0.5) to equal {r:136,g:136,b:136,a:.5}', () => {
  expect(Color.parse.rgba("rgba(136,136,136,0.5)", true)).toEqual({r:136,g:136,b:136,a:.5});
});

test('Parse rgba(136,136,136,.5) to equal {r:136,g:136,b:136,a:.5}', () => {
  expect(Color.parse.rgba("rgba(136,136,136,.5)", true)).toEqual({r:136,g:136,b:136,a:.5});
});

test('Parse rgba(102,51,153, .7) to equal {r:102,g:51,b:153,a:.7}', () => {
  expect(Color.parse.rgba("rgba(102,51,153, .7)", true)).toEqual({r:102,g:51,b:153,a:.7});
});


test('Parse rgba  (  102  ,  51  ,   153  ,  .8 ) to equal {r:102,g:51,b:153,a:.8}', () => {
  expect(Color.parse.rgba("  rgba  (  102  ,  51  ,   153 , .8 )  ", true)).toEqual({r:102,g:51,b:153,a:.8});
});

test('Parse empty string to equal false', () => {
  expect(Color.parse.rgba("", true)).toBe(false);
});

test('Parse "gibberish" string to equal false', () => {
  expect(Color.parse.rgba("gibberish", true)).toBe(false);
});

test('Parse "#AA" string to equal false', () => {
  expect(Color.parse.rgba("#AA", true)).toBe(false);
});

test('Parse "rgba(255, 255, 255)" string to equal false', () => {
  expect(Color.parse.rgba("rgba(255,255,255)", true)).toBe(false);
});

test('Parse "rgba(255, 255, 255, abc)" string to equal false', () => {
  expect(Color.parse.rgba("rgba(255, 255,255, abc)", true)).toBe(false);
});

test('Parse "rgba(abc, 255, 255, 1)" string to equal false', () => {
  expect(Color.parse.rgba("rgba(255, 255,255, abc)", true)).toBe(false);
});
