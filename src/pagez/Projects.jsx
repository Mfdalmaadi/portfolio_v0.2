import React from "react";
import "../style/projects.css";

const Projects = ( {theme} )=>{
    const projects = [
        {
            id:1,
            name : "Fake-Store",
            description : "A React-based Fake Store platform that fetches and displays products from an API and managing states using redux",
            image:"fake-store.jpg",
            skills:"#React #Redux",
            URL:"https://1103-one.vercel.app/"
        },
        {
            id:2,
            name : "Coffee Shop API",
            description : "I developed a Laravel-based API that powers a coffee shop management system. This API includes endpoints for managing menu items, orders, and customer reviews. It allows users to see the menu and place orders, and submit feedback. The API is fully RESTful, with clear and well-structured routes, and employs CORS for cross-origin requests.",
            image:"API.jpg",
            skills:"#Laravel",
            URL: "http://cafeshop-api.infinityfreeapp.com/api/menu"
        },
        {
            id:3,
            name : "PC Repair Hub",
            description : "A website based on WordPress providing PC repair and maintenance services with easy navigation and simple user experience",
            image:"pcrepairhub.jpg",
            skills:"#WordPress",
            URL: "https://pcrepairhub7.wordpress.com/"
        },
        {
            id:4,
            name : "Admin dashboard",
            description : "A simple and responsive admin dashboard built with React and styled using CSS. It features a clean layout with core components like a sidebar, making it a great starting point for admin interfaces.",
            image:"dashboard.jpg",
            skills:"#React",
            URL: "https://dashboard-five-iota-52.vercel.app/"
        }
        
    ];
    return(
        <div>
            <h1 className={theme}>Projects</h1>
            <div className="projects-container">
                {projects.map((project)=>(
                    <div key={project.id} className="card-container">
                        <div className="project-card">
                            <div className={`card-front ${theme} `}>
                                <img src={project.image} alt={project.name} className="pictures"/>
                                <h2 className={theme}>{project.name}</h2>
                                <p className="desc">{project.description}</p>
                                <p className="skills">{project.skills}</p>
                            </div>
                            <div className="card-back" style={{backgroundImage:`url(${project.image})`, width:`100%`,zIndex:"10"}}>
                                <a href={project.URL} target="_blank" className="url">View Website 🔗</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;