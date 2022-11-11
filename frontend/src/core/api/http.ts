import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants";

export const http: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1/github",
  headers: {
    "Content-Type": "application/json",
  },
});
