angular.module("myapp", [])
    .controller("HelloController", function($scope) {
        $scope.hello = {};
        $scope.hello.title = "World";

    }).controller("symbols", function($scope) {
        $scope.symbols = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
        $scope.symbols.title = "Big";
    }).controller("cameras", function($scope) {
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

$scope.overSix = function(value) {

    if (value < 6)
        return false;
    else
        return true;

};
