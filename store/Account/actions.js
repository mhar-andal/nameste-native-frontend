import api from '../api';

export const signIn = account => ({
  type: 'SIGN_IN',
  promise: api.account.signIn(account)
});
