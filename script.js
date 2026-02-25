const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("agendaItems");
const taskCount = document.getElementById("taskCount");

let count = 0;

function updateCounter(amount) {
  count += amount;
  taskCount.innerText = count;
}

addButton.onclick = () => {
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  
  const textNode = document.createElement("span");
  textNode.innerText = taskValue;
  li.appendChild(textNode);

  li.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = (e) => {
    e.stopPropagation(); 
    taskList.removeChild(li);
    updateCounter(-1);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  updateCounter(1);
};
