'use strict';

angular.module('mms.models')
  .service('Community', function Community($q, CommunityMock) {

    var Community = function (params) {
      if (params) {
        this.loadFromJson(params);
      }
    };

    Community.prototype.loadFromJson = function (json) {
      this.object = json.object;
      this.name = json.name;
      this.location = json.location;
    };

    Community.current = function(){
      var deferred = $q.defer();

      var community = CommunityMock.current();
      deferred.resolve(community);

      return deferred.promise;
    };

    return Community;

  });
