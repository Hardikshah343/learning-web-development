import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>  
      <HeaderWithButton />
      <br></br>
      <Header title="This is a static header, will not re-render" />
    </div>
  )
}

function Header({title}) {
  return <div>
      {title}
  </div>
}
function HeaderWithButton() {
  const [firstTitle, setTitle] = useState("Default Title");

  function changeTitle() {
    setTitle("New title is " + Math.floor(Math.random() * 100));
  }

  return <>
    <button onClick={changeTitle}>Click me</button>
    <br></br>
    <Header title={firstTitle} />
  </>
}

export default App
