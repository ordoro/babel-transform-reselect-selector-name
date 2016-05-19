'use strict';

var birdSelector = createSelector('actual.js:birdSelector', function (a) {
  return a.b;
}, function (b) {
  return b;
});

var bird = '🐦';
