import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import logo from "../assets/images/logo.png";

function Navbar() {

    const [open, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const [active, setActive] = useState("home");

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 60);

            const sections = document.querySelectorAll("section");

            let current = "home";

            sections.forEach((section) => {

                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    current = section.getAttribute("id");
                }

            });

            setActive(current);

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    const navLinks = [

        {
            name: "Home",
            link: "#home",
            id: "home"
        },

        {
            name: "About",
            link: "#about",
            id: "about"
        },

        {
            name: "Skills",
            link: "#skills",
            id: "skills"
        },

        {
            name: "Projects",
            link: "#projects",
            id: "projects"
        },

        {
            name: "Contact",
            link: "#contact",
            id: "contact"
        }

    ];

    return (

        <motion.header

            initial={{ y: -100 }}

            animate={{ y: 0 }}

            transition={{ duration: 0.6 }}

            className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}

        >

            {/* Logo */}

            <div className="logo">

                <a href="#home">

                    <div className="logo-wrapper">

                        <img

                            src={logo}

                            alt="Malik Logo"

                            className={`logo-img ${scrolled ? "logo-small" : ""}`}

                        />

                    </div>

                </a>

            </div>

            {/* Desktop Menu */}

            <nav className="desktop-menu">

                <ul>

                    {

                        navLinks.map((item) => (

                            <li key={item.id}>

                                <a

                                    href={item.link}

                                    className={active === item.id ? "active-link" : ""}

                                >

                                    {item.name}

                                </a>

                            </li>

                        ))

                    }

                </ul>

            </nav>

            {/* Mobile Button */}

            <button

                className="menu-btn"

                onClick={() => setOpen(!open)}

            >

                {

                    open

                        ?

                        <HiX />

                        :

                        <HiMenuAlt3 />

                }

            </button>

            {/* Mobile Menu */}

            {

                open && (

                    <motion.nav

                        initial={{

                            opacity: 0,

                            y: -20

                        }}

                        animate={{

                            opacity: 1,

                            y: 0

                        }}

                        transition={{

                            duration: 0.3

                        }}

                        className="mobile-menu"

                    >

                        <ul>

                            {

                                navLinks.map((item) => (

                                    <li key={item.id}>

                                        <a

                                            href={item.link}

                                            className={active === item.id ? "active-link" : ""}

                                            onClick={() => setOpen(false)}

                                        >

                                            {item.name}

                                        </a>

                                    </li>

                                ))

                            }

                        </ul>

                    </motion.nav>

                )

            }

        </motion.header>

    );

}

export default Navbar;