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

const productsData = [
  {
    id: 1,
    name: 'Ethernet Cable Cat 6', 
    description: 'High-performance Category 6 Ethernet cable supporting Gigabit speeds (up to 1000 Mbps). Ideal for reliable wired connections in home and office networks, connecting computers, routers, gaming consoles, and more.', // More detail
    image: product1,
    price: '$0.35 per foot', 
  },
  {
    id: 2,
    name: 'Coaxial Cable RG6',
    description: 'Industry-standard RG6 coaxial cable (75 Ohm) for high-definition video signals. Perfect for connecting cable TV boxes, satellite receivers, antennas, and broadband internet modems for optimal signal quality.', // More detail
    image: product2,
    price: '$0.25 per foot', 
  },
  {
    id: 3,
    name: 'Speaker Wire 16AWG',
    description: '16-gauge oxygen-free copper (OFC) speaker wire ensures clear audio transmission. Connects speakers to amplifiers or receivers in home theater systems, stereo setups, and car audio installations.', // More detail
    image: product3,
    price: '$0.45 per foot', 
  },
  {
    id: 4,
    name: 'THHN Wire 12 AWG', 
    description: 'Versatile Thermoplastic High Heat-resistant Nylon-coated (THHN) building wire. Commonly used in commercial and industrial applications when pulled through conduit or raceways for power distribution.', // More detail
    image: product4,
    price: '$0.40 per foot', 
  },
  {
    id: 5,
    name: 'Armored Cable (MC Cable)', 
    description: 'Durable Metal-Clad (MC) armored cable provides excellent physical protection for electrical wiring in exposed or concealed locations, including commercial buildings, feeders, and branch circuits.', // More detail
    image: product5,
    price: '$1.50 per foot', 
  },
  {
    id: 6,
    name: '14/2 NM-B White Romex', 
    description: 'Non-metallic sheathed cable (NM-B or Romex) with two 14-gauge conductors plus ground. Standard for residential interior wiring of outlets, switches, and light fixtures within walls and ceilings.', // More detail
    image: product6,
    price: '$0.55 per foot', 
  },
  {
    id: 7,
    name: 'Underground Feeder Cable (UF-B)', 
    description: 'UF-B cable is designed for direct burial in the ground without conduit. Ideal for supplying power to outdoor circuits, landscape lighting, detached garages, sheds, and wells. Resistant to moisture and sunlight.', // More detail
    image: product7,
    price: '$0.75 per foot', 
  },
  {
    id: 8,
    name: 'Ribbon Cable 20 Conductor', 
    description: 'Flat ribbon cable with 20 parallel conductors. Used for internal connections within computers and electronic devices, such as connecting drives or facilitating board-to-board communication.', // More detail
    image: product8,
    price: '$0.80 per foot', 
  },
  {
    id: 9,
    name: 'Thermostat Wire 18/5', 
    description: 'Low-voltage thermostat wire (18-gauge, 5 conductors) for connecting thermostats to HVAC systems (heating, ventilation, air conditioning). Provides reliable control signals for furnaces and air conditioners.', // More detail
    image: product9,
    price: '$0.30 per foot', 
  },
  {
    id: 10,
    name: 'Landscape Lighting Wire 12/2', 
    description: 'Low-voltage (typically 12V) direct burial landscape lighting wire (12-gauge, 2 conductors). Designed for outdoor use to power path lights, spotlights, and other garden fixtures. UV resistant.', // More detail
    image: product10,
    price: '$0.60 per foot', 
  }
];

const Products = () => {
  const { addToQuote } = useQuote(); // Get addToQuote function from context

  return (
    <div> 
      {/* Banner Section */}
      <div
        className="bg-cover bg-left text-white py-32 px-4 text-center mb-12 relative" 
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content container to position text above overlay */}
        {/* You might want to add title/text here if it wasn't present */}
        <div className="relative z-10">
          {/* Example Title: <h1 className="text-4xl font-bold">Our Product Range</h1> */}
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Products</h2> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl overflow-hidden flex flex-col transition-all duration-300 ease-in-out"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-5 flex-grow">{product.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100"> 
                  <span className="text-xl font-bold text-blue-700">{product.price}</span> 
                  <button 
                    onClick={addToQuote} // Call addToQuote from context on click
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

export default Products;
