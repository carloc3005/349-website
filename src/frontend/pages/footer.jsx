import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-32 py-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-4">Wired Edge</h1>
          <p className="text-gray-400 text-md">We do stuff.</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="uppercase text-xs mb-2 text-gray-500">Connect</h4>
          <p className="hover:underline cursor-pointer">LinkedIn</p>
          <p className="hover:underline cursor-pointer">Instagram</p>
          <p className="hover:underline cursor-pointer">Facebook</p>
          <p className="hover:underline cursor-pointer">Twitter</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="uppercase text-xs mb-2 text-gray-500">Contacts</h4>
          <p>support@wireedge.com</p>
          <p>+1-999-123-0000</p>
        </div>

        {/* Address */}
        <div>
          <h4 className="uppercase text-xs mb-2 text-gray-500">Locations</h4>
          <p>123 Wired Edge St.</p>
          <p>Something, CA 12345</p>
        </div>
      </div>

      {/* Bottom Navigation Pill */}
      <div className="mt-10 text-xs flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 py-8">
        <div className="flex gap-2 bg-white text-black rounded-full px-4 py-2">
          {[
            { label: 'Home', path: '/' },
            { label: 'Products', path: '/products' },
            { label: 'About', path: '/about' },
            { label: 'Order', path: '/order' }
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                window.scrollTo(0, 0);
              }}
              className={`px-4 py-1 rounded-full ${
                isActive(item.path) ? 'bg-black text-white' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-gray-900 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} WiredEdge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
