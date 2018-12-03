const Color = require("../src/color.js");

test('Parse hsl(0,0%,0%) to equal {h:0,s:0,l:0,a:1}', () => {
  expect(Color.parse.hsl("hsl(0,0%,0%)", true)).toEqual({h:0,s:0,l:0, a:1});
});

test('Parse hsl(0,100%,100%) to equal {h:0,s:100,l:100, a:1}', () => {
  expect(Color.parse.hsl("hsl(0,100%,100%)", true)).toEqual({h:0,s:100,l:100, a:1});
});

test('Parse hsl(180,25%,75%) to equal {h:180,s:25,l:75, a:1}', () => {
  expect(Color.parse.hsl("hsl(180,25%,75%)", true)).toEqual({h:180,s:25,l:75, a:1});
});

test('Parse "  hsl(  180 ,  25%  ,  75%  )     " to equal {h:180,s:25,l:75, a:1}', () => {
  expect(Color.parse.hsl("  hsl(  180 ,  25%  ,  75%  )     ", true)).toEqual({h:180,s:25,l:75, a:1});
});

test('Parse hsl(180.2,25.55%,75.0%) to equal {h:180.2,s:25.55,l:75, a:1}', () => {
  expect(Color.parse.hsl("hsl(180.2,25.55%,75.0%)", true)).toEqual({h:180.2,s:25.55,l:75, a:1});
});

test('Parse empty string to be false', () => {
  expect(Color.parse.hsl("", true)).toBe(false);
});

test('Parse "gibberish" string to be false', () => {
  expect(Color.parse.hsl("giberrish", true)).toBe(false);
});

test('Parse "hsl(aaa,25,75)" string to be false', () => {
  expect(Color.parse.hsl("hsl(aaa,25,75)", true)).toBe(false);
});

test('Parse "hsl(25,75)" string to be false', () => {
  expect(Color.parse.hsl("hsl(25,75)", true)).toBe(false);
});


test('Parse "hsl(25,75,25)" string to be false', () => {
  expect(Color.parse.hsl("hsl(25,75)", true)).toBe(false);
});


test('Parse "hsl(25%,75%,25%)" string to be false', () => {
  expect(Color.parse.hsl("hsl(25,75)", true)).toBe(false);
});

test('Parse "hsl(,,)" string to be false', () => {
  expect(Color.parse.hsl("hsl(,,)", true)).toBe(false);
});
