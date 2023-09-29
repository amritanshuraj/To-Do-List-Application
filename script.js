function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('removeButton');
    removeButton.onclick = function () {
      removeTask(taskItem);
    };

    taskItem.innerHTML = `
      ${taskText}
    `;
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function removeTask(taskItem) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(taskItem);
}

function changeBackgroundColor(color) {
  const toDoListPage = document.getElementById('toDoListPage');
  toDoListPage.style.backgroundColor = color;
}