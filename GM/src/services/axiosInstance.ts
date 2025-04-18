import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
