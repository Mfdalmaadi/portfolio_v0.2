import React from "react";
import "../style/About.css"

const About = ({theme})=>{
    return(
        <div className="container">
            <div>
                <h1 className={theme}>About me</h1>
                <p>
                    My name is Maadi El Moufaddal, a 21 years old <strong>Full-Stack Developer</strong>.
                    I'm currently a second-year Digital Development student at ISTA NTIC Tangier, where I’m honing my skills in modern web technologies.
                </p>
                <p>
                    I develope a solid understanding about Front-end and Back-end lenguages and Frameworks such as <strong>JavaScript</strong> and <strong>PHP</strong> and <strong>React</strong> and <strong>Laravel</strong>..., and data base lenguages such as MySQL and MongoDB, with a keen interest in creating user-friendly, visually appealing applications.
                </p>
                <p>
                    My journey in tech started with a love for problem-solving and curiosity to discover more about this field, and it has driven me to continuously learn and grow in this field.
                </p>
                <p>I am looking to join a company that values innovation, collaboration, and continuous learning and am confident that my enthusiasm and drive will help me succeed in any role that leverages my passion for technology.</p>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="me.jpg" alt="Maadi El Moufaddal" className="img1" />
                    </div>
                    <div className="flip-card-back" style={{ backgroundImage:"url('me3.jpg')" }}>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/el-moufaddal-maadi-79113431b/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" style={{opacity:"1"}}></i></a></li>
                            <li><a href="https://github.com/Mfdalmaadi" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a></li>
                            <li><a href="https://www.instagram.com/mfdalmaadi?igsh=bHJzY3V6ZDYwemFx" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;