var User = require('../models/user.model.js');

// Create a new user
exports.create = function(req, res) {
	console.log('Creating a new user');
	if(!req.body.firstName || !req.body.lastName) {
		console.log('User creation failed');
		res.status(400).send('Missing user\'s name!');
	}
	else {
		var user = new User({
			firstName: req.body.firstName,
			lastName : req.body.lastName || "Smith"
		});

		// Another way of saving, from https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/
		// user.save()
		// 	.then(item => {
		// 		res.send('item saved to db');
		// 		console.log('saved to db')
		// 	})
		// 	.catch(err => {
		// 		res.status(500).send('Unable to save to db');
		// 	});

		user.save(function(err, data) {
			if(err) {
				console.log(err);
				res.status(500).send('Some error occurred while making the user');
			}
			else {
				console.log('Successfully created user');
				res.send(data);
			}
		});
	}
};

// Find all users
exports.findAll = function(req, res) {
	console.log('Finding all users');
	User.find(function (err, users) {
		if(err) {
			console.log(err);
			res.status(500).send('Could not retrieve users');
		}
		else {
			console.log('Found all users');
			res.send(users);
		}
	});
};




