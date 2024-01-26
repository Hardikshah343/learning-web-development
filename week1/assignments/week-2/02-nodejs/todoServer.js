/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
/* In memory version */
const express = require("express");

const app = express();

const todos = [
  {
    id: 1,
    title: "Task 1",
    completed: false,
    description: "All tasks to do in description",
  }, 
  {
    id: 2,
    title: "Task 2",
    completed: false,
    description: "All tasks to do in description",
  }, 
  {
    id: 3,
    title: "Task 3",
    completed: false,
    description: "All tasks to do in description",
  }
];

app.get("/todos", (req, res) => {
  if(todos == undefined || todos.length <= 0) {
    res.status(404).send("To Do List not available.");
    return;
  }
  res.status(200).json(todos);
  return;
});

app.get("/todos/:todoID", (req, res) => {
  const inpId = parseInt(req.params.todoID);
  if(inpId == undefined) {
    res.status(404).send("Invalid Required Id");
    return;
  }
  const reqId = parseInt(inpId)
  let reqTodo = todos.filter((item) => {
    if(item.id == reqId) return true;
    else return false;
  });
  if(reqTodo == undefined || reqTodo.length <= 0) {
    res.status(404).send("Not found");
    return;
  }
  else res.status(200).json(...reqTodo);
});

app.use(express.json());
app.post("/todos", (req, res) => {
  const title = req.body.title;
  const completed = req.body.completed;
  const description = req.body.description;

  if(title == undefined || completed == undefined || description == undefined) {
    res.status(404).send("Some data not available to create.");
    return;
  }

  /* Unique id generator */
  let new_uid = 1;
  while(true) {
    let findStatus = todos.find(items => items.id === new_uid);
    if(findStatus == undefined || findStatus == -1) {
      break;
    }
    new_uid++;
  }
  todos.push({
    id: new_uid, 
    title: title,
    completed: completed,
    description: description
  });

  res.status(201).json({
    id: new_uid
  });
  return;
});

app.put("/todos/:id", (req, res) => {
  const title = req.body.title;
  const completed = req.body.completed;
  const description = req.body.description;

  const updateId = parseInt(req.params.id);

  const updateIndex = todos.findIndex(x => x.id === updateId);

  if(updateIndex == -1) {
    res.status(404).send("Id not found. Nothing to update.");
    return;
  }
  
  if(title == undefined && completed == undefined && description == undefined) {
    res.status(404).send("None data to update.");
    return;
  }

  if(title) todos[updateIndex].title = title;
  if(completed) todos[updateIndex].completed = completed;
  if(description) todos[updateIndex].description = description;

  res.status(200).send("Updated");
  return;
});

app.delete("/todos/:id", (req, res) => {  
  const delIndex = parseInt(req.params.id);

  const isAvail = todos.findIndex(x => x.id === delIndex);

  if(isAvail == -1) {
    req.status(404).send("Requested id is not available to delete");
    return;
  }

  todos = todos.map((items) => {
    if(items.id == delIndex) return false;
    else return true;
  });

  res.status(200).send("Deleted the id");
});

app.all("*", (req, res) => {
  res.status(404).send("Route not found");
})
// app.listen(3000);
module.exports = app;