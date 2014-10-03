'use strict';

/**
 * @ngdoc function
 * @name mmsadminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mmsadminApp
 */
angular.module('mms.admin')
  .controller('ProfileCtrl', function ($scope) {

    $scope.selected = "profile";

    $scope.select = function(tab){
      $scope.selected = tab;
    };

    $scope.isSelected = function(tab){
      if($scope.selected.indexOf(tab)>=0){
        return {'selected':true};
      }
    };

    $scope.show = function(tab){
      if($scope.selected.indexOf(tab)>=0){
        return true;
      }
    };

  });
