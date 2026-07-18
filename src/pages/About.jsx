import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import heroData from "../data/heroData";

function About() {

    const [isMobile, setIsMobile] = useState(
        () => typeof window !== "undefined" && window.innerWidth <= 768
    );

    useEffect(() => {

        const checkMobile = () => {

            setIsMobile(window.innerWidth <= 768);

        };

        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);

    }, []);

    const aboutCards = [

        {
            title: "Frontend Development",
            value: "React & JavaScript",
            description:
                "Building modern, responsive and interactive web applications using React, JavaScript and the latest frontend technologies."
        },

        {
            title: "Education",
            value: "BS Computer Science",
            description:
                "Currently pursuing a Bachelor's degree in Computer Science with a strong focus on Software Engineering and Web Development."
        },

        {
            title: "UI / UX Design",
            value: "Modern Interfaces",
            description:
                "Designing clean, attractive and user-friendly interfaces that provide an excellent user experience across all devices."
        },

        {
            title: "Problem Solving",
            value: "Continuous Learning",
            description:
                "Passionate about solving real-world problems, learning modern technologies and continuously improving development skills."
        }

    ];

    return (

        <section
            id="about"
            className="about"
        >

            <SectionTitle

                subtitle="About Me"

                title="Turning Ideas Into Digital Experiences"

                description="Passionate about building modern, responsive and visually appealing web applications."

            />

            <div className="about-container">

                {/* Left Side */}

                <motion.div

                    className="about-text"

                    initial={

                        isMobile

                            ? { opacity: 1, x: 0 }

                            : {

                                opacity: 0,

                                x: -60

                            }

                    }

                    whileInView={

                        isMobile

                            ? { opacity: 1, x: 0 }

                            : {

                                opacity: 1,

                                x: 0

                            }

                    }

                    transition={

                        isMobile

                            ? {}

                            : {

                                duration: 0.7

                            }

                    }

                    viewport={{

                        once: true

                    }}

                >

                    <h3>

                        Who I Am

                    </h3>

                    <p>

                        I'm Malik, a passionate Frontend React Developer and BS Computer Science student. I enjoy creating modern, responsive and user-friendly web applications with clean code and attractive user interfaces.

                    </p>

                    <p>

                        My goal is to build high-quality digital products that not only look professional but also deliver excellent performance and user experience. I continuously learn new technologies and improve my development skills through real-world projects.

                    </p>

                    <div className="about-buttons">

                        <Button

                            text="Download CV"

                            href={heroData.resume}

                        />

                        <Button

                            text="Contact Me"

                            href="#contact"

                            variant="secondary"

                        />

                    </div>

                </motion.div>

                {/* Right Side */}

                <div className="about-cards">

                    {

                        aboutCards.map((card, index) => (

                            <motion.div

                                key={index}

                                className="about-card"

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

                                            delay: index * 0.15

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

                                <h3>

                                    {card.title}

                                </h3>

                                <h4>

                                    {card.value}

                                </h4>

                                <p>

                                    {card.description}

                                </p>

                            </motion.div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default About;