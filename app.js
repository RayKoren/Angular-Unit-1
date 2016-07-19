angular.module("myapp", [])
      .controller("HelloController", function($scope) {
        $scope.hello = {};
        $scope.hello.title = "World";
      });
