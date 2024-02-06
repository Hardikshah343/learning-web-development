import React from 'react';
import { CreateTodo } from '../components/CreateTdod';
import { TodoList } from '../components/TodoList';

function App() {
  const [todos, setTodos] = React.useState([]);

  // fetch("http://localhost:3000/todos")
  //   .then(async (res) => {
  //     const jsonData = await res.json();
  //     setTodos(jsonData.currentTodoList);
  // });
  /* it is not correct way, because we are sending fetch request, 
  the request resolves after some time, and state changes, 
  the component re-renders and the fetch request is again sent.
  So infinite number of requests are being send if you check the network tab.
  To solve it we use "useeffect" hook
  */
  return (
    <div>
       <CreateTodo></CreateTodo>
       <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App
