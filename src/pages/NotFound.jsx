import { Link } from "react-router-dom";
import "../styles/notFound.css";
import { motion } from "framer-motion";

function NotFound() {

    return (

        <section className="not-found">

            <motion.div

                initial={{
                    opacity: 0,
                    scale: .8
                }}

                animate={{
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: .6
                }}

                className="not-found-content"

            >

                <h1>

                    404

                </h1>

                <h2>

                    Page Not Found

                </h2>

                <p>

                    The page you're looking for doesn't exist or has been moved.

                </p>

                <Link

                    to="/"

                    className="btn"

                >

                    Back To Home

                </Link>

            </motion.div>

        </section>

    );

}

export default NotFound;