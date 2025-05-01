import React, { useEffect, useState } from 'react';
import homepageImage from '../../assets/homepage.png';
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';
import catImage1 from '../../assets/Cat-1.png';
import catImage2 from '../../assets/Cat-2.png';
import catImage3 from '../../assets/Cat-3.png';
import { useNavigate } from 'react-router-dom';

import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';
import product7 from '../../assets/product7.png';
import product8 from '../../assets/product8.png';
import product9 from '../../assets/product9.png';
import product10 from '../../assets/product10.png'

const media = [
  homepageImage,
  catImage1,
  catImage2,
  catImage3
]
function Home() {
  const [showHome, setShowHome] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };
  
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => setShowHome(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black text-white overflow-x-hidden relative">
      
      {/* Animated wires */}
      {!showHome && (
        <div className="flex flex-col items-start justify-center space-y-4 w-full h-screen">
          <div className="bg-white h-1 w-full animate-flyAcrossAndDisappear"></div>
          <div className="bg-white h-1 w-full animate-flyAcrossAndDisappear" style={{ animationDelay: '0.2s' }}></div>
          <div className="bg-white h-1 w-full animate-flyAcrossAndDisappear" style={{ animationDelay: '0.4s' }}></div>
        </div>
      )}

      {/* Main homepage */}
      {showHome && (
        <>
          <div className="relative w-full h-screen flex items-center justify-center animate-fadeIn">
            <div className="relative w-full h-full bg-cover bg-center flex items-center justify-center">
              <img
                src={media[currentIndex]}
                alt="Homepage Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Arrows */}
              <button onClick={handleNext} className="absolute left-[96%] items-center bg-white rounded-3xl hover:bg-gray-400 transition duration-300 ease-in-out">
                <img src={rightArrow} alt="Right Arrow" className="w-12 h-16 rounded-full p-2" />
              </button>
              <button onClick={handlePrev} className="absolute right-[96%] items-center bg-white rounded-3xl hover:bg-gray-400 transition duration-300 ease-in-out">
                <img src={leftArrow} alt="Left Arrow" className="w-12 h-16 rounded-full p-2" />
              </button>

              {/* Text */}
              <div className="relative z-10 text-center p-4 animate-slideUp">
                <h1 className="text-5xl font-bold mb-4">This is WireEdge</h1>
                <p className="text-lg mb-8">We do stuff.</p>
              </div>
            </div>
          </div>

          {/* Blue Banner */}
          <div className="w-full bg-blue-700 text-white text-center py-6 -mt-12 z-20 relative">
            <p className="text-2xl font-semibold tracking-wider">Create stuff with WireEdge........</p>
          </div>

          {/* Process Section */}
          <div className='w-full bg-white text-black px-4 sm:px-16 md:px-32 py-12 sm:py-16 text-center'>
            <div className="max-w-6xl mx-auto">

              <h2 className="text-4xl font-semibold mb-10 sm:mb-12">-What We Do-</h2>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16">
                {/* Process 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden mb-4">
                    <img src={catImage1} alt="Design" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-base sm:text-2xl font-semibold mb-1">Design</h3>
                  <p className="text-sm sm:text-base text-gray-500">We design the cable.</p>
                </div>

                {/* Process 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden mb-4">
                    <img src={catImage2} alt="Fabricate" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-base sm:text-2xl font-semibold mb-1">Fabricate</h3>
                  <p className="text-sm sm:text-base text-gray-500">We build and assemble the cable.</p>
                </div>

                {/* Process 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden mb-4">
                    <img src={catImage3} alt="Test" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-base sm:text-2xl font-semibold mb-1">Test</h3>
                  <p className="text-sm sm:text-base text-gray-500">We test the cable.</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                navigate('/products');
                window.scrollTo(0, 0);
              }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              See Our Product
            </button>
          </div>

          {/* Clients Scroll Section */}
          <div className="w-full bg-gray-100 px-16 py-16  text-center overflow-hidden">
            <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Clients</h2>

            <div className="relative overflow-hidden flex w-[200%] animate-scroll gap-10">
              {[...Array(2)].flatMap((_, dupIndex) => // Get duplication index (0 or 1)
                [
                  product1,
                  product2,
                  product3,
                  product4,
                  product5,
                  product6,
                  product7,
                  product8,
                  product9,
                  product10,
                ].map((logo, itemIndex) => ( // Get item index (0-9)
                  <div
                    // Combine dupIndex and itemIndex for a unique key
                    key={`${dupIndex}-${itemIndex}`}
                    className="min-w-64 bg-white shadow-md rounded-full"
                  >
                    <img
                      src={logo}
                      // Update alt text slightly for clarity, though not strictly necessary for the fix
                      alt={`Client logo ${dupIndex * 10 + itemIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              )}
            </div>
          </div>


          {/* Blue Banner */}
          <div className="w-full bg-blue-700 text-white text-center py-6 -mt-12 z-20 relative"></div>
        </>
      )}
    </div>
  );
}

export default Home;
