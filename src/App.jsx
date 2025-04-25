import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './frontend/pages/home.jsx' 
import About from './frontend/pages/about.jsx'
import Service from './frontend/pages/services.jsx'
import Products from './frontend/pages/products.jsx'; 
import Order from './frontend/pages/order.jsx'; 
import Navbar from './frontend/pages/navbar.jsx';
import Footer from './frontend/pages/footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />   
      <Routes>
        // All the routes or pages
        // The path is the URL and the element is the component to be rendered
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/order" element={<Order />} /> 
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )
}

export default App

