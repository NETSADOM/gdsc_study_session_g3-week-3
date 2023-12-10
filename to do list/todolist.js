{
  const taskList = document.getElementById("taskList");

  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeButton);
}
"submit",
  function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  };
