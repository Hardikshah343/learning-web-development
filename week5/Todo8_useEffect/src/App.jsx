import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [allTodo, setAllTodo] = useState([]);
  const [buttonId, setButtonId] = useState(1);

  useEffect(()=> {
    console.log("Inside useEffect()")
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const todoList = await res.json();
        console.log("1.", todoList.todos);
        setAllTodo(todoList.todos);
    })
  }, [])

  console.log("2.", allTodo);
  return <>
    <h1>Specific Todo</h1>
    <TheTodo id={1} />
    <h1>All Todos</h1>
    {allTodo.map(todo => <TodoList key={todo.id} title={todo.title} description={todo.description} />)}
    <h1>Buttons to show</h1>
    <button onClick={() => {setButtonId(1)}}>1</button>
    <button onClick={() => {setButtonId(2)}}>2</button>
    <button onClick={() => {setButtonId(3)}}>3</button>
    <button onClick={() => {setButtonId(4)}}>4</button>
    <TheTodo id={buttonId} />
  </>
}

function TheTodo({id}) {
  const [theTodo, setTheTodo] = useState({});

  useEffect(()=> {
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(response => {
      setTheTodo(response.data.todo)
    });
  }, [id]);
  
  console.log("Its the other component: ", theTodo)
  return <div>
    {theTodo.id} 
    <h3>{theTodo.title}</h3>
    {theTodo.description}
  </div>
}

function TodoList({title, description}) {
  console.log("TodoList rendering now")
  return <div>
    <h3>{title}</h3>
    {description}
  </div>
}

export default App
