import React, { useState } from "react";
import "../style/Skills.css";

const Skills = ({ theme }) => {
  const skills = {
    frontend: [
      { id: 1, name: "HTML", description: "HTML (HyperText Markup Language) is the foundation of all web pages. It structures content, allowing developers to define elements like headings, paragraphs, links, and multimedia.", image: "html.png" },
      { id: 2, name: "CSS", description: "CSS (Cascading Style Sheets) is used to style and layout web pages, including the design, colors, fonts, and responsiveness.", image: "css.png" },
      { id: 3, name: "Bootstrap", description: "Bootstrap is a popular CSS framework that simplifies web development with pre-designed components, responsive grids, and utilities.", image: "bootstrap.png" },
      { id: 4, name: "JavaScript", description: "JavaScript is a versatile programming language that adds interactivity to websites, enabling features like dynamic content updates, animations, form validation, and much more.", image: "javascript.png" },
      { id: 5, name: "React", description: "React is a JavaScript library for building user interfaces. It simplifies UI development through reusable components.", image: "react.png" },
    ],
    backend: [
      { id: 6, name: "Node.js", description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that enables server-side scripting.", image: "nodejs.png" },
      { id: 7, name: "Express.js", description: "Express.js is a lightweight, fast web framework for Node.js, designed to build scalable and flexible web applications.", image: "express.webp" },
      { id: 8, name: "PHP", description: "PHP is a widely-used server-side scripting language designed for web development.", image: "php.png" },
      { id: 9, name: "Laravel", description: "Laravel is a modern PHP framework that simplifies web application development with elegant syntax.", image: "laravel.png" },
    ],
    database: [
      { id: 10, name: "MySQL", description: "MySQL is a powerful relational database management system used for storing, managing, and retrieving data.", image: "mysql.png" },
      { id: 11, name: "MongoDB", description: "MongoDB is a NoSQL database that provides flexibility in storing and querying unstructured data.", image: "mongodb.png" },
    ],
    tools: [
      { id: 12, name: "Git", description: "Git is a version control system that tracks code changes, supports collaboration, and helps developers manage projects efficiently.", image: "git.png" },
      { id: 13, name: "Docker", description: "Docker is an open-source platform that automates the deployment of applications inside containers.", image: "docker1.webp" },
      { id: 14, name: "Postman", description: "Postman is a popular tool used to design, test, and document APIs.", image: "postman.png" },
      { id: 15, name: "Redux", description: "Redux is a state management library often used with React to manage application state predictably. Combined with Redux Toolkit, it streamlines the process of writing reducers and handling asynchronous logic.", image : "redux.png" },
      { id: 16, name: "Figma", description: "Figma is a collaborative design tool used for creating user interfaces, prototypes, and graphics directly in the browser.", image : "figma.png" }
    ],
  };

  const [clickedSkill, setClickedSkill] = useState(null);

  const opened = (skill) => {
    setClickedSkill(skill);
  };

  const closed = () => {
    setClickedSkill(null);
  };

  return (
    <div>
      <h1 className={theme}>Skills</h1>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="category-section">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="skill-cards">
              {skillList.map((skill) => (
                <div
                  key={skill.id}
                  className={`skill-card ${theme}`}
                  onClick={() => opened(skill)}
                >
                  <img src={skill.image} alt={skill.name} className="image" />
                  <div className="text">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {clickedSkill && (
        <div className="modal">
          <div className={`modal-content ${theme}`}>
            <button className="close-btn" onClick={closed}>
              &times;
            </button>
            <h3>{clickedSkill.name}</h3>
            <img src={clickedSkill.image} alt={clickedSkill.name} />
            <p>{clickedSkill.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
