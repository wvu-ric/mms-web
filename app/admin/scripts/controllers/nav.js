'use strict';

angular.module('mms.admin')
  .controller('NavCtrl', function ($scope, $location, $window, $routeParams) {
    $scope.isActive = function(route){

      if($location.path().indexOf(route)>=0){
        return {'active':true};
      }
    };

    $scope.back = function(){
      var lastIndex = $location.path().lastIndexOf('/');
      var path = $location.path().substring(0, lastIndex);
      $location.path(path);
    };

    $scope.isDetail = function(){
      return $routeParams['id'];
    };

    $scope.isOrganizer = function(){
      return false;
    };

    $scope.logout = function(){
      $window.location.href = "/";
    }

  });
