import React from 'react'; // Add this import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {
  return (
    <div>
      {/* Test element for Tailwind */}
      <div className="bg-blue-500 text-white p-4 rounded">
        Tailwind Test Element
      </div>
    </div>


  );
}

export default Home;
