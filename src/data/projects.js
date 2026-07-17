import {
    FaCloudSun,
    FaClipboardList,
    FaLaptopCode
} from "react-icons/fa";

const projects = [

    {
        id: 1,

        title: "Professional Todo App",

        icon: FaClipboardList,

        description:
            "A modern task management application with CRUD operations, Local Storage, edit, delete and responsive UI.",

        technologies: [
            "React",
            "JavaScript",
            "CSS",
            "LocalStorage"
        ],

        github: "https://github.com/yourusername/todo-app",

        demo: "https://todo-app-demo.com"
    },



    {
        id: 2,

        title: "Weather Application",

        icon: FaCloudSun,

        description:
            "Weather application with real-time API integration, temperature, humidity and modern interface.",

        technologies: [
            "React",
            "API",
            "JavaScript"
        ],

        github: "https://github.com/yourusername/weather-app",

        demo: "https://weather-demo.com"
    },



    {
        id: 3,

        title: "Personal Portfolio Website",

        icon: FaLaptopCode,

        description:
            "A modern and responsive portfolio website showcasing my skills, projects, experience and contact information with smooth animations and premium UI design.",

        technologies: [
            "React",
            "JavaScript",
            "CSS",
            "Framer Motion"
        ],

        github: "https://github.com/yourusername/portfolio",

        demo: "https://your-portfolio-demo.com"
    }

];

export default projects;