const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearsBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

//load event listeners

function loadEventListeners() {
  //add task form
  form.addEventListener('submit', addTask);
}
//addTask function
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a Task');
  }
  //create li element
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';

  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //create new link element
  const link = document.createElement('a');

  //Add class
  link.className = 'delete-item secondary-content';

  //Add icon Html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  taskInput.value = '';
  console.log(li);
  e.preventDefault();
}
