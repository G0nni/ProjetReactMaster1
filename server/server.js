const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello");
});

// DB
console.log("connecting to db...");
mongoose.connect("mongodb://127.0.0.1:27017/Scrumy", () => {
  console.log("db connected.");
  console.log("starting server...");
  app.listen(4000, () => {
    console.log("server listening on port 4000.");
  });
});
