'use strict';

angular.module('mms.components')
  .filter('categoryName', function (Category, $log) {
    return function (input) {
      $log.debug('mms.components:categoryName | Searching for category '+input);
      var categories = null;
      var foundCategory = null;
      var success = function(_data){
        categories = _data;
        angular.forEach(categories, function(category, index){
          if(category['id']==input){
            foundCategory = category;
          }
        });
      };

      Category.current().then(success);

      if(foundCategory){
        $log.debug('mms.components:categoryName | Found category '+foundCategory['name']);
        return foundCategory['name'];
      }
    };
  });
