var myApp = angular.module('myApp');
myApp.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams){
  friendsFactory.show_update($routeParams._id, function(friendFromServer){
    $scope.friend = friendFromServer
    console.log($scope.friend)
  });
}]);
