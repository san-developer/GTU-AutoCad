angular
  .module('ApplyControllerModule', [])
  .controller("ApplyController", ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

      var ref = new Firebase("https://gtu-autodesk.firebaseio.com/students");
      $scope.students = $firebaseArray(ref);

      $scope.addStudent = function () {
          $scope.students.$add($scope.newStudent);
      };

  }]);