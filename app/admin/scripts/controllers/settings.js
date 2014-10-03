'use strict';

angular.module('mms.admin')
  .controller('SettingsCtrl', function ($scope) {

    $scope.selected = "password";

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
