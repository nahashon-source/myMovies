// src/api/movies.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8001/api/movies";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    
    const data = response.data;
    
    // Handle paginated or flat arrays
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.results)) return data.results;

    console.error("Unexpected API response:", data);
    throw new Error("Invalid movie data format.");
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw new Error("Failed to fetch movies.");
  }
};
