const express = require("express");
const app = express();
const jwt = requires("jsonwebtoken");
const cors = require("cors");

const users = {
  username: "rawand",
  password: "password"
};

//use cors and json body parser
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    //validate username and password

    const persistedUser = users.find((user) => user.username == username && user.password == password)

    if(persistedUser {
        // if user exists/is authenticated; generate token and put
        // secret key inside .env file

        const token = jwt.sign({
            username: persistedUser.username
        })
    }
});
