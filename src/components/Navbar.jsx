// import React from "react";
// import "../style/Navbar.css";
// import Resume from "../assets/Resume.pdf";
// import Switch from "./switch";

// const Navbar = ({ theme, changetheme }) => {
//     return (
//         <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-black"}`}>
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#home">
//                     <img src="me2.jpg" alt="Logo" style={{ width: "40px", height: "40px" }} className="rounded-pill" />
//                 </a>

//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <a className="nav-link" href="#home">
//                                 <i className="bi bi-house-door me-1"></i>Home
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#about">
//                                 <i className="bi bi-person me-1"></i>About
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#skills">
//                                 <i className="bi bi-lightbulb me-1"></i>Skills
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#projects">
//                                 <i className="bi bi-kanban me-1"></i>Projects
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#certificate">
//                                 <i className="bi bi-award me-1"></i>Certificate
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href={Resume} target="_blank">
//                                 <i className="bi bi-file-earmark me-1"></i>Resume
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#contact">
//                                 <i className="bi bi-envelope me-1"></i>Contact
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <Switch theme={theme} changetheme={changetheme} />
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from "react";
import "../style/Navbar.css";
import Resume from "../assets/Resume.pdf";
import Switch from "./switch";

const Navbar = ({ theme, changetheme }) => {
    return (
        <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-blue"}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    <img src="me2.jpg" alt="Logo" style={{ width: "40px", height: "40px" }} className="rounded-pill" />
                </a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">
                                <i className="bi bi-house-door me-1"></i>Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                <i className="bi bi-person me-1"></i>About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                <i className="bi bi-lightbulb me-1"></i>Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                <i className="bi bi-kanban me-1"></i>Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#certificate">
                                <i className="bi bi-award me-1"></i>Certificate
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={Resume} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-file-earmark me-1"></i>Resume
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                <i className="bi bi-envelope me-1"></i>Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <Switch theme={theme} changetheme={changetheme} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
