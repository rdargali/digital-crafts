const mongoose = require("mongoose");

//define a schema (structure of document)

var postSchema = new mongoose.Schema({
  title: String,
  author: String
});

var Post = mongoose.model("Post", postSchema);
