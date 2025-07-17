import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div className="text-center text-lg text-gray-700">
      <h2>Movie Detail Page</h2>
      <p className="mt-1">Movie ID: {id}</p>
    </div>
  );
};

export default MovieDetail;
