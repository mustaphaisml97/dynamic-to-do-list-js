// Step 1: Run code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 3: Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim the input value

    // Step 4: Validate input
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Step 5: Create task list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Step 6: Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Step 7: Set remove action
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Step 8: Assemble and append task
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Step 9: Clear input field
    taskInput.value = "";
  }

  // Step 10: Event listener for 'Add Task' button
  addButton.addEventListener('click', addTask);

  // Step 11: Event listener for Enter key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Step 12: Optionally invoke addTask on DOMContentLoaded (if required)
  // addTask(); // Uncomment if you'd like to test with a pre-filled value
});
