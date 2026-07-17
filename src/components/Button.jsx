import { motion } from "framer-motion";

function Button({

    text,

    type = "button",

    onClick,

    href,

    icon,

    variant = "primary",

    disabled = false

}) {

    const buttonContent = (

        <>

            <span>

                {text}

            </span>

            {

                icon && (

                    <span className="btn-icon">

                        {icon}

                    </span>

                )

            }

        </>

    );

    if (href) {

        return (

            <motion.a

                href={href}

                target={

                    href.startsWith("http")

                        ? "_blank"

                        : undefined

                }

                rel={

                    href.startsWith("http")

                        ? "noreferrer"

                        : undefined

                }

                className={`btn ${variant}`}

                whileHover={{

                    scale: 1.05

                }}

                whileTap={{

                    scale: 0.95

                }}

            >

                {buttonContent}

            </motion.a>

        );

    }

    return (

        <motion.button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className={`btn ${variant}`}

            whileHover={

                disabled

                    ? {}

                    : {

                        scale: 1.05

                    }

            }

            whileTap={

                disabled

                    ? {}

                    : {

                        scale: 0.95

                    }

            }

        >

            {buttonContent}

        </motion.button>

    );

}

export default Button;