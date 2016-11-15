var myApp = angular.module('myApp');

myApp.controller('newController',['$scope', 'friendsFactory', function($scope, friendsFactory){

      console.log('newController loaded');
      var self = this;
      self.newFriend = {};
      // Using the ng-model on the view, angular will determine that
      // two properties will need to be added to this object: name and favoriteLanguage

      // Define a create function so that if someone clicks on
      // an element with ng-click="NC.create()"
      // it triggers the function and runs the code inside
      var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          console.log($scope.friends);
                        });
            };
      index();
      $scope.create = function() {
        console.log('we hit this')
        friendsFactory.create($scope.newFriend)
        $scope.newFriend = {}
        index();
      }
      $scope.delete = function(id) {
        console.log('we deleting this')
        friendsFactory.delete(id);
        index();
      }
    }]);
