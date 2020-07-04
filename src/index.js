import './style.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

console.log(todoList.todos);
// const tarea = new Todo('Aprender JS');

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);


// localStorage.setItem('mi-key', 'abc123');