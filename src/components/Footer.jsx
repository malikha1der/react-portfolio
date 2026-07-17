import {
    FaGithub,
    FaLinkedin,
    FaArrowUp
} from "react-icons/fa";

import logo from "../assets/images/logo.png";

function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="container footer-container">

                {/* Left */}

                <div className="footer-left">

                    <img

                        src={logo}

                        alt="Logo"

                        className="footer-logo"

                    />

                    <p>

                        Frontend React Developer passionate about
                        building modern, responsive and user-friendly
                        web applications with clean UI and smooth
                        user experience.

                    </p>

                </div>

                {/* Center */}

                <div className="footer-links">

                    <h3>

                        Quick Links

                    </h3>

                    <a href="#home">

                        Home

                    </a>

                    <a href="#about">

                        About

                    </a>

                    <a href="#skills">

                        Skills

                    </a>

                    <a href="#projects">

                        Projects

                    </a>

                    <a href="#contact">

                        Contact

                    </a>

                </div>

                {/* Right */}

                <div className="footer-right">

                    <h3>

                        Connect

                    </h3>

                    <div className="footer-social">

                        <a

                            href="https://github.com/yourusername"

                            target="_blank"

                            rel="noreferrer"

                        >

                            <FaGithub />

                        </a>

                        <a

                            href="https://linkedin.com/in/yourusername"

                            target="_blank"

                            rel="noreferrer"

                        >

                            <FaLinkedin />

                        </a>

                    </div>

                    <a

                        href="#home"

                        className="back-top"

                    >

                        <FaArrowUp />

                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                <p>

                    © {year} Malik. All Rights Reserved.

                </p>

                <p>

                    Designed & Developed by <span>Malik</span>

                </p>

            </div>

        </footer>

    );

}

export default Footer;