angular
  .module('AutoCADMEPControllerModule', [])
  .controller("AutoCADMEPController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[1];

  }]);