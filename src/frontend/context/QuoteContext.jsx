import React, { createContext, useState, useContext } from 'react';

// This is a custom hook to manage the quote context
// Create the context
const QuoteContext = createContext();

// Create a custom hook to use the context easily
export const useQuote = () => {
  return useContext(QuoteContext);
};

// Create the provider component
export const QuoteProvider = ({ children }) => {
  const [quoteCount, setQuoteCount] = useState(0);

  // Function to add an item to the quote (increments count)
  const addToQuote = () => {
    setQuoteCount(prevCount => prevCount + 1);
  };

  // Value provided by the context
  const value = {
    quoteCount,
    addToQuote,
  };

  return (
    <QuoteContext.Provider value={value}>
      {children}
    </QuoteContext.Provider>
  );
};
