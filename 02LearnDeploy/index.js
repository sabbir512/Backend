require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/fuck", (req, res) => {
  res.send("Get a girl you looser");
});

app.get("/rich", (req, res) => {
  res.send("Earn and invest money");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
