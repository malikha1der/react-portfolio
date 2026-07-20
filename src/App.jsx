import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import ScrollTop from "./components/ScrollTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/LoadingSpinner.css";

// Lazy loading components
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
            
            {/* Suspense fallback component page load hone tak skeleton ya spinner dikhayega */}
            <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
                <main>
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
            </Suspense>
            
            <Footer />
        </Loader>
    );
}

export default App;
