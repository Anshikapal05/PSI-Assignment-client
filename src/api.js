import axios from "axios";
const BASE_URL = "https://psi-assignment-server.onrender.com";

const API = axios.create({
  baseURL: BASE_URL,
});

// Attach token from localStorage if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
