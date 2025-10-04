document.getElementById("addTask").addEventListener("click", () => {
  const taskInput = document.getElementById("task");
  const task = taskInput.value.trim();
  if(task) {
    const li = document.createElement("li");
    li.innerText = task;
    li.addEventListener("click", () => li.remove());
    document.getElementById("tasks").appendChild(li);
    taskInput.value = "";
  }
});
