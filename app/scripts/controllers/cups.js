'use strict';

/**
 * @ngdoc function
 * @name ngPlayApp.controller:CupsCtrl
 * @description
 * # CupsCtrl
 * Controller of the ngPlayApp
 */
angular.module('ngPlayApp')
  .controller('CupsCtrl', function () {
    this.name = "Cupcakes Online Store";
    this.items = [
      {
	id: 1,
	name: "Strawberry cup",
	img: "strawberry_cups.jpg",
	calories: 430,
	rating: 5,
	price: 2.5,
	quantity: 56
      },
      {
	id: 2,
	name: "Chocolate cup",
	img: "chocolate_cups.jpeg",
	calories: 500,
	rating: 5,
	price: 3.0,
	quantity: 89
      }
    ];

    this.buy = function(item) {
	item.quantity -= 1;
    };

    this.return = function(item) {
	item.quantity += 1;
    };

  });
