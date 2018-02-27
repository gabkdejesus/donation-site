var User = require('../models/user.model.js');

exports.findAll = function(req, res) {
	User.find(function (err, users) {
		if(err) {
			res.status(500);
			res.write('Could not retrieve users');
			res.end();
		}
		else {
			res.send(users);
		}
	});
};