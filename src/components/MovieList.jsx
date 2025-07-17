import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api/movies"; // Adjust path if different
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        if (!Array.isArray(data)) throw new Error("Invalid movie data.");
        setMovies(data);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setError("Could not load movies.");
      }
    };

    loadMovies();
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!movies.length) return <p className="text-center">Loading movies...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
