angular
  .module('CADConfigModule',
  ['CADControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('CAD', {
	      url: '/AutoCAD/CAD',
	    templateUrl: 'app/components/AutoCAD/CAD/CAD.html',
	    controller: 'CADController'
	  })
});
