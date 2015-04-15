angular
  .module('MayaControllerModule', [])
  .controller("MayaController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[6];

  }]);