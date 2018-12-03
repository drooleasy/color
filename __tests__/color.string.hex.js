const Color = require("../src/color.js");

test('sring.hex(0,0,0) to be #000000', () => {
  expect(Color.string.hex(0,0,0)).toBe("#000000");
});

test('sring.hex(255,255,255) to be #FFFFFF', () => {
  expect(Color.string.hex(255,255,255)).toBe("#FFFFFF");
});


test('sring.hex(128,128,128) to be #808080', () => {
  expect(Color.string.hex(128,128,128)).toBe("#808080");
});
test('sring.hex(66, 33, 99) to be #422163', () => {
  expect(Color.string.hex(66, 33, 99)).toBe("#422163");
});
