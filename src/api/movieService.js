import axios from "axios";

const API_BASE_URL = "http://localhost:8001/api/movies";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};
