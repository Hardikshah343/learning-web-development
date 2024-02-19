import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';

function useTodo() { // custom hook
  const [todo, setTodo] = useState([{
    title:"Title1",
    description: "Description1",
    id:1
  }])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((res) => {
      console.log(res.data.todos);
      setTodo(res.data.todos);
    });
  }, []);

  return todo;
}

function App() {
  const todos = useTodo();
  console.log("Whatt", todos);
  return <div>
    <h1> Hello </h1>
    {todos.map((todo)=> {return <Todo key={todo.id} title={todo.title} description={todo.description} /> })}
  </div>
}

function Todo ({title, description}) {
  return <div>
    <h3>{title}</h3>
    <h4>{description}</h4>
  </div>
}

export default App
