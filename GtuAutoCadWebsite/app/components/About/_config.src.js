angular
  .module('AboutConfigModule',
  ['AboutControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('About', {
	    url : '/About',
	    templateUrl: 'app/components/About/About.html',
	    controller: 'AboutController'
	  })
});
