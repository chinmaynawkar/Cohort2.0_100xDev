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
  constructor(todo=[]) { // arr to store list of todos
    this.todo = todo
  }
  add(task) {
    this.todo.push(task)
  }
  remove(indexOfTodo) {
   // Check if the index is valid
    if(this.isValidIndex(indexOfTodo)) {
      this.todo.splice(indexOfTodo,1);
    }
    else {
      null
    }
  }
  update(indexOfTodo,updateTodo) {
    if(this.isValidIndex(indexOfTodo)) {
      // Update the existing todo object with the new data
      this.todo[indexOfTodo] = updateTodo;
    } else {
      null
    }
  }
    // Get a specific todo by index
  get(indexOfTodo){
    if (this.isValidIndex(indexOfTodo)) {
      // Return the todo object at the specified index
      return this.todo[indexOfTodo];
    } else {
      return null
    }
  }
  // Get all the todos in the list
  getAll() {
    return this.todo;
  }
  clear() {
    this.todo = []
  }
  // Check if an index is valid for the todo list
  isValidIndex(index) {
    // Return true if the index is within the bounds of the list
    return index >= 0 && index < this.todo.length;
  }
}

module.exports = Todo;
