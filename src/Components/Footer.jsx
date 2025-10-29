// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
        {/* 🔗 Social Links */}
        <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl">
          <a
            href="https://www.linkedin.com/in/meganathan-m-9209a12a1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:scale-125 hover:text-blue-400 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:meganathan4448588@gmail.com"
            className="text-[#EA4335] hover:scale-125 hover:text-red-400 transition-all duration-300"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="https://github.com/MEGANATHANM2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 hover:scale-125 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* ✨ Text Info */}
        <div>
          <p className="text-sm sm:text-base text-gray-300">
            © {year} <span className="font-semibold text-white">Meganathan M</span>. All Rights Reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
