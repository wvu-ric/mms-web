'use strict';

angular.module('mms.models')
  .service('Member', function Member($q) {
    var Member = {};

    Member.where = function(params){
      var deferred = $q.defer();
      var member =
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
          body:"NEW ON TAP THIS FRIDAY! Our First Shift Coffee Porter! Need something to bring you out of that long hibernation?... http://fb.me/1B8sdsOAq ",
          image:"https://pbs.twimg.com/profile_images/481581706156077058/VDkJuMt7.png"
        };

      deferred.resolve(member);

      return deferred.promise;
    };
    return Member;
  });
