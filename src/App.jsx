import React, { useState } from "react";
import Home from "./pagez/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./pagez/Skills";
import { BrowserRouter as Router} from "react-router-dom";
import "./style/global.css";
import About from "./pagez/About";
import "./style/App.css";
import Projects from "./pagez/Projects";
import Certificate from "./pagez/Certificate";
import Contact from "./pagez/Contact";
import SplashScreen from "./components/SplashScreen";

const App = ()=>{
    const [theme, setTheme] = useState("dark");
    const [showSplash, setShowSplash] = useState(true);

    const changetheme = ()=>{
        setTheme((prevtheme) => prevtheme === "dark" ? "light" : "dark");
    }
    if (showSplash) {
        return <SplashScreen onFinish={() => setShowSplash(false)} />;
      }
    return(
        <Router>
            <div className={`app ${theme}`}>
                <Navbar theme={theme} changetheme={changetheme} />
                <main>
                <section id="home" className="animation">
                    <Home/>
                </section>
                <section id="about" className="animation">
                    <About theme={theme} />
                </section>
                <section id="skills">
                    <Skills theme={theme} />
                </section>
                <section id="projects" className="animation">
                    <Projects theme={theme} />
                </section>
                <section id="certificate" className="animation">
                    <Certificate theme={theme} />
                </section>
                <section id="contact" className="animation">
                    <Contact theme={theme} />
                </section>
                </main>

                <Footer theme={theme}/>
            </div>
        </Router>
    )
}

export default App;


