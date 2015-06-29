// require mongoose for interaction between server and DB
var mongoose = require('mongoose');
// Friend the model Friend is assigned to Friend for easy access inside controller
var Friend = mongoose.model('Friend');
// exporting class with methods to interact easily with DB
module.exports = (function() {
	return {
		show: function(req, res) {
			// mongoose method to find all documents inside the Friend collection ('friends' inside actual mongodb DB)
			Friend.find({}, function(err, results) {
				// if error occurs console.log
				if(err) {
					console.log(err);
				} else { // if all goes according to plan then serve up the results as a json object
					res.json(results);
				}
			});
		},
		add: function(req, res) {
			// creating a variable to store the new friend data inside of a new Friend Schema
			var newFriend = new Friend({name: req.body.name, age: req.body.age});
			// inserting new friend into db
			newFriend.save(function(err, results) {
				// searching the db for all friends after inserting new friend to return the updated DB collection
				Friend.find({}, function(err, results) {
					if(err) {
						console.log(err);
					} else {
						res.json(results);
					}
				});
			});
		}
	}
})();