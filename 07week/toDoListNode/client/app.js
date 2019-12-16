url = "http://localhost:3000/todo";

//grabbing elements
let titleTextBox = document.getElementById("titleTextBox");
let priorityTextBox = document.getElementById("priorityTextBox");
let dateCreatedTextBox = document.getElementById("dateCreatedTextBox");
let completedTextBox = document.getElementById("completedTextBox");
let postButton = document.getElementById("postButton");

//post button

postButton.addEventListener("click", () => {
  let title = titleTextBox.value;
  let priority = priorityTextBox.value;
  let dateCreated = dateCreatedTextBox.value;
  let completed = completedTextBox.value;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      priority: priority,
      dateCreated: dateCreated,
      isCompleted: completed
    })
  });
});
