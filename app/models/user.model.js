var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	firstName: String,
	lastName: String
});

module.exports = mongoose.model('User', UserSchema);