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
import { useQuote } from '../context/QuoteContext'; 

// Array containing product data
const productsData = [
  {
    id: 1,
    name: 'Ethernet Cable Cat 6',
    description: 'High-performance Category 6 Ethernet cable supporting Gigabit speeds (up to 1000 Mbps). Ideal for reliable wired connections in home and office networks, connecting computers, routers, gaming consoles, and more.', 
    image: product1,
    price: 0.35, 
  },
  {
    id: 2,
    name: 'Coaxial Cable RG6',
    description: 'Industry-standard RG6 coaxial cable (75 Ohm) for high-definition video signals. Perfect for connecting cable TV boxes, satellite receivers, antennas, and broadband internet modems for optimal signal quality.', 
    image: product2,
    price: 0.25, 
  },
  {
    id: 3,
    name: 'Speaker Wire 16AWG',
    description: '16-gauge oxygen-free copper (OFC) speaker wire ensures clear audio transmission. Connects speakers to amplifiers or receivers in home theater systems, stereo setups, and car audio installations.', 
    image: product3,
    price: 0.45, 
  },
  {
    id: 4,
    name: 'THHN Wire 12 AWG',
    description: 'Versatile Thermoplastic High Heat-resistant Nylon-coated (THHN) building wire. Commonly used in commercial and industrial applications when pulled through conduit or raceways for power distribution.', 
    image: product4,
    price: 0.40, 
  },
  {
    id: 5,
    name: 'Armored Cable (MC Cable)',
    description: 'Durable Metal-Clad (MC) armored cable provides excellent physical protection for electrical wiring in exposed or concealed locations, including commercial buildings, feeders, and branch circuits.', 
    image: product5,
    price: 1.50, 
  },
  {
    id: 6,
    name: '14/2 NM-B White Romex',
    description: 'Non-metallic sheathed cable (NM-B or Romex) with two 14-gauge conductors plus ground. Standard for residential interior wiring of outlets, switches, and light fixtures within walls and ceilings.', 
    image: product6,
    price: 0.55, 
  },
  {
    id: 7,
    name: 'Underground Feeder Cable (UF-B)',
    description: 'UF-B cable is designed for direct burial in the ground without conduit. Ideal for supplying power to outdoor circuits, landscape lighting, detached garages, sheds, and wells. Resistant to moisture and sunlight.', 
    image: product7,
    price: 0.75, 
  },
  {
    id: 8,
    name: 'Ribbon Cable 20 Conductor',
    description: 'Flat ribbon cable with 20 parallel conductors. Used for internal connections within computers and electronic devices, such as connecting drives or facilitating board-to-board communication.', 
    image: product8,
    price: 0.80, 
  },
  {
    id: 9,
    name: 'Thermostat Wire 18/5',
    description: 'Low-voltage thermostat wire (18-gauge, 5 conductors) for connecting thermostats to HVAC systems (heating, ventilation, air conditioning). Provides reliable control signals for furnaces and air conditioners.', 
    image: product9,
    price: 0.30, 
  },
  {
    id: 10,
    name: 'Landscape Lighting Wire 12/2',
    description: 'Low-voltage (typically 12V) direct burial landscape lighting wire (12-gauge, 2 conductors). Designed for outdoor use to power path lights, spotlights, and other garden fixtures. UV resistant.', 
    image: product10,
    price: 0.60, 
  }
];

// Products component definition
const Products = () => {
  // Get the addToQuote function from context
  const { addToQuote } = useQuote(); 

  // Render the component UI
  return (
    <div className='animate-fadeIn'> 
      {/* Banner Section */}
      <div
        className="bg-cover bg-left text-white py-32 px-4 text-center mb-12 relative" 
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* Dark overlay on banner */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Container for potential banner text */}
        <div className="relative z-10">
          {/* Example Title: <h1 className="text-4xl font-bold">Our Product Range</h1> */}
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="container mx-auto px-4 py-16 animate-slideUp">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Products</h2> 
        {/* Grid layout for product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Map through productsData to display each product */}
          {productsData.map((product) => (
            // Product card container
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl overflow-hidden flex flex-col transition-all duration-300 ease-in-out"
            >
              {/* Product image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              {/* Product details container */}
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  {/* Product name */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  {/* Product description */}
                  <p className="text-gray-600 text-sm mb-5 flex-grow">{product.description}</p>
                </div>
                {/* Product price and add button container */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  {/* Display formatted price */}
                  <span className="text-xl font-bold text-blue-700">${product.price.toFixed(2)} per foot</span>
                  {/* Button to add product to quote */}
                  <button
                    onClick={() => addToQuote(product)} // Call addToQuote with this product
                    className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                  >
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

// Export the Products component
export default Products;
