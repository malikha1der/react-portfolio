import { motion } from "framer-motion";


function SectionTitle({

    subtitle,

    title,

    description

}) {



    return (

        <motion.div


            initial={{

                opacity:0,

                y:30

            }}



            whileInView={{

                opacity:1,

                y:0

            }}



            transition={{

                duration:0.6

            }}



            viewport={{

                once:true

            }}



            className="section-title"



        >



            {
                subtitle && (

                    <span className="section-subtitle">

                        {subtitle}

                    </span>

                )
            }






            <h2>

                {title}

            </h2>





            {
                description && (

                    <p>

                        {description}

                    </p>

                )
            }




        </motion.div>


    );

}



export default SectionTitle;