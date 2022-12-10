import axios from "axios";

const URL = window.location.hostname === "localhost" ? "" : "/proxy";

export const API = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});
