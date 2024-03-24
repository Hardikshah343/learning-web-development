
function App() {

  return (
    <>
      <Todo title="Hello" description="World" />
    </>
  )
}

interface TodoProp {
  title: string;
  description: string;
} 

function Todo (props: TodoProp) {
  return <div>
    <h1>Title: {props.title} </h1>
    <p>Description: {props.description} </p>
  </div>
}

export default App
