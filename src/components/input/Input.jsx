import {useRef, useEffect, useState} from 'react';

export default function Input({changeColor, index, color, invert}) {
  const input = useRef(null);

  useEffect(() => {
    input.current.value = color;
  }, [])

  const handleInputChange = (e) => {
    const exp = /[0-9A-F]+/gm;
    let filterArr = e.target.value.toUpperCase().match(exp);
    if (filterArr) {
      let str = filterArr.join("");
      if(str.length === 6){
        changeColor(str)
      }
      input.current.value = str;
    }else {
      input.current.value = "";
    }
  }

  const handleBlur = (e) => {
    if (e.target.value.length === 3) {
      const c = e.target.value;
      changeColor(`${c[0]}${c[0]}${c[1]}${c[1]}${c[2]}${c[2]}`)
    } else {
      input.current.value = color;
    }
  }

  return (
    <div className="input-container">
      <input onBlur={e=> handleBlur(e)} onChange={e => handleInputChange(e)} className={`input ${invert ? "invert-text" : ""}`} ref={input} type="text" />
    </div>
  )
}
