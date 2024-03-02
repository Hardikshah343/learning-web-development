import { useState } from 'react'

function App() {
  const [newString, setString] = useState("Random");

  function updateTitle () {
    setString("My name is " + (Math.floor(Math.random()*100)));
  }
  
  return (
    <div>
      <button onClick={updateTitle}>Click Me</button>
      <br></br>
      <br></br>
      <Header title={newString} ></Header>
      <Header title={newString} ></Header>
      <Header title="Hello" ></Header>      
      <Header title="Hello" ></Header>      
      <Header title="Hello" ></Header>      
      <Header title="Hello" ></Header>      
      <Header title="Hello" ></Header>      
      <Header title="Hello" ></Header>      
    </div>
  )
}

function Header({title}) {
  return <div>
    <br></br>
    {title}
  </div>
}


export default App
