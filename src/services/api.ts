import axios from 'axios';

const api = axios.create({
   baseURL: 'http://172.23.74.244:3333'
});

export default api;