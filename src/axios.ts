import axios from 'axios';

const baseURL = `${import.meta.env.VITE_API_URL}`;

const api = axios.create({
  baseURL,
});

api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common.Accept = 'application/json';

export {api, baseURL};
