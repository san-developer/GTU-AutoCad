angular
  .module('AutoCADMEPConfigModule',
  ['AutoCADMEPControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutoCADMEP', {
	    url : '/AutoCADMEP',
	    templateUrl: 'app/components/AutoCADMEP/AutoCADMEP.html',
	    controller: 'AutoCADMEPController'
	  })
});
