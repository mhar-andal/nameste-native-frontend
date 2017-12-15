import { capture } from 'store/errors';

// api middleware for redux to support promises
export const apiMiddleware = () => {
  return next => (action) => {
    const { promise, type, ...rest } = action;

    // if we dont have a promise, continue dispatching
    if (!promise) return next(action);

    // names for promise state dispatches
    const SUCCESS = type;
    const REQUEST = `${type}_REQUEST`;

    // dispatch 'type_REQUEST' at the start of the promise
    next({ ...rest, type: REQUEST, isFetching: true });

    // dispatch based on promise completion
    return promise
      .then((payload) => {
        // we do .data because of axios
        next({ ...rest, payload: payload.data, type: SUCCESS, isFetching: false });
        return { payload: payload.data };
      })
      .catch((error) => {

        return Promise.reject(error); // eslint-disable-line
      });
  };
};

export const errorMiddleware = () => {
  return next => (action) => {
    try {
      return next(action);
    } catch (err) {
      next({ error: err, banner: true, type: 'UNEXPECTED_ERROR' });
      capture(err, 'Redux Error');
      throw err;
    }
  };
};
