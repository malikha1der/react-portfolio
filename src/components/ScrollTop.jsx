import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const toggleVisibility = () => {

            if (window.scrollY > 400) {

                setVisible(true);

            }

            else {

                setVisible(false);

            }

        };

        window.addEventListener("scroll", toggleVisibility);

        return () =>

            window.removeEventListener(

                "scroll",

                toggleVisibility

            );

    }, []);

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    return (

        <button

            className={`scroll-top ${visible ? "show" : ""}`}

            onClick={scrollToTop}

            aria-label="Scroll To Top"

        >

            <FaArrowUp />

        </button>

    );

}

export default ScrollTop;