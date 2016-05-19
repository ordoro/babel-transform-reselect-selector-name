"use strict";

var cartSelector = createSelector("actual.js:cartSelector", function (state) {
  return state.data.carts;
}, function (state) {
  return state.ui.settings.salesChannels.editID;
}, function (carts, id) {
  return carts[id];
});

var mapStateToProps = createStructuredSelector({
  id: createSelector("actual.js:id", cartSelector, function (cart) {
    return cart.id;
  }),
  currentVendor: createSelector("actual.js:currentVendor", cartSelector, function (cart) {
    return cart.vendor;
  }),
  authorizeMessage: createSelector("actual.js:authorizeMessage", cartSelector, function (cart) {
    return formatAuthorizeMessage(vendorActions[cart.vendor].name);
  }),
  isSubmitting: function isSubmitting(state) {
    return state.ui.settings.salesChannels.isReauthorizeSubmitting;
  }
});
