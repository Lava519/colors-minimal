import {useEffect, useState} from 'react';
import {hex2rgb} from '../../ColorConversion.js'
import Border from '../border/Border.jsx'
import Plus from '../plus/Plus.jsx';

export default function Color({color, index, insert}) {
  const INVERT = 350;
  const [invert, setInvert] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  
  const handleSetHover = (value) => {
    setHover(value);
  }
 
  const handleSetVisible = (value) => {
    if (!value && hover)
      return;
    setVisible(value);
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
      <Border setVisible={handleSetVisible} position={"left"}></Border>
      {(index != 0 && visible) && <Plus insert={insert} index={index} setVisible={handleSetHover}></Plus>}
      <h2>{color}</h2>
    </div>
  )
}
