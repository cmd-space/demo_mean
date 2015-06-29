var friends_app = angular.module('friends_app', []);

friends_app.factory('FriendFactory', function($http) {
	var factory = {};
	var friends = [];

	factory.getFriends = function(callback) {
		$http.get('/friends').success(function(output) {
			friends = output;
			callback(friends);
		});
	}

	factory.addFriend = function(friend, callback) {
		// sending POST data to /add_friend and upon success having a callback with updated data info to update friends array
		$http.post('/add_friend', friend).success(function(output) {
			// output is updated callback to db with the new db, and assigning the goodness to friends
			friends = output;
			// callback used to pass updated friends array to controller for display within view
			callback(friends);
		});
	}

	factory.removeFriend = function(friend, callback) {
		$http.post('/delete_friend', friend).success(function(output) {
			friends = output;
			callback(friends);
		});
	}
	return factory;
});

friends_app.controller('FriendsController', function($scope, FriendFactory) {
	FriendFactory.getFriends(function(data) {
		$scope.friends = data;
	});
	$scope.addfriend = function() {
		FriendFactory.addFriend($scope.new_friend, function(results) {
			$scope.friends = results;
		});
		$scope.new_friend = {};
	}

	$scope.removeFriend = function(friend) {
		FriendFactory.removeFriend(friend, function(results) {
			$scope.friends = results;
		});
	}
});