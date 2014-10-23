'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, $location, $routeParams, $log, MapConfig, Feed, Member, Category, Community) {

    function init(){
      $scope.map = {};
      $scope.map.config = MapConfig.start();
      $scope.map.refresh = false;

      Category.current().then(function(_categories){
        $scope.categories = _categories;
      });

      Feed.top($routeParams.id).then(function (feed) {
        $scope.stories = feed.all;
        $scope.topStory = feed.top;
        $scope.topStoryImage = 'url('+$scope.topStory.images[0]+')';
        $scope.map.refresh = true;
        console.log('Top story of type: '+$scope.topStory.type());
      });

      Community.current().then(function(_community){
        $scope.community = _community;
        $scope.map.config.center = {
          latitude: _community.location[1],
          longitude: _community.location[0]
        };
      });
    }

    $scope.storyClass = function (index) {
      var type = $scope.stories[index].type();
      return type;
    };

    $scope.select = function(index){
      $location.path('/member/'+($scope.stories[index].memberId|1));
    };

    init();
  });
