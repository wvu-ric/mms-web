'use strict';

angular.module('mms.models').factory('Feed', function ($q, $log, $http, API, Story) {
  var Feed = {};

  function findTopStory(stories){
    if(stories.length > 0){
      var highScore = stories[0]['score'];
      var topStory = stories[0];

      angular.forEach(stories, function(story){
        if(story.score > highScore){
          highScore = story.score;
          topStory = story;
        }
      });

      return topStory;
    }
    $log.warn('mms.models:Feed+findTopStory| Cannot find top story in feed of length 0');
  }

  Feed.top = function (categoryId) {
    var deferred = $q.defer();
    var stories = [];
    var categoryParam = "";
    if(categoryId){
      categoryParam = '&categoryId='+categoryId
    }

    $http.get(API.top+'?q-order=desc-score&q-limit=10'+categoryParam).success(function(data){
      angular.forEach(data, function(value){
        stories.push(new Story(value));
      });
      deferred.resolve({all:stories, top:findTopStory(stories)});
    }).error(function(){
      $log.warn('mms.models:Feed+top | Failed to get the top stories feed');
      deferred.reject();
    });

    return deferred.promise;
  };

  return Feed;
});
