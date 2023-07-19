import React, { useEffect } from "react";
import { useState, useMemo } from "react";

function complexComputed(num) {
  console.log('complexComputed');
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function Memo() {
  const [number, setNumber] = useState(45);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  const computed = useMemo(() => {
    return complexComputed(number)
  }, [number])

  useEffect(() => {
    console.log('Styles change');
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Counting value: {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Increment</button>
      <button className="btn btn-danger" onClick={(() => setNumber(prev => prev - 1))}>Decrement</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  )
}

export default Memo;