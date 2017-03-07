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
    this.items = [
      {
	id: 1,
	name: "Strawberry cup",
	img: "strawberry_cups.jpg",
	calories: 430,
	rating: 5,
	count: 2
      },
      {
	id: 2,
	name: "Chocolate cup",
	img: "chocolate_cups.jpeg",
	calories: 500,
	rating: 5,
	count: 13
      }
    ];

    this.increment = function(item) {
	item.rating = ((item.rating * 10) + 1) / 10;
    };

    this.decrement = function(item) {
	item.rating = ((item.rating * 10) - 1) / 10;
    };

  });
