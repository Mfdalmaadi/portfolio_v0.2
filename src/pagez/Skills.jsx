import React, { useState } from "react";
import "../style/Skills.css";

const Skills = ({ theme }) => {
    const skills = [
        { id:1, name: "HTML", description: "HTML (HyperText Markup Language) is the foundation of all web pages. It structures content, allowing developers to define elements like headings, paragraphs, links, and multimedia to build the skeleton of websites.", image : "html.png" },
        { id:2, name: "CSS", description: "CSS (Cascading Style Sheets) is used to style and layout web pages, including the design, colors, fonts, and responsiveness. It's the tool that transforms basic HTML into visually appealing interfaces.", image : "css.png" },
        { id:3, name: "Bootstrap", description: "Bootstrap is a popular CSS framework that simplifies web development with pre-designed components, responsive grids, and utilities, making it easier to create sleek and responsive designs.",  image : "bootstrap.png" },
        { id:4, name: "JavaScript", description: "JavaScript is a versatile programming language that adds interactivity to websites, enabling features like dynamic content updates, animations, form validation, and much more.",  image : "javascript.png" },
        { id:5, name: "React", description: "React is a JavaScript library for building user interfaces. It simplifies UI development through reusable components, state management, and efficient rendering using a virtual DOM.",  image : "react.png" },
        { id:6, name: "Redux", description: "Redux is a state management library often used with React to manage application state predictably. Combined with Redux Toolkit, it streamlines the process of writing reducers and handling asynchronous logic.", image : "redux.png" },
        { id:7, name: "Python", description: "Python is a powerful and versatile programming language used for web development. I also specialize in Object-Oriented Programming (OOP) with Python, focusing on concepts like classes, objects, inheritance, and encapsulation.", image : "python.png" },
        { id:8, name: "PHP", description: "PHP is a widely-used server-side scripting language designed for web development. It powers dynamic websites and backend logic, including handling forms, sessions, and database interactions.", image : "php.png" },
        { id:9, name: "Laravel", description: "Laravel is a modern PHP framework that simplifies web application development with elegant syntax, built-in tools, and features like routing, authentication, and ORM for database management.", image : "laravel.png" },
        { id:10, name: "MySQL", description: "MySQL is a powerful relational database management system used for storing, managing, and retrieving data efficiently in web and software applications.", image : "mysql.png" },
        { id:11, name: "MongoDB", description: "MongoDB is a NoSQL database that provides flexibility in storing and querying unstructured data, making it suitable for modern applications with dynamic and scalable needs.", image : "mongodb.png" },
        { id:12, name: "Git", description: "Git is a version control system that tracks code changes, supports collaboration, and helps developers manage projects efficiently through branching, merging, and history tracking.", image : "git.png" },
        { id:13, name: "WordPress", description : " is a popular content management system (CMS) that allows users to create and manage websites easily. It provides a flexible platform for building blogs, business sites, e-commerce stores, and more, with thousands of themes and plugins to customize functionality without extensive coding knowledge.", image:"wordpress.png"},
        { id:14, name: "Docker", description: "an open-source project that automates the deployment of software applications inside containers by providing an additional layer of abstraction and automation of OS-level virtualization on Linux.", image: "docker1.webp"},
        { id: 15, name: "Postman", description: "global software that offers an API platform for developers to design, build, test, and collaborate on APIs", image: "postman.png"},
        { id: 16, name: "Express.js", description: "Express.js is a lightweight, fast web framework for Node.js, designed to build scalable and flexible web applications and APIs with minimal setup.", image: "express.webp"}
    ];

    const [clickedSkill, setClickedSkill] = useState(null);
    const opened = (skill)=>{
        setClickedSkill(skill);
    }
    const closed = ()=>{
        setClickedSkill(null);
    }
    return(
        <div>
            <h1 className={theme}>Skills</h1>
            <div>
                <div className="skills-container">
                    {skills.map((skill)=>(
                        <div className={`skill-card ${theme} `} key={skill.id} onClick={()=> opened(skill)}>
                            <img src={skill.image} alt={skill.name} className="image"/>
                            <div className="text">{skill.name}</div>
                        </div>
                    ))}

                    {clickedSkill && (
                    <div className="modal">
                        <div className={`modal-content ${theme} `}>
                            <button className="close-btn" onClick={closed}>
                                &times;
                            </button>
                            <h3>{clickedSkill.name}</h3>
                            <img src={clickedSkill.image} alt="lol"/>
                            <p>{clickedSkill.description}</p>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
};

export default Skills;
