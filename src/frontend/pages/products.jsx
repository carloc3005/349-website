import React from 'react';
import banner1 from '../../assets/banner1.png'; 
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';
import product7 from '../../assets/product7.png';
import product8 from '../../assets/product8.png';
import product9 from '../../assets/product9.png';
import product10 from '../../assets/product10.png';

const productsData = [
  {
    id: 1,
    name: 'Ethernet Cable 6',
    description: 'Reliable Cat 6 Ethernet cable for high-speed network connections.', 
    image: product1,
    price: '$15.99 per feet',
  },
  {
    id: 2,
    name: 'Coaxial Cable RG6',
    description: 'High-performance RG6 coaxial cable for CATV, satellite, and broadband internet.', 
    image: product2,
    price: '$12.49 per feet',
  },
  {
    id: 3,
    name: 'Speaker Wire 16AWG',
    description: 'Oxygen-free copper speaker wire (16 AWG) for clear audio transmission in home theater and audio systems.', // Updated description
    image: product3,
    price: '$10.99 per feet',
  },
  {
    id: 4,
    name: 'THHN Wire',
    description: 'Versatile Thermoplastic High Heat-resistant Nylon-coated wire suitable for general-purpose wiring in conduit and cable trays.', // Updated description
    image: product4,
    price: '$8.99 per feet',
  },
  {
    id: 5,
    name: 'Armored Cable',
    description: 'Durable armored cable for underground and outdoor installations, providing protection against physical damage.', // Updated description
    image: product5,
    price: '$25.99 per feet',
  },
  {
    id: 6,
    name: 'AWG White Romex',
    description: 'Non-metallic sheathed cable (Romex) for residential wiring, suitable for indoor use.', // Updated description
    image: product6,
    price: '$0.99 per feet',
  },
  {
    id: 7,
    name: 'Underground Feeder Cable',
    description: 'UF cable for underground installations, designed for direct burial in the ground.', // Updated description
    image: product7,
    price: '$0.99 per feet',
  },
  {
    id: 8,
    name: 'Ribbon Cable 20 Pin',
    description: 'Flexible ribbon cable with 20 pins for internal connections in computers and electronics.', // Updated description
    image: product8,
    price: '$0.99 per feet',
  },
  {
    id: 9,
    name: 'Thermostat Wire',
    description: 'Low-voltage thermostat wire for HVAC systems, providing reliable connections between thermostats and control systems.', // Updated description
    image: product9,
    price: '$0.99 per feet',
  },
  {
    id: 10,
    name: 'Landscape Lighting Wire',
    description: 'Low-voltage wire for landscape lighting systems, designed for outdoor use.', // Updated description
    image: product10,
    price: '$0.99 per feet',
  }
];

const Products = () => {
  return (
    <div> {/* Main container */}
      {/* Banner Section - Increased vertical padding */}
      <div
        className="bg-cover bg-left text-white py-32 px-4 text-center mb-12 relative" // Changed py-24 to py-32
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content container to position text above overlay */}
      </div>

      {/* Products Grid Section */}
      <div className="container mx-auto px-4 py-12"> {/* Added mx-auto for centering */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Products</h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsData.map((product) => (
            // Product Card - Removed hover effect
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition duration-300" // Removed transform hover:scale-105
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover" // Adjusted image height
              />
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p> {/* Added flex-grow */}
                </div>
                <div className="flex justify-between items-center mt-auto pt-4"> {/* Added mt-auto and pt-4 */}
                  <span className="text-lg font-bold text-indigo-600">{product.price}</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition duration-300">
                    Add to Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
