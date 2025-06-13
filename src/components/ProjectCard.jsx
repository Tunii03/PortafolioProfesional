import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, technologies, githubLink, docsLink, backendLink, deployLink, status }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className="project-status">{status}</div>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fab fa-github"></i> {backendLink ? 'Frontend' : 'GitHub'}
            </a>
          )}
          {docsLink && (
            <a href={docsLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-book"></i> Documentación
            </a>
          )}
          {backendLink && (
            <a href={backendLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-server"></i> Backend
            </a>
          )}
          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 