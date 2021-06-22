import axios from 'axios';

const api = axios.create({
   baseURL: 'http://172.23.196.193:3333'
});

export default api;