'use strict';

angular.module('mms.models')
  .service('User', function($q, $http, $log, API) {

    var User = function(email, token){
      if(email && token){
        this.email = email;
        this.token = token;
      }

      this.auth = function(){
        return '?auth-email='+this.email+'&auth-token='+this.token;
      };
      this.organizer = false;
    };

    User._current = null;

    User.login = function(email, password){
      var deferred = $q.defer();

      //Cache user until logout
      if(!User._current){
        $http.post(API.login,{
          email:email,
          password:password
        }).success(function(data){
          User._current = new User(email, data.token);
          deferred.resolve(User._current);
        }).error(function(error){
          $log.warn('mms.models:User+login | Login failed');
          deferred.reject(error);
        });
      }
      else{
        deferred.resolve(User._current);
      }

      return deferred.promise;
    };

    User.logout = function(){
      var deferred = $q.defer();
      User._current = null;
      deferred.resolve();
      return deferred.promise;
    };

    User.requestInvite = function(name, email, password){
      var deferred = $q.defer();

      //Cache user until logout
      if(!User._current){
        $http.post(API.invite,{
          name:name,
          email:email,
          password:password
        }).success(function(data){
          User._current = new User(email, data.token);
          deferred.resolve(User._current);
        }).error(function(error){
          $log.warn('mms.models:User+requestInvite | Request invite failed');
          deferred.reject(error);
        });
      }
      else{
        deferred.resolve(User._current);
      }

      return deferred.promise;
    };

    return User;
  });
