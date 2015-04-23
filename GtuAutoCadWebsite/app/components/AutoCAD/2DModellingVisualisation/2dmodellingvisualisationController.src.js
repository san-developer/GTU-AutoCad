angular
  .module('2DModellingVisualisationControllerModule', [])
  .controller("2DModellingVisualisationController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[0].Programs;

  }]);