'use strict';

angular.module('mms.mocks').factory('CommunityMock', function () {
  var CommunityMock = {};

  CommunityMock.current = function () {
    return {
        object      : 'Community',
        name        : 'Morgantown, WV',
        location    : [38.612578, -81.210937],
        description : "Whether you’re in town for a conference at the Waterfront Place Hotel, attending a WVU Football or Basketball game, or exploring the great outdoors, Morgantown is a city that has something for everyone.",
        url         : "http://www.morgantownwv.gov/"
      };
  };
  return CommunityMock;
});
