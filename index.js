var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.write('Hello World!');
	res.end();
});

app.listen(3000, function() {
	console.log("Listening to port 3000");
})