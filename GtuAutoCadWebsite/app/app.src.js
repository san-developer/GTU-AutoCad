'use strict';

angular
  .module('app', [
    'ui.router',
    'HomeConfigModule',
 
'CoursesConfigModule', 
'TeachersConfigModule', 
'AboutConfigModule', ]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});
