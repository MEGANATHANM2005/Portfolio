import React from 'react';
import PrImage from "../assets/photo.jpg";
import '../styles/AboutSkills.css';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
} from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" size={40} /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={40} /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={40} /> },
  { name: 'React', icon: <FaReact className="text-blue-400" size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={40} /> },
  { name: 'Python', icon: <FaPython className="text-blue-300" size={40} /> },
  { name: 'Java', icon: <FaJava className="text-red-400" size={40} /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" size={40} /> },
];

const AboutSkills = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-black text-white overflow-hidden"
    >
      {/* ✨ Star Background */}
      <div className="stars-bg absolute inset-0 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
        
        {/* About Section */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Image */}
          <motion.div
            className="md:w-1/3 flex justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <img
              src={PrImage}
              alt="Profile picture of Meganathan M"
              className="
                rounded-full
                w-32 h-40 
                sm:w-40 sm:h-40 
                md:w-48 md:h-48 
                lg:w-56 lg:h-56
                object-cover 
                shadow-xl 
                border-4 border-white
              "
            />
          </motion.div>

          {/* About Text */}
          <div className="md:w-2/3 text-center md:text-left">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I'm <span className="font-semibold text-white">Meganathan</span>, a passionate Web Developer and CSE student from Salem.
              I love crafting responsive, elegant web interfaces using React, Tailwind CSS, and modern tech.
              I’ve built full-stack apps during internships and hackathons using React, Flutter, Node.js, and AI tools.
              Outside of code, I’m into building mobile apps and exploring the latest in tech.
            </motion.p>

            {/* 💥 GitHub Button */}
            <motion.a
              href="https://github.com/MEGANATHANM2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:brightness-110 transition duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.07 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <FaGithub size={20} className="text-white" />
              GitHub Profile
            </motion.a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-white">
            My Skills
          </h2>

          <div
            className="
              grid 
              grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
              gap-6 sm:gap-8 md:gap-10
              place-items-center
            "
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="
                  flex flex-col items-center 
                  bg-white 
                  rounded-xl 
                  p-4 sm:p-5 md:p-6 
                  shadow-md 
                  hover:shadow-2xl 
                  transition-all duration-300 
                  w-28 sm:w-32 md:w-36
                "
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.15, type: 'spring' }}
              >
                {skill.icon}
                <span className="mt-2 text-gray-700 font-semibold text-sm sm:text-base">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSkills;
