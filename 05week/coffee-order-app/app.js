//URLs // Params: emailAddress (string), coffee (string)
const orderURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";
const deleteURL =
  "http://dc-coffeerun.herokuapp.com/api/coffeeorders/alonnnnnnnnng@email.go";
const searchURL =
  "http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress";

// Element selectors
let orderEmail = document.querySelector("#orderEmail");
let orderCoffee = document.querySelector("#orderCoffee");
let orderButton = document.querySelector("#orderButton");

// let deleteEmail = document.querySelector("#deleteEmail");
// let deleteOrder = document.querySelector("#deleteOrder");
// let deleteButton = document.querySelector("#deleteButton");

// let searchEmail = document.querySelector("#searchEmail");
// let searchOrder = document.querySelector("#searchOrder");
// let searchButton = document.querySelector("#searchButton");

//Add button functionality
orderButton.addEventListener("click", () => {
  let request = new XMLHttpRequest();
  request.open("POST", orderURL);
  request.setRequestHeader("Content-Type", "application/json");

  let body = {
    emailAddress: `${orderEmail.value}`,
    coffee: `${orderCoffee.value}`
  };
  request.send(JSON.stringify(body));
});

function getAllOrders() {
  let request = new XMLHttpRequest();
  request.open("GET", orderURL);
  request.onload = function() {
    console.log(this);
  };
  request.send();
}
