import React from "react";
import "../style/certification.css";

const Certificate = ({ theme }) => {
  const certifications = [
    {
      id: 1,
      date: "2024",
      name: "Computer Hardware Basics",
      desc: "I earned this badge after completing Cisco's Computer Hardware Basics course, which covered building, upgrading, and troubleshooting personal computers.",
      logo: "Computer-Hardware-Basics.jpg",
      icon: "cisco-logo-0.webp",
      link: "https://www.credly.com/badges/d0dc9b12-59e5-4702-92b9-7dfd0dedce82",
    },
    {
      id: 2,
      date: "2024",
      name: "Python Essentials 1",
      desc: "After completing the Python Essentials 1 course with Cisco, I gained a solid understanding of programming and Python syntax.",
      logo: "python.jpg",
      icon: "cisco-logo-0.webp",
      link: "https://www.credly.com/badges/7a9fa106-07b3-4bf2-9c40-5b555dd2d326",
    },
    {
      id: 3,
      date: "2024",
      name: "SQL",
      desc: "I earned the SQL Certificate after passing the course exam, proving my proficiency in data analytics and data science.",
      logo: "sql.jpg",
      icon: "communityIcon_lbxlxfupyyy71.webp",
      link: "https://learn.365datascience.com/certificates/CC-4BABD03D13/",
    },
  ];

  return (
    <div className="certification-wrapper">
      <h1 className={`title ${theme}`}>Certifications</h1>
      <div className="certification-container">
        {certifications.map((cert) => (
          <div key={cert.id} className="card-container">
            <div className={`certification-card card ${theme}`}>
              <img
                src={cert.logo}
                alt={cert.name}
                className="cert-image"
              />
              <div className="cert-details">
                <div className="cert-date-icon">
                  <img
                    src={cert.icon}
                    alt="icon"
                    className="cert-icon"
                  />
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-desc">{cert.desc}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <i className="bi bi-box-arrow-up-right"></i> Show credential
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
