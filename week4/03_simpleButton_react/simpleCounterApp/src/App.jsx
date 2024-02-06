// import './App.css'

import {useState} from "react";

// global state 
// let state = {
//   count: 0
// }

// State, Component, Re renderer.

function App() {
  // define initial state
  // 1st argument: created a count variable, and gave a initial value of 0
  // 2nd argument: returned a function that will be used as a re-renderer whenever we want
  const [count, setCount] = useState(0);   // returns two values, [0 1] so count becomes 0 and setCount becomes 1 kindof
  
  function onClickHandler() {
    setCount(count + 1); // we want that on click count should be incremented and button to be re-rendered.
  }
  return (
    <div>
      <button onClick={onClickHandler}>Counter {count}</button> 
      {/* this is a JSX i.e. XML and JS, so here we dont call like we did in HTML
      In HTML: <button onclick="onClickHandler()">
      Nope, here we just passed the function name that is supposed to be called when someone clicks on the button */}
    </div>
  )
}

export default App
