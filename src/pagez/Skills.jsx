import React, { useState } from "react";
import "../style/Skills.css";

const Skills = ({ theme }) => {
  const skills = [
    { id: 1, name: "HTML", image: "html.png", category: "frontend" },
    { id: 2, name: "CSS", image: "css.png", category: "frontend" },
    { id: 3, name: "Bootstrap", image: "bootstrap.png", category: "frontend" },
    { id: 4, name: "JavaScript", image: "javascript.png", category: "frontend" },
    { id: 5, name: "React", image: "react.png", category: "frontend" },
    { id: 20, name: "Wordpress", image: "wordpress.png", category: "frontend" },
    { id: 21, name: "Elementor", image: "elementor.webp", category: "frontend" },
    { id: 6, name: "Node.js", image: "nodejs.png", category: "backend" },
    { id: 7, name: "Express.js", image: "express.webp", category: "backend" },
    { id: 8, name: "PHP", image: "php.png", category: "backend" },
    { id: 9, name: "Laravel", image: "laravel.png", category: "backend" },
    { id: 10, name: "MySQL", image: "mysql.png", category: "database" },
    { id: 11, name: "MongoDB", image: "mongodb.png", category: "database" },
    { id: 12, name: "Git", image: "git.png", category: "tools" },
    { id: 13, name: "Docker", image: "docker1.webp", category: "tools" },
    { id: 14, name: "Postman", image: "postman.png", category: "tools" },
    { id: 15, name: "Redux", image: "redux.png", category: "tools" },
    { id: 16, name: "Figma", image: "figma.png", category: "tools" },
    { id: 17, name: "Problem solving", image: "icons8-problem-solving-64 (1).png", category: "soft skills" },
    { id: 30, name: "Adaptability", image: "icons8-employee-turnover-78.png", category: "soft skills" },
    { id: 90, name: "Team spirit", image: "icons8-football-team-48.png", category: "soft skills" },
    { id: 25, name: "Critical thinking", image: "icons8-critical-thinking-48.png", category: "soft skills" },
    { id: 26, name: "Bug solving", image: "icons8-bugs-64.png", category: "soft skills"}
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools" },
    { id: "soft skills", name: "soft skills"}
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = selectedCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className={`skills-section ${theme}`}>
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title-shadow">SKILLS</h2>
          <h2 className="skills-title">SKILLS</h2>
        </div>

        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`skills-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-icon">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-icon-img"
                  onError={(e) => e.target.src = "fallback-icon.svg"}
                />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
