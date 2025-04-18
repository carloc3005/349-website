import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './frontend/pages/home.jsx' 
import About from './frontend/pages/about.jsx'
import Service from './frontend/pages/service.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Home component will be rendered at the root URL */}
        <Route path="/" element={<Home />} />

        {/* Example: Add additional routes here as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

