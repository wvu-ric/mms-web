'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope) {

    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8,
      options:{
        disableDefaultUI:true
      }
    };

    $scope.items = [];


  });

'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope) {
    $scope.categories = ['Startups', 'Design', 'Funding', 'Business'];
  });
