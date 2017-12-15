import { handleActions } from 'redux-actions';
const initialState = {};

export default handleActions({
  SIGN_IN: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
}, initialState);
