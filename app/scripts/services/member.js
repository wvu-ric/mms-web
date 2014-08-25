'use strict';

angular.module('mms.models')
  .service('Member', function Member($q) {
    var Member = {};

    Member.where = function(params){
      var deferred = $q.defer();
      var member =
        {
          name:"MorgantownBrewingCo",
          id:"1",
          created:1401898727177,
          updated:1401898727177,
          object:"Member",
          email:"contact@morgantownbrewingcompany.com",
          address:"",
          location:[38.612578,-81.210937],
          description:"",
          twitterUsername:"",
          feeds:[],
          categories:[],
          phone:"",
          icon:"",
          images:[],
          hashtags:["#Morgantown", "#LastManStanding", "#FreeBeer"],
          hours:{
            monday:"11am - 2am",
            tuesday:"11am - 2am",
            wednesday:"11am - 2am",
            thursday:"11am - 2am",
            friday:"11am - 2am",
            saturday:"11am - 2am",
            sunday:"12pm - 1am"
          },
          website:"http://www.morgantownbrewing.com/"
        };

      deferred.resolve(member);

      return deferred.promise;
    };
    return Member;
  });
