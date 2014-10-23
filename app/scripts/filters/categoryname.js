'use strict';

angular.module('mms.components')
  .filter('categoryName', function (Category, $log) {
    return function (input, _categories) {
      var categories = _categories || Category._current;;
      var foundCategory = null;

      if(categories){
        angular.forEach(categories, function(category, index){
          if(category['id']==input){
            foundCategory = category;
          }
        });
        if(foundCategory){
          $log.debug('mms.components:categoryName | Identified '+foundCategory['name']);
          return foundCategory['name'];
        }
      }
      $log.warn('mms.components:categoryName | Failed to identify category '+input);


    };
  });
