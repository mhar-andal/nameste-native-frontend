import axios from 'axios';
import * as account from './Account/endpoints';

// REQUEST
axios.interceptors.request.use((config) => {
  const newConfig = config;

  const baseURL = 'http://localhost:3000/v1'

  newConfig.headers['Content-Type'] = 'application/json';
  newConfig.url = baseURL + newConfig.url;

  return newConfig;
}, (err) => {
  return Promise.reject(err); // eslint-disable-line
});

// RESPONSE
axios.interceptors.response.use((response) => {
  return response;
}, (err) => {
  console.log('ERROR: ', err);

  return Promise.reject(err); //eslint-disable-line
});

export default {
  account,
};
