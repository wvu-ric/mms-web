'use strict';

angular.module('mms')
  .controller('MainCtrl', function ($scope, MapConfig) {
    $scope.map={};
    $scope.map.config = MapConfig.start();
    $scope.map.refresh = false;

    $scope.stories = [
      {
        author:"MorgantownBrewingCo",
        authorId:"1",
        images:[],
        links:["https://twitter.com/MgtnBrewCo/status/502166523654717440"],
        location:[],
        hashtags:[],
        sourceType:"Twitter",
        sourceUrl:"https://twitter.com/MgtnBrewCo/status/502166523654717440",
        highlighted:false,
        created:1401898727177,
        updated:1401898727177,
        body:"NEW ON TAP THIS FRIDAY! Our First Shift Coffee Porter! Need something to bring you out of that long hibernation?... http://fb.me/1B8sdsOAq "
      },
      {
        author:"MorgantownBrewingCo",
        authorId:"1",
        body:"Fun at Mountaineer Brewfest in Wheeling! — at Wheeling Heritage Port <a href='http://fb.me/2UBb4mMJd'>http://fb.me/2UBb4mMJd</a>",
        images:[],
        links:[],
        location:[],
        hashtags:[],
        sourceType:"Twitter",
        sourceUrl:"https://twitter.com/MgtnBrewCo/status/500847187173990401",
        highlighted:false,
        created:1401898727177,
        updated:1401898727177
  },{
        author:"Gibbies Pub & Eatery",
        authorId:"2",
        body:"I have exactly 3 words for you: SOUL MINERS SATURDAY!!!!!!",
        images:[],
        links:[],
        location:[],
        hashtags:[],
        sourceType:"Twitter",
        sourceUrl:"https://twitter.com/gibbiespub/status/500772676546600960",
        highlighted:false,
        created:1401898727177,
        updated:1401898727177
      },{
        author:"Gibbies Pub & Eatery",
        authorId:"2",
        body:"Rails and Ales Festival in Huntington! Cheers!",
        images:[],
        links:[],
        location:[],
        hashtags:[],
        sourceType:"Twitter",
        sourceUrl:"https://twitter.com/gibbiespub/status/500772676546600960",
        highlighted:false,
        created:1401898727177,
        updated:1401898727177
      }
    ];

    $scope.selectStory = function(index){

      $scope.stories[index].expanded = true;
    };
  });

'use strict';

angular.module('mms')
  .controller('RootCtrl', function ($scope) {
    $scope.categories = ['Startups', 'Design', 'Funding', 'Business'];
  });
