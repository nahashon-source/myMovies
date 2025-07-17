import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          myMovies
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/favorites" className="hover:text-yellow-400">Favorites</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
