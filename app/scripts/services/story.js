'use strict';

angular.module('mms.models').factory('Story', function ($q, StoryMock, $http, API) {

  var Story = function (params) {
    if (params) {
      this.loadFromJson(params);
    }
  };

  Story.prototype.loadFromJson = function (json) {
    this.author = json.author;
    this.authorId = json.authorId;
    this.images = json.images;
    this.links = json.links;
    this.hashtags = json.hashtags;
    this.sourceType = json.sourceType;
    this.sourceUrl = json.sourceUrl;
    this.highlighted = json.highlighted;
    this.created = json.created;
    this.updated = json.updated;
    this.body = json.body;
    this.image = json.image;
    this.location = json.location;
  };

  Story.prototype.type = function () {
    if (this.images && this.images.length > 0) {            //Image based stories
      return 'image';
    }
    else if (this.location && this.location.length === 2) { //Location centric stories
      return 'location';
    }
    else {                                                  //Text only stories
      return 'text';
    }
  };

  Story.all = function(){                        //Singleton
    var deferred = $q.defer();

    $http.get(API.stories).success(function(data){
      var stories = [];

      angular.forEach(data, function(value){
       stories.push(new Story(value));
      });

      deferred.resolve(stories);
    }).error(function(){
      $log.warn('mms.models:Community+current | Failed to get the current community');
      deferred.reject();
    });

    return deferred.promise;
  };

  Story.where = function () {
    var deferred = $q.defer();
    var data = StoryMock.where();
    var stories = [];
    angular.forEach(data, function(value){
      stories.push(new Story(value));
    });
    deferred.resolve(stories);

    return deferred.promise;
  };
  return Story;
});
