import { useState, useEffect } from 'react';
import './App.css'
import { hex2rgb, rgb2hsl, hsl2rgb, colorBlendHEX} from './ColorConversion.js';
import Color from "./components/color/Color.jsx"

function App() {
  const [colorsNumber, setColorsNumber] = useState(5);
  const [colors, setColors] = useState(null);
  const [change, setChange] = useState(false);
  const [textSize, setTextSize] = useState("1rem");

  const handleKeyPress = (e) => {
    if (e.key == ' ') {
      setChange(true)
    }
  }

  const insertColor = (index) => {
    let tmp = [...colors];
    tmp.splice(index, 0, colorBlendHEX(colors[index - 1], colors[index]));
    setColors(tmp);
    setColorsNumber(colorsNumber+1)
  }

  const removeColor = (index) => {
    if (colorsNumber > 2) {
      let tmp = [...colors];
      tmp.splice(index, 1);
      setColors(tmp);
      setColorsNumber(colorsNumber-1)
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

  const changeColor = (index, col) => {
    let tmp = [...colors];
    tmp[index] = col;
    setColors(tmp);
  }

  useEffect(() => {
    setTextSize(`${Math.max(2.0 - colorsNumber * 0.2, 0.7)}rem`);
  }, [colorsNumber])
  
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
        {colors && colors.map((item, index) => {
          return (
            <Color
              changeColor={changeColor}
              textSize={textSize}
              colorsNumber={colorsNumber}
              remove={removeColor}
              insert={insertColor}
              color={item}
              index={index}
              key={`${index}${item}}`}
            ></Color>
          )
        })}
      </div>
    </div>
  )
}

export default App
