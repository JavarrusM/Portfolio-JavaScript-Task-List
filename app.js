// UI VARIABLES:
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");

// LOAD ALL EVENT LISTENERS:
loadEventListeners();

// INITIALIZE LOAD EVENT LISTENERS FUNCTION:
function loadEventListeners() {
  // ADD TASK EVENT
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", deleteTask);
}

// ADD TASK FUNCTION:
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Please add a task!");
    return;
  }

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

// DELETE CLASS FUNCTIONALITY:
function deleteTask(e) {
  // SET TARGET:
  let target = e.target;
  // IF THE TARGET ELEMENT CONTAINS THE DELETE CLASS DELETE THE LIST ITEM:
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
}
