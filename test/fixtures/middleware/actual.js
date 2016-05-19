export const stickyMiddleware = () => (next) => (action) => {
  return next(action);
};
