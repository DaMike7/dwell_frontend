import axios from 'axios';

axios.defaults.xsrfCookieName = 'crsftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: `${process.env.BACKEND_URL}`
});


export default client;
