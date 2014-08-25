'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, MapConfig, Story) {
    $scope.map={};
    $scope.map.config = MapConfig.start();
    $scope.map.refresh = false;

    Story.all().then(function(stories){
      $scope.stories = stories;
    });

    $scope.selectStory = function(index){
      $scope.stories[index].expanded = true;
    };
  });

'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope) {
    $scope.categories = ['Startups', 'Design', 'Funding', 'Business'];
  });
