var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/editfriends/:_id', {
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .when('/showfriends/:_id', {
    templateUrl: 'partials/show.html',
    controller: 'showController'
  })
  .when('/newfriends', {
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  .otherwise({
    redirectTo: '/'
  });
// Routes to load your new and edit pages with new and edit controllers attached to them!
});
