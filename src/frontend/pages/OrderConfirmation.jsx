import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/banner1.png'; 
import { useQuote } from '../context/QuoteContext'; 

// OrderConfirmation component definition
const OrderConfirmation = () => {
  // State for the generated order number
  const [orderNumber, setOrderNumber] = useState(null);
  // State to store user information from the order
  const [userInfo, setUserInfo] = useState(null); 
  // Get quote items and total price from context (might be used as fallback)
  const { quoteItems, totalQuotePrice } = useQuote(); 

  // useEffect hook runs once after the component mounts
  useEffect(() => {
    // Get order details string from sessionStorage (placed there by QuoteReview)
    const storedOrderDetailsString = sessionStorage.getItem('currentOrderDetails');
    let parsedOrderDetails = null;

    // If order details exist in sessionStorage
    if (storedOrderDetailsString) {
      try {
        // Parse the JSON string into an object
        parsedOrderDetails = JSON.parse(storedOrderDetailsString);
        // If parsing is successful and user info exists, store it in state
        if (parsedOrderDetails && parsedOrderDetails.user) {
          setUserInfo(parsedOrderDetails.user); 
        }
      } catch (error) {
        // Log error if parsing fails
        console.error("Failed to parse order details from sessionStorage:", error);
        // Potentially show an error message to the user here
      }
    }

    // Generate a random 6-digit order number
    const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
    // Set the generated order number in state
    setOrderNumber(randomOrderNum);

    // --- Save the complete order details to localStorage for persistence ---
    // Determine items, price, and user info to save (prefer parsed data)
    const itemsToSave = parsedOrderDetails?.items || quoteItems;
    const priceToSave = parsedOrderDetails?.totalPrice || totalQuotePrice;
    const userToSave = parsedOrderDetails?.user || null; 

    // Only save if there are items
    if (itemsToSave && itemsToSave.length > 0) {
      // Construct the complete order object
      const orderDetailsToSave = {
        orderNumber: randomOrderNum,
        user: userToSave, // Include user info
        items: itemsToSave,
        totalPrice: priceToSave,
        orderDate: new Date().toISOString(), // Add current date/time
      };
      try {
        // Save the order object to localStorage, keyed by order number
        localStorage.setItem(`order_${randomOrderNum}`, JSON.stringify(orderDetailsToSave));
        console.log(`Order ${randomOrderNum} details saved to localStorage.`);
        // Optional: Clear the quote context after successful order
        // clearQuote(); 
        // Optional: Remove the temporary details from sessionStorage
        // sessionStorage.removeItem('currentOrderDetails');
      } catch (error) {
        // Log error if saving to localStorage fails
        console.error("Failed to save complete order to localStorage:", error);
      }
    }
    // --- End of saving logic ---

    // Store just the order number in sessionStorage (might be useful for quick access)
    sessionStorage.setItem('orderNumber', randomOrderNum.toString());

  }, [quoteItems, totalQuotePrice]); // Dependencies for useEffect

  // Render the component UI
  return (
    <div>
      {/* Banner Section */}
      <div
        className="h-64 bg-cover bg-center mb-12 relative"
        style={{ backgroundImage: `url(${banner1})` }}>
        {/* Dark overlay on banner */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Confirmation Message Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center bg-gray-50" style={{ minHeight: 'calc(100vh - 16rem)' }}>
        {/* White card container for the message */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center max-w-lg">
          {/* Success icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* Main confirmation heading */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Order!</h1>
          {/* Confirmation subtext */}
          <p className="text-lg text-gray-600 mb-6">
            Your order has been placed successfully.
          </p>
          
          {/* Display User Information if available */}
          {userInfo && (
            <div className="text-left bg-gray-100 p-4 rounded-md mb-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Order Details:</h2>
              <p className="text-sm text-gray-700"><strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}</p>
              <p className="text-sm text-gray-700"><strong>Email:</strong> {userInfo.email}</p>
              <p className="text-sm text-gray-700"><strong>Phone:</strong> {userInfo.phone}</p>
              {/* Display address if provided */}
              {userInfo.address && (
                <p className="text-sm text-gray-700"><strong>Address:</strong> {userInfo.address.street}, {userInfo.address.city}, {userInfo.address.state} {userInfo.address.zip}</p>
              )}
              {/* Display notes if provided */}
              {userInfo.notes && (
                 <p className="text-sm text-gray-700 mt-2"><strong>Notes:</strong> {userInfo.notes}</p>
              )}
            </div>
          )}
          {/* End Display User Info */}

          {/* Disclaimer about local storage */}
          <p className="text-sm text-gray-500 mb-6">(Order details saved locally in this browser for demonstration)</p>
          
          {/* Display the order number */}
          {orderNumber ? (
            <p className="text-xl font-semibold text-gray-800 mb-8">
              Your Order Number is: <span className="text-cyan-700">{orderNumber}</span>
            </p>
          ) : (
            // Show loading message while order number is generated
            <p className="text-lg text-gray-600 mb-8">Generating order number...</p>
          )}
          
          {/* Link to return to the homepage */}
          <Link
            to="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default OrderConfirmation;
