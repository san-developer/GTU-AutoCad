angular
  .module('AutodeskSketchbookPROControllerModule', [])
  .controller("AutodeskSketchbookPROController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[5];

  }]);