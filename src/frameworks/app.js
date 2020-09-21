"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PORT = 3000;
var app = express();
app.get("/", function (req, res) {
    res.send("Welcome");
});
app.listen(PORT, function () {
    console.log("App is listening on port: " + PORT);
});
