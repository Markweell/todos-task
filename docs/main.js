/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "todoList", function() { return /* binding */ todoList; });

// EXTERNAL MODULE: ./styles.css
var styles = __webpack_require__(0);

// CONCATENATED MODULE: ./src/class/todo.class.js
class Todo {
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

// CONCATENATED MODULE: ./src/class/todo-list.class.js


class todo_list_class_TodoList {
  constructor() {
    this.loadLocalStorage();
  }
  newTodo(todo) {
    this.todos.push(todo);
    this.saveLocalStorage();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.saveLocalStorage();
  }
  toggleDoneTask(id) {
    for (const todo of this.todos) {
      console.log(id, todo.id);
      if (todo.id == id) {
        todo.toggleDone();
        this.saveLocalStorage();
        break;
      }
    }
  }
  eraseEverythingDone() {
    this.todos = this.todos.filter((todo) => !todo.getDone());
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  loadLocalStorage() {
    this.todos = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : [];

    this.todos = this.todos.map(Todo.fromJson);
  }
}

// CONCATENATED MODULE: ./src/class/index.js





// CONCATENATED MODULE: ./src/js/componentes.js


const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const eraseEverythingDoneButton = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const afilters = document.querySelectorAll('.filtro');

const crearTodoHtml = (todo) => {
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

// CONCATENATED MODULE: ./src/index.js




// const todo = new Todo("regar");
const todoList = new todo_list_class_TodoList();

// todoList.newTodo(todo);
console.log('todoList', todoList);
todoList.todos.map(crearTodoHtml);
// crearTodoHtml(todo);


/***/ })
/******/ ]);