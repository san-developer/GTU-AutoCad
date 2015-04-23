angular
  .module('3DProjectingConfigModule',
  ['3DProjectingControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('3DProjecting', {
	      url: '/Inventor/3DProjecting',
	    templateUrl: 'app/components/Inventor/3DProjecting/3DProjecting.html',
	    controller: '3DProjectingController'
	  })
});
