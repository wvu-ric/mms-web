'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope) {

    $scope.menuOpen = false;

    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    };

  });
