const Color = require("../src/color.js");

test('sring.hsl(0,0,0) to be hsl(0, 0%, 0%)', () => {
  expect(Color.string.hsl(0,0,0)).toBe("hsl(0, 0%, 0%)");
});

test('sring.hsl(0,0,0,0) to be hsla(0, 0%, 0%, 0)', () => {
  expect(Color.string.hsl(0,0,0,0)).toBe("hsla(0, 0%, 0%, 0)");
});

test('sring.hsl(0,0,0,0.5) to be hsla(0, 0%, 0%, 0.5)', () => {
  expect(Color.string.hsl(0,0,0,0.5)).toBe("hsla(0, 0%, 0%, 0.5)");
});


test('sring.hsl(0,0,0,1) to be hsl(0, 0%, 0%)', () => {
  expect(Color.string.hsl(0,0,0,1)).toBe("hsl(0, 0%, 0%)");
});

test('sring.hsl(180,40,55,1) to be hsl(180, 40%, 55%)', () => {
  expect(Color.string.hsl(180,40,55,1)).toBe("hsl(180, 40%, 55%)");
});

test('sring.hsl(180.2,40.4,55.6,.8) to be hsl(180.2, 40.4%, 55.6%, 0.8) ', () => {
  expect(Color.string.hsl(180.2,40.4,55.6,.8)).toBe("hsla(180.2, 40.4%, 55.6%, 0.8)");
});
