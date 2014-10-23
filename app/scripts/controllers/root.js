'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope, $log, $rootScope, $location,GateKeeper, User, Community, Category) {

    function init(){
      $scope.title = 'Loading...' +' • '+ 'Mobile Main Street';
      $scope.menuOpen = false;
      configureGateKeeper();

      Community.current().then(function(_community){
        $scope.community = _community;
        $scope.title = $scope.community.name +' • ' + 'Mobile Main Street';
      });
    };

    function configureGateKeeper(){
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
    }

    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    };

    init();
  });
