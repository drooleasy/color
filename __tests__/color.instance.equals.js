const Color = require("../src/color.js");

test('same rgb colors to be equal ', () => {
  const a = new Color({r:255,g:128, b:33, a:.5});
  const b = new Color({r:255,g:128, b:33, a:.5});
  expect(a.equals(b)).toBe(true);
  expect(b.equals(a)).toBe(true);
});

test('rgb colors with different alpha not to be equal ', () => {
  const a = new Color({r:255,g:128, b:33, a:.5});
  const b = new Color({r:255,g:128, b:33, a:.6});
  expect(a.equals(b)).toBe(false);
  expect(b.equals(a)).toBe(false);
});

test('colors with different rgb values not to be equal ', () => {
  const a = new Color({r:255,g:128, b:33, a:.5});
  const b = new Color({r:255,g:128, b:34, a:.5});
  expect(a.equals(b)).toBe(false);
  expect(b.equals(a)).toBe(false);
});

test('hsl color with same value to be equals', () =>{
  const a = new Color({h:120, s:100, l:50, a:.5});
  const b = new Color({h:120, s:100, l:50, a:.5});
  expect(a.equals(b)).toBe(true);
  expect(b.equals(a)).toBe(true);

})

test('hsl color with different alpha not to be equals', () =>{
  const a = new Color({h:120, s:100, l:50, a:.5});
  const b = new Color({h:120, s:100, l:50, a:.6});
  expect(a.equals(b)).toBe(false);
  expect(b.equals(a)).toBe(false);
})

test("same color constructed with hsl or rgb to be equals", ()=>{
  const a = new Color({r:0, g:255, b:0, a:.5});
  const b = new Color({h:120, s:100, l: 50, a:.5});
  expect(a.equals(b)).toBe(true);
  expect(b.equals(a)).toBe(true);
})



test("same color with different alpha to be equals when ignoring alpha", ()=>{
  const a = new Color({r:0, g:255, b:0, a:.5});
  const b = new Color({r:0, g:255, b:0, a:.6});
  expect(a.equals(b, true)).toBe(true);
  expect(b.equals(a, true)).toBe(true);
  expect(a.equals(b, false)).toBe(false);
  expect(b.equals(a, false)).toBe(false);
})
