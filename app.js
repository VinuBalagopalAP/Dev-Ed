const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Import Routes
const postsRoutes = require("./routes/posts");

app.use("/posts", postsRoutes);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);

//How to we start listening to the server
app.listen(3000);
