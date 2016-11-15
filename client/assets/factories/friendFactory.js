console.log('Friends Factory');
myApp.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(friendId, friendInfo, callback){ // what parameters do we need?
      // Your code here
      $http.put('/friends/' +friendId, friendInfo).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          console.log('made it to the updating factory')
          callback();
        }
      });
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){// what parameters do we need?
        // Your code here
      $http.delete('/friends/' +id).then(function(returned_data){
        console.log('factory delete')
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback();
        }
      });
    };
    this.show = function(friendId, callback){// what parameters do we need?
        // Your code here
        $http.get('/friends/' +friendId).then(function(returned_data){
          console.log('showing')
          console.log(returned_data.data);
          if (typeof(callback) == 'function'){
            console.log('made it to the factory of showing the friends')
            callback(returned_data.data);
          }
        });
    };
    this.show_update = function(friendId, callback){// what parameters do we need?
        // Your code here
        $http.get('/friends/' +friendId).then(function(returned_data){
          console.log('showing')
          console.log(returned_data.data);
          if (typeof(callback) == 'function'){
            console.log('made it to the factory of showing the friends')
            callback(returned_data.data);
          }
        });
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
