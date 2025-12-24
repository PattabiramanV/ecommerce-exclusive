import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
    // Vite proxy handles the base URL (e.g. /api -> http://localhost:5000/api)
    baseURL: "/api",
});

// Request Interceptor: Attach Token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: Handle 401
(error) => {
    if (error.response && error.response.status === 401) {
        // Ignore 401s from the login endpoint itself (wrong credentials)
        // config.url might be "/login" or "login" depending on call
        const requestUrl = error.config.url || "";
        if (!requestUrl.includes("login")) {
            // Token expired or invalid
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
    }
    return Promise.reject(error);
}


export default axiosInstance;
