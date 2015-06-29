var friends_app = angular.module('friends_app', []);

friends_app.factory('FriendFactory', function() {
	var factory = {};
	var friends = [];

	factory.getFriends = function() {
		return friends;
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
	$scope.friends = [{name: 'Michael', age: 34}, {name: 'Andrew', age: 24}];
	$scope.friends = FriendFactory.getFriends();
	$scope.addfriend = function() {
		$scope.friends.push({name: $scope.new_friend.name, age: $scope.new_friend.age});
		$scope.new_friend = {};
	}
});