import { useState, useEffect } from 'react';
import './App.css'
import Color from "./components/color/Color.jsx"

function App() {
  const [colorsNumber, setColorsNumbers] = useState(5);
  const [colors, setColors] = useState(null);
  const [change, setChange] = useState(false);

  
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

  const handleKeyPress = (e) => {
    if (e.key == ' ') {
      setChange(true)
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', resetColors, true);
  }, [])

  useEffect(() => {
    let tmpColorArray = [];
    
    for (let i=0;i<colorsNumber;++i) {
      tmpColorArray.push(genColor());
    }
    setColors(tmpColorArray);
    setChange(false);
  }, [change])

  const resetColors = (e) => {
    if (e.key == " ")
      setChange(true);
  }

  const genHEX = () => {
    const HEX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    return HEX[Math.floor(Math.random() * HEX.length)];
  }
 
  const genColor = () => {
    return `#${genHEX()}${genHEX()}${genHEX()}${genHEX()}${genHEX()}${genHEX()}`;
  }

  return (
    <div onKeyDown={handleKeyPress}>
      <div className="colors-container">
        {colors && colors.map((item, key) => {
          return (
            <Color color={item} hex2rgb={hex2rgb} key={key}></Color>
          )
        })}
      </div>
    </div>
  )
}

export default App
