import axios from 'axios';

export const signIn = (account) => {
  const {
    email,
    username,
    password,
    firstName,
    lastName,
  } = account;
  return axios.post('http://localhost:3000/v1/users', {
      email: email,
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
  });
};
