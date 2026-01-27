import {useEffect, useState} from 'react';

export default function Color({color}) {
  const INVERT = 400;
  const [invert, setInvert] = useState(false);
  const hex2rgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
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
