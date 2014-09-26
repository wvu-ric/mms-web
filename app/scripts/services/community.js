'use strict';

angular.module('mms.models')
  .service('Community', function Community($q, $http, $log, API) {
    var CommunityService = function (params) {                    //Constructor
      if (params) {
        this.loadFromJson(params);
      }
    };

    CommunityService._current = null;                             //Private var

    CommunityService.prototype.loadFromJson = function (json) {   //Public method
      this.object = json.object;
      this.name = json.name;
      this.location = json.location;
      this.url = json.url;
      this.description = json.description;
    };

    CommunityService.current = function(){                        //Singleton
      var deferred = $q.defer();

      //Fetch from server once, doesn't change frequently
      if(!CommunityService._current){
        $http.get(API.community).success(function(data){
          CommunityService._current = new CommunityService(data);
          deferred.resolve(CommunityService._current);
        }).error(function(){
          $log.warn('mms.models:Community+current | Failed to get the current community');
          deferred.reject();
        });
      }
      else{
        deferred.resolve(CommunityService._current);
      }

      return deferred.promise;
    };

    return CommunityService;
  });
