import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const baseURL = axios.create({
  baseURL: "http://localhost:3001",
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});
