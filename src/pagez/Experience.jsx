import React from "react";
import "../style/Experience.css";

const Experience = ({ theme }) => {
  const experienceData = {
    company: "HD Maroc",
    project: "MED ACT Coaching Website",
    role: "Web Developer Intern",
    period: "April - May 2025",
    stack: ["WordPress", "Elementor", "UI/UX", "SEO", "Pinterest", "Unsplash"],
    description: "Developed a fully functional coaching service website using WordPress and Elementor. Focused on user experience, responsive design, and SEO optimization to support HD Maroc's service diversification strategy.",
    tasks: [
      "Built the full website architecture and layout using Elementor.",
      "Created a clear UX flow: Homepage, Services, Testimonials, Contact, Booking.",
      "Collaborated remotely with a supervisor for design validation and task reviews.",
      "Used visual resources (Pinterest, Unsplash) to maintain a strong design identity.",
      "Wrote high-impact headlines and structured copy for better engagement.",
      "Ensured responsiveness across devices and basic SEO optimization."
    ],
    outcome: {
      value: "Delivered a live production-ready site that is now part of HD Maroc's commercial strategy in the coaching sector. Contributed to lead generation and improved online visibility.",
      link: "https://hd-maroc.com/coaching/"
    }
  };

  return (
    <section id="experience" className={`experience-section ${theme}`}>
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title-shadow">EXPERIENCE</h2>
          <h2 className="experience-title">EXPERIENCE</h2>
        </div>

        <div className={`experience-card ${theme}`}>
          <div className="experience-content">
            <div className="project-header">
              <h3 className="project-company">{experienceData.company}</h3>
              <div className="project-meta">
                <span className="project-role">{experienceData.role}</span>
                <span className="project-period">{experienceData.period}</span>
              </div>
              <h4 className="project-name">{experienceData.project}</h4>
            </div>
            
            <p className="project-description">{experienceData.description}</p>
            
            <div className="stack-container">
              <h4 className="section-title">Technologies Used:</h4>
              <div className="stack-tags">
                {experienceData.stack.map((tech, index) => (
                  <span key={index} className="stack-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="tasks-container">
              <h4 className="section-title">Key Responsibilities:</h4>
              <ul className="tasks-list">
                {experienceData.tasks.map((task, index) => (
                  <li key={index} className="task-item">
                    <span className="task-bullet">▹</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            <a 
                href={experienceData.outcome.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`outcome-link ${theme}`}
              >
                View Live Project
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;