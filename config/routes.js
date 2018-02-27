module.exports = function(app) {
	var users = require('../app/controllers/user.controller.js');

	// User Routes
	// Get all users
	app.get('/users', users.findAll);

};