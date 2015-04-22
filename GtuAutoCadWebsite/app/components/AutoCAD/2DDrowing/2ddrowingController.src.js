angular
  .module('2DDrowingControllerModule', [])
  .controller("2DDrowingController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[0].Programs;

  }]);