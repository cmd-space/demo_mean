module.exports = (function() {
	return {
		show: function(req, res) {
			res.json([{name: 'Andrew', age: 24}, {name: 'Michael', age: 35}]);
		}
	}
})();