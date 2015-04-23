angular
  .module('3DProjectingControllerModule', [])
  .controller("3DProjectingController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[4].Programs;

  }]);