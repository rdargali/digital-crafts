const express = require("express");
const app = express();
const cors = require("cors");

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});

//app can use middleware
app.use(express.json());
app.use(cors());

let toDoList = [
  {
    title: "Laundry",
    priority: "low",
    dateCreated: "12/16/2019",
    isCompleted: false
  },
  {
    title: "Get Groceries",
    priority: "medium",
    dateCreated: "12/18/2019",
    isCompleted: false
  },
  {
    title: "Fix Computer",
    priority: "low",
    dateCreated: "12/13/2019",
    isCompleted: true
  },
  {
    title: "Cook Dinner",
    priority: "low",
    dateCreated: "12/19/2019",
    isCompleted: false
  },
  {
    title: "Exercise",
    priority: "high",
    dateCreated: "12/11/2019",
    isCompleted: true
  }
];

//GET Request

app.get("/todo", (req, res) => {
  res.send(toDoList);
});

app.post("/todo", (req, res) => {
  res.send("Post successful");
  toDoList.push(req.body);
  console.log(toDoList);
});
