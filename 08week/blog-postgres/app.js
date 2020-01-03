const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

app.use(express.urlencoded());

// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", "./views");

// connect to the postgreSQL database
var pgp = require("pg-promise")();
var connectionString = "postgres://localhost:5432/rblog";
var db = pgp(connectionString);

app.post("/posts", (req, res) => {
  let user_name = req.body.user_name;
  let blog_post = req.body.blog_post;

  db.none("INSERT INTO blog_posts(user_name,blog_post) VALUES($1,$2)", [
    user_name,
    blog_post
  ]).then(() => {
    res.redirect("/posts");
  });
});

app.get("/posts", (req, res) => {
  db.any("SELECT user_name, blog_post,post_id FROM blog_posts").then(posts => {
    console.log(posts);
    res.render("posts", { blog_posts: posts });
  });
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
