import React, { useEffect, useState } from 'react';
import homepageImage from '../../assets/homepage.png';
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';
import designImage from '../../assets/design.png';
import customImage from '../../assets/Custom_Harness.png';
import testImage from '../../assets/test.png';
import cableVideo from '../../assets/cable-assembly.mp4';
import { useNavigate } from 'react-router-dom';

import cust1 from '../../assets/iteris.png';
import cust2 from '../../assets/flodraulic.png';
import cust3 from '../../assets/Alvarado.jpg';
import cust4 from '../../assets/amp_Research.jpeg'; // Corrected path
import cust5 from '../../assets/applied.png';
import cust6 from '../../assets/bendix.png';

const slides = [
  {
    type: 'image',
    media: homepageImage,
    content: (
      <div className="relative z-10 text-center p-4 animate-slideUp">
        <h1 className="text-5xl font-bold mb-4">Welcome to WiredEdge</h1>
        <p className="text-lg mb-8">Connecting to the Future.</p>
      </div>
    ),
  },
  {
    type: 'video',
    media: cableVideo,
    content: (
      <div className="relative z-10 text-right p-4 animate-slideUp">
        <h1 className="text-5xl font-bold mb-4">Watch Us Work</h1>
        <p className="text-lg mb-8">We do Work.</p>
      </div>
    ),
  },
];

const clients = [
  { logo: cust1, link: "https://iteris.com" },
  { logo: cust2, link: "https://flodraulic.com" },
  { logo: cust3, link: "https://alvaradomfg.com/" },
  { logo: cust4, link: "https://realtruck.com/" },
  { logo: cust5, link: "https://www.appliedmedical.com/" },
  { logo: cust6, link: "https://bendix.co" },
];

function Home() {
  const [showHome, setShowHome] = useState(false);
  const [direction, setDirection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
      setDirection(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideAnimation =
    direction === 'right'
      ? 'animate-slideFromRight'
      : direction === 'left'
      ? 'animate-slideFromLeft'
      : 'animate-fadeIn';

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black text-white overflow-x-hidden relative">
      {!showHome && (
        <div className="flex flex-col items-start justify-center space-y-4 w-full h-screen bg-black">
          <div className="bg-white h-1 w-full animate-flyAcrossAndDisappear"></div>
          <div className="bg-white h-1 w-full animate-flyAcrossAndDisappear" style={{ animationDelay: '0.2s' }}></div>
          <div className="bg-white h-1 w-full animate-flyAcrossAndDisappear" style={{ animationDelay: '0.4s' }}></div>
        </div>
      )}

      {showHome && (
        <>
          <div className="relative w-full h-screen flex items-center justify-center">
            <div key={currentIndex} className={`absolute inset-0 w-full h-full ${slideAnimation}`}>
              {slides[currentIndex].type === 'image' ? (
                <img
                  src={slides[currentIndex].media}
                  alt="Slide Background"
                  className="w-full h-full object-cover absolute inset-0"
                />
              ) : (
                <video
                  src={slides[currentIndex].media}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover absolute inset-0"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                {slides[currentIndex].content}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute left-[96%] top-1/2 transform -translate-y-1/2 bg-white rounded-3xl hover:bg-gray-400 transition duration-300 ease-in-out z-20"
            >
              <img src={rightArrow} alt="Right Arrow" className="w-12 h-16 rounded-full p-2" />
            </button>
            <button
              onClick={handlePrev}
              className="absolute right-[96%] top-1/2 transform -translate-y-1/2 bg-white rounded-3xl hover:bg-gray-400 transition duration-300 ease-in-out z-20"
            >
              <img src={leftArrow} alt="Left Arrow" className="w-12 h-16 rounded-full p-2" />
            </button>
          </div>

          <div className="w-full bg-blue-700 text-white text-center py-6 -mt-12 z-20 relative">
            <p className="text-2xl font-semibold tracking-wider">Create stuff with WiredEdge........</p>
          </div>

          <div className="w-full bg-blue-300 text-black px-4 sm:px-16 md:px-32 py-12 sm:py-16 text-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-semibold mb-10 sm:mb-12">-What We Do-</h2>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-32 gap-16">
                {[designImage, customImage, testImage].map((img, i) => (
                  <div className="flex flex-col items-center" key={i}>
                    <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden mb-4">
                      <img src={img} alt={`Step ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base sm:text-2xl font-semibold mb-1">
                      {['Design', 'Build', 'Test'][i]}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500">
                      {['We design the cable.', 'We build and assemble the cable.', 'We test the cable.'][i]}
                    </p>
                  </div>
                ))}
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
          </div>

          {/* Clients Section */}
          <div className="w-full bg-gray-100 px-4 py-16 text-center overflow-hidden">
            <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Clients</h2>
            <div className="relative overflow-hidden w-full">
              <div className="flex animate-scroll gap-16 w-max">
                {[...clients, ...clients].map((client, i) => (
                  <a
                    key={i}
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[200px] h-24 flex items-center justify-center"
                  >
                    <img
                      src={client.logo}
                      alt={`Client ${i + 1}`}
                      className="h-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>


          <div className="w-full bg-blue-700 text-white text-center py-6 -mt-12 z-20 relative"></div>
        </>
      )}
    </div>
  );
}

export default Home;
