import React from "react";
import { useState, useEffect, useRef } from "react";

function Ref() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Renders count: {renderCount.current}</h1>
      <h2>Past state: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={event => setValue(event.target.value)}  value={value}/>
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  )
}

export default Ref;