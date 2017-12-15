import axios from 'axios';

export const signIn = (account) => {
  const {
    email,
    username,
    password,
    firstName,
    lastName,
  } = account;
  return axios.post('/users', {
      email: email,
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
  });
};
