// Project directory following https://gist.github.com/miguelmota/7728274
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());

// Config mongodb
var dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
	useMongoClient:true
});

mongoose.connection.on('error', function() {
	console.log('Could not connect to the db');
	process.exit();
});

mongoose.connection.once('open', function() {
	console.log('Successfully connected to the db');
});

// Config routes
app.get('/', function(req, res) {
	res.write('Hello World!');
	res.end();
});

require('./config/routes.js')(app);

// Start the server
app.listen(3000, function() {
	console.log('Listening to port 3000');
});