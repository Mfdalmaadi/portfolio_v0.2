import React from "react";
import "../style/Projects.css";

const Projects = ({ theme }) => {
  const projects = [
    {
      id: 100,
      name: "THE GUIDE",
      description:
        "Full-stack tourism platform for northern Morocco with React frontend and Laravel backend. Features role-based dashboards for tourists, guides, and service providers.",
      image: "theguide.jpg",
      skills: ["React", "Laravel", "Sanctum", "MySQL"],
      url: "https://github.com/Ashraf-gitgud/The-Guide-App"
    },
    {
      id: 101,
      name: "MEDACT",
      description:
        "Professional coaching website built with WordPress and Elementor. Clean design with responsive layout and streamlined service presentation for HD-Maroc.",
      image: "medact.jpg",
      skills: ["Wordpress", "Elementor"],
      url: "https://hd-maroc.com/coaching/",
    },
    {
      id: 1,
      name: "Fake-Store",
      description:
        "React e-commerce platform with API integration, Redux state management, shopping cart functionality, and advanced product filtering system.",
      image: "fake-store.jpg",
      skills: ["React", "Redux"],
      url: "https://1103-one.vercel.app/",
    },
    {
      id: 2,
      name: "Coffee Shop API",
      description:
        "Laravel RESTful API for coffee shop operations featuring menu management, order processing, and customer review endpoints with secure authentication.",
      image: "API.jpg",
      skills: ["Laravel", "PHP"],
      url: "https://github.com/Mfdalmaadi/Twilight-Caf--backend",
    },
    {
      id: 3,
      name: "PC Repair Hub",
      description:
        "WordPress service website for PC repairs with booking system and customer support. Built with Elementor for responsive design.",
      image: "pcrepairhub.jpg",
      skills: ["WordPress", "Elementor"],
      url: "https://pcrepairhub7.wordpress.com/",
    },

    {
      id: 5,
      name: " FinMind",
      description:
        "AI-powered personal finance app for expense tracking and budgeting. Features spending predictions, categorization, and dynamic charts for financial insights.",
      image: "comingSoon.webp",
      skills: ["React", "Node.js", "Supabase", "Tailwind CSS", "Chart.js", "OpenRouter (GPT-3.5)", "Vercel"],
    },
    {
      id: 6,
      name: " FitPilot",
      description:
        "Mobile fitness coach with AI-generated workout plans. Tracks progress and adapts to user preferences for personalized training schedules.",
      image: "comingSoon.webp",
      skills: ["React Native", "Supabase", "Tailwind CSS", "OpenRouter (GPT-3.5)", "Expo Go"],
    },
    {
      id: 7,
      name: " Threadly ",
      description:
        "E-commerce platform for clothing brands with Stripe checkout, product filtering, and admin panel. Features AI-powered style recommendations.",
      image: "comingSoon.webp",
      skills: ["React", "Laravel", "Supabase", "Stripe", "MySQL", "Tailwind CSS", "Vercel", "Render"],
    },
    {
      id: 8,
      name: " SkillSwap ",
      description:
        "Skill exchange platform connecting professionals for mutual collaboration. Features intelligent matching system and reputation-based trust building.",
      image: "comingSoon.webp",
      skills: ["React", "Supabase", "Tailwind CSS", "Chart.js", "OpenRouter (GPT-3.5)", "Vercel"],
    }
];

  return (
    <section id="projects" className={`projects-section ${theme}`}>
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title-shadow">PROJECTS</h2>
          <h2 className="projects-title">PROJECTS</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${theme}`}>
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  onError={(e) => (e.target.src = "fallback-project.png")}
                />
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-skills">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-link ${theme}`}
                >
                  <span className="link-icon">↗</span> View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;