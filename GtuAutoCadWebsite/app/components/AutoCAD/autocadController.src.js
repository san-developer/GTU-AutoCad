angular
  .module('AutoCADControllerModule', [])
  .controller("AutoCADController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[0];

  }]);