import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const conf: AxiosRequestConfig = {
    baseURL: 'https://picsum.photos/',
};

const api: AxiosInstance = axios.create(conf);

export default api;
