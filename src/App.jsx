import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './frontend/pages/navbar';
import Home from './frontend/pages/home';
import Products from './frontend/pages/products';
import About from './frontend/pages/about';
import Order from './frontend/pages/order';
import Footer from './frontend/pages/footer';
import { QuoteProvider } from './frontend/context/QuoteContext'; // Import the provider

function App() {
  return (
    <QuoteProvider> {/* Wrap the Router with QuoteProvider */}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/order" element={<Order />} />
              {/* Add other routes as needed */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QuoteProvider>
  );
}

export default App;

