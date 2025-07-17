// src/components/MovieCard.jsx
import React from "react";

const FALLBACK_POSTER = "/placeholder.jpg";
const FALLBACK_TITLE = "Untitled";
const FALLBACK_YEAR = "Unknown";

const MovieCard = ({ movie }) => {
  if (!movie || typeof movie !== "object") {
    console.warn("Invalid movie:", movie);
    return <div className="text-red-500">Invalid movie data</div>;
  }

  const { title, poster, release_year } = movie;

  const handleImgError = (e) => {
    e.target.src = FALLBACK_POSTER;
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src={poster || FALLBACK_POSTER}
        alt={title ? `${title} Poster` : FALLBACK_TITLE}
        onError={handleImgError}
        className="w-full h-64 object-cover rounded-xl mb-3"
      />
      <h2 className="text-xl font-semibold text-gray-800">
        {title || FALLBACK_TITLE}
      </h2>
      <p className="text-sm text-gray-600">{release_year || FALLBACK_YEAR}</p>
    </div>
  );
};



export default MovieCard;
