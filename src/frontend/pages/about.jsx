import React from 'react';
import banner1 from '../../assets/banner1.png'; 

const About = () => {
  return (
    <div className="animate-fadeIn">
      {/* Banner Section */}
      <div
        className="h-64 bg-cover bg-center mb-12 relative"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Optional Title */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white"></h1>
        </div>
      </div>

      {/* Existing About Page Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Page </h2>
      </div>
    </div>
  );
};

export default About;
