import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 text-center text-sm">
      <p>© {new Date().getFullYear()} myMovies. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
