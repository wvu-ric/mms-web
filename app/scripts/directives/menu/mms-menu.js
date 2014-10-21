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
      controller:function($scope, $log, $rootScope, $route, $location, Category, Community){

        function init(){
          //Fetch the community name & info
          Community.current().then(function(_community){
            $scope.community = _community;
          }, function(){
            
          });

          //Fetch the categories
          Category.current().then(function(_categories){
            $scope.categories = _categories;
          }, function(){

          });
        }

        init();
      }
    };
  });
