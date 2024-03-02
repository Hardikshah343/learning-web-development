import { useState, useMemo } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [textValue, setTextValue] = useState(1);

  let count = useMemo(()=> {
    let sum = 0;
    for(let i =1; i<= textValue; i++) {
      sum += i;
    }
    return sum;
  }, [textValue]);

  return (
    <>
      <input type="text" id="TextBox" onChange={(e)=>{
        setTextValue(e.target.value)
      }} />
      <h1>Sum of 1 to {textValue} is {count}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Counter ({counter})</button>
    </>
  )
}

export default App
