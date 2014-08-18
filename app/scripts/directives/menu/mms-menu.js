'use strict';

angular.module('mms.components')
  .directive('mmsMenu', function () {
    return {
      restrict: 'E',
      scope:{
        title:"@",
        description:"@",
        categories:"@"
      },
      templateUrl:'/scripts/directives/menu/mms-menu.html',
      link: function postLink(scope, element, attrs) {
      },
      controller:function($scope, $log){
        $scope.menuOpen = false;
        $scope.toggleMenu = function(){
          $log.debug('mms.components - Menu toggled');
          $scope.menuOpen = !$scope.menuOpen;
        }
      }
    };
  });
