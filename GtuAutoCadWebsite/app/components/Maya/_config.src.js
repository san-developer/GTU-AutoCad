angular
  .module('MayaConfigModule',
  ['MayaControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Maya', {
	    url : '/Maya',
	    templateUrl: 'app/components/Maya/Maya.html',
	    controller: 'MayaController'
	  })
});
