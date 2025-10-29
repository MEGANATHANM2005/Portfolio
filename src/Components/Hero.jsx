import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.css";
import techImage from "../assets/tech-photo.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-gray-950 text-white flex items-center justify-center overflow-hidden"
    >
      {/* 🌌 Animated Star Background */}
      <div className="absolute inset-0 z-0 stars-bg"></div>

      {/* 👨‍💻 Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Meganathan M
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "A Passionate Web Developer 💻",
              2000,
              "React Enthusiast ⚛️",
              2000,
              "Tailwind CSS Ninja 🌪️",
              2000,
              "Tech Explorer 🚀",
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-400 block"
          />

          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I build beautiful, responsive websites with React, Tailwind CSS, and modern animations.
            Let’s create something stunning together!
          </motion.p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={techImage}
            alt="Techy Meganathan"
            className="w-52 sm:w-72 md:w-96 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.5)] border-4 border-purple-500 object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>

      {/* 🎯 Call-to-Action Button */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:from-pink-500 hover:to-purple-500 hover:shadow-lg transition-all duration-300"
      >
        Go to Works
      </motion.a>
    </section>
  );
};

export default Hero;
