'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope) {

    $scope.map = {
      center: {
        latitude: 39.630454,
        longitude: -79.957934
      },
      zoom: 17,
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
