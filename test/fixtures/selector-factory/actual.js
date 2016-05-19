export const makeOrderSelector = () => createSelector(
    (state) => state.data.orders,
    (state, props) => props.orderNumber,
    (orders, orderNumber) => orders[orderNumber]
);
