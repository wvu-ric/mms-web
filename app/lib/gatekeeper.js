'use strict';
angular.module('gatekeeper', []).config(function() {});

angular.module('gatekeeper').service('GateKeeper', function GateKeeper($log) {
    var GateKeeper = {};
    $log.debug('gatekeeper:GateKeeper | GateKeeper on the scene.');

    GateKeeper.unlocked = true;
    GateKeeper.publicRoutes = [];
    GateKeeper.onLockActions = [];
    GateKeeper.onUnlockActions = [];
    GateKeeper.bouncer = null;
    GateKeeper.scope = null;

    GateKeeper.watch = function(scope){
      $log.debug('gatekeeper:GateKeeper+watch | GateKeeper now on duty.');
      GateKeeper.scope = scope;

      scope.$on('$locationChangeSuccess', function(event, nextUrl) {
        if(!GateKeeper.unlocked){
          var allowed = false;
          angular.forEach(GateKeeper.publicRoutes, function(route){
            if(nextUrl.indexOf(route) > -1 ){
              allowed = true;
              $log.debug('gatekeeper:GateKeeper+$on.$locationChangeSuccess | Everything looks in order, keep it moving.');
            }
          });
          if(!allowed){
            if(GateKeeper.bouncer){
              $log.warn('gatekeeper:GateKeeper+$on.$locationChangeSuccess | You shall not pass! The bouncer\'s got this one.');
              GateKeeper.bouncer(event, nextUrl);
            }
            else{
              $log.warn('gatekeeper:GateKeeper+$on.$locationChangeSuccess | You shall not pass! Preventing route change to '+nextUrl);
              event.preventDefault();
            }
          }
        }
        else{
          $log.debug('gatekeeper:GateKeeper+$on.$locationChangeSuccess | Come on in, everything\'s unlocked.');
        }
      });
    };

    GateKeeper.lock = function(keyFn, bounceFn){
      if(GateKeeper.unlocked){
        if(!keyFn || keyFn()){
          $log.debug('gatekeeper:GateKeeper+lock | GateKeeper locking it down.');
          GateKeeper.unlocked = false;
          GateKeeper.bouncer = bounceFn;
          angular.forEach(GateKeeper.onLockActions, function(action){
            action();
          });
          return true;
        } else{
          $log.debug('gatekeeper:GateKeeper+lock | Nevermind, you\'ve got a key.');
          angular.forEach(GateKeeper.onUnlockActions, function(action){
            action();
          });
        }
      }
      return false;
    };

    GateKeeper.unlock = function(){
      if(!GateKeeper.unlocked){
        $log.debug('gatekeeper:GateKeeper+unlock | GateKeeper opening it up.');
        GateKeeper.unlocked = true;
        angular.forEach(GateKeeper.onUnlockActions, function(action){
          action();
        });
        return true;
      }
      return false;
    };

    GateKeeper.allow = function(allowedRoutes){
      $log.debug('gatekeeper:GateKeeper+allow | GateKeeper setting allowed areas.');
      GateKeeper.publicRoutes = allowedRoutes;
    };

    GateKeeper.onUnlock = function(action){
      GateKeeper.onUnlockActions.push(action);
    };

    GateKeeper.onLock = function(action){
      GateKeeper.onLockActions.push(action);
    };


    return GateKeeper;
  });