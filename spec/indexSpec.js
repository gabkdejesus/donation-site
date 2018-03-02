var request = require("request");

var index = require('../config/index.js');
var baseUrl = require('../config/baseUrl.config.js').url;

// Users
// Should I access this, or controller methods
var userController = require('../app/controllers/user.controller.js');
var userModel = require('../app/models/user.model.js');

describe('Donation Site', function() {
	describe('index', function() {
		describe('GET /', function() {
			it('returns status code 200', function(done) {
				request.get('http://localhost:3000/', function(err, res, body) {
					expect(res.statusCode).toBe(200);
					done();
				});
			});
		});
	});

	describe('users', function() {
		describe('POST /user', function() {
			var postData = {
					firstName: 'Gab',
					lastName: 'De Jesus'
			};

			it('returns status code 200', function(done) {
				// To do, find how to prework
				request.post({
					url: baseUrl + '/user',
					headers: {'content-type': 'application/x-www-form-urlencoded'},
					// What does this do
					body: require('querystring').stringify(postData)
				}, function(err, res, body) {
					expect(res.statusCode).toBe(200);
					done();
				});
			});

			it('creates a user with firstName "Gab"', function(done) {
				// To do, find how to prework
				request.post({
					url: baseUrl + '/user',
					headers: {'content-type': 'application/x-www-form-urlencoded'},
					body: require('querystring').stringify(postData)
				}, function(err, res, body) {
					var expected = userModel.findOne({firstName: 'Gab'});
					expect(expected.firstName).toBe('Gab');
					done();
				});
			});
		});

		describe('GET /users', function() {
			it('returns status code 200', function(done) {
				request.get(baseUrl + '/users', function(err, res, body) {
					expect(res.statusCode).toBe(200);
					done();
				});
			});
		});
	});
});

