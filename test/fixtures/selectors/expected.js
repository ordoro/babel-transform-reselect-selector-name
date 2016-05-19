"use strict";

var cartSelector = createSelector(function (state) {
  return state.data.carts;
}, function (state) {
  return state.ui.settings.salesChannels.editID;
}, function (carts, id) {
  return carts[id];
});

var mapStateToProps = createStructuredSelector({
  id: createSelector(cartSelector, function (cart) {
    return cart.id;
  }),
  currentVendor: createSelector(cartSelector, function (cart) {
    return cart.vendor;
  }),
  authorizeMessage: createSelector(cartSelector, function (cart) {
    return formatAuthorizeMessage(vendorActions[cart.vendor].name);
  }),
  isSubmitting: function isSubmitting(state) {
    return state.ui.settings.salesChannels.isReauthorizeSubmitting;
  }
});
