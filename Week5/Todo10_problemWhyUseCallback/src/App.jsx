import { memo, useCallback, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function logSomething() {
    console.log("Child Clicked");
  }

  const inputFunction = useCallback(()=>{
    console.log("Hi There");
  }, []);

  return <div>
    <Child inputFunction={logSomething} />
    <Child inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me</button>
  </div>
}

const Child = memo(({inputFunction}) => {
  console.log("Child render");

  return <div>
    <button onClick={inputFunction}>Button Clicked</button>
  </div>
})

export default App
