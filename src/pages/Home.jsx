// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api/movies";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchMovies();

        if (!Array.isArray(data)) {
          console.error("Movie data is not an array:", data);
          throw new Error("Movie data is malformed");
        }

        setMovies(data);
      } catch (err) {
        console.error("Fetching movies failed:", err);
        setError("Failed to load movies.");
      }
    };

    load();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!movies.length) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {movies.map((movie, idx) => (
        <MovieCard key={movie.id || idx} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
