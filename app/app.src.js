'use strict';

angular
  .module('app', [
    'ui.router',
    'HomeConfigModule',
 
'CoursesConfigModule', 
'TeachersConfigModule', ]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});
