import axios from 'axios';

axios.defaults.xsrfCookieName = 'crsftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL : 'http://127.0.0.1:8000/'
});

export default client;