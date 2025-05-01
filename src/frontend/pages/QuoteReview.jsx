import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';

// QuoteReview component definition
const QuoteReview = () => {
  // Get quote data and functions from context
  const { quoteItems, removeFromQuote, updateQuantity, totalQuotePrice } = useQuote();
  // Hook for navigation
  const navigate = useNavigate();
  // State for user information form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [notes, setNotes] = useState('');

  // Function to handle changes in item quantity
  const handleQuantityChange = (id, quantity) => {
    // Convert quantity string to a number
    const newQuantity = parseInt(quantity, 10);
    // Update quantity if it's a positive number
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    } else {
      // Remove item if quantity is zero or less
      removeFromQuote(id);
    }
  };

  // Function to calculate the total feet of all items in the quote
  const calculateTotalFeet = () => {
    return quoteItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Function to handle proceeding to order confirmation
  const handleProceed = () => {
    console.log("handleProceed called"); // Log when function starts

    // --- Basic Validation ---
    if (!firstName || !lastName || !phone || !email || !street || !city || !state || !zip) {
      console.error("Validation failed: Missing required fields.");
      // Optionally, set an error state here to display a message to the user
      alert("Please fill in all required fields before proceeding."); // Simple alert for now
      return; // Stop execution if validation fails
    }
    // --- End Validation ---

    // Gather user info and quote items into an order object
    const orderDetails = {
      user: {
        firstName,
        lastName,
        phone,
        email,
        address: {
          street,
          city,
          state,
          zip,
        },
        notes,
      },
      items: quoteItems,
      totalPrice: totalQuotePrice,
      totalFeet: calculateTotalFeet(),
    };
    console.log("Order details to save:", orderDetails); // Log the data being saved

    try {
      // Store the order details temporarily in sessionStorage
      sessionStorage.setItem('currentOrderDetails', JSON.stringify(orderDetails));
      
      // *** Add immediate verification log ***
      const itemJustSet = sessionStorage.getItem('currentOrderDetails');
      console.log("Immediately after setItem, sessionStorage contains:", itemJustSet ? 'Item found' : 'Item NOT found!');
      
      // Check if item was actually set before navigating
      if (itemJustSet) {
        // Navigate to the order confirmation page
        navigate('/order-confirmation');
        console.log("Navigating to /order-confirmation"); // Log navigation attempt
      } else {
        console.error("CRITICAL: sessionStorage.setItem seemed to fail silently!");
        alert("Failed to store order details before navigating. Please try again.");
      }
    } catch (error) {
      console.error("Error setting sessionStorage or navigating:", error); // Log any errors
      // Optionally, display an error message to the user here
      alert("An error occurred while trying to proceed. Please check the console."); // Simple alert for errors
    }
  };

  // Render the component UI
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-gray-50">
      {/* Page Title */}
      <h1 className="text-4xl font-bold tracking-tight text-center text-gray-900 mb-10">Review Your Quote</h1>
      {/* Check if the quote is empty */}
      {quoteItems.length === 0 ? (
        // Display message if quote is empty
        <div className="text-center py-10">
          {/* Empty cart icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="mt-4 text-lg text-gray-600">Your quote is currently empty.</p>
          {/* Optional button to go back to products */}
          {/* <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md shadow-sm">Browse Products</button> */}
        </div>
      ) : (
        // Display quote details if not empty
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* User Information Form Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Information</h2>
            {/* Form for user details */}
            <form className="space-y-4">
              {/* Name input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* Contact input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* Address input fields */}
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">Installation Street Address</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* Notes input field */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Project Notes (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                />
              </div>
            </form>
          </div>

          {/* Quote Items List Section */}
          <ul className="divide-y divide-gray-200">
            {/* Map through each item in the quote */}
            {quoteItems.map((item) => (
              // List item for each product in the quote
              <li key={item.id} className="flex flex-col md:flex-row items-center justify-between p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                {/* Item details (image, name, price) */}
                <div className="flex items-center mb-4 md:mb-0 flex-grow md:mr-6">
                  <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-md mr-6 flex-shrink-0" />
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">${item.price.toFixed(2)} per foot</p>
                  </div>
                </div>
                {/* Quantity input, item total, and remove button */}
                <div className="flex items-center space-x-4 md:space-x-6 w-full md:w-auto justify-between md:justify-end">
                   {/* Quantity input field */}
                   <div className="flex items-center">
                     <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium text-gray-700 mr-2">Feet:</label>
                     <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-20 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm p-2 text-center"
                     />
                   </div>
                   {/* Item total price */}
                   <span className="text-md font-medium text-gray-800 w-24 text-right">${(item.price * item.quantity).toFixed(2)}</span>
                   {/* Remove item button */}
                  <button
                    onClick={() => removeFromQuote(item.id)}
                    className="text-gray-500 hover:text-red-600 transition duration-150 ease-in-out p-1 rounded-full hover:bg-gray-100"
                    title="Remove item"
                  >
                    {/* Trash icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {/* Summary and Proceed Button Section */}
          <div className="mt-6 p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-end items-center space-x-6">
              {/* Display total feet and total price */}
              <div className="text-right">
                <p className="text-md text-gray-600">Total Feet: <span className="font-semibold text-gray-900">{calculateTotalFeet()}</span></p>
                <p className="text-xl font-semibold text-gray-900 mt-1">Total Price: <span className="text-cyan-700">${totalQuotePrice.toFixed(2)}</span></p>
              </div>
              {/* Button to proceed to confirmation */}
              <button 
                onClick={handleProceed} // Call handleProceed on click
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the component
export default QuoteReview;
