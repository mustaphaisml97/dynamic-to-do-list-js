// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create the addTask Function
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input value

    // If input is empty, alert the user
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // When the button is clicked, remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the button to <li> and the <li> to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Attach Event Listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
