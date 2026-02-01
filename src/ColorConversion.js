const hue2rgb = (p, q, t) => {
    if (t < 0)
      t+=1;
    if (t > 1)
      t-=1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 -t) * 6;
    return p;
  }
export  const hsl2rgb = (hsl) => {
    const h = hsl.h;
    const l = hsl.l/100;
    const s = hsl.s/100;
    let r, g, b;
    if (s == 0)
      r = g = b = l;
    else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = Math.round(hue2rgb(p, q, h / 360 + 1 / 3)*255);
      g = Math.round(hue2rgb(p, q, h / 360)*255);
      b = Math.round(hue2rgb(p, q, h / 360 - 1 / 3)*255);
     }
    return { //SOMETIMES VALUE WILL BE OFF BY 1 DUE TO ROUNDING ISSUES
      r: r,
      g: g,
      b: b
    }
  }
  
export  const rgb2hsl = (rgb) => {
    let r = rgb.r / 255;
    let b = rgb.b / 255;
    let g = rgb.g / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const c = max - min;
    let h, s, l;
    l = (max + min) / 2;
    if (c === 0)
      h = s = 0;
    else {
        s = l > 0.5 ? c / (2 - max - min) : c / (max + min);
        switch (max) {
            case r: 
              h = (g - b) / c + (g < b ? 6 : 0); 
              break;
            case g: 
              h = (b - r) / c + 2; 
              break;
            case b: 
              h = (r - g) / c + 4; 
              break;
        }
        h = h / 6;
    }
    return {
    h: Math.round(h * 360),
    s: Math.round(s * 1000)/10,
    l: Math.round(l * 1000)/10
    }
  }

export  const hex2rgb = (hex) => {
    const r = hex.slice(1, 3);
    const g = hex.slice(3, 5);
    const b = hex.slice(5);
    return {
      r: parseInt(r, 16),
      g: parseInt(g, 16),
      b: parseInt(b, 16)
    };
  }

export const colorBlendHEX = (color1, color2) => {
  const {r: r1, g: g1, b: b1} = hex2rgb(color1);
  const {r: r2, g: g2, b: b2} = hex2rgb(color2);
  const r = Math.round(r1 * 0.5 + r2 * 0.5)
  const g = Math.round(g1 * 0.5 + g2 * 0.5)
  const b = Math.round(b1 * 0.5 + b2 * 0.5)
  return `#${r.toString(16)}${r.toString(16)}${b.toString(16)}`.toUpperCase();
}
