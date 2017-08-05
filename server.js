
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
  name: "Tim",
  number: "555-5555",
  email: "Tim@yourface.com",
  ID: "timtom"
}];
var waitingList = [{
  routeName: "Tina",
  name: "Tina",
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
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/current", function(req, res) {
  res.json(currentRes);
});
app.get("/waiting", function(req, res) {
  res.json(waitingList);
});

app.get("/api/:currentRes?", function(req, res) {
  var current = req.params.currentRes;

 if (current) {
    console.log(current);

   for (var i = 0; i < currentRes.length; i++) {
      if (current === currentRes[i].routeName) {
        return res.json(currentRes[i]);
      }
    }

   return res.json(false);
  }
  return res.json(currentRes);
});

app.post("/api/new", function(req, res) {
  currentRes = req.body;
  currentRes.routeName = currentRes.name;
  console.log(req.body);

   // if (currentRes <= 5) {
    //   console.log("We are Full");
    //
    // } else {
    //   console.log("Follow Me to Your Seat");
    //
    // }

   console.log(currentRes);
    console.log(currentRes.routeName);

 currentRes.push(currentRes);

 res.json(currentRes);
});

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});