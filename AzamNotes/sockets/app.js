const express = require("express");
const app = express();

app.use(express.static("public"));

const http = require("http").createServer(app);
const io = require("socket.io")(http);

const mustacheExpress = require("mustache-express");

// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", socket => {
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log("running on 3000");
});
