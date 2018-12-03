const Color = require("../src/color.js");

test('sring.rgb(0,0,0) to be rgb(0, 0, 0)', () => {
  expect(Color.string.rgb(0,0,0)).toBe("rgb(0, 0, 0)");
});

test('sring.rgb(255,255,255) to be rgb(255, 255, 255)', () => {
  expect(Color.string.rgb(255,255,255)).toBe("rgb(255, 255, 255)");
});


test('sring.rgb(128,128,128) to be rgb(128, 128, 128)', () => {
  expect(Color.string.rgb(128,128,128)).toBe("rgb(128, 128, 128)");
});

test('sring.rgb(66, 33, 99) to be rgb(66, 33, 99)', () => {
  expect(Color.string.rgb(66, 33, 99)).toBe("rgb(66, 33, 99)");
});


test('sring.rgb(0,0,0,1) to be rgb(0, 0, 0)', () => {
  expect(Color.string.rgb(0,0,0,1)).toBe("rgb(0, 0, 0)");
});

test('sring.rgb(255,255,255,1) to be rgb(255, 255, 255)', () => {
  expect(Color.string.rgb(255,255,255,1)).toBe("rgb(255, 255, 255)");
});


test('sring.rgb(128,128,128,1) to be rgb(128, 128, 128)', () => {
  expect(Color.string.rgb(128,128,128,1)).toBe("rgb(128, 128, 128)");
});

test('sring.rgb(66, 33, 99,1) to be rgb(66, 33, 99)', () => {
  expect(Color.string.rgb(66, 33, 99,1)).toBe("rgb(66, 33, 99)");
});


test('sring.rgb(0,0,0,.1) to be rgba(0, 0, 0, 0.1)', () => {
  expect(Color.string.rgb(0,0,0,.1)).toBe("rgba(0, 0, 0, 0.1)");
});

test('sring.rgb(255,255,255,0) to be rgba(255, 255, 255, 0)', () => {
  expect(Color.string.rgb(255,255,255,0)).toBe("rgba(255, 255, 255, 0)");
});


test('sring.rgb(128,128,128, .5) to be rgba(128, 128, 128, 0.5)', () => {
  expect(Color.string.rgb(128,128,128,.5)).toBe("rgba(128, 128, 128, 0.5)");
});
