import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pagez/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./pagez/Skills";
import About from "./pagez/About";
import Projects from "./pagez/Projects";
import Certificate from "./pagez/Certificate";
import Contact from "./pagez/Contact";
import SplashScreen from "./components/SplashScreen";
import Experience from "./pagez/Experience";
import "./style/App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [showSplash, setShowSplash] = useState(true);

  const changetheme = () => {
    setTheme((prevtheme) => (prevtheme === "dark" ? "light" : "dark"));
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }


  const MainContent = () => (
    <main>
      <Home theme={theme} id="home" />
      <Skills theme={theme} id="skills" />
      <Experience theme={theme} id="experience" />
      <Projects theme={theme} id="projects" />
      <Certificate theme={theme} id="certificate" />
      <Contact theme={theme} id="contact" />
    </main>
  );

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Navbar theme={theme} changetheme={changetheme} />
        <Routes>
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="*" element={<MainContent />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;