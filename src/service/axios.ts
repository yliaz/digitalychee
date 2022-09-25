import axios from "axios";

const TIMEOUT = 10000;
const BASEURL = "https://gateway.lizhi.io/demo/";

const service = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT,
});

service.interceptors.response.use(
  (response) => {
    if (response.data.status !== 0) {
      return Promise.reject(response);
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
