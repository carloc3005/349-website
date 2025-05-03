import React from 'react';
import banner1 from '../../assets/banner1.png'; 

const About = () => {
  return (
    <div className="animate-fadeIn">
      {/* Banner Section */}
      <div
        className="h-64 bg-cover bg-center mb-12 relative"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Optional Title */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white"></h1>
        </div>
      </div>

      {/* Existing About Page Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us </h2>
        <p className="text-lg text-gray-600">
          For over 25 years, <span className="font-semibold">Wire Edge</span> has been a trusted name in the production of high-quality wire harnesses and custom cable assemblies. Based in Anaheim, California, we specialize in delivering precision-engineered wiring solutions for industries including automotive, marine, motorcycle, and medical sectors.
        </p>
      </div>
      <div className="space-y-8 text-gray-700">
        <p>Our story began with a simple but powerful goal: to provide reliable, American-made wire harnesses backed by expert craftsmanship and personal service. Over the decades, we’ve earned a reputation for consistency, customization, and a deep understanding of our clients’ technical needs.
        </p>
        <p>Every harness we build is more than a product—it’s a critical connection that powers essential systems. Whether it’s for a custom car, a high-performance boat, or life-saving medical equipment, we ensure each cable meets the highest standards.
        </p>
        <p>Being located in Anaheim allows us to stay close to our clients across Southern California and beyond, providing quick turnaround times and responsive service. Our roots in this community run deep, and we’re proud to support local innovation and industry.
        </p>
      </div>
        {/*Mission*/}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To deliver dependable, high-quality wire harness and cable solutions through precision craftsmanship, responsive service, and a deep commitment to our clients’ success.
        </p>
      </div>
        {/*Vision */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-700">
          To be a leading provider of custom wiring solutions recognized for reliability, innovation, and long-term partnerships across diverse industries worldwide.
        </p>
      </div>
        {/*Core Values */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Core Values</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Quality First</strong> - We take pride in our work and never compromise on standards.</li>
          <li><strong>Customer Commitment</strong> - We build lasting relationships by understanding and exceeding customer expectations.</li>
          <li><strong>Integrity</strong> - We are honest, transparent, and accountable in everything we do.</li>
          <li><strong>Innovation</strong> - We continually seek smarter, more efficient solutions to meet evolving industry needs.</li>
          <li><strong>Teamwork</strong> - We succeed through collaboration, respect, and shared goals.</li>
          <li><strong>Community Roots</strong> - We support local business, value our Anaheim heritage, and invest in the people around us.</li>
        </ul>
      </div>
    </div>
    
  );
};

export default About;
