'use strict';

angular
  .module('app', [
    'ui.router',
    'HomeConfigModule',
 
'CoursesConfigModule', 
'TeachersConfigModule', ]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});

angular
  .module('HomeControllerModule', [])
  .controller("HomeController", ['$scope', function ($scope) {

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

angular
  .module('CoursesControllerModule', [])
  .controller("CoursesController",  ['$scope', function($scope) {

    $scope.msg = "Courses";

  }]);
angular
  .module('CoursesConfigModule',
  ['CoursesControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
  	debugger;
	 $stateProvider
	  .state('Courses', {
	    url : '/Courses',
	    templateUrl: 'app/components/Courses/Courses.html',
	    controller: 'CoursesController'
	  })
});

angular
  .module('TeachersControllerModule', [])
  .controller("TeachersController",  ['$scope', function($scope) {

    $scope.msg = "Teachers";

  }]);
angular
  .module('TeachersConfigModule',
  ['TeachersControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Teachers', {
	    url : '/Teachers',
	    templateUrl: 'app/components/Teachers/Teachers.html',
	    controller: 'TeachersController'
	  })
});
