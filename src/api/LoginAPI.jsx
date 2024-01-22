import axiosClient from "./axiosClient";

const controller = "/Login";

const LoginAPI = {
  login: (params) => {
    const url = `${controller}`;
    return axiosClient.post(url, params);
  },
};

export default LoginAPI;
