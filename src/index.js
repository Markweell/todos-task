import './../styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

// const todo = new Todo("regar");
export const todoList = new TodoList();

// todoList.newTodo(todo);
console.log('todoList', todoList);
todoList.todos.map(crearTodoHtml);
// crearTodoHtml(todo);
