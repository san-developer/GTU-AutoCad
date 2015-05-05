'use strict';

angular
  .module('app', [
    'ui.router',
    'HomeConfigModule',
    'firebase',
  ]).config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
  }).controller("MainCtrl", ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
      debugger;

      var ref = new Firebase("https://gtu-autodesk.firebaseio.com/students");
      $scope.students = $firebaseArray(ref);
      debugger;
  }]);
