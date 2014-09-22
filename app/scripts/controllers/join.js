'use strict';

angular.module('mms')
  .controller('JoinCtrl', function ($scope, Member, Community) {

    Community.current().then(function(community){
      $scope.community = community;
    });

    $scope.error = {};
    $scope.join = function(){

    };
  });
