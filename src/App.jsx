import Hero from "./components/Hero";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="w-screen h-full bg-white dark:bg-black text-black dark:text-white">
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
