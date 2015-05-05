'use strict';

angular
  .module('app', [
    'ui.router',
    'HomeConfigModule',
  ]).config(function ($urlRouterProvider) {
   $urlRouterProvider.otherwise("/");
});

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
