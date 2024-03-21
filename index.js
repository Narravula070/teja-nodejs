const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hii Buddy This is Teja.....!");
});

app.get("/me", (req, res) => {
  res.send("How are You Man...?");
});

app.listen(5000, () => {
  console.log("listening");
});
