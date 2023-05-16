// Store the tasks in an array
let tasks = [];

// Function to add a new task
function addTask() {
  const input = document.getElementById("new-task");
  const taskName = input.value;

  if (taskName.trim() !== "") {
    tasks.push(taskName);
    input.value = "";
    displayTasks();
  }
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Function to mark a task as complete
function toggleComplete(index) {
  tasks[index] = tasks[index].startsWith("✅ ") ? tasks[index].substring(2) : "✅ " + tasks[index];
  displayTasks();
}

// Function to display the tasks
function displayTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = document.createElement("li");
    const removeButton = document.createElement("button");
    const toggleButton = document.createElement("button");

    removeButton.innerHTML = "Remove";
    removeButton.onclick = () => removeTask(i);

    toggleButton.innerHTML = tasks[i].startsWith("✅ ") ? "Undo" : "Complete";
    toggleButton.onclick = () => toggleComplete(i);

    task.innerText = tasks[i];
    task.appendChild(removeButton);
    task.appendChild(toggleButton);

    if (tasks[i].startsWith("✅ ")) {
      task.classList.add("completed");
    }

    list.appendChild(task);
  }
}
