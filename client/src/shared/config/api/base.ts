import axios from "axios";
import { LOCAL_STORAGE_TOKEN } from "./consts";

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

