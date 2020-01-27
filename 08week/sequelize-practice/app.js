const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const sequelize = require("sequelize");
const cors = require("cors");
models = require("./models");
// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", "./views");

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
