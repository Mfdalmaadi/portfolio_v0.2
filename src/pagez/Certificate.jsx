import React from "react";
import "../style/certification.css";

const Certifications = ({ theme }) => {
  const certifications = [
    {
      id: 1,
      name: "Computer Hardware Basics",
      source: "Cisco",
      date: "2024",
      color: "#0066cc", // Blue
      url: "https://credly.com/badges/d0dc9b12-59e5-4702-92b9-7dfd0dedce82"
    },
    {
      id: 2,
      name: "Python Essentials 1",
      source: "Cisco",
      date: "2024",
      color: "#0066cc", // Blue
      url: "https://credly.com/badges/7a9fa106-07b3-4bf2-9c40-5b555dd2d326"
    },
    {
      id: 3,
      name: "SQL Certification",
      source: "365 Data Science",
      date: "2024",
      color: "#4b0082", // Indigo (purple-black)
      url: "https://learn.365datascience.com/certificates/CC-4BABD03D13/"
    }
  ];

  return (
    <section id="certifications" className={`certifications-section ${theme}`}>
      <div className="certifications-container">
        <div className="certifications-header">
          <h2 className="certifications-title-shadow">CERTIFICATIONS</h2>
          <h2 className="certifications-title">CERTIFICATIONS</h2>
        </div>

        <div className="certifications-row">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="cert-box"
              style={{ 
                "--cert-color": cert.color,
                "--cert-bg": cert.id === 3 ? "linear-gradient(135deg, #4b0082, #2e004d)" : "#0066cc"
              }}
            >
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <div className="cert-source">{cert.source}</div>
                <div className="cert-date">{cert.date}</div>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;