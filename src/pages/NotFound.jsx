import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
      
        <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">
          <div className="text-center">
            <h1 className="text-7xl font-extrabold text-yellow-400">404</h1>

            <h2 className="text-3xl font-bold mt-4 text-gray-800">
              Oops! Page Not Found
            </h2>

            <p className="text-gray-600 mt-3 max-w-md mx-auto">
              The page you are looking for might have been removed,
            </p>

            <Link
              to="/"
              className="inline-block mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
   
    );
};

export default NotFound;