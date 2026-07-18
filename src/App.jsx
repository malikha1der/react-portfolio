import Loader from "./components/Loader";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollProgress from "./components/ScrollProgress";
import ScrollTop from "./components/ScrollTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/LoadingSpinner.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

    return (

        <Loader>

            <ScrollProgress />

            <ScrollTop />

            <Navbar />

            <main>

                <Home />

                <About />

                <Skills />

                <Projects />

                <Contact />

            </main>

            <Footer />

        </Loader>

    );

}

export default App;