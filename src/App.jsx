import { lazy, Suspense } from "react";

import Loader from "./components/Loader";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollProgress from "./components/ScrollProgress";
import ScrollTop from "./components/ScrollTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/LoadingSpinner.css";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {

    return (

        <Loader>

            <ScrollProgress />

            <ScrollTop />

            <Navbar />

            <main>

                <Suspense fallback={<LoadingSpinner />}>

                    <Home />

                    <About />

                    <Skills />

                    <Projects />

                    <Contact />

                </Suspense>

            </main>

            <Footer />

        </Loader>

    );

}

export default App;