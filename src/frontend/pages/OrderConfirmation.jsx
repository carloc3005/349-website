import React, { useState, useEffect, useRef } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import banner1 from '../../assets/banner1.png'; 
import { useQuote } from '../context/QuoteContext'; 
import Lottie from 'lottie-react';
import animationData from '../../assets/blue-envelopeAni.json'; 

// OrderConfirmation component definition
const OrderConfirmation = () => {
  // State for the generated order number
  const [orderNumber, setOrderNumber] = useState(null);
  // State to store user information from the order
  const [userInfo, setUserInfo] = useState(null); 
  const [error, setError] = useState(null); // Add state for error messages
  // Get quote items, total price, and clearQuote function from context
  // We primarily need clearQuote here, order details come from sessionStorage
  const { clearQuote } = useQuote(); 
  const navigate = useNavigate(); // Initialize useNavigate
  const hasProcessedOrder = useRef(false); // Ref to track if order is processed

  // State for animation
  const [showConfirmation, setShowConfirmation] = useState(false);


  useEffect(() => {
    // --- Check if order has already been processed ---
    if (hasProcessedOrder.current) {
      console.log("OrderConfirmation effect skipped, order already processed.");
      return;
    }
    // --- End processed check ---

    // Get order details string from sessionStorage (placed there by QuoteReview)
    const storedOrderDetailsString = sessionStorage.getItem('currentOrderDetails');
    let parsedOrderDetails = null;
    let userToSave = null; // Initialize userToSave
    let itemsToSave = null;
    let priceToSave = null;

    // --- 1. Parse data from QuoteReview --- 
    if (storedOrderDetailsString) {
      try {
        parsedOrderDetails = JSON.parse(storedOrderDetailsString);
        // Validate the structure received from QuoteReview
        if (parsedOrderDetails && parsedOrderDetails.user && parsedOrderDetails.items && parsedOrderDetails.items.length > 0 && typeof parsedOrderDetails.totalPrice === 'number') {
          setUserInfo(parsedOrderDetails.user); // Update local state for display
          userToSave = parsedOrderDetails.user; // Assign valid user info
          itemsToSave = parsedOrderDetails.items;
          priceToSave = parsedOrderDetails.totalPrice;
        } else {
           console.error("Incomplete or invalid order details received from sessionStorage.", parsedOrderDetails);
           setError("Order details are incomplete. Please review your quote again."); // Set user-facing error
           return; 
        }
      } catch (error) {
        console.error("Failed to parse order details from sessionStorage:", error);
        setError("Failed to read order details. Please review your quote again."); // Set user-facing error
        return; 
      }
    } else {
        console.error("'currentOrderDetails' not found in sessionStorage. Cannot confirm order.");
        setError("Order details not found. Please review your quote again."); // Set user-facing error
        return; // Stop if details are missing on initial load
    }

    // --- 2. Generate Order Number and Save Final Order --- 
    // If we got here, parsedOrderDetails, userToSave, itemsToSave, priceToSave are valid
    const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNum); // Update state for display

    // Construct the final order object to save permanently (for this session)
    const orderDetailsToSave = {
      orderNumber: randomOrderNum,
      user: userToSave, 
      items: itemsToSave,
      totalPrice: priceToSave,
      orderDate: new Date().toISOString(), // Add current date/time
    };

    try {
      // Save the final order object to sessionStorage, keyed by the new order number
      sessionStorage.setItem(`order_${randomOrderNum}`, JSON.stringify(orderDetailsToSave));
      console.log(`Order ${randomOrderNum} details saved to sessionStorage.`);
      
      // --- 3. Cleanup --- 
      clearQuote(); // Clear the cart in context
      sessionStorage.removeItem('currentOrderDetails'); // Remove the temporary data
      console.log("'currentOrderDetails' removed from sessionStorage.");

      // --- Mark order as processed ---
      hasProcessedOrder.current = true; // Set ref to true after successful processing

      // Delay to play animation before showing confirmation
      setTimeout(() => {
        setShowConfirmation(true);
      }, 4000);
    } catch (error) {
      // Log error if saving the final order fails
      console.error("Failed to save complete order to sessionStorage:", error);
      setError("Failed to save the final order details. Please try again."); // Set user-facing error
    }

  // Dependencies: clearQuote and navigate are stable functions.
  // The ref handles the "run once" logic, so no need for orderNumber here.
  }, [clearQuote, navigate]); // Removed orderNumber dependency

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
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center bg-gray-50" style={{ minHeight: 'calc(100vh - 16rem)' }}>
        {!showConfirmation ? (
          // ✨ Animation Section
          <div className="w-[300px]">
            <Lottie animationData={animationData} loop={false} />
          </div>
        ) : (
          // ✅ Confirmation Section
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center max-w-lg transition-opacity duration-700 ease-in-out opacity-100">
            {error ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-red-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Error</h1>
                <p className="text-lg text-red-600 mb-8">{error}</p>
                <Link
                  to="/quote-review"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Review Quote
                </Link>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Order!</h1>
                <p className="text-lg text-gray-600 mb-6">Your order has been placed successfully.</p>

                {userInfo && (
                  <div className="text-left bg-gray-100 p-4 rounded-md mb-6 border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Order Details:</h2>
                    <p className="text-sm text-gray-700"><strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}</p>
                    <p className="text-sm text-gray-700"><strong>Email:</strong> {userInfo.email}</p>
                    <p className="text-sm text-gray-700"><strong>Phone:</strong> {userInfo.phone}</p>
                    {userInfo.address && (
                      <p className="text-sm text-gray-700"><strong>Address:</strong> {userInfo.address.street}, {userInfo.address.city}, {userInfo.address.state} {userInfo.address.zip}</p>
                    )}
                    {userInfo.notes && (
                      <p className="text-sm text-gray-700 mt-2"><strong>Notes:</strong> {userInfo.notes}</p>
                    )}
                  </div>
                )}

                <p className="text-sm text-gray-500 mb-6">(Order details saved locally for this session for demonstration)</p>

                {orderNumber ? (
                  <p className="text-xl font-semibold text-gray-800 mb-8">
                    Your Order Number is: <span className="text-cyan-700">{orderNumber}</span>
                  </p>
                ) : (
                  <p className="text-lg text-gray-600 mb-8">Generating order number...</p>
                )}

                <Link
                  to="/"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Return to Homepage
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Export the component
export default OrderConfirmation;
