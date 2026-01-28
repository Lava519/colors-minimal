import {useEffect, useState} from 'react';

export default function Color({color, hex2rgb}) {
  const INVERT = 350;
  const [invert, setInvert] = useState(false);

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
