import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
    FaGithub,
    FaLinkedin,
    FaArrowDown
} from "react-icons/fa";

import Button from "../components/Button";
import heroData from "../data/heroData";

import {
    fadeLeft,
    fadeRight,
    floating
} from "../animations/variants";

function Hero() {

    return (

        <section
            id="home"
            className="hero"
        >

            <div className="hero-bg">

                <span className="glow glow1"></span>

                <span className="glow glow2"></span>

                <span className="glow glow3"></span>

            </div>

            <div className="container hero-container">

                {/* Left Side */}

                <motion.div

                    className="hero-content"

                    variants={fadeLeft}

                    initial="hidden"

                    animate="visible"

                >

                    <p className="hero-small">

                        {heroData.greeting}

                    </p>

                    <h1>

                        {heroData.name}

                    </h1>

                    <h2>

                        <TypeAnimation

                            sequence={[
                                ...heroData.title.flatMap(item => [item, 2000])
                            ]}

                            wrapper="span"

                            speed={50}

                            repeat={Infinity}

                        />

                    </h2>

                    <p className="hero-description">

                        {heroData.description}

                    </p>

                    <div className="hero-buttons">

                        <Button

                            text={heroData.buttons.primary}

                            href={heroData.resume}

                        />

                        <Button

                            text={heroData.buttons.secondary}

                            href="#contact"

                            variant="secondary"

                        />

                    </div>

                    <div className="hero-social">

                        <a

                            href={heroData.social.github}

                            target="_blank"

                            rel="noreferrer"

                            aria-label="GitHub Profile"

                        >

                            <FaGithub />

                        </a>

                        <a

                            href={heroData.social.linkedin}
                            
                            target="_blank"

                            rel="noreferrer"

                            aria-label="LinkedIn Profile"

                        >

                            <FaLinkedin />

                        </a>

                    </div>

                    <div className="hero-stats">

                        {

                            heroData.stats.map((item, index) => (

                                <div

                                    key={index}

                                    className="hero-stat-card"

                                >

                                    <h3>

                                        {item.number}

                                    </h3>

                                    <p>

                                        {item.label}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                </motion.div>

                {/* Right Side */}

                <motion.div

                    className="hero-image"

                    variants={fadeRight}

                    initial="hidden"

                    animate="visible"

                >

                    <div className="hero-image-wrapper">

                        <div className="hero-ring"></div>

                        <div className="hero-ring hero-ring-2"></div>

                        <span className="orbit orbit-1"></span>

                        <span className="orbit orbit-2"></span>

                        <motion.img

                            src={heroData.image}

                            alt={heroData.name}

                            variants={floating}

                            animate="animate"

                            width="500"

                            height="500"

                        />

                    </div>

                </motion.div>

            </div>

            <a

                href="#about"

                className="scroll-down"

                aria-label="Scroll To About Section"

            >

                <FaArrowDown />

            </a>

        </section>

    );

}

export default Hero;