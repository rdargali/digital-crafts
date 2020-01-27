//grabbing elements
let registerEmailTextBox = document.getElementById("registerEmailTextBox");
let registerPasswordTextBox = document.getElementById(
  "registerPasswordTextBox"
);
let registerButton = document.getElementById("registerButton");

let logInEmailTextBox = document.getElementById("logInEmailTextBox");
let logInPasswordTextBox = document.getElementById("logInPasswordTextBox");
let logInButton = document.getElementById("logInButton");

let logOutButton = document.getElementById("logOutButton");

//registering

registerButton.addEventListener("click", e => {
  let email = registerEmailTextBox.value;
  let password = registerPasswordTextBox.value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  e.preventDefault();
});

//logging in
logInButton.addEventListener("click", () => {
  let email = logInEmailTextBox.value;
  let password = logInPasswordTextBox.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });

  redirectHome();
});

//logging out
logOutButton.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      console.log("user logged out");
    })
    .catch(function(error) {
      // An error happened.
    });
});

function redirectHome() {
  location.replace(
    "/Users/rawanddargali/Desktop/DigitalCrafts/05week/grocery-list-firebase/index.html"
  );
}
