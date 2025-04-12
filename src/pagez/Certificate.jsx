import React from "react";
import "../style/certification.css";

const Certificate = ( {theme} )=>{
    const certifications = [
        {
            id:1,
            date:"2024",
            name:"Computer Hardware Basics",
            desc : "Cisco verifies the earner of this badge successfully completed the Computer Hardware Basics course and achieved this student level credential. Earner has fundamentals knowledge of computers and mobile devices, how they work, as well as the basic concepts and skills needed to install components to build, repair, upgrade personal computers and and basic troubleshooting tools and techniques.",
            logo : "Computer-Hardware-Basics.jpg",
            icon : "cisco-logo-0.webp"
        },
        {
            id:2,
            date:"2024",
            name:"Python Essentials 1",
            desc : "Cisco, in collaboration with OpenEDG Python Institute, verifies the earner of this badge successfully completed the Python Essentials 1 course and achieved the student level credentials. Earners have knowledge of the concepts of computer programming, the syntax and semantics of the Python language as well as demonstrate the ability to accomplish coding tasks related to the essentials of programming in the Python language and resolve implementation challenges using the Python Standard Library.",
            logo : "python.jpg",
            icon : "cisco-logo-0.webp"
        },
        {
            id:3,
            date:"2024",
            name:"SQL",
            desc : "This user has been awarded the SQL Certificate for successfully completing the course exam. Holding this certificate demonstrates their proficiency on the topic and signifies they are qualified to apply their newly acquired expertise in the fields of data analytics and data science.",
            logo : "sql.jpg",
            icon:"communityIcon_lbxlxfupyyy71.webp"
        },
    ]
    return(
        <div>
            <h1 className={theme}>Certificate</h1>
            <div className="timeline">
                {certifications.map((certification)=>(
                    <div key={certification.id} className="timeline-items">
                        <img src={certification.icon} alt="lol" className="timeline-icon"/>
                        <div className={`timeline-content ${theme} `}>
                            <img src={certification.logo} alt="lol" className="pop"/>
                            <h2 className={theme}>{certification.name}</h2>
                            <p className={theme}>{certification.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certificate;