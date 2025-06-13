import React from 'react';
import '../style.css/Project.css';
import { Link } from 'react-router-dom';  
import Python from '../Assets/Python.png';


function Project() {
  const projectList = [
   
    {
      title: "Inventory Management",
      image: Python,
      description: "A Java desktop application built in NetBeans for managing customer data. Features CRUD operations and MySQL integration.",
      link: "/Inventory"
    }
  ];
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">
        Here are some of the projects I've worked on. Click the GitHub links to explore the source code or view images.
      </p>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.github || project.link ? (
              project.link ? (
                <Link to={project.link} className="github-link">
                  View Project Details
                </Link>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
              )
            ) : null}
          </div>
        ))}
      </div>

      <div className="cta-section">
        <Link to="/Challenges" className="view-my-work-btn">
          See My Challenges
        </Link>
      </div>
    </div>
  );
}

export default Project;
