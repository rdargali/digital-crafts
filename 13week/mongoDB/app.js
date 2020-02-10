const express = require("express");
const app = express();

//install mongoose
const mongoose = require("mongoose");

//connect to database, if it exists it will connect. If not it will create.
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

app.listen(8080, () => {
  console.log("server running 8080");
});
