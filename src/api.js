import axios from "axios"


export const BaseUrl = 'http://127.0.0.1:8000'

const api = axios.create({
  baseURL: BaseUrl,
});

export default api