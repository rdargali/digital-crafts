// /trips/???? - prefix

const express = require("express");
const router = express.Router();

function logDateTime(req, res, next) {
  console.log("Log Date Time MIDDLEWARE");
  console.log(new Date());
  next(); // forward to the original request
  //middleware sends between requests (logs time/date in between every request)
}

router.use(logDateTime);

router.post("/add-to-cart", (req, res) => {
  if (req.session) {
    req.session.cartCount += 1;
  }
  res.redirect("/");
});

// LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let persistedUser = users.find(user => {
    return user.username == username && user.password == password;
    //returns true or false if the user trying to log in matches any of the users in the "database" (global.users array)
  });

  if (persistedUser) {
    // start the session
    if (req.session) {
      req.session.isAuthenticated = true;
      res.redirect("/dashboard");
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/accounts", (req, res) => {
  res.send("ACCOUNTS");
});

// only authenticated users should see this route
router.get("/dashboard", (req, res) => {
  res.send("DASHBOARD");
});

// localhost:3000/
router.get("/", (req, res) => {
  if (req.session) {
    req.session.counter = 100;
    req.session.cartCount = 10;
    req.session.cart = {
      count: 20,
      name: "john",
      isCheckedOut: false
    };
  }

  console.log("LOGIN PAGE");
  res.render("index", { cartCount: req.session.cartCount });
});

// localhost:3000/register
router.get("/register", (req, res) => {
  console.log("REGISTER");
  res.send("register");
});

module.exports = router;
