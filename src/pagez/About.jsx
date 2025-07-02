import React from "react";
import "../style/About.css";

const About = ({ theme }) => {
  return (
    <div className={`about-page-container ${theme}`}>
      <div className="about-page-content">
        <div className="about-page-text-section">
          <h1 className="about-page-title">About me</h1>
          <div className="about-page-text">
            <p className="about-page-paragraph">
              My name is Maadi El Moufaddal, a 21 years old <strong>Full-Stack Developer</strong>.
              I'm currently a second-year Digital Development student at ISTA NTIC Tangier.
            </p>
            <p className="about-page-paragraph">
              I've developed skills in <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>React</strong>, and <strong>Laravel</strong>, 
              with databases like MySQL and MongoDB.
            </p>
            <p className="about-page-paragraph">
              My journey in tech started with a love for problem solving and curiosity about technology.
            </p>
            <p className="about-page-paragraph">
              I'm looking to join a company that values innovation and continuous learning.
            </p>
          </div>
        </div>

        <div className="about-page-image-section">
          <div className="about-page-profile-card">
            <img 
              src="me.jpg" 
              alt="Maadi El Moufaddal" 
              className="about-page-profile-image" 
            />
            <div className="about-page-social-links">
              <a href="https://www.linkedin.com/in/el-moufaddal-maadi-79113431b/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="about-page-social-link">
                <span className="about-page-social-icon">[in]</span>
              </a>
              <a href="https://github.com/Mfdalmaadi" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="about-page-social-link">
                <span className="about-page-social-icon">{`</>`}</span>
              </a>
              <a href="https://www.instagram.com/mfdalmaadi" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="about-page-social-link">
                <span className="about-page-social-icon">[ig]</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;