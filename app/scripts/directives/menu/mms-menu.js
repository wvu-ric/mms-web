'use strict';

angular.module('mms.components')
  .directive('mmsMenu', function () {
    return {
      restrict: 'E',
      scope:{
        open:"@"
      },
      templateUrl:'/scripts/directives/menu/mms-menu.html',
      link: function postLink(scope, element, attrs) {
      },
      controller:function($scope, $log, $rootScope, $route, $location){

      }
    };
  });
