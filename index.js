const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hii Buddy How Are You.....?");
});

app.get("/me", (req, res) => {
  res.send("Hey I am Good How about You...");
});

app.listen(5000, () => {
  console.log("listening");
});
