import React, { useState } from 'react';


// This is the starter code for the Order page. It includes a simple form where users can enter their order ID or tracking number to check the status of their order. The form is styled using Tailwind CSS classes.
function Order() {
  const [orderId, setOrderId] = useState('');
  const handleCheckOrder = () => {
    console.log('Checking order:', orderId);
    alert(`Checking status for order: ${orderId}`); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Check Your Order Status</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your Order ID or Tracking Number:
        </label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="e.g., 12345XYZ"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-4"
        />
        <button
          onClick={handleCheckOrder}
          disabled={!orderId}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check Status
        </button>
      </div>
    </div>
  );
}

export default Order;