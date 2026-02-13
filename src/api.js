import axios from "axios"


export const BaseUrl = 'http://127.0.0.1:8000'

const api = axios.create({
  baseURL: BaseUrl,
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access"); // get JWT access token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api