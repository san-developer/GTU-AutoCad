angular
  .module('ProjectBuildingConfigModule',
  ['ProjectBuildingControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('ProjectBuilding', {
	      url: '/RevitArchitecture/ProjectBuilding',
	    templateUrl: 'app/components/RevitArchitecture/ProjectBuilding/ProjectBuilding.html',
	    controller: 'ProjectBuildingController'
	  })
});
