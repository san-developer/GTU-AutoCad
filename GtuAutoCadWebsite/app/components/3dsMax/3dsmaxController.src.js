angular
  .module('3dsMaxControllerModule', [])
  .controller("3dsMaxController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[2];

  }]);