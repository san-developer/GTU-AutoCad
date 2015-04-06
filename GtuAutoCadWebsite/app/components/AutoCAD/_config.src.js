angular
  .module('AutoCADConfigModule',
  ['AutoCADControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutoCAD', {
	    url : '/AutoCAD',
	    templateUrl: 'app/components/AutoCAD/AutoCAD.html',
	    controller: 'AutoCADController'
	  })
});
