import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Asegúrate de que esta URL coincida con tu backend
});

export default api;
