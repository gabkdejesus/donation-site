var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	firstName: {type: String, default: 'Adam'},
	lastName: {type: String, default: 'Smith'},
	donations: [
		{
			date: {type: Date, default: ''},
			amount: {type: Number, default: ''}
		}
	]
});

module.exports = mongoose.model('User', UserSchema);