'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, MapConfig) {
    $scope.map={};
    $scope.map.config = MapConfig.start();
    $scope.map.refresh = false;

    $scope.items = [];

  });

'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope) {
    $scope.categories = ['Startups', 'Design', 'Funding', 'Business'];
  });
