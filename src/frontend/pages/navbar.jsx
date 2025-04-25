import React from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router is used for navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-4 justify-center">
        <li><Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Home</Link></li>  
        <li><Link to="/products" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Products</Link></li>  
        <li><Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">About</Link></li>  
        <li><Link to="/services" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Services</Link></li>
        <li><Link to="/order" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Order</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
