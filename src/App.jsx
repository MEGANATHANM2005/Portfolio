// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutSkills from './Components/AboutSkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className="
          flex-1 
          pt-20 
          px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32
          space-y-24 sm:space-y-28 md:space-y-32
          transition-all duration-300
        "
      >
        <Hero />
        <AboutSkills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
