const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let userTryingToLogIn = tripsUsers.find(user => {
    return user.email == email && user.password == password;
    //returns boolean (true or false) if the email and passwords match what's in the "database" (tripsUsers array)
  });
  console.log(userTryingToLogIn);
  console.log(req.session);
  if (userTryingToLogIn) {
    //=true then start the session
    if (req.session) {
      //express sessions is initialized
      req.session.isAuthenticated = true;
      res.redirect("/trips");
    } else {
      res.redirect("/");
    }
  } else res.redirect("/login");
});

module.exports = router;
