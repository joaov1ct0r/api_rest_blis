import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.ipstack.com',
  responseType: 'json',
});

export { instance };
