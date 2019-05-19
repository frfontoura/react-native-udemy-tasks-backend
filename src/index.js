const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Tasks Backend");
});

app.listen(3000, () => {
  console.log("Tasks Backend Up");
});
