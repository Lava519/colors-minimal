import {hex2rgb, rgb2hsl} from "../../ColorConversion.js";

export default function Value({color, remove, index}) {
  const rgb = hex2rgb(color);
  const hsl = rgb2hsl(rgb);

  const copyClipboard = (col) => {
    navigator.clipboard.writeText(col);
    alert("Copied Text");
  }

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
