'use strict';

angular.module('mms.admin')
  .controller('NavCtrl', function ($scope, $location, $window) {
    $scope.isActive = function(route){

      if($location.path().indexOf(route)>=0){
        return {'active':true};
      }

    };

    $scope.isOrganizer = function(){
      return true;
    };

    $scope.logout = function(){
      $window.location.href = "/";
    }

  });
