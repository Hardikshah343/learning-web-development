import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id:1, title: "Title1", description: "Description of Title1"},
    {id:2, title: "Title2", description: "Description of Title2"},
    {id:3, title: "Title3", description: "Description of Title3"},
  ])

  function addTodo() {
    const newId = Math.floor(Math.random() * 100);
    setTodos([...todos, {
      id: newId,
      title: newId + "",
      description: "This is a description"
    }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {
        todos.map((item)=> {
          return <Todo key={item.id} title={item.title} description={item.description}></Todo>
        })
      }
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}


// function Todo(props) {
//   console.log(props.todos)
//   return  props.todos.map((item) => {
//     return <>
//       <h1>{item}</h1>
//       <p>{item.description}</p>
//       </>
//   })
// }

export default App
