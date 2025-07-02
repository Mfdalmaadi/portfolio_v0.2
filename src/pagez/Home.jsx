import React from "react";
import "../style/Home.css";

const Home = ({ theme }) => {
  return (
    <section id="home" className={`home-section ${theme}`}>
      <div className="home-container">
        <div className="home-content">
          <div className="home-image">
            <div className="printed-image-container">
              <img 
                src="me.jpg" 
                alt="Maadi El Moufaddal" 
                className="printed-image"
                onError={(e) => e.target.src = "fallback-avatar.png"}
              />
              <div className="pixel-frame">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="pixel" />
                ))}
              </div>
            </div>
          </div>

          <div className="home-text">
            <div className="home-header">
              <h2 className="home-title-shadow">DEVELOPER</h2>
              <h1 className="home-title">
                <span className="wave">👋</span>
                <span className="greeting">Hello, I'm</span>
                <span className="highlight">Maadi El Moufaddal</span>
              </h1>
            </div>
            
            <p className="home-subtitle">
              A <span className="highlight">Full-Stack Developer</span> & student. I build
              clean, functional, and bold web experiences.
              <br />
              <span className="pixel-arrow">➡️</span> Dive into my <span className="highlight">projects</span>, skills, and certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;