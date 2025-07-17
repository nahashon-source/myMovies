import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="bg-white rounded-2xl shadow p-3 hover:scale-105 transition-all">
        <img
          src={movie.poster}
          alt={movie.title}
          className="rounded-xl w-full h-64 object-cover mb-3"
        />
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-500">{movie.release_year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
