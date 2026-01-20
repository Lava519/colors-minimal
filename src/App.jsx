import { useState, useEffect } from 'react';
import './App.css'
import Color from "./components/color/Color.jsx"

function App() {
  const [colorsNumber, setColorsNumbers] = useState(5);
  const [colors, setColors] = useState(null);
  const [change, setChange] = useState(false);

  
  const handleKeyPress = (e) => {
    console.log(e.key);
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
    console.log(e.key);
    if (e.key == " ")
      setChange(true);
  }

  const genHEX = () => {
    const HEX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    return HEX[Math.floor(Math.random() * HEX.length)];
  }
 
  const genColor = () => {
    return `#${genHEX()}${genHEX()}${genHEX()}${genHEX()}${genHEX()}${genHEX()}`
  }

  return (
    <div onKeyDown={handleKeyPress}>
      <div className="colors-container">
        {colors && colors.map((item, key) => {
          return (
            <Color color={item} key={key}></Color>
          )
        })}
      </div>
    </div>
  )
}

export default App
