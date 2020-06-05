import "./../styles.css";
import { Todo, TodoList } from "./class";

const todo = new Todo("regar");
const todoList = new TodoList("regar");

todoList.newTodo(todo);
console.log("regar", todoList);
