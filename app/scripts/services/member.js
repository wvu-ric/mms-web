'use strict';

angular.module('mms.models')
  .service('Member', function Member($q, $log) {
    var Member = function(email){
      if(email){
        this.email = email;
      }
    };
    Member._current = null;

    Member.prototype.login = function(password){
      $log.info('mms:member-login | logging in as '+this.email);
      var deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    };

    Member.current = function(){
      return Member._current;
    };

    //Private
    Member._setCurrent = function(member){
      Member._current = member;
    };

    Member.where = function(params){
      var deferred = $q.defer();
      var member =
        {
          name:"Morgantown Brewing Co",
          id:"1",
          created:1401898727177,
          updated:1401898727177,
          object:"Member",
          email:"contact@morgantownbrewing.com",
          address:"1291 University Ave., Morgantown, WV 26505",
          description:"West Virginia's oldest Brewpub is at it again!",
          twitterUsername:"@MgtnBrewCo",
          feeds:[],
          categories:["nightlife", "bar", "pub"],
          location:[39.630454, -79.957934],
          phone:"(304) 292-6959",
          icon:"https://pbs.twimg.com/profile_images/481581706156077058/VDkJuMt7.png",
          images:["https://pbs.twimg.com/media/BuntTzcIEAE_RDZ.jpg","https://pbs.twimg.com/media/BsxILezCcAADg6q.jpg","https://pbs.twimg.com/media/Bsw_fmlCcAA9JXm.jpg","https://pbs.twimg.com/media/BsHgCgPCEAA3Ovx.jpg"],
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
