angular
  .module('InfrastructureProjectingControllerModule', [])
  .controller("InfrastructureProjectingController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[5].Programs;

  }]);