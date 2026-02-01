import {useState, useEffect} from 'react';
import {hex2rgb, rgb2hsl} from "../../ColorConversion.js";

export default function Value({popup, color, remove, index}) {
  const [rgb, setRGB] = useState(hex2rgb(color));
  const [hsl, setHSL] = useState(rgb2hsl(hex2rgb(color)));

  const copyClipboard = (col) => {
    navigator.clipboard.writeText(col);
    popup();
  }

  useEffect(() => {
    setRGB(hex2rgb(color));
    setHSL(rgb2hsl(hex2rgb(color)));
  
  }, [color])
  

  return (
  <div className="value-container">
      <h2 className="value" onClick={ e=>{copyClipboard(e.target.outerText)}}>{`HSL(${hsl.h} ${hsl.s} ${hsl.l})`}</h2>
      <h2 className="value" onClick={ e=>{copyClipboard(e.target.outerText)}}>{`RGB(${rgb.r} ${rgb.g} ${rgb.b})`}</h2>
      <h2 className="value" onClick={ e=>{copyClipboard(e.target.outerText)}}>{color}</h2>
      <div onClick={ e=>{remove(index)}} className="minus">
        <img src="minus.svg" alt="-"/>
      </div>
    </div>  
  )
}
