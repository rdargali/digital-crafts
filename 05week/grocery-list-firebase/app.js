//Grabbing reference to database
let database = firebase.database();
let root = database.ref();
let groceryList = [];

//Creating grocery list node
let groceryListNode = root.child("GroceryList");

//Grabbing html elements
let groceryListTextBox = document.getElementById("groceryListTextBox");
let categoryTextBox = document.getElementById("categoryTextBox");
let addButton = document.getElementById("addButton");
let itemUL = document.getElementById("itemUL");
let categoryUL = document.getElementById("categoryUL");

//setting up observers
groceryListNode.on("child_added", snapshot => {
  groceryList.push(snapshot.val());
  updateUI();
});

//Add button functionality
addButton.addEventListener("click", () => {
  let item = groceryListTextBox.value;
  let category = categoryTextBox.value;

  //adding to database with unique id
  groceryListNode.push({
    item: item,
    category: category
  });
});

//Displaying items on UI
function updateUI() {
  let items = groceryList.map(post => {
    return `<li>${post.item}</li>`;
  });

  let categories = groceryList.map(post => {
    return `<li>${post.category}</li>`;
  });

  itemUL.innerHTML = items.join(" ");
  categoryUL.innerHTML = categories.join(" ");
}

// push unique id and properties to grocery list
/*
groceryListNode.push({
  item: "Apples",
  category: "Fruits"
});
*/
