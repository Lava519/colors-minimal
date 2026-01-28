import {useEffect, useState} from 'react';

export default function Color({color}) {
  const INVERT = 350;
  const [invert, setInvert] = useState(false);

  const hex2rgb = (hex) => {
    const r = hex.slice(1, 3);
    const g = hex.slice(3, 5);
    const b = hex.slice(5);
    return {
      r: parseInt(r, 16),
      g: parseInt(g, 16),
      b: parseInt(b, 16)
    };
  }

  const rgb2hsl = (rgb) => {
    let r = rgb.r / 255;
    let b = rgb.b / 255;
    let g = rgb.g / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const c = max - min;
    let h, s, l;
    l = (max + min) / 2;
    if (c === 0)
      h = 0;
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
    return [Math.round(h * 360), Math.round(s * 1000)/10, Math.round(l * 1000)/10];
  }

  useEffect(() => {
    let rgb = hex2rgb(color);
      if ((rgb.b + rgb.g + rgb.r) > INVERT) 
      setInvert(true);
     else {
      setInvert(false);
    }
  }, [color])
  
  return (
    <div style={{"backgroundColor": color}} className={`color ${invert ? "invert-text" : ""}`}>
      <h2>{color}</h2>
    </div>
  )
}
