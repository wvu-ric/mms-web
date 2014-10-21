'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, $location, $log, MapConfig, Feed, Member, Category, Community) {

    function init(){
      $scope.map = {};
      $scope.map.config = MapConfig.start();
      $scope.map.refresh = false;

      Category.current().then(function(_categories){
        $scope.categories = _categories;
        console.log(_categories);
      });

      $scope.categoryForId = function(id){
        var name = "";
        angular.forEach($scope.categories, function(value, index){
          if (value.id == id){
            name = value.name;
          }
        });
        return name;
      };

      Feed.top().then(function (feed) {
        $scope.stories = feed.all;
        $scope.topStory = feed.top;
      });

      Community.current().then(function(_community){
        $scope.community = _community;
        $scope.map.config.center = {
          latitude: _community.location[1],
          longitude: _community.location[0]
        };
        console.log($scope.map.config.center);
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
