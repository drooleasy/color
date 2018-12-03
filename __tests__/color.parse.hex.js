const Color = require("../src/color.js");

test('Parse #000 to equal {r:0,g:0,b:0,a:1}', () => {
  expect(Color.parse.hex("#000", true)).toEqual({r:0,g:0,b:0,a:1});
});

test('Parse #FFF to equal {r:255,g:255,b:255,a:1}', () => {
  expect(Color.parse.hex("#FFF", true)).toEqual({r:255,g:255,b:255,a:1});
});

test('Parse #888 to equal {r:136,g:136,b:136,a:1}', () => {
  expect(Color.parse.hex("#888", true)).toEqual({r:136,g:136,b:136,a:1});
});

test('Parse #663399 to equal {r:102,g:51,b:153,a:1}', () => {
  expect(Color.parse.hex("#663399", true)).toEqual({r:102,g:51,b:153,a:1});
});

test('Parse #BADA55 to equal {r:186, g:218, b:85, a:1}', () => {
  expect(Color.parse.hex("#BADA55", true)).toEqual({r:186, g:218, b:85, a:1});
});

test('Parse #bada55 to equal {r:186, g:218, b:85, a:1}', () => {
  expect(Color.parse.hex("#bada55", true)).toEqual({r:186, g:218, b:85, a:1});
});

test('Parse #8880 to equal {r:136,g:136,b:136,a:0}', () => {
  expect(Color.parse.hex("#888", true)).toEqual({r:136,g:136,b:136,a:1});
});

test('Parse #888F to equal {r:136,g:136,b:136,a:1}', () => {
  expect(Color.parse.hex("#888", true)).toEqual({r:136,g:136,b:136,a:1});
});

test('Parse #8888 to equal {r:136,g:136,b:136,a:0.5333333333333333}', () => {
  const c = Color.parse.hex("#8888", true);
  expect(c.r).toBe(136);
  expect(c.g).toBe(136);
  expect(c.b).toBe(136);
  expect(c.a).toBeCloseTo(0.53);
});

test('Parse #88888888 to equal {r:136,g:136,b:136,a:0.5333333333333333}', () => {
  const c = Color.parse.hex("#88888888", true);
  expect(c.r).toBe(136);
  expect(c.g).toBe(136);
  expect(c.b).toBe(136);
  expect(c.a).toBeCloseTo(0.53);
});

test('Parse #8888883A to equal {r:136,g:136,b:136,a:0.22745098039215686}', () => {
  const c = Color.parse.hex("#8888883A", true);
  expect(c.r).toBe(136);
  expect(c.g).toBe(136);
  expect(c.b).toBe(136);
  expect(c.a).toBeCloseTo(0.227);
});


test('Parse empty string to equal false', () => {
  expect(Color.parse.hex("", true)).toBe(false);
});

test('Parse "gibberish" string to equal false', () => {
  expect(Color.parse.hex("gibberish", true)).toBe(false);
});

test('Parse "#AA" string to equal false', () => {
  expect(Color.parse.hex("#AA", true)).toBe(false);
});

test('Parse "#AAAAA" string to equal false', () => {
  expect(Color.parse.hex("#AAAAA", true)).toBe(false);
});

test('Parse "#AAAAAAAAA" string to equal false', () => {
  expect(Color.parse.hex("#AAAAAAAAA", true)).toBe(false);
});
