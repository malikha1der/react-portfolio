import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../assets/images/logo.png";

function Loader({ children }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 800);

        return () => clearTimeout(timer);

    }, []);

    return (

        <>

            <AnimatePresence>

                {

                    loading && (

                        <motion.div

                            className="loader"

                            initial={{

                                opacity:1

                            }}

                            exit={{

                                opacity:0

                            }}

                            transition={{

                                duration:.8

                            }}

                        >

                            <div className="loader-content">

                                <div className="loader-ring"></div>

                                <div className="loader-ring loader-ring-two"></div>

                                <img

                                    src={logo}

                                    alt="Logo"

                                    className="loader-logo"

                                />

                                <h2>

                                    Malik

                                </h2>

                                <p>

                                    Frontend React Developer

                                </p>

                            </div>

                        </motion.div>

                    )

                }

            </AnimatePresence>

            {

                !loading && children

            }

        </>

    );

}

export default Loader;