'use strict';

angular.module('mms.components')
  .filter('link', function ($log) {
    return function (resource) {
      if(resource && resource['object']){ //Can't be too careful these days.
        switch(resource.object.toLowerCase()) {
          case 'category':
            return '#/category/'+resource.id;
            break;
          case 'member':
            return '#/member/'+resource.id;
            break;
          default:
            $log.warn('mms.components:Link | Failed to build link from object of type '+resource.object);
            return '';
        }
      }
    };
  });
