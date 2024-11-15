import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    withCredentials: true,
})

axiosInstance.interceptors.request.use((config)=> {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers['x-access-token'] = token;
    }
    return config;
})

export default axiosInstance;
