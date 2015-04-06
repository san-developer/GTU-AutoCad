angular
  .module('RevitArchitectureConfigModule',
  ['RevitArchitectureControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('RevitArchitecture', {
	    url : '/RevitArchitecture',
	    templateUrl: 'app/components/RevitArchitecture/RevitArchitecture.html',
	    controller: 'RevitArchitectureController'
	  })
});
