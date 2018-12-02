

// TODO:
// Space-separated functional color notations
// Allow floats in rgb() and rgba()


function Color(v){
	var _rgb = false;
	var _hsl = false;
	this._a = 0;
	var self = this;
	function _checkRGB(){
		if(!_rgb){
			_rgb = Color.hsl2rgb(self.h, self.s, self.l);
			delete _rgb.a;
		}	
	}
	function _checkHSL(){
		if(!_hsl){
			_hsl = Color.rgb2hsl(self.r, self.g, self.b);
			delete _hsl.a;
		}		
	}

	
	Object.defineProperties(this, {
		"h" : {
			"get": function(){
				_checkHSL(); 
				return _hsl.h;
			},
			"set": function(v){
				if(typeof v !== 'number') throw new TypeError("Not a numeric");
				_checkHSL();
				_rgb = false;
				v = v % 360;
				if(v<0) v += 360;
				_hsl.h = v;
			}
		},
		"s" : {
			"get": function(){
				_checkHSL(); 
				return _hsl.s;
			},
			"set": function(v){
				if(typeof v !== 'number') throw new TypeError("Not a numeric");
				_checkHSL();
				_rgb = false;
				v = Math.max(0, Math.min(v, 100));
				_hsl.s = v;
			}
		},
		"l" : {
			"get": function(){
				_checkHSL();  
				return _hsl.l;
			},
			"set": function(v){
				if(typeof v !== 'number') throw new TypeError("Not a numeric");
				_checkHSL();
				_rgb = false;
				v = Math.max(0, Math.min(v, 100));
				_hsl.l = v;
			}
		},
		"r" : {
			"get": function(){ 
				_checkRGB(); 
				return _rgb.r;
			},
			"set": function(v){
				if(typeof v !== 'number') throw new TypeError("Not a numeric");
				_checkRGB();
				_hsl = false; 
				v = Math.max(0, Math.min(v, 255));
				_rgb.r = Math.round(v);
			}
		},
		"g" : {
			"get": function(){
				_checkRGB(); 
				return _rgb.g;
			},
			"set": function(v){
				if(typeof v !== 'number') throw new TypeError("Not a numeric");
				_checkRGB(); 
				_hsl = false;
				v = Math.max(0, Math.min(v, 255));
				_rgb.g = Math.round(v);
			}
		},
		"b" : {
			"get": function(){
				_checkRGB(); 
				return _rgb.b;
			},
			"set": function(v){
				if(typeof v !== 'number') throw new TypeError("Not a numeric");
				_checkRGB();
				_hsl = false; 
				v = Math.max(0, Math.min(v, 255));
				_rgb.b = Math.round(v);
			}
		},
		"a" : {
			"get": function(){ 
				return _a;
			},
			"set": function(v){
				if(typeof v !== 'number') throw new TypeError("Not a numeric");
				v = Math.max(0, Math.min(v, 1));
				_a = v;
			}
		},
		"r_1": {
			"get": function(){
				return this.r / 255;
			},
			"set": function(v){
				this.r = v * 255;
			}
		},
		"g_1": {
			"get": function(){
				return this.g / 255;
			},
			"set": function(v){
				this.g = v * 255;
			}
		},
		"b_1": {
			"get": function(){
				return this.b / 255;
			},
			"set": function(v){
				this.b = v * 255;
			}
		},
		"h_1": {
			"get": function(){
				return this.h / 360;
			},
			"set": function(v){
				this.h = v * 360;
			}
		},
		"s_1": {
			"get": function(){
				return this.s / 100;
			},
			"set": function(v){
				this.s = v * 100;
			}
		},
		"l_1": {
			"get": function(){
				return this.l / 100;
			},
			"set": function(v){
				this.l = v * 100;
			}
		},
		"a_1": {
			"get": function(){
				return this.a;
			},
			"set": function(v){
				this.a = v;
			}
		}
	});
	
	
	
	
	if(v){
		if(typeof v == 'string'){
			if(v.length > 0 && v[0] == "#"){
				_rgb = Color.parseHEX(v);
				_a = _rgb.a;
				delete _rgb.a;
			}else if(v.length > 4 && v.substring(0, 5) == "hsla"){
				_hsl = Color.parseHSLA(v);
				_a = hsl.a;
				delete _hsl.a;	
			}else if(v.length > 4 && v.substring(0, 5) == "rgba"){
				_rgb = Color.parseRGBA(v);
				_a = _rgb.a;
				delete _rgb.a;
			}else if(v.length > 3 && v.substring(0, 4) == "hsl"){
				_hsl = Color.parseHSL(v);
				_a = hsl.a;
				delete _hsl.a;	
			}else if(v.length > 4 && v.substring(0, 4) == "rgb"){
				_rgb = Color.parseRGB(v);
				_a = _rgb.a;
				delete _rgb.a;
			}else if(Color.byName(v, true)){
				_rgb = Color.parseHEX(Color.byName(v, true));
				_a = _rgb.a;
				delete _rgb.a;
			}
		}else{
			if(typeof v.r == 'number' && typeof v.g == 'number' && typeof v.b == 'number'){
				console.log("fumanchu")
				_rgb = {
					r: v.r,
					g: v.g,
					b: v.b,
					a: v.a	
				};
				if(typeof v.a == 'number'){
					_a = Math.max(0, Math.min(1, v.a));
				}else{
					_a = 1;
				}
			}else if(typeof v.h == 'number' && typeof v.s == 'number' && typeof v.l == 'number'){
				var hh = v.h % 360;
				if(v < 0) hh += 360;
				_hsl = {
					h: hh,
					s: Math.max(0, Math.min(100, v.s)),
					l: Math.max(0, Math.min(100, v.l))
				}
				
				if(typeof v.a == 'number'){
					_a = Math.max(0, Math.min(1, v.a));
				}else{
					_a = 1;
				}
			}		
		}
		if(!_hsl && !_rgb){
			_rgb = {r:0, g: 0, b:0};
		}		
	}	
	
}

Color.prototype.equals = function color_equals (other){
	return this.r == other.r && this.g == other.g && this.b == other.b && this.a == other.a
};

Color.prototype.clone = function(){
	return new Color(this);
};

Color.prototype.hslString = function color_hslString(){
	if(this.a == 1){
		return "hsl(" + this.h + ", " + this.s + "%, " + this.l + "%)";
	}
	return "hsla(" + this.h + ", " + this.s + "%, " + this.l + "%, " + this.a + ")";
};


Color.prototype.rgbString = function color_rgbString(){
	if(this.a == 1){
		return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
	}
	return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
};


Color.prototype.hexString = function color_hexString(){
	return "#" + (this.r < 16 ? "0": "") + this.r.toString(16) + (this.g < 16 ? "0": "") + this.g.toString(16) + (this.b < 16 ? "0": "") + this.b.toString(16);
};

Color.prototype.toString = Color.prototype.rgbString;

Color.byName = function(name, dontInstanciate){
	var index = {"black":"#000000","silver":"#c0c0c0","gray":"#808080","white":"#ffffff","maroon":"#800000","red":"#ff0000","purple":"#800080","fuchsia":"#ff00ff","green":"#008000","lime":"#00ff00","olive":"#808000","yellow":"#ffff00","navy":"#000080","blue":"#0000ff","teal":"#008080","aqua":"#00ffff","orange":"#ffa500","aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","blanchedalmond":"#ffebcd","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkgrey":"#a9a9a9","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkslategrey":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dimgrey":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","greenyellow":"#adff2f","grey":"#808080","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgray":"#d3d3d3","lightgreen":"#90ee90","lightgrey":"#d3d3d3","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightslategrey":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370db","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","oldlace":"#fdf5e6","olivedrab":"#6b8e23","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#db7093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","slategrey":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","whitesmoke":"#f5f5f5","yellowgreen":"#9acd32","rebeccapurple":"#663399"};
	var hex = index[name];
	if(dontInstanciate){
		return hex;
	}
	return new Color(hex);
};


	
Color.rgb2hsl = function rgb2hsl(r, g, b, a){
	// https://www.rapidtables.com/convert/color/rgb-to-hsl.html
	var r2 = r/255,
		g2 = g/255,
		b2 = b/255,
		cmax = Math.max(r2, g2, b2),
		cmin = Math.min(r2, g2, b2),
		delta = cmax - cmin,
		h,s,l;
	if(!a && a !== 0) a = 1;
	if(delta == 0) h = 0;
	else if(cmax == r2) h = 60 * (((g2 - b2) / delta) % 6);
	else if(cmax == g2) h = 60 * ((b2 - r2) / delta + 2);
	else if(cmax == b2) h = 60 * ((r2 - g2) / delta + 4);
	
	l = (cmax + cmin) / 2;
	
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	
	return {
		h: h < 0 ? h + 360 : h,
		s: 100*s,
		l: 100*l,
		a: a
	};
};
	

Color.hsl2rgb = function hsl2rgb(h, s, l, a){
	// https://www.rapidtables.com/convert/color/hsl-to-rgb.html
	s = s/100;
	l = l/100;
	var c = (1 - Math.abs(2 * l - 1)) * s,
		x = c * (1 - Math.abs(((h/60) % 2) - 1)),
		m = l - c / 2,
		_rgb;
	if(!a && a !== 0) a = 1;
	if(h < 60) 			_rgb = {r:c, g:x, b:0};
	else if(h < 120) 	_rgb = {r:x, g:c, b:0};
	else if(h < 180) 	_rgb = {r:0, g:c, b:x};
	else if(h < 240) 	_rgb = {r:0, g:x, b:c};
	else if(h < 300) 	_rgb = {r:x, g:0, b:c};
	else 				_rgb = {r:c, g:0, b:x};
	
	return {
		r: Math.ceil((_rgb.r + m) * 255),
		g: Math.ceil((_rgb.g + m) * 255),
		b: Math.ceil((_rgb.b + m) * 255),
		a: a
	};
};


Color.parseHEX = function parseHEX(str){
	str = str.trim();
	if(str[0] != "#") return false;
	if(str.length == 4){
		return {
			r: parseInt(str.substring(1,2) + str.substring(1,2), 16),
			g: parseInt(str.substring(2,3) + str.substring(2,3), 16),
			b: parseInt(str.substring(3)   + str.substring(3),   16),
			a: 1
		}
	}else if(str.length == 7){
		return {
			r: parseInt(str.substring(1,3), 16),
			g: parseInt(str.substring(3,5), 16),
			b: parseInt(str.substring(5),   16),
			a: 1
		}
	}/*else if(str.length == 5){
		return {
			r: parseInt(str.substring(1,2) + str.substring(1,2), 16),
			g: parseInt(str.substring(2,3) + str.substring(2,3), 16),
			b: parseInt(str.substring(3,4) + str.substring(3,4), 16),
			a: parseInt(str.substring(4)   + str.substring(4)  , 16)
		}
	}else if(str.length == 9){
		return {
			r: parseInt(str.substring(1,3), 16),
			g: parseInt(str.substring(3,5), 16),
			b: parseInt(str.substring(5,7), 16),
			a: parseInt(str.substring(7),   16)
		}
	}*/
	
	return false;
};


Color.parseRGB = function parseRGB(str){
	var re = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/;
	var match = str.match(re);
	if(!match) return false;
	return {
		r: Math.max(0, Math.min(255, parseInt(match[1]))),
		g: Math.max(0, Math.min(255, parseInt(match[2]))),
		b: Math.max(0, Math.min(255, parseInt(match[3]))),
		a: 1
	};
};

Color.parseRGBA = function parseRGBA(str){
	var re = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d+)\s*\)\s*$/;
	var match = str.match(re);
	if(!match) return false;
	return {
		r: Math.max(0, Math.min(255, parseInt(match[1]))),
		g: Math.max(0, Math.min(255, parseInt(match[2]))),
		b: Math.max(0, Math.min(255, parseInt(match[3]))),
		a: Math.max(0, Math.min(1, 	 parseFloat(match[4])))
	};
};



Color.parseHSL = function parseHSL(str){
	var re = /^\s*hsl\s*\(\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*%\s*,\s*(\d*\.?\d+)\s*%\s*\)\s*$/;
	var match = str.match(re);
	if(!match) return false;
	var h = parseFloat(match[1]) % 360;
	if(h < 0) h+= 360;
	return {
		h: h,
		s: Math.max(0, Math.min(100, parseFloat(match[2]))),
		l: Math.max(0, Math.min(100, parseFloat(match[3]))),
		a: 1
	};
};


Color.parseHSLA = function parseHSLA(str){
	var re = /^\s*hsl\s*\(\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*%\s*,\s*(\d*\.?\d+)\s*%\s*,\s*(\d?\.?\d+)\s*\)\s*$/;
	var match = str.match(re);
	if(!match) return false;
	var h = parseFloat(match[1]) % 360;
	if(h < 0) h+= 360;
	return {
		h: h,
		s: Math.max(0, Math.min(100, parseFloat(match[2]))),
		l: Math.max(0, Math.min(100, parseFloat(match[3]))),
		a: Math.max(0, Math.min(1,   parseFloat(match[4])))
	};
};

Color.parseColor = function parseColor(str){
	str = str.trim();
	var hsla, color = false;
	if(str.length > 0 && str[0] == "#"){
		color = parseHEX(str);
	}else if(str.length > 4 && str.substring(0, 5) == "hsla"){
		hsla = parseHSLA(str);
		color = hsl2rgb(hsla.h, hsla.s, hsla.l, hsla.a);	
	}else if(str.length > 4 && str.substring(0, 5) == "rgba"){
		color = parseRGBA(str);
	}else if(str.length > 3 && str.substring(0, 4) == "hsl"){
		hsla = parseHSL(str);
		color = hsl2rgb(hsla.h, hsla.s, hsla.l, hsla.a);;	
	}else if(str.length > 4 && str.substring(0, 4) == "rgb"){
		color = parseRGB(str);
	}else if(str == "transparent"){
		color = {r:0, g:0, b:0, a:0};
	}else if(colorNameIndex[str]){
		color = parseHEX(colorNameIndex[str]);
	}
	// TODO:
	// currentColor  --> la valeur calculée de la propriété color pour l'élément. Si currentColor est utilisée comme valeur pour la propriété color, sa valeur est déterminée à partir de la valeur héritée pour la propriété color.
	// inherit
	
	return color;
};
