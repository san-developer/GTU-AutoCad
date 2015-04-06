angular
  .module('AutodeskSketchbookPROConfigModule',
  ['AutodeskSketchbookPROControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutodeskSketchbookPRO', {
	    url : '/AutodeskSketchbookPRO',
	    templateUrl: 'app/components/AutodeskSketchbookPRO/AutodeskSketchbookPRO.html',
	    controller: 'AutodeskSketchbookPROController'
	  })
});
