import React, { useEffect } from "react";
import "../style/Projects.css";

const Projects = ({ theme }) => {
  const projects = [
    {
      id: 1,
      name: "Fake-Store",
      description:
        "A React-based Fake Store platform that fetches and displays products from an API and manages state using Redux.",
      image: "fake-store.jpg",
      skills: "#React #Redux",
      URL: "https://1103-one.vercel.app/",
    },
    {
      id: 2,
      name: "Coffee Shop API",
      description:
        "I developed a Laravel-based API that powers a coffee shop management system. This API includes endpoints for managing menu items, orders, and customer reviews. It allows users to see the menu and place orders, and submit feedback. The API is fully RESTful, with clear and well-structured routes, and employs CORS for cross-origin requests",
      image: "API.jpg",
      skills: "#Laravel",
      URL: "http://cafeshop-api.infinityfreeapp.com/api/menu",
    },
    {
      id: 3,
      name: "PC Repair Hub",
      description:
        "A website based on WordPress providing PC repair and maintenance services with easy navigation and simple user experience",
      image: "pcrepairhub.jpg",
      skills: "#WordPress",
      URL: "https://pcrepairhub7.wordpress.com/",
    },
    {
      id: 4,
      name: "Admin Dashboard",
      description:
        "A simple and responsive admin dashboard built with React and styled using CSS. It features a clean layout with core components like a sidebar, making it a great starting point for admin interfaces.",
      image: "dashboard.jpg",
      skills: "#React",
      URL: "https://dashboard-five-iota-52.vercel.app/",
    },
  ];

  return (
    <div className="projects-wrapper">
      <h1 className={`projects-title ${theme}`}>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
            <div
            key={project.id}
            className={`project-card-hero ${theme} ${index % 2 !== 0 ? "reverse" : ""}`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            >        
                <div className="project-content">
                    <h2>{project.name}</h2>
                    <p className="desc">{project.description}</p>
                    <p className="skills">{project.skills}</p>
                    <a
                        href={project.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="url"
                    >
                        Visit Website 🔗
                    </a>
                </div>
                <img src={project.image} alt={project.name} className="pictures" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
