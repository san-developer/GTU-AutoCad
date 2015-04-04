'use strict';

angular
  .module('app', [
    'ui.router',
    'HomeConfigModule',
 
'CoursesConfigModule', 
'TeachersConfigModule', 
'AboutConfigModule', ]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});

angular
  .module('AboutControllerModule', [])
  .controller("AboutController",  ['$scope', function($scope) {

    $scope.msg = "About";

  }]);
angular
  .module('AboutConfigModule',
  ['AboutControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('About', {
	    url : '/About',
	    templateUrl: 'app/components/About/About.html',
	    controller: 'AboutController'
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
	 $stateProvider
	  .state('Courses', {
	    url : '/Courses',
	    templateUrl: 'app/components/Courses/Courses.html',
	    controller: 'CoursesController'
	  })
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
