'use strict';

angular.module('mms.models')
  .service('Member', function Member($q, $log, $http, API) {
    var Member = function(email){
      if(email){
        this.email = email;
      }
    };
    Member._current = null;

    Member.prototype.login = function(password){
      $log.info('mms:member-login | logging in as '+this.email);
      var deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    };

    Member.current = function(){
      return Member._current;
    };

    //Private
    Member._setCurrent = function(member){
      Member._current = member;
    };

    Member.all = function(){
      var deferred = $q.defer();

      $http.get(API.members).success(function(data){
        deferred.resolve(data);
      }).error(function(){
        $log.warn('mms.models:Community+current | Failed to get the current member');
        deferred.reject();
      });

      return deferred.promise;

    };

    return Member;
  });
