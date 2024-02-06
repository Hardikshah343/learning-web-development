import React from 'react'

// State
/* 
  todo: [{title: "todo1", "description": "First todo", completed: false,}]; // array of objects
*/

function App() {
  
  const [todos, setTodos] = React.useState([
    {
      title: "todo1", 
      description: "First todo", 
      completed: false,
    },
    {
      title: "todo2", 
      description: "Second todo", 
      completed: true,
    },
    {
      title: "todo3", 
      description: "Third todo", 
      completed: true,
    },
  ]);

  function addTodo() {
    setTodos([...todos, {
      title: "todox", 
      description: "Newest todo", 
      completed: true,
    }]);
  }

  return (
    <div>      
        {/* <Todo title={todos[0].title} description={todos[0].description} />
        <br />
        <CustomDisplay todos={todos} setTodos={setTodos}></CustomDisplay>*/}
        <button onClick={addTodo}>Add a random todo</button>
        {
        todos.map((todo)=>{
          return <Todo title={todo.title} description={todo.description} />
        })
        }
           
    </div>
  );
}

function Todo(props) {
  return <div>
    <h1>Title: {props.title}</h1>
    <h2>Description: {props.description}</h2>
  </div>
}



function CustomDisplay(props) {
  const title =  React.createElement(
    'h1',
    {},
    `Title: ${props.todos[0].title}`
  );
  const description =  React.createElement(
    'h2',
    {},
    `Description: ${props.todos[0].description}`
  );
  return React.createElement(
    'div', {},
    title,
    description
  );
}

export default App
