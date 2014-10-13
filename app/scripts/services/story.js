'use strict';

angular.module('mms.models').factory('Story', function ($q, $log, $http, API, StoryMock) {

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

  Story._all = function () {
    var deferred = $q.defer();
    var stories = [];

    $http.get(API.stories+'?q-order=desc-score').success(function(data){
      angular.forEach(data, function(value){
        stories.push(new Story(value));
      });
      deferred.resolve(stories);
    }).error(function(){
      $log.warn('mms.models:Story+all | Failed to get the stories');
      deferred.reject();
    });

    return deferred.promise;
  };
  Story.all = function () {
    var deferred = $q.defer();
    var data = StoryMock.all();
    var stories = [];
    angular.forEach(data, function(value){
      stories.push(new Story(value));
    });
    deferred.resolve(stories);

    return deferred.promise;
  };
  return Story;
});
