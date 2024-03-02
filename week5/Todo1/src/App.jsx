import React from "react"

function App() {

  return (<React.Fragment>
      <Header title="My name is HardikS"></Header>    
      <Header title="My name is HardikRS"></Header>
    </React.Fragment>
  )
}

function Header(props) {
  return <div>
    {props.title}
  </div>
}

export default App
