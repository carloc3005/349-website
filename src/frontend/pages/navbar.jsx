import React from 'react';
import { Link } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext'; 

const Navbar = () => {
  const { quoteCount } = useQuote(); // Get quoteCount from context

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center"> {/* Main flex container */}
        {/* Logo on the left */}
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-cyan-400">Wired</span><span className="text-gray-300">Edge</span>
        </Link>

        {/* Navigation Links (Centered) */}
        <ul className="flex space-x-4 items-center">
          <li><Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Home</Link></li>
          <li><Link to="/products" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Products</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">About</Link></li>
          <li><Link to="/order" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Order</Link></li>
        </ul>

        {/* Cart Icon on the right */}
        <div className="relative"> {/* Changed li to div for structure */}
          <Link to="/quote" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {quoteCount > 0 && ( // Use quoteCount from context
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {quoteCount} {/* Display quoteCount from context */}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
