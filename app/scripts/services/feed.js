'use strict';

angular.module('mms.models').factory('Feed', function ($q, $log, $http, API, Story) {
  var Feed = {};

  function findTopStory(stories){
    if(stories.length > 0){
      console.log('Aight');
      var highScore = stories[0]['score'];
      var topStory = stories[0];



      angular.forEach(stories, function(story){

        if(story.score > highScore){
          highScore = story.score;
          topStory = story;
          console.log('tight');

        }
      });

      return topStory;
    }
    $log.warn('mms.models:Feed+findTopStory| Cannot find top story in feed of length 0');
  }

  Feed.top = function () {
    var deferred = $q.defer();
    var stories = [];

    $http.get(API.stories+'?q-order=desc-score&q-limit=10').success(function(data){
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
