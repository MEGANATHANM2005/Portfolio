import React, { useState } from "react";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import resumeFile from "../assets/resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center text-white">
        
        {/* 🔥 Brand / Logo */}
        <div className="text-xl sm:text-2xl font-bold tracking-wide hover:text-blue-400 transition duration-300 cursor-pointer">
          Meganathan M
        </div>

        {/* 🌐 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
          </li>
          <li>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
          </li>
        </ul>

        {/* 💼 LinkedIn Icon */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/meganathan-m-9209a12a1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* 🍔 Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-blue-400 focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 text-2xl font-semibold">
          <li><a href="#home" onClick={closeMenu} className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" onClick={closeMenu} className="hover:text-blue-400">Projects</a></li>
          <li>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              Resume
            </a>
          </li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* 🔗 Social at Bottom */}
        <div className="flex gap-6 mt-10 text-3xl">
          <a
            href="https://www.linkedin.com/in/meganathan-m-9209a12a1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
