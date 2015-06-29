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

	factory.addFriend = function() {
		FriendFactory.addFriend($scope.new_friend, function() {
			$scope.friends = FriendFactory.getFriends();
			$scope.new_friend = {};
		});
	}
	return factory;
});

friends_app.controller('FriendsController', function($scope, FriendFactory) {
	FriendFactory.getFriends(function(data) {
		$scope.friends = data;
	});
	$scope.addfriend = function() {
		$scope.friends.push({name: $scope.new_friend.name, age: $scope.new_friend.age});
		$scope.new_friend = {};
	}
});