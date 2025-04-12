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

const App = ()=>{
    const [theme, setTheme] = useState("dark");
    const changetheme = ()=>{
        setTheme((prevtheme) => prevtheme === "dark" ? "light" : "dark");
    }
    return(
        <Router>
            <div className={`app ${theme}`}>
                <Navbar theme={theme} changetheme={changetheme} />
                <main>
                <section id="home">
                    <Home/>
                </section>
                <section id="about">
                    <About theme={theme} />
                </section>
                <section id="skills">
                    <Skills theme={theme} />
                </section>
                <section id="projects">
                    <Projects theme={theme} />
                </section>
                <section id="certificate">
                    <Certificate theme={theme} />
                </section>
                <section id="contact">
                    <Contact theme={theme} />
                </section>
                </main>

                <Footer theme={theme}/>
            </div>
        </Router>
    )
}

export default App;


