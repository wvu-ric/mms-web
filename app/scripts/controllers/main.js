'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, MapConfig, Story, Member) {
    $scope.map = {};
    $scope.map.config = MapConfig.start();
    $scope.map.refresh = false;

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

    Member.where({id: $scope.id}).then(function (member) {
      $scope.member = member;
    });
  });