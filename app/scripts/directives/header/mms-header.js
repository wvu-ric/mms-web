'use strict';

angular.module('mms.components')
  .directive('mmsHeader', function () {
    return {
      restrict: 'E',
      scope:{
        title:"@"
      },
      templateUrl:'/scripts/directives/header/mms-header.html',
      link: function postLink(scope, element, attrs) {
      },
      controller:function($scope, $log, $rootScope, $route, $location){
        $scope.menuOpen = false;
        $scope.toggleMenu = function(){
          $log.debug('mms.components - Menu toggled');
          $scope.menuOpen = !$scope.menuOpen;
        };

        function checkRoute(){
          if($route.current.loadedTemplateUrl == "views/main.html"){
            $log.debug('mms.components - Root page');
            $scope.isChildPage = false;
          }
          else{
            $log.debug('mms.components - Child page');
            $scope.isChildPage = true;
          }
        }

        $scope.back = function(){
          $location.path( "/" );
        };

        $rootScope.$on('$locationChangeSuccess', function() {
          checkRoute();
        });

        $rootScope.$on('$routeChangeSuccess', function() {
          checkRoute();
        });

        checkRoute();

      }
    };
  });
