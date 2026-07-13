import axios from "axios";
export const LOCAL_STORAGE_TOKEN = 'token'

export const api = axios.create({
    baseURL: "http://localhost:7000/api",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

