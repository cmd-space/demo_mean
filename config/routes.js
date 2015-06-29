var friends = require('./../server/controllers/friends.js');

module.exports = function(app) {
	// using show method inside of friends.js to grab all the friends inside DB
	app.get('/friends', function(req, res) {
		friends.show(req, res);
	});
	// using add method inside of friends.js to insert new friend into DB
	app.post('/add_friend', function(req, res) {
		friends.add(req, res);
	});
}