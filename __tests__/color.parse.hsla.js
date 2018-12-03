const Color = require("../src/color.js");

test('Parse hsla(0,0%,0%,0) to equal {h:0,s:0,l:0,a:0}', () => {
  expect(Color.parse.hsla("hsla(0,0%,0%,0)", true)).toEqual({h:0,s:0,l:0, a:0});
});

test('Parse hsla(0,100%,100%, 1) to equal {h:0,s:100,l:100, a:1}', () => {
  expect(Color.parse.hsla("hsla(0,100%,100%,1)", true)).toEqual({h:0,s:100,l:100, a:1});
});

test('Parse hsla(180,25%,75%,.7) to equal {h:180,s:25,l:75, a:.7}', () => {
  expect(Color.parse.hsla("hsla(180,25%,75%,.7)", true)).toEqual({h:180,s:25,l:75, a:.7});
});

test('Parse hsla(180,25%,75%,0.7) to equal {h:180,s:25,l:75, a:.5}', () => {
  expect(Color.parse.hsla("hsla(180,25%,75%,0.7)", true)).toEqual({h:180,s:25,l:75, a:.7});
});

test('Parse "  hsla(  180 ,  25%  ,  75%  ,  .5 )     " to equal {h:180,s:25,l:75, a:1}', () => {
  expect(Color.parse.hsla("  hsla(  180 ,  25%  ,  75% ,  .5 )     ", true)).toEqual({h:180,s:25,l:75, a:.5});
});

test('Parse hsla(180.2,25.55%,75.0%, .5) to equal {h:180.2,s:25.55,l:75, a:.5}', () => {
  expect(Color.parse.hsla("hsla(180.2,25.55%,75.0%, .5)", true)).toEqual({h:180.2,s:25.55,l:75, a:.5});
});

test('Parse empty string to be false', () => {
  expect(Color.parse.hsla("", true)).toBe(false);
});

test('Parse "gibberish" string to be false', () => {
  expect(Color.parse.hsla("giberrish", true)).toBe(false);
});

test('Parse "hsla(aaa,25%,75%)" string to be false', () => {
  expect(Color.parse.hsla("hsla(aaa,25,75,.45)", true)).toBe(false);
});

test('Parse "hsla(25%,75%)" string to be false', () => {
  expect(Color.parse.hsla("hsla(25,75)", true)).toBe(false);
});


test('Parse "hsla(25,75%,5%,5,5)" string to be false', () => {
  expect(Color.parse.hsla("hsla(25,75)", true)).toBe(false);
});


test('Parse "hsla(25,75,5%,1)" string to be false', () => {
  expect(Color.parse.hsla("hsla(25,75)", true)).toBe(false);
});


test('Parse "hsla(25%,75%,5%,1)" string to be false', () => {
  expect(Color.parse.hsla("hsla(25,75)", true)).toBe(false);
});


test('Parse "hsla(25,75x,5%,1)" string to be false', () => {
  expect(Color.parse.hsla("hsla(25,75)", true)).toBe(false);
});

test('Parse "hsla(,,,)" string to be false', () => {
  expect(Color.parse.hsla("hsla(,,,)", true)).toBe(false);
});
