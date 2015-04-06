angular
  .module('3dsMaxConfigModule',
  ['3dsMaxControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('3dsMax', {
	    url : '/3dsMax',
	    templateUrl: 'app/components/3dsMax/3dsMax.html',
	    controller: '3dsMaxController'
	  })
});
