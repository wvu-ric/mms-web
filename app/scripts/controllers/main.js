'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope) {
    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };
  });

'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope) {
    $scope.menuOpen = false;
    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    }
  });
