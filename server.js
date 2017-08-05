
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Data
var currentRes = [{
  routeName: "Tim",
  number: "555-5555",
  email: "Tim@yourface.com",
  ID: "timtom"
}];
var waitingList = [{
  routeName: "Tina",
  number: "444-4444",
  email: "Tina@myface.com",
  ID: "tinathegreat"
}];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/input", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});