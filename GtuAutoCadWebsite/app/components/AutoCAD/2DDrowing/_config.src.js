angular
  .module('2DDrowingConfigModule',
  ['2DDrowingControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('2DDrowing', {
	      url: '/AutoCAD/2DDrowing',
	    templateUrl: 'app/components/AutoCAD/2DDrowing/2DDrowing.html',
	    controller: '2DDrowingController'
	  })
});
