'use strict';

angular
  .module('app', [
    'ui.router',
    'HomeConfigModule',
    'firebase',
  ]).config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
  }).controller("MainCtrl", ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
      debugger;

      var ref = new Firebase("https://gtu-autodesk.firebaseio.com/students");
      $scope.students = $firebaseArray(ref);
      debugger;
  }]);

angular
  .module('HomeControllerModule', [])
  .controller("HomeController",  ['$scope', function($scope) {

    $scope.msg = "Home";

  }]);
angular
  .module('HomeConfigModule',
  ['HomeControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Home', {
	    url : '/',
	    templateUrl: 'app/components/Home/Home.html',
	    controller: 'HomeController'
	  })
});
