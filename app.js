const express = require("express");
const app = express();
const mongoose = require("mongoose");

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

//How to we start listening to the server
app.listen(3000);

//Connect To DB
mongoose.connect(
  'mongo "mongodb+srv://cluster0.jzwfh.mongodb.net/testboy" --username rest',
  { useNewUrlParser: true },
  () => console.log("Connected to DB!")
);
