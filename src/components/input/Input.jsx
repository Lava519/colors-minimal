import {useRef, useEffect, useState} from 'react';

export default function Input({color, invert}) {
  const input = useRef(null);

  useEffect(() => {
    input.current.value = color;
  }, [])
  

  return (
    <div className="input-container">
      <input className={`input ${invert ? "invert-text" : ""}`} ref={input} type="text" />
    </div>
  )
}
