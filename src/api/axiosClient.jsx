import axios from "axios";
import store from "../redux/store";
const axiosClient = axios.create({
  baseURL: "http://123.31.17.35:8097",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("jwt")}`;

axiosClient.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
  return config;
});

axiosClient.interceptors.request.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    // handle error
    throw error;
  }
);

export default axiosClient;
