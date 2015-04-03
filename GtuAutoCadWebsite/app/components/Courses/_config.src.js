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
