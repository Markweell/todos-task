export class Todo {
  static fromJson({ id, task, done, createAt }) {
    const tempTodo = new Todo(task);
    tempTodo.id = id;
    tempTodo.done = done;
    tempTodo.createAt = createAt;
    return tempTodo;
  }

  constructor(task) {
    this.task = task;
    this.id = new Date().getTime();
    this.done = false;
    this.createAt = new Date();
  }

  getDone() {
    return this.done;
  }

  setDone(done) {
    this.done = done;
  }

  toggleDone() {
    this.done = !this.done;
  }
}
