import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import logo from "../assets/images/logo.png";

function Navbar() {

    const [open, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const [active, setActive] = useState("home");

    const tickingRef = useRef(false);

    // Scrolled background change — throttled with requestAnimationFrame
    useEffect(() => {

        const handleScroll = () => {

            if (!tickingRef.current) {

                window.requestAnimationFrame(() => {

                    setScrolled(window.scrollY > 60);

                    tickingRef.current = false;

                });

                tickingRef.current = true;

            }

        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    // Active section detection — IntersectionObserver (no scroll-loop, no DOM query per scroll)
    useEffect(() => {

        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setActive(entry.target.getAttribute("id"));

                    }

                });

            },
            {
                rootMargin: "-120px 0px -60% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();

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

                            width="180"

                            height="60"

                            fetchpriority="high"

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

                aria-label="Toggle menu"

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