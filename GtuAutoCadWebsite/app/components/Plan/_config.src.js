angular
  .module('PlanConfigModule',
  ['PlanControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Plan', {
	    url : '/Plan',
	    templateUrl: 'app/components/Plan/Plan.html',
	    controller: 'PlanController'
	  })
});
