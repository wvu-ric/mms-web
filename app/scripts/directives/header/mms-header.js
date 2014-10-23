'use strict';

angular.module('mms.components')
  .directive('mmsHeader', function () {
    return {
      restrict: 'E',
      scope:{
        title:"@"
      },
      templateUrl:'/scripts/directives/header/mms-header.html',
      link: function postLink(scope, element, attrs) {},
      controller:function($scope, $log, $rootScope, $route, $location, $routeParams, $filter, Community, Category){
        $scope.community = null;

        Community.current().then(function(community){
          $scope.community = community;
          if(!$routeParams.id){
            $scope.header = community.name;
          } else{
            $scope.header = $filter('categoryName')(parseInt($routeParams.id));
          }
        });


        $scope.toggleMenu = function(){
          $rootScope.menuOpen = !$rootScope.menuOpen;
          $log.debug('mms.components - Menu toggled '+$rootScope.menuOpen);
        };

        $scope.closeMenu = function(){
          $rootScope.menuOpen = true;
        };

        function checkRoute(){
          $rootScope.menuOpen = false;
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
