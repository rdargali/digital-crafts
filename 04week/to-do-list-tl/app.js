let textArea = document.getElementById("textArea");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

function removeItem(item) {
  li = item.parentElement;
  taskList.removeChild(li);
}

addTaskButton.addEventListener("click", () => {
  let task = textArea.value;

  //template literal for <li> element task
  let liItem = `<li>
                <input type="checkbox"></input>
                ${task}
                <button onClick="removeItem(this)">X</button>
                </li>`;

  taskList.insertAdjacentHTML("beforeend", liItem);
});
