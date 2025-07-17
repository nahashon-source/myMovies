import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center text-red-500 text-xl mt-10">
      <h1>404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline mt-4 block">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
