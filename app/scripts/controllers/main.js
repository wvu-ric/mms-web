'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, MapConfig, Story, Member, Category) {

    function init(){
      $scope.map = {};
      $scope.map.config = MapConfig.start();
      $scope.map.refresh = false;

      Category.current().then(function(_categories){
        $scope.categories = _categories;
      });

      Story.all().then(function (stories) {
        $scope.stories = stories;
        $scope.topStory = $scope.stories[0];
      });
    }

    $scope.setTopStory = function (index) {
      $scope.topStory = $scope.stories[index];
    };

    $scope.storyClass = function (index) {
      var type = $scope.stories[index].type();
      return type;
    };


    init();
  });