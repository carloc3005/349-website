import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './frontend/pages/home.jsx' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Home component will be rendered at the root URL */}
        <Route path="/" element={<Home />} />

        {/* Example: Add additional routes here as needed */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

