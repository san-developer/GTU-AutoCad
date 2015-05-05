angular
  .module('AutoCADCivil3DConfigModule',
  ['AutoCADCivil3DControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutoCADCivil3D', {
	      url: '/AutoCADCivil3D',
	    templateUrl: 'app/components/AutoCADCivil3D/AutoCADCivil3D.html',
	    controller: 'AutoCADCivil3DController'
	  })
});
