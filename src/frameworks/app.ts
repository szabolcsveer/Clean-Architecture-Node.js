import express = require("express");

const PORT = 3000;
const app: express.Application = express();
app.get("/", function (req, res) {
  res.send("Welcome");
});
app.listen(PORT, function () {
  console.log(`App is listening on port: ${PORT}`);
});
