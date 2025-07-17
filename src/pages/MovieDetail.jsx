import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams(); // grabs /movies/:id
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:8001/api/movies/${id}/`);
        setMovie(res.data);
      } catch (err) {
        setError("Could not load movie details.");
        console.error(err);
      }
    };

    fetchMovie();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img
        src={movie.poster}
        alt={movie.title}
        className="rounded-xl w-full max-w-md h-96 object-cover mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-600 text-lg mb-4">
        Released in {movie.release_year}
      </p>
      <p className="text-gray-700">{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
