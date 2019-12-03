const postURL = "https://hungry-diagram.glitch.me/movies";

const usersUL = document.querySelector("#usersUL");

const savePostButton = document.querySelector("#savePostButton");

savePostButton.addEventListener("click", () => {
  // perform a post request
  let request = new XMLHttpRequest();
  request.open("POST", postURL);
  request.setRequestHeader("Content-Type", "application/json");

  let body = { title: "Pulp Fiction", rating: "10" };

  request.send(JSON.stringify(body));
});
