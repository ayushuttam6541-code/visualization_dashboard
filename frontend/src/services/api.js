import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const getInsights = async () => {
  try {
    console.log("Fetching from:", API_BASE_URL);
    const response = await API.get("/insights");
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    console.error("API Base URL:", API_BASE_URL);
    if (error.response) {
      console.error("Error response:", error.response.status, error.response.data);
    }
    throw error;
  }
};