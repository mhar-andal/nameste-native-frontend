
import { capture } from 'store/errors';

// api middleware for redux to support promises
// export const apiMiddleware = () => {
//   return next => (action) => {
//     const { promise, type, validate, ...rest } = action;
//
//     // if we dont have a promise, continue dispatching
//     if (!promise) return next(action);
//
//     // names for promise state dispatches
//     const SUCCESS = type;
//     const REQUEST = `${type}_REQUEST`;
//     const FAILURE = `${type}_FAILURE`;
//
//     // dispatch 'type_REQUEST' at the start of the promise
//     next({ ...rest, type: REQUEST, isFetching: true });
//
//     // dispatch based on promise completion
//     return promise
//       .then((payload) => {
//         // we do .data because of axios
//         next({ ...rest, payload: payload.data, type: SUCCESS, isFetching: false });
//         return { payload: payload.data };
//       })
//       .catch((error) => {
//         const banner = action.banner || (!!type.includes('GET'));
//
//         if (validate) {
//           next({ ...rest, type: FAILURE, error: err.errors._error, isFetching: false });
//         } else {
//           next({ ...rest, type: FAILURE, error, banner, isFetching: false });
//         }
//
//         return Promise.reject(error);
//       });
//   };
// };

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
