import React, { useEffect, useState } from 'react';
import homepageImage from '../../assets/homepage.png';
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';

function Home() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHome(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden relative">
      
      {/* Animated wires */}
      {!showHome && (
        <div className="flex flex-col items-start justify-center space-y-4 w-full h-full">
          <div className="bg-white h-1 w-[100%] animate-flyAcrossAndDisappear"></div>
          <div className="bg-white h-1 w-[100%] animate-flyAcrossAndDisappear" style={{ animationDelay: '0.2s' }}></div>
          <div className="bg-white h-1 w-[100%] animate-flyAcrossAndDisappear" style={{ animationDelay: '0.4s' }}></div>
        </div>
      )}

      {/* Main homepage */}
      {showHome && (
        <div className="relative w-full h-full flex items-center justify-center animate-fadeIn">
          <div className="relative w-full h-full bg-cover bg-center flex items-center justify-center">
            <img
              src={homepageImage}
              alt="Homepage Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Arrows */}
            <button className="absolute left-[96%] items-center bg-white rounded-3xl hover:bg-gray-400 transition duration-300 ease-in-out">
              <img src={rightArrow} alt="Right Arrow" className="w-12 h-16 rounded-full p-2" />
            </button>
            <button className="absolute right-[96%] items-center bg-white rounded-3xl hover:bg-gray-400 transition duration-300 ease-in-out">
              <img src={leftArrow} alt="Left Arrow" className="w-12 h-16 rounded-full p-2" />
            </button>

            {/* Text */}
            <div className="relative z-10 text-center p-4 animate-slideUp">
              <h1 className="text-5xl font-bold mb-4">This is WireEdge</h1>
              <p className="text-lg mb-8">We do stuff.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
