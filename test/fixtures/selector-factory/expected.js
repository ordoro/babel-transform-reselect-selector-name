"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var makeOrderSelector = exports.makeOrderSelector = function makeOrderSelector() {
    return createSelector("actual.js:makeOrderSelector", function (state) {
        return state.data.orders;
    }, function (state, props) {
        return props.orderNumber;
    }, function (orders, orderNumber) {
        return orders[orderNumber];
    });
};
