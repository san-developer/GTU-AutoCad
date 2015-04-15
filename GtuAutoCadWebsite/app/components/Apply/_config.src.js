angular
  .module('ApplyConfigModule',
  ['ApplyControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Apply', {
	    url : '/Apply',
	    templateUrl: 'app/components/Apply/Apply.html',
	    controller: 'ApplyController'
	  })
});
