'use strict';

var birdSelector = createSelector(function (a) {
  return a.b;
}, function (b) {
  return b;
});

var bird = '🐦';
