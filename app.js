angular.module("myapp", [])
      .controller("HelloController", function($scope) {
        $scope.hello = {};
        $scope.hello.title = "World";

      }).controller("symbols", function($scope) {
              $scope.symbols = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
              $scope.symbols.title = "Big";
            });
            $scope.overSix = function(value) {

            if (value < 6)
              return false;
            else
              return true;

            };
