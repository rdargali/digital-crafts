const express = require("express");
const app = express();
const cors = require("cors");

let movies = [];

//use cors middleware
app.use(cors());

//server can now read json body
app.use(express.json());

//POST
app.post("/movies", (req, res) => {
  console.log(req.body);
  movies.push(req.body);
  res.send("I am post and I see your request");
});

//GET
app.get("/movies", (req, res) => {
  /*const movies = [
    { title: "Star Wars", year: 1979 },
    { title: "Fast and Furious", year: 2001 },
    { title: "Planet of the Apes", year: 1960 }
  ];

  const response = {
    totalResults: 100,
    search: movies
  };

  */

  res.json(movies);
});

app.listen(3000);
