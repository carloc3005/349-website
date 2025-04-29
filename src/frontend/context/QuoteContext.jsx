import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context object for the quote
const QuoteContext = createContext();

// Custom hook to make using the QuoteContext easier
export const useQuote = () => {
  return useContext(QuoteContext);
};

// Provider component that wraps the app and manages quote state
export const QuoteProvider = ({ children }) => {
  // State to hold the items in the quote (array of product objects with quantity)
  const [quoteItems, setQuoteItems] = useState([]); 
  // State to hold the count of unique items in the quote
  const [quoteCount, setQuoteCount] = useState(0); 

  // Update the quote count whenever the items in the quote change
  useEffect(() => {
    // Set the count to the number of unique items
    setQuoteCount(quoteItems.length);
  }, [quoteItems]); // Re-run this effect if quoteItems changes

  // Function to add a product to the quote
  const addToQuote = (product) => {
    setQuoteItems(prevItems => {
      // Check if the product is already in the quote
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If yes, increase its quantity by 1 and update its total price
        return prevItems.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1, // Increment quantity
                totalItemPrice: product.price * (item.quantity + 1) // Recalculate item total
              }
            : item // Otherwise, keep the item as is
        );
      } else {
        // If no, add the new product with quantity 1 and calculate its initial total price
        return [
          ...prevItems,
          {
            ...product, // Spread product details
            quantity: 1, // Set initial quantity
            totalItemPrice: product.price * 1 // Calculate initial item total
          }
        ];
      }
    });
  };

  // Function to remove a product from the quote by its ID
  const removeFromQuote = (productId) => {
    // Filter out the item with the matching productId
    setQuoteItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Function to update the quantity of a specific product in the quote
  const updateQuantity = (productId, quantity) => {
    setQuoteItems(prevItems =>
      // Map through items
      prevItems.map(item =>
        item.id === productId
          ? { // If it's the target item
              ...item,
              quantity: quantity, // Update its quantity
              totalItemPrice: item.price * quantity // Recalculate its total price
            }
          : item // Otherwise, keep the item as is
      // Filter out any items where the quantity might have been set to 0 or less
      ).filter(item => item.quantity > 0) 
    );
  };

  // Calculate the total price of all items in the quote
  // Use reduce to sum up the totalItemPrice of each item
  const totalQuotePrice = quoteItems.reduce((total, item) => total + (item.totalItemPrice || 0), 0);


  // The value object contains the state and functions to be shared via context
  const value = {
    quoteItems,      // The array of items in the quote
    quoteCount,      // The number of unique items
    addToQuote,      // Function to add items
    removeFromQuote, // Function to remove items
    updateQuantity,  // Function to update quantity
    totalQuotePrice, // The calculated total price of the quote
  };

  // Return the Provider component, passing the value to all children
  return (
    <QuoteContext.Provider value={value}>
      {children} {/* Render the components wrapped by this provider */}
    </QuoteContext.Provider>
  );
};
