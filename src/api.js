import axios from 'axios';

axios.defaults.xsrfCookieName = 'crsftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL : 'https://dwell-backend.vercel.app'
});

export default client;
