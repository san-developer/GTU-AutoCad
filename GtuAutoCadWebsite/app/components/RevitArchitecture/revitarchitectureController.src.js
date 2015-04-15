angular
  .module('RevitArchitectureControllerModule', [])
  .controller("RevitArchitectureController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[2];

  }]);