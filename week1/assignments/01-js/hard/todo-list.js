/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todolist = [];
  }
  add(task) {
    this.todolist.push(task);
  }
  remove(index) {
    let newArray = []
    for (let i = 0; i < this.todolist.length; i++) {
      if ( i != index) {
        newArray.push(this.todolist[i]);
      } 
    }
    this.todolist = newArray;
  }
  update(index, updatedTodo) {
    let newArray = []
    for (let i = 0; i < this.todolist.length; i++) {
      if ( i != index) {
        newArray.push(this.todolist[i]);
      } 
      else {
        newArray.push(updatedTodo);
      }
    }
    this.todolist = newArray;
  }
  getAll() {
    return this.todolist;
  }
  get(indexOfTodo) {
    if(indexOfTodo < this.todolist.length) {
      return this.todolist[indexOfTodo];
    }
    else {
      return null;
    }
  }
  clear() {
    this.todolist = [];
  }
}

module.exports = Todo;
