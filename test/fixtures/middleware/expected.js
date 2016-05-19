"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var stickyMiddleware = exports.stickyMiddleware = function stickyMiddleware() {
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
};
