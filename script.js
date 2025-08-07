// Step 1: Run code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 3: Define the addTask function
  function addTask() {
    // Get and trim input value
    const taskText = taskInput.value.trim();

    // Alert if input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Step 4: Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove the task when button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, and li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // Step 5: Event listener for "Add Task" button
  addButton.addEventListener('click', addTask);

  // Step 6: Allow task to be added by pressing "Enter"
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Step 7: Optional - Call addTask once on load (if required by spec)
  // This doesn't do much unless the input has value already
  // Uncomment the line below if required:
  // addTask();
});
