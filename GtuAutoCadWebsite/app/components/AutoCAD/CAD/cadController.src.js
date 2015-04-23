angular
  .module('CADControllerModule', [])
  .controller("CADController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[0].Programs;

  }]);