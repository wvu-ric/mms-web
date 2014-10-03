'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, MapConfig, Story, Member) {
    $scope.map = {};
    $scope.map.config = MapConfig.start();
    $scope.map.refresh = false;
    $scope.members = [];

    Story.all().then(function (stories) {
      $scope.stories = stories;
      $scope.topStory = $scope.stories[0];
    });

    $scope.setTopStory = function (index) {
      $scope.topStory = $scope.stories[index];
    };

    $scope.storyClass = function (index) {
      var type = $scope.stories[index].type();
      return type;
    };

    Member.all().then(function (member) {
      $scope.members = member;
    });

    $scope.getImage = function(story){
      angular.forEach($scope.members, function(value, key){
        if(story.memberName  = value.name){
          return
        }
      });
    };

  });