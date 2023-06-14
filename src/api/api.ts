import axios from "axios";

const api = axios.create({
  baseURL: "https://api-fullstack-deploy-render.onrender.com",
  timeout: 15000,
});

export { api };
