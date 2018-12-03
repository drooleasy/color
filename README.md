# Color.js

Is a utility to manipulate color in js.
It can parse and output css value (hexadecimal, rgb, rgba, hsl, hsla notations and common color names), output to css formats.
You can transparently access and modify RGB and HSL channels, and off course the alpha channel without having to convert your color object.

## the Color class

```js
var c = new Color();
```

With no argument, it contructy a trabsparent black color (i.e rgba(0,0,0,0)).
This is also the case if arguments make non sense.

You can also use the constructor with common css color representations

```js
var c1 = new Color("#000");
var c2 = new Color("#BADA55");
var c3 = new Color("#123F");
var c4 = new Color("#FF880088");
var c5 = new Color("rgb(255, 128, 0)");
var c6 = new Color("rgba(255, 128, 0, .66)");
var c7 = new Color("hsl(30, 100%, 50%)");
var c8 = new Color("hsla(30, 100%, 50%, .66)");
var c9 = new Color("rebeccapurple");
var c10 = new Color("transparent");
```

You can also construct color with hsla or rgba object :

```js
var hsl = new Color({h:30, s:100, l: 50});
var hsla = new Color({h:30, s:100, l: 50, a: .5});
var rgb = new Color({r:255, g:128, b:0})
var rgba = new Color({r:255, g:128, b:0, a:.5})
```

in either case when alpha value is not specified it default to 1 (fully opaque), expect for the constructor with no or invalid arguments (alpha is then 0).

Once a color is constructed you can access and modify the differents channel (the value are clamped to their correct range: 0-255 for red, green and blue channels, 0-360 for hue channel, 0-100 for saturation and lightness channel, and 0-1 for alpha channel). When you change rgb channels, the hsl updates and vice-versa.

```js
var c = new Color("yellow");
c.a = .5; // alpha channel
c.r = 128; // red channel
c.b += 10; // blue channel
console.log(c.r); // red channel
c.h = 180; // hue channel
c.s *= 0.5; // saturation channel
console.log(c.l); // lightness channel
```

You can get a copy of a color with `clone()` or get a POJO of its channels (the key are r, g, b, h, s, l, a) with the `pojo()` method.

```js
var c = new Color('red');
var c2 = c.clone();
var pojo = c.pojo(); // {r:255, g:0, b:0, h:0, s:100, l:50, a:1 }
```

You can check for equality between two colors object with `equals()`, you can ignore the alpha channel during equality check by passing `true` as second argument :

```js
var c = new Color('rgba(128,128,128,1)');
c2 = c.clone();
c2.equals(c); // true
c2.a = .5;
c2.equals(c); // false
c2.equals(c, true); // true
```

lastly, you can output a string representing the color in various CSS formats :

```js
var c = new Color('blue');
c.toString(); // "rgb(0, 0, 255)"
c.a = .5;
c.toString(); // "rgba(0, 0, 255, 0.5)"
c.rgbString(); // "rgba(0, 0, 255, 0.5)"
c.hexString(); // "#0000FF"
c.hexString(true); // "#0000FF7F" force alpha channel in hexadecimal notation
c.hslString(); // "hsla(240, 100%, 50%, 0.5)"
c.a = 1;
c.hslString(); // "hsl(240, 100%, 50%)"
```
