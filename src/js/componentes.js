import { Todo } from '../class';
import { todoList } from '../index';
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const eraseEverythingDoneButton = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const afilters = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
  <li class="${todo.done ? 'completed' : ''}" data-id="${todo.id}">
  <div class="view">
    <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
    <label>${todo.task}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
</li>
  `;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);
  return div;
};

//Eventos

txtInput.addEventListener('keyup', (event) => {
  event.keyCode === 13 && txtInput.value && createTodo();
});
divTodoList.addEventListener('click', (event) => {
  const tagName = event.target.localName;
  const liContainer = event.target.parentElement.parentElement;
  const idLi = liContainer.getAttribute('data-id');

  console.log('event', tagName);
  console.log('parent', liContainer);
  console.log('id', idLi);
  if (tagName === 'input') {
    todoList.toggleDoneTask(idLi);
    liContainer.classList.toggle('completed');
  } else if (tagName === 'button') {
    todoList.deleteTodo(idLi);
    divTodoList.removeChild(liContainer);
  }
  console.log('todolis', todoList);
});

function createTodo() {
  const newTodo = new Todo(txtInput.value);
  todoList.newTodo(newTodo);
  crearTodoHtml(newTodo);
  cleanInput();
}

const cleanInput = () => {
  txtInput.value = '';
};

eraseEverythingDoneButton.addEventListener('click', () => {
  todoList.eraseEverythingDone();
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemento = divTodoList.children[i];
    elemento.classList.toString();
    /completed/gi.test(elemento.classList.toString()) &&
      divTodoList.removeChild(elemento);
    console.log('elemento', elemento);
    console.log('clases', elemento.classList.toString());
  }
});

ulFilters.addEventListener('click', (event) => {
  const filter = event.target.getAttribute('filter-id');
  afilters.forEach((filter) => {
    filter.classList.remove('selected');
  });
  event.target.classList.add('selected');
  if (!filter) return;
  for (const element of divTodoList.children) {
    element.classList.remove('hidden');
    const completed = /completed/gi.test(element.classList.toString());
    switch (filter) {
      case 'pending':
        completed && element.classList.add('hidden');
        break;
      case 'completed':
        !completed && element.classList.add('hidden');
        break;
      default:
        break;
    }
  }
});
