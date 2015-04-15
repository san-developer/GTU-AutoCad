angular
  .module('InventorControllerModule', [])
  .controller("InventorController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[4];

  }]);