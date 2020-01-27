const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
//import session
const session = require("express-session");

//importing routers
const tripsRouter = require("./routes/trips");
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");

//initialize session --- make sure it is initialized before routers
app.use(
  session({
    secret: "whatever i want it to be",
    resave: false,
    saveUninitialized: true
  })
);

//middleware
app.use(express.urlencoded());
app.use("/trips", tripsRouter);
app.use("/login", loginRouter);
app.use("/dashboard", dashboardRouter);

//authentication middleware
function authenticate(req, res, next) {
  if (req.session) {
    //if express session is active and initialized
    if (req.session.isAuthenticated)
      //if user matches user in database and has "isAuthenticated" property set to true
      next();
    else res.redirect("./login");
  } else {
    res.redirect("./login");
  }
}

//tell express you're using mustache templating engine
app.engine("mustache", mustacheExpress());

//tell express your pages are located in a directory names "views"
app.set("views", "./views");

//tell express mustache is being used
app.set("view engine", "mustache");

global.tripsUsers = [
  {
    email: "rawand@gmail.com",
    password: "123456"
  },
  {
    email: "john@yahoo.com",
    password: "123456"
  }
];

app.get("/", (req, res) => {
  res.render("dashboard");
});

app.get("/trips", (req, res) => {
  res.render("trips", { trips });
});

app.get("/login", (req, res) => {
  res.render("login");
});

//listening on port 3000
app.listen(3000, () => {
  console.log("running on 3000");
});
