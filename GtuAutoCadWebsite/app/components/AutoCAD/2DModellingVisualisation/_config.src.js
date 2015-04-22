angular
  .module('2DModellingVisualisationConfigModule',
  ['2DModellingVisualisationControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('2DModellingVisualisation', {
	      url: '/AutoCAD/2DModellingVisualisation',
	    templateUrl: 'app/components/AutoCAD/2DModellingVisualisation/2DModellingVisualisation.html',
	    controller: '2DModellingVisualisationController'
	  })
});
