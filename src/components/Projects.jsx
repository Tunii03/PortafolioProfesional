import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Gestión de Pasantías Universitarias",
      description: "Sistema integral para la gestión de pasantías universitarias. Incluye gestión de estudiantes, empresas, ofertas laborales y seguimiento de pasantías. Desarrollado como proyecto académico con metodologías ágiles y documentación completa.",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      githubLink: "https://github.com/Tunii03/GestionDePasantias",
      docsLink: "https://docs.google.com/document/d/1MVxWAOTNpcsRHmY0R4EL9KDwCDtx1PB3xjq690DB8mE/edit?tab=t.0", // Reemplazar con el enlace real
      deployLink: "https://gestion-de-pasantias.vercel.app/",
      status: "En Desarrollo"
    },
    {
      title: "Tunitos ERP",
      description: "Sistema de gestión empresarial desarrollado como proyecto académico. Permite el control integral de operaciones diarias incluyendo gestión de inventario, registro de clientes, pedidos y presupuestos. Desarrollado como proyecto académico con arquitectura moderna y APIs RESTful. La aplicación se ejecutará localmente y no se desplegará, pero los repositorios están disponibles para su revisión.",
      technologies: ["React", "Node.js", "Express", "Sqlite", "Git"],
      githubLink: "https://github.com/Tunii03/frontend",
      backendLink: "https://github.com/Serena-code/backend",
      deployLink: "",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 