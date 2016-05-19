const cartSelector = createSelector(
    (state) => state.data.carts,
    (state) => state.ui.settings.salesChannels.editID,
    (carts, id) => carts[id]
);

const mapStateToProps = createStructuredSelector({
    id: createSelector(
        cartSelector,
        (cart) => cart.id
    ),
    currentVendor: createSelector(
        cartSelector,
        (cart) => cart.vendor
    ),
    authorizeMessage: createSelector(
        cartSelector,
        (cart) => formatAuthorizeMessage(vendorActions[cart.vendor].name)
    ),
    isSubmitting: (state) => state.ui.settings.salesChannels.isReauthorizeSubmitting,
});
