// Step 1: Run code after DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM elements
  const addButton = document.getElementById('add-task-btn'); // corrected ID
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 3: Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim user input

    // Step 4: Validate input
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Step 5: Create <li> for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Step 6: Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Step 7: Remove task when button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Step 8: Append button to li, and li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Step 9: Clear input field
    taskInput.value = "";
  }

  // Step 10: Add task when button is clicked
  addButton.addEventListener('click', addTask);

  // Step 11: Add task when Enter key is pressed
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select the DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim the input

    // If input is empty, show alert
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

    // Add event to remove the task when button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the button to the li, and the li to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Add task when the Add button is clicked
  addButton.addEventListener('click', addTask);

  // Add task when Enter key is pressed in the input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

