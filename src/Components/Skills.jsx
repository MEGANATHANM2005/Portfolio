// // src/components/Skills.jsx
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
// } from 'react-icons/fa';

// const skills = [
//   { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" size={40} /> },
//   { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={40} /> },
//   { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={40} /> },
//   { name: 'React', icon: <FaReact className="text-blue-400" size={40} /> },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={40} /> },
//   { name: 'Git', icon: <FaGitAlt className="text-red-500" size={40} /> },
// ];

// const Skills = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section id="skills" className="py-20 px-4 bg-gray-100">
//       <div className="container mx-auto text-center" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-10 text-gray-800">My Skills</h2>
//         <div className="flex flex-wrap justify-center gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={skill.name}
//               data-aos="zoom-in"
//               data-aos-delay={index * 100} // Stagger animations
//               className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow w-32"
//             >
//               {skill.icon}
//               <span className="mt-2 font-semibold text-gray-700">
//                 {skill.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;