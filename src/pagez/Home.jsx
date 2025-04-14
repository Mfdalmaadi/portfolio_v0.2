import React from "react";
import "../style/Home.css"

const Home = ({theme})=>{
    return(
        <div className="boo">
            <img src="me2.jpg" alt="lol" className="profile"/>
            <div>
                <h1 className="bla-bla">Hey There! <span className="wave">👋</span>, I'm <span className={`sp ${theme}`}> Maadi El Moufaddal </span> </h1>
                <p className="bla-bla">
                    A passionate <span className="sp">Full-Stack Developer</span> and student, blending creativity and code to build functional and beautiful web applications.<br />
                    Welcome to my <span className="sp">portfolio</span> Explore my journey, skills, and projects that showcase my dedication to web development.
                </p>
            </div>
        </div>
    )
}

export default Home;