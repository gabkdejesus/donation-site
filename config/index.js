// Project directory following https://gist.github.com/miguelmota/7728274
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Config mongodb
var dbConfig = require('./database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;	

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
	console.log('Could not connect to the db');
	process.exit();
});

mongoose.connection.once('open', function() {
	console.log('Successfully connected to the db');
});

// Config routes
app.get('/', function(req, res) {
	console.log("User connected to /");
	res.write('Hello World!');
	res.end();
});

require('./routes.js')(app);

// Config server
var baseUrlConfig = require('./baseUrl.config.js');

app.listen(baseUrlConfig.port, function() {
	console.log('Listening to port ' + baseUrlConfig.port);
});