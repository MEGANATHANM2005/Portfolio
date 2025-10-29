import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Image imports
import detox1 from "../assets/detox1.jpg";
import detox2 from "../assets/detox2.jpg";
import detox3 from "../assets/detox3.jpg";
import codevolt1 from "../assets/codevolt1.jpg";
import codevolt2 from "../assets/codevolt2.jpg";
import codevolt3 from "../assets/codevolt3.jpg";
import sdv1 from "../assets/sdv1.jpg";
import sdv2 from "../assets/sdv2.jpg";
import sdv3 from "../assets/sdv3.jpg";
import stackqueue1 from "../assets/stackqueue1.jpg";
import stackqueue2 from "../assets/stackqueue2.jpg";

const hackathonProjects = [
  {
    title: "Digital Detox 🌿",
    description:
      "Hackathon project from KPR Institution focused on reducing screen time through habit tracking and wellness.",
    github: "https://github.com/ARUNNG2004/detox",
    images: [detox1, detox2, detox3],
  },
  {
    title: "CodeVolt - Rapteeh ⚡",
    description:
      "Built at VIT Hackathon (Rapteeh) focused on innovative solutions in the education sector. More details soon!",
    github: "#",
    images: [codevolt1, codevolt2, codevolt3],
  },
];

const institutionalProjects = [
  {
    title: "SDV Institutional Project 🚗",
    description:
      "A collaborative project on Software Defined Vehicle (SDV) with teammates. Code available on GitHub.",
    github: "https://github.com/ARUNNG2004/Software-Defined-Vehicle",
    images: [sdv1, sdv2, sdv3],
  },
];

const personalProjects = [
  {
    title: "AI-LaptopAdvisor 🤖",
    description:
      "An intelligent chatbot that recommends laptops using intent-based matching and dynamic responses with live links.",
    github: "https://github.com/MEGANATHANM2005/AI-Laptop-Advisor",
    live: "https://meganathanm2005.github.io/AI-Laptop-Advisor/",
    images: [],
  },
  {
    title: "E-commerce UI 🛒",
    description:
      "A beautifully crafted responsive e-commerce front-end design using HTML, CSS, and JavaScript. (Design only)",
    github: "https://github.com/MEGANATHANM2005/E-commerce",
    live: "https://meganathanm2005.github.io/E-commerce/",
    images: [],
  },
];

const internshipProjects = [
  {
    title: "Internship at StackQueue 💼",
    description:
      "Worked as a web developer intern at StackQueue Education. Built multiple responsive components and dashboards.",
    github: "#",
    images: [stackqueue1, stackqueue2],
  },
];

const animations = [
  { opacity: 0, y: 40 },
  { opacity: 0, x: -40 },
  { opacity: 0, scale: 0.9 },
  { opacity: 0, rotate: -5 },
];

const ProjectCard = ({ project, onOpenGallery, isOpen, onToggle, index }) => {
  const animVariant = animations[index % animations.length];

  return (
    <motion.div
      className={`bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 rounded-3xl shadow-xl border border-gray-700 cursor-pointer overflow-hidden transition-all duration-500 ${
        isOpen ? "p-6 sm:p-8" : "p-4"
      }`}
      whileHover={{ scale: 1.02 }}
      initial={animVariant}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => onToggle(project.title)}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center text-white">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-5 text-sm sm:text-base leading-relaxed text-center">
        {project.description}
      </p>

      {isOpen && project.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="project screenshot"
              className="rounded-lg w-full h-44 object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                onOpenGallery(project, i);
              }}
            />
          ))}
        </div>
      )}

      {isOpen && (
        <div className="flex justify-center flex-wrap gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              🚀 Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-5 h-5" /> Code
          </a>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            onClick={(e) => {
              e.stopPropagation();
              onToggle(project.title);
            }}
          >
            🔙 Back
          </button>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [galleryProject, setGalleryProject] = useState(null);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const [openCards, setOpenCards] = useState({});

  const openGallery = (project, index) => {
    setGalleryProject({ ...project, currentIndex: index });
    setGalleryStartIndex(index);
  };

  const closeGallery = () => {
    setGalleryProject(null);
    setGalleryStartIndex(0);
  };

  const toggleCard = (title) => {
    setOpenCards((prev) => ({
      [title]: !prev[title],
    }));
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          ✨ Projects Showcase ✨
        </h2>

        {/* Hackathon Projects */}
        <h3 className="text-2xl font-semibold mb-6">🎓 Hackathons</h3>
        <div className="grid gap-10 md:grid-cols-2 mb-16">
          {hackathonProjects.map((p, i) => (
            <ProjectCard
              key={i}
              index={i}
              project={p}
              onOpenGallery={openGallery}
              isOpen={openCards[p.title] || false}
              onToggle={toggleCard}
            />
          ))}
        </div>

        {/* Institutional */}
        <h3 className="text-2xl font-semibold mb-6">🏢 Institutional Projects</h3>
        <div className="grid gap-10 mb-16">
          {institutionalProjects.map((p, i) => (
            <ProjectCard
              key={i}
              index={i}
              project={p}
              onOpenGallery={openGallery}
              isOpen={openCards[p.title] || false}
              onToggle={toggleCard}
            />
          ))}
        </div>

        {/* Personal */}
        <h3 className="text-2xl font-semibold mb-6">💻 Personal Projects</h3>
        <div className="grid gap-10 md:grid-cols-2 mb-16">
          {personalProjects.map((p, i) => (
            <ProjectCard
              key={i}
              index={i}
              project={p}
              onOpenGallery={openGallery}
              isOpen={openCards[p.title] || false}
              onToggle={toggleCard}
            />
          ))}
        </div>

        {/* Internship */}
        <h3 className="text-2xl font-semibold mb-6">📚 Internship</h3>
        <div className="grid gap-10">
          {internshipProjects.map((p, i) => (
            <ProjectCard
              key={i}
              index={i}
              project={p}
              onOpenGallery={openGallery}
              isOpen={openCards[p.title] || false}
              onToggle={toggleCard}
            />
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {galleryProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center px-4">
          <img
            src={galleryProject.images[galleryStartIndex]}
            alt="Gallery View"
            className="max-w-full sm:max-w-3xl max-h-[80vh] mb-6 rounded-xl"
          />
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href={galleryProject.images[galleryStartIndex]}
              download
              className="px-4 py-2 bg-green-600 text-white rounded-md text-sm"
            >
              ⬇️ Download
            </a>
            <button
              onClick={closeGallery}
              className="px-4 py-2 bg-red-600 text-white rounded-md text-sm"
            >
              ❌ Close
            </button>
          </div>
          <p className="mt-4 text-white text-lg">{galleryProject.title}</p>
        </div>
      )}
    </section>
  );
};

export default Projects;
