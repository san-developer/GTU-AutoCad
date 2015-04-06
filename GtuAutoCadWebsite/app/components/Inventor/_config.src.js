angular
  .module('InventorConfigModule',
  ['InventorControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Inventor', {
	    url : '/Inventor',
	    templateUrl: 'app/components/Inventor/Inventor.html',
	    controller: 'InventorController'
	  })
});
