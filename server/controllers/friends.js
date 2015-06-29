var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
	return {
		show: function(req, res) {
			// res.json([{name: 'Andrew', age: 24}, {name: 'Michael', age: 35}]);
			Friend.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			});
		}
	}
})();