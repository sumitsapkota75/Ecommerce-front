import axios from "axios";
import { firebase } from "./firebase";

/**
 * axios instance
 */

axios.defaults.responseType = "json";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

API.interceptors.request.use(
  async (config) => {
    const token = await firebase.auth().currentUser?.getIdToken(true);
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    // Sentry.captureException(error)
    return Promise.reject(error);
  }
);

export { API };
