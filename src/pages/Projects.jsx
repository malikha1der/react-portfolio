import { motion } from "framer-motion";
// Optimized Imports (Tree-shaking)
import { FaClipboardList } from "react-icons/fa/FaClipboardList";
import { FaCloudSun } from "react-icons/fa/FaCloudSun";
import { FaLaptopCode } from "react-icons/fa/FaLaptopCode";

import SectionTitle from "../components/SectionTitle";

function Projects() {
    const projects = [
        {
            title: "Professional Todo App",
            icon: <FaClipboardList />,
            description: "A modern task management application with CRUD operations, Local Storage, edit & delete functionality and a responsive user interface.",
            technologies: ["React", "JavaScript", "CSS", "LocalStorage"]
        },
        {
            title: "Weather Application",
            icon: <FaCloudSun />,
            description: "A weather application that fetches real-time weather information using API integration with a clean and responsive interface.",
            technologies: ["React", "REST API", "JavaScript"]
        },
        {
            title: "Portfolio Website",
            icon: <FaLaptopCode />,
            description: "A modern developer portfolio built with React, featuring smooth animations, responsive layouts, glassmorphism effects and a professional UI.",
            technologies: ["React", "Framer Motion", "CSS"]
        }
    ];

    return (
        <section id="projects" className="projects">
            <SectionTitle
                subtitle="My Work"
                title="Featured Projects"
                description="A selection of projects that demonstrate my frontend development skills and passion for building modern web applications."
            />
            <div className="projects-container">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="project-icon">{project.icon}</div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
