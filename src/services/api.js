import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cpay-api.herokuapp.com',
});

export default api;
