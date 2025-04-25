import React from 'react';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';

const productsData = [
  {
    id: 1,
    name: 'Ethernet Cable 6',
    description: 'Reliable Cat 6 Ethernet cable for high-speed network connections.', // Updated description
    image: product1,
    price: '$15.99 / 50ft',
  },
  {
    id: 2,
    name: 'Coaxial Cable RG6',
    description: 'High-performance RG6 coaxial cable for CATV, satellite, and broadband internet.', // Updated description
    image: product2,
    price: '$12.49 / 50ft',
  },
  {
    id: 3,
    name: 'Speaker Wire 16AWG',
    description: 'Oxygen-free copper speaker wire (16 AWG) for clear audio transmission in home theater and audio systems.', // Updated description
    image: product3,
    price: '$10.99 / 50ft',
  },
  {
    id: 4,
    name: 'THHN Wire',
    description: 'Versatile Thermoplastic High Heat-resistant Nylon-coated wire suitable for general-purpose wiring in conduit and cable trays.', // Updated description
    image: product4,
    price: '$8.99',
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container px-4"> 
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Products</h2>
        <div className="space-y-12"> 
          {productsData.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse' 
              }`}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-1/3 h-64 object-cover" 
              />
              <div className="p-6 flex flex-col justify-between w-2/3"> 
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-indigo-600">{product.price}</span>
                  <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition duration-300">
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
