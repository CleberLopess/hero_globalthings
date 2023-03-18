import axios, { AxiosRequestConfig } from "axios";

const token = "394772d23dfb455a9fc5ee31ce8ee53a";

const headers = {
  "Content-Type": "application/json",
  accessKey: token,
};

const config: AxiosRequestConfig = {
  baseURL: "https://heroes.globalthings.net/api",
  headers,
};

const requestAxios = axios.create(config);

export default requestAxios;
