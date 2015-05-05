angular
  .module('InfrastructureProjectingConfigModule',
  ['InfrastructureProjectingControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('InfrastructureProjecting', {
	      url: '/AutoCADCivil3D/InfrastructureProjecting',
	    templateUrl: 'app/components/AutoCADCivil3D/InfrastructureProjecting/InfrastructureProjecting.html',
	    controller: 'InfrastructureProjectingController'
	  })
});
