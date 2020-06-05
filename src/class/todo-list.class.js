export class TodoList {
  constructor() {
    this.todos = [];
  }
  newTodo(todo) {
    this.todos.push(todo);
  }
  
  deleteTodo(id) {}
  toggleDoneTask(id) {}
  eraseEverythingDone() {}
}
