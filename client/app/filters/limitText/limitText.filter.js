'use strict';

angular.module('lumbrjackApp')
  .filter('limitText', function () {
    return function (input, limit) {
      var result, i = limit;
      while (i < input.length) {
        if (input[i] === ' ') {
          result = input.slice(0, i);
          return result;
        } else{
          i++;
        }
      }
    };
  });
