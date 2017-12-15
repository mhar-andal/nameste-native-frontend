import { handleActions } from 'redux-actions';
const initialState = {};

export default handleActions({
  SIGN_IN: (state, action) => {
    console.log('action', action);
    return {
      ...state,
    };
  },
}, initialState);
