import heroImage from "../assets/images/hero-image.png";

import resume from "../assets/documents/resume.pdf";

const heroData = {

    greeting: "Hi, I'm",

    name: "Malik",

    title: [

        "Frontend React Developer",

        "JavaScript Developer",

        "Computer Science Student",

        "UI Enthusiast"

    ],

    description:

        "I build modern, responsive and user-friendly web applications with React. My focus is creating clean UI, smooth animations and professional user experiences.",

    image: heroImage,

    resume: resume,

    buttons: {

        primary: "Download CV",

        secondary: "Contact Me"

    },
    stats: [

    {

        number: "10+",

        label: "Projects"

    },

    {

        number: "2+",

        label: "Years Learning"

    },

    {

        number: "8+",

        label: "Technologies"

    }

],

    social: {

        github: "https://github.com/malikha1der",

        linkedin: "https://www.linkedin.com/in/malik-haider-1a5017393?utm_source=share_via&utm_content=profile&utm_medium=member_android"

    }

};

export default heroData;