const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const taskList = document.getElementById("task-list");

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks on page load
displayTasks();

// Add task on click of Add button
addBtn.addEventListener("click", function() {
  if (taskInput.value !== "") {
    const task = {
      id: Date.now(),
      name: taskInput.value,
      completed: false
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    taskInput.value = "";
  }
});

// Remove all tasks on click of Clear button
clearBtn.addEventListener("click", function() {
  tasks = [];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
});

// Mark task as completed on click of completed button
taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("completed-btn")) {
    const taskId = parseInt(event.target.parentNode.getAttribute("data-id"));
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
});

// Display all tasks
function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function(task) {
    const taskItem = document.createElement("li");
    taskItem.setAttribute("data-id", task.id);
    taskItem.innerText = task.name;

    const completedBtn = document.createElement("button");
    completedBtn.classList.add("completed-btn");
    completedBtn.innerText = task.completed ? "Completed" : "Complete";

    taskItem.appendChild(completedBtn);
    taskList.appendChild(taskItem);

    if (task.completed) {
      taskItem.classList.add("completed");
    }
  });
}
const roundedBtn = document.querySelector('.rounded');
const goTopBtn = document.querySelector('.go-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    roundedBtn.style.display = 'block';
    goTopBtn.style.display = 'block';
  } else {
    roundedBtn.style.display = 'none';
    goTopBtn.style.display = 'none';
  }
});

roundedBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
