// UI VARIABLES:
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const cardAction = document.querySelector(".card-action");
const clearBtn = document.querySelector(".clear-tasks");

if (!taskList.childElementCount) cardAction.classList.add("hidden");

// LOAD ALL EVENT LISTENERS:
loadEventListeners();

// INITIALIZE LOAD EVENT LISTENERS FUNCTION:
function loadEventListeners() {
  // ADD TASK EVENT:
  form.addEventListener("submit", addTask);
  // DELETE TASK EVENT:
  taskList.addEventListener("click", deleteTask);
  // CLEAR TASKS EVENT:
  clearBtn.addEventListener("click", clearTasks);
}

// ADD TASK FUNCTION:
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Please add a task!");
    return;
  }

  cardAction.classList.remove("hidden");

  // CREATE LI ELEMENT:
  const li = document.createElement("li");
  // ADD CLASS:
  li.className = "collection-item";
  // CREATE TEXT NODE:
  const liText = document.createTextNode(taskInput.value);
  // APPEND TO LIST ITEM:
  li.appendChild(liText);
  // CREATE NEW LINK ELEMENT:
  const link = document.createElement("a");
  // ADD CLASS
  link.className = "delete-item secondary-content";
  // ADD ICON HTML:
  link.innerHTML =
    '<i class="material-icons red-text delete">remove_circle</i>';
  // APPEND LINK TO LIST:
  li.appendChild(link);
  // APPEND LIST ITEM TO UL:
  taskList.appendChild(li);

  // CLEAR INPUT
  taskInput.value = "";
}

// DELETE TASK FUNCTIONALITY:
function deleteTask(e) {
  // SET TARGET:
  let target = e.target;
  // IF THE TARGET ELEMENT CONTAINS THE DELETE CLASS DELETE THE LIST ITEM:
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }

  if (!taskList.childElementCount) {
    cardAction.classList.add("hidden");
  }
}

// CLEAR ALL TASKS FUNCTIONALITY:
function clearTasks() {
  while (taskList.children.length) {
    taskList.children[0].remove();
  }

  cardAction.classList.add("hidden");
}
