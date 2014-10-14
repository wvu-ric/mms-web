'use strict';

angular.module('mms.components')
  .filter('categoryName', function () {
    return function (input) {
      return 'categoryName filter: ' + input;
    };
  });
