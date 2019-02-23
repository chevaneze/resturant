var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var waitlist = []

var tables = [
    {
        name: "Testy McTestson",
        phone: 5555555555,
        email: "thisisatest@test.test",
        id: 1
    }
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.post("/api/tables", function(req, res) {
  
    var newreserve = req.body;
  
    console.log(newreserve);
    if(tables.length>4){
        waitlist.push(newreserve)
    }
    else{
        tables.push(newreserve);
    }
    res.json(newreserve);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
