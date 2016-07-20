var app = angular.module("myapp", []);
    app.controller("HelloController", function($scope) {
        $scope.hello = {};
        $scope.hello.title = "World";

    });
    app.controller("symbols", function($scope) {
        $scope.symbols = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
        $scope.symbols.title = "Big";
    });
    app.controller("cameras", function($scope) {
        $scope.cameras = [{
            title: 'Nikon D3100 DSLR',
            image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
            rating: 3.4,
            price: 369.99,
            onSale: true
        }, {
            title: 'Canon EOS 70D',
            image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
            rating: 2.0,
            price: 1099.0,
            onSale: false
        }, {
            title: 'Nikon D810A',
            image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
            rating: 4.2,
            price: 3796.95,
            onSale: true
        }];

    });

    app.controller("MyFirstController", function($scope){
      $scope.name = "Severus Snape";
    });

    app.controller("exerciseController", function($scope){
      $scope.favColor = 'Blue';
      $scope.secondsInACentury = (60 * 60 * 24 * 365 * 100);
      $scope.rN = Date.now();
    });
app.controller("click", function($scope){
  $scope.view = {};
  $scope.view.number = 5;
  $scope.pickRandomNumber = function() {
  $scope.view.number = Math.floor(Math.random() * 10) + 1;
};

});
