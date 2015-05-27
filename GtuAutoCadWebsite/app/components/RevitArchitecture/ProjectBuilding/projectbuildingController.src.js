angular
  .module('ProjectBuildingControllerModule', [])
  .controller("ProjectBuildingController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[1].Programs;

  }]);