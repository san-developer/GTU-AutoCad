angular
  .module('AboutControllerModule', [])
  .controller("AboutController",  ['$scope', function($scope) {

    $scope.msg = "About";

  }]);