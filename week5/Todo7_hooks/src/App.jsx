import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // polling after every 10 sec, check for latest todos
    setInterval(async ()=> {
      const res = await fetch("https://sum-server.100xdevs.com/todos");      
      const jsonData = await res.json();
      setTodos(jsonData.todos);
      console.log(jsonData.todos)
    }, 10000);
  }, []);

  return <>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </>
}

function Todo({title, description}) {
  return <div>
    <h1> {title} </h1>
    <h3> {description} </h3>
  </div>
}

export default App
