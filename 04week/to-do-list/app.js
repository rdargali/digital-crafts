//add task button
let addTaskButton = document.createElement("button");
addTaskButton.innerHTML = "Add Task";

addTaskButton.addEventListener("click", () => {
  let task = taskTextBox.value;

  //creating li
  let liItem = document.createElement("li");
  liItem.innerHTML = task;

  //creating checkbox
  let checkMark = document.createElement("input");
  checkMark.type = "checkbox";
  liItem.prepend(checkMark);

  checkMark.addEventListener("change", () => {
    completedList.appendChild(liItem);
  });

  //creating remove button
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "X";
  liItem.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    pendingList.removeChild(liItem);
  });

  pendingList.appendChild(liItem);
});

//textbox
let taskTextBox = document.createElement("input");
taskTextBox.type = "text";
taskTextBox.placeholder = "Add a task here";
taskTextBox.id = "taskTextBox";

//pending and finished lists
let pendingList = document.createElement("ol");
pendingList.innerHTML = "Pending:";
pendingList.id = "pendingList";

let completedList = document.createElement("ol");
completedList.innerHTML = "Completed:";
completedList.id = "finishedList";

//elements in body
document.body.appendChild(taskTextBox);
document.body.appendChild(addTaskButton);
document.body.appendChild(pendingList);
document.body.appendChild(completedList);
