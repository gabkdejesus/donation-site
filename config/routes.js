module.exports = function(app) {
	var users = require('../app/controllers/user.controller.js');

	// User Routes
	app.get('/users', users.findAll);   // List all users
	// app.get('/user', users.find);		// List a user
	app.post('/user', users.create);	// Create a user
	
};