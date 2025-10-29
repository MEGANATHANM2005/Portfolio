// src/components/Contact.jsx
import React from 'react';
import './stars.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 sm:px-10 md:px-16 bg-black overflow-hidden"
    >
      {/* 🌌 Animated Star Background */}
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />

      <div className="container mx-auto text-center relative z-10">
        {/* 🧭 Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          Contact Me
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Have a question or want to work together? Let’s connect!
        </p>

        {/* 💌 Contact Form */}
        <form
          action="https://formspree.io/f/xgvzwogb"
          method="POST"
          className="max-w-xl mx-auto bg-gray-900 bg-opacity-50 p-6 sm:p-8 rounded-2xl shadow-lg"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-10 rounded-full 
                       hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* 🌐 Social Links */}
        <div className="flex justify-center flex-wrap gap-6 sm:gap-8 mt-10 text-3xl sm:text-4xl">
          <a
            href="https://www.linkedin.com/in/meganathan-m-9209a12a1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:scale-125 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:meganathan4448588@gmail.com?subject=Contact%20from%20Portfolio"
            className="text-[#EA4335] hover:scale-125 transition-transform duration-300"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="https://github.com/MEGANATHANM2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 hover:scale-125 transition-transform duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
