import React from 'react'

// it is like a main function 
function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>    
  )
}

function CustomButton(props) {
  
  function onClickHandler() {
    props.setCount(props.count+1);
  }

  // return <button onClick={onClickHandler}>
  //   Counter {props.count}
  // </button>
  return React.createElement(
    'button',
    { onClick: onClickHandler },
    `Counter ${props.count}`
  );
}

export default App
