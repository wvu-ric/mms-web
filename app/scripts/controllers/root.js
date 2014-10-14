'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope, $log, $rootScope, $location, GateKeeper, User) {

    $scope.menuOpen = false;

    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    };

    GateKeeper.watch($rootScope);
    GateKeeper.allow(['/login', '/join', '/']);
    GateKeeper.onUnlock(function(){
      $log.info('mms : RootCtrl+GateKeeper.onUnlock | Unlocked admin console');
    });

    GateKeeper.lock(function(){
      return !User._current;
    }, function(){
      $location.path('/login');
    });
  });
