'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, MapConfig, Story, Member) {

    $scope.map={};
    $scope.map.config = MapConfig.start();
    $scope.map.refresh = false;

    Story.all().then(function(stories){
      $scope.stories = stories;
      $scope.topStory = $scope.stories[0];
    });

    $scope.selectStory = function(index){
      $scope.topStory = $scope.stories[index];
    };

    Member.where({id:$scope.id}).then(function(member){
      $scope.member = member;
    });

  });

'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope) {

    $scope.menuOpen = false;

    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    };


  });
