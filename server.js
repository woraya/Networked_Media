// server.js

// how to save in json file?
// how to dosplay what's been submitted? Ask Mithru

var express = require('express');
var app = express();

app.use(express.static('public'));

// take care of post variables in the route
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true }));    // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

var multer = require('multer');
var upload = multer();

var theData = [];

// here "function" is an annonymos function. and will be called as a call back.
app.listen(3000, function () {
  // var host = server.address().address;
  // var port = server.address().port;
  console.log("Server listening on port 3000!");

});

app.get('/', function (req, res) {
  res.send('Hello World');
  console.log("Hello, How are you today?");
})

// Get Route
app.get('/form.html', function (req, res) {
  res.sendFile("/" + "form.html");
  console.log("GET /form.html");
});

app.get('/formpost', function(req, res) {
  // Prepare output in JSON format
  response = {
    first_name:req.query.type_a,
    last_name:req.query.type_b
  };
  res.end(JSON.stringify(response));
  console.log(response);
  console.log("Got a GET Request");
});

app.post('/formpost', function (req, res) {
  // Prepare output in JSON format
  response = {
    first_name:req.body.type_a,
    last_name:req.body.type_b
  };
  res.end(JSON.stringify(response));
  console.log(response);
  console.log("Got a Post Request")
});
