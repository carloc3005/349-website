import React, { useState } from 'react';
import banner1 from '../../assets/banner1.png';

// Order component definition
const Order = () => {
  // State for the input order number
  const [inputOrderNumber, setInputOrderNumber] = useState('');
  // State to store fetched order details
  const [orderDetails, setOrderDetails] = useState(null);
  // State for displaying errors
  const [error, setError] = useState('');

  // Function to handle the order lookup
  const handleLookupOrder = () => {
    // Reset previous state
    setOrderDetails(null);
    setError('');

    // Check if an order number was entered
    if (!inputOrderNumber) {
      setError('Please enter an order number.');
      return;
    }

    // Create the key used to store the order in sessionStorage
    const storageKey = `order_${inputOrderNumber}`;

    try {
      // Try to get the order data from sessionStorage
      const storedOrderString = sessionStorage.getItem(storageKey);

      // If order data exists
      if (storedOrderString) {
        // Parse the JSON string into an object
        const parsedOrderDetails = JSON.parse(storedOrderString);
        // Check if the parsed data has the expected structure
        if (parsedOrderDetails && parsedOrderDetails.orderNumber && parsedOrderDetails.items && parsedOrderDetails.user) {
          // Set the order details state with the fetched data
          setOrderDetails(parsedOrderDetails);
        } else {
          // Handle corrupted or incomplete data
          setError('Order data is corrupted or incomplete.');
        }
      } else {
        // Handle case where order number is not found
        setError('Order number not found or invalid.');
      }
    } catch (e) {
      // Handle errors during sessionStorage access or parsing
      console.error("Error reading or parsing order from sessionStorage:", e);
      setError('Error retrieving order details. Please try again.');
      setOrderDetails(null); // Clear details on error
    }
  };

  // Render the component UI
  return (
    <div className="animate-fadeIn">
      {/* Banner Section */}
      <div
        className="h-64 bg-cover bg-center mb-12 relative"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Centered title (currently empty) */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white"></h1>
        </div>
      </div>

      {/* Order Lookup Form Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Find Your Order</h2>
          <div className="mb-4">
            {/* Input field for order number */}
            <label htmlFor="orderNumberInput" className="block text-sm font-medium text-gray-700 mb-1">Enter Order Number:</label>
            <input
              type="text"
              id="orderNumberInput"
              value={inputOrderNumber}
              onChange={(e) => setInputOrderNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm p-2"
              placeholder="e.g., 123456"
            />
          </div>
          {/* Button to trigger order lookup */}
          <button
            onClick={handleLookupOrder}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-4"
          >
            Find Order
          </button>
          {/* Display error messages if any */}
          {error && (
            <p className="text-red-600 text-center text-sm mb-4">{error}</p>
          )}
        </div>

        {/* Display Order Details Section (if found) */}
        {orderDetails && (
          <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Details for #{orderDetails.orderNumber}</h3>

            {/* Display Customer Information */}
            {orderDetails.user && (
              <div className="text-left bg-gray-100 p-4 rounded-md mb-6 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer Information:</h4>
                <p className="text-sm text-gray-700"><strong>Name:</strong> {orderDetails.user.firstName} {orderDetails.user.lastName}</p>
                <p className="text-sm text-gray-700"><strong>Email:</strong> {orderDetails.user.email}</p>
                <p className="text-sm text-gray-700"><strong>Phone:</strong> {orderDetails.user.phone}</p>
                {/* Display address if available */}
                {orderDetails.user.address && (
                  <p className="text-sm text-gray-700"><strong>Address:</strong> {orderDetails.user.address.street}, {orderDetails.user.address.city}, {orderDetails.user.address.state} {orderDetails.user.address.zip}</p>
                )}
                {/* Display notes if available */}
                {orderDetails.user.notes && (
                   <p className="text-sm text-gray-700 mt-2"><strong>Notes:</strong> {orderDetails.user.notes}</p>
                )}
              </div>
            )}

            {/* Display Items Ordered */}
            <h4 className="text-lg font-semibold text-gray-800 mb-3 pt-4 border-t border-gray-200">Items Ordered:</h4>
            <ul className="divide-y divide-gray-200">
              {/* Map through each item in the order */}
              {orderDetails.items.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-3">
                  {/* Item details (image, name, price per foot) */}
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded-md mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)} per foot</p>
                    </div>
                  </div>
                  {/* Item quantity and total price */}
                  <div className="text-right">
                    <p className="text-md text-gray-700">Feet: {item.quantity}</p>
                    <p className="text-md font-semibold text-gray-900">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Display Grand Total */}
            <div className="mt-4 pt-4 border-t border-gray-200 text-right">
               <p className="text-lg font-bold text-gray-900">Grand Total: ${orderDetails.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the Order component
export default Order;