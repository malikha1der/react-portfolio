import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPython,
    FaGitAlt
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiTypescript,
    SiMysql
} from "react-icons/si";

import SectionTitle from "../components/SectionTitle";

function Skills() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        const checkMobile = () => {

            setIsMobile(window.innerWidth <= 768);

        };

        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);

    }, []);

    const skills = [

        {
            name: "HTML5",
            icon: <FaHtml5 />,
            level: 95
        },

        {
            name: "CSS3",
            icon: <FaCss3Alt />,
            level: 92
        },

        {
            name: "JavaScript",
            icon: <FaJs />,
            level: 90
        },

        {
            name: "React JS",
            icon: <FaReact />,
            level: 88
        },

        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            level: 86
        },

        {
            name: "TypeScript",
            icon: <SiTypescript />,
            level: 75
        },

        {
            name: "Python",
            icon: <FaPython />,
            level: 82
        },

        {
            name: "MySQL",
            icon: <SiMysql />,
            level: 80
        },

        {
            name: "Git",
            icon: <FaGitAlt />,
            level: 78
        }

    ];

    return (

        <section
            id="skills"
            className="skills"
        >

            <SectionTitle

                subtitle="My Skills"

                title="Technologies I Work With"

                description="A collection of technologies and tools that I use to build modern, responsive and high-quality web applications."

            />

            <div className="skills-container">

                {

                    skills.map((skill, index) => (

                        <motion.div

                            key={index}

                            className="skill-card"

                            initial={

                                isMobile

                                    ? { opacity: 1 }

                                    : {

                                        opacity: 0,

                                        y: 40

                                    }

                            }

                            whileInView={

                                isMobile

                                    ? { opacity: 1 }

                                    : {

                                        opacity: 1,

                                        y: 0

                                    }

                            }

                            transition={

                                isMobile

                                    ? {}

                                    : {

                                        duration: 0.5,

                                        delay: index * 0.08

                                    }

                            }

                            viewport={{

                                once: true

                            }}

                            whileHover={

                                isMobile

                                    ? {}

                                    : {

                                        y: -8

                                    }

                            }

                        >

                            <div className="skill-icon">

                                {skill.icon}

                            </div>

                            <h3>

                                {skill.name}

                            </h3>

                            <div className="skill-bar">

                                <motion.span

                                    initial={

                                        isMobile

                                            ? { width: `${skill.level}%` }

                                            : { width: 0 }

                                    }

                                    whileInView={

                                        isMobile

                                            ? { width: `${skill.level}%` }

                                            : { width: `${skill.level}%` }

                                    }

                                    transition={

                                        isMobile

                                            ? {}

                                            : { duration: 1 }

                                    }

                                    viewport={{

                                        once: true

                                    }}

                                />

                            </div>

                            <p>

                                {skill.level}%

                            </p>

                        </motion.div>

                    ))

                }

            </div>

        </section>

    );

}

export default Skills;