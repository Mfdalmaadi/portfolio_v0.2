import React, { useState } from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/Resume.pdf";
import Switch from "./Switch";
import "../style/Navbar.css";

const Navbar = ({ theme, changetheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (window.location.pathname === "/" && id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`retro-navbar ${theme}`}>
      <div className="retro-navbar-left">
        <img src="me2.jpg" alt="Logo" className="retro-avatar" />
        <span className="retro-title">Mfdal.dev</span>
      </div>

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </div>

      <div className={`retro-navbar-right ${isOpen ? "open" : ""}`}>
        <div className="nav-section">
          <Link 
            to="/" 
            onClick={() => handleNavClick("home")} 
            className="retro-menu"
          >
            Home
          </Link>
          <div className="nav-divider"></div>
          <Link 
            to="/about" 
            onClick={() => handleNavClick()} 
            className="retro-menu about-link"
          >
            About
          </Link>
          <Link 
            to="/#skills" 
            onClick={() => handleNavClick("skills")} 
            className="retro-menu"
          >
            Skills
          </Link>
          <Link 
            to="/#projects" 
            onClick={() => handleNavClick("projects")} 
            className="retro-menu"
          >
            Projects
          </Link>
          <Link 
            to="/#contact" 
            onClick={() => handleNavClick("contact")} 
            className="retro-menu"
          >
            Contact
          </Link>
          <a
            href={Resume}
            className="retro-menu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <Switch theme={theme} changetheme={changetheme} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;