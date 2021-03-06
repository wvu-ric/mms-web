'use strict';

angular.module('mms.mocks').factory('StoryMock', function () {
  var StoryMock = {};
  StoryMock.all = function () {
    return [
      {
        author     : 'MorgantownBrewingCo',
        authorId   : '1',
        images     : [],
        links      : ['https://twitter.com/MgtnBrewCo/status/502166523654717440'],
        hashtags   : [],
        sourceType : 'Twitter',
        sourceUrl  : 'https://twitter.com/MgtnBrewCo/status/502166523654717440',
        highlighted: false,
        created    : 1401898727177,
        updated    : 1401898727177,
        body       : 'NEW ON TAP THIS FRIDAY! Our First Shift Coffee Porter! Need something to bring you out of that long hibernation?',
        image      : 'https://pbs.twimg.com/profile_images/481581706156077058/VDkJuMt7.png',
        location   : [39.630454, -79.957934]
      },
      {
        author     : 'MorgantownBrewingCo',
        authorId   : '1',
        body       : 'Fun at Mountaineer Brewfest in Wheeling! — at Wheeling Heritage Port <a href="http://fb.me/2UBb4mMJd">http://fb.me/2UBb4mMJd</a>',
        images     : [],
        links      : [],
        location   : [],
        hashtags   : [],
        sourceType : 'Twitter',
        sourceUrl  : 'https://twitter.com/MgtnBrewCo/status/500847187173990401',
        highlighted: false,
        created    : 1401898727177,
        updated    : 1401898727177,
        image      : 'https://pbs.twimg.com/profile_images/481581706156077058/VDkJuMt7.png'
      },
      {
        author     : 'Gibbies Pub & Eatery',
        authorId   : '2',
        body       : 'I have exactly 3 words for you: SOUL MINERS SATURDAY!!!!!!',
        images     : [],
        links      : [],
        location   : [],
        hashtags   : [],
        sourceType : 'Twitter',
        sourceUrl  : 'https://twitter.com/gibbiespub/status/500772676546600960',
        highlighted: false,
        created    : 1401898727177,
        updated    : 1401898727177,
        image      : 'https://pbs.twimg.com/profile_images/480511952276303872/d6sFg-r1.jpeg'
      },
      {
        author     : 'Gibbies Pub & Eatery',
        authorId   : '2',
        body       : 'Rails and Ales Festival in Huntington! Cheers!',
        images     : [],
        links      : [],
        location   : [],
        hashtags   : [],
        sourceType : 'Twitter',
        sourceUrl  : 'https://twitter.com/gibbiespub/status/500772676546600960',
        highlighted: false,
        created    : 1401898727177,
        updated    : 1401898727177,
        image      : 'https://pbs.twimg.com/profile_images/480511952276303872/d6sFg-r1.jpeg'
      }
    ];
  };

  StoryMock.where = function () {
    return [
      {
        author     : 'MorgantownBrewingCo',
        authorId   : '1',
        images     : [],
        links      : ['https://twitter.com/MgtnBrewCo/status/502166523654717440'],
        location   : [],
        hashtags   : [],
        sourceType : 'Twitter',
        sourceUrl  : 'https://twitter.com/MgtnBrewCo/status/502166523654717440',
        highlighted: false,
        created    : 1401898727177,
        updated    : 1401898727177,
        body       : 'NEW ON TAP THIS FRIDAY! Our First Shift Coffee Porter! Need something to bring you out of that long hibernation?... <a href="http://fb.me/1B8sdsOAq">http://fb.me/1B8sdsOAq </a>',
        image      : 'https://pbs.twimg.com/profile_images/481581706156077058/VDkJuMt7.png'
      },
      {
        author     : 'MorgantownBrewingCo',
        authorId   : '1',
        body       : 'Fun at Mountaineer Brewfest in Wheeling! — at Wheeling Heritage Port <a href="http://fb.me/2UBb4mMJd">http://fb.me/2UBb4mMJd</a>',
        images     : [],
        links      : [],
        location   : [],
        hashtags   : [],
        sourceType : 'Twitter',
        sourceUrl  : 'https://twitter.com/MgtnBrewCo/status/500847187173990401',
        highlighted: false,
        created    : 1401898727177,
        updated    : 1401898727177,
        image      : 'https://pbs.twimg.com/profile_images/481581706156077058/VDkJuMt7.png'
      }
    ];
  };
  return StoryMock;
});
