angular
  .module('AllCoursesConfigModule',
  ['AllCoursesControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AllCourses', {
	    url : '/AllCourses',
	    templateUrl: 'app/components/AllCourses/AllCourses.html',
	    controller: 'AllCoursesController'
	  })
});
