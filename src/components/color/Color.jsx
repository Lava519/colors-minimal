import {useEffect, useState} from 'react';
import {hex2rgb} from '../../ColorConversion.js'
import Border from '../border/Border.jsx'
import Plus from '../plus/Plus.jsx';
import Value from '../value/Value.jsx';
import PopUp from '../popup/PopUp.jsx';

export default function Color({textSize ,color, index, remove, insert, colorsNumber}) {
  const INVERT = 350;
  const [invert, setInvert] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [popup, setPopup] = useState(false);
  
  const handleSetHover = (value) => {
    setHover(value);
    setVisible(value);
  }

  const displayPopUp = () => {
    if (!popup) {
      setPopup(true);
      setTimeout(() => {
        setPopup(false)
      }, 1000);
    }
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
    <div style={{"backgroundColor": color, "fontSize": textSize}} className={`color ${invert ? "invert-text" : ""}`}>
      <Border setVisible={handleSetVisible} position={"left"}></Border>
      {(colorsNumber < 10) && (index != 0 && visible) && <Plus insert={insert} index={index} setVisible={handleSetHover}></Plus>}
      <Value popup={displayPopUp} index={index} remove={remove} color={color}></Value>
      {popup && <PopUp></PopUp>}
    </div>
  )
}
