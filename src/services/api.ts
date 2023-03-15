import axios, { AxiosRequestConfig } from "axios";

const token = "394772d23dfb455a9fc5ee31ce8ee53a";

export const headers = {
  headers: {
    "Content-Type": "application/json",
    accessKey: `${token}`,
  },
};

export const config: AxiosRequestConfig = {
  baseURL: "https://heroes.globalthings.net/api",
  headers: headers.headers,
};

const requestAxios = axios.create(config);

requestAxios.interceptors.response.use(
  (request) => request,
  (error) => Promise.reject(error)
);

requestAxios.interceptors.response.use(
  (response) => response,
  (error) => console.error(error.response)
);

export default requestAxios;
