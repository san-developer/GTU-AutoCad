angular
  .module('AutoCADCivil3DControllerModule', [])
  .controller("AutoCADCivil3DController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[5];

  }]);