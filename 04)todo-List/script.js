const todoList = [];

renderToDoList();

function renderToDoList() {
 let todoListHTML = '';

  for(let i=0; i<todoList.length; i++) {
    const todoObject = todoList[i];
    const html = `<div>${todoObject.name}</div>
                  <div>${todoObject.date}</div>
                  <button onclick="todoList.splice(${i},1);
                  renderToDoList();"
                  class="delete-todo-button">Delete</button>
                  `;
    todoListHTML += html; 
  }
   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateElement = document.querySelector('.js-date-input');
  const date = dateElement.value;
  
  todoList.push({ name, date });

  inputElement.value='';
  dateElement.value='';

  renderToDoList();
}


