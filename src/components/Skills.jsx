import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

// Importa los íconos con los nombres correctos
import reactIcon from '../assets/skills/react-logo.svg';
import htmlIcon from '../assets/skills/html5-logo.svg';
import cssIcon from '../assets/skills/css-logo.svg';
import jsIcon from '../assets/skills/javascript-logo.svg';
import pythonIcon from '../assets/skills/python-logo.svg';
import cppIcon from '../assets/skills/cplusplus-logo.svg';
import nodeIcon from '../assets/skills/nodejs-logo.svg';
import expressIcon from '../assets/skills/express-logo.svg';
import mysqlIcon from '../assets/skills/mysql-logo.svg';
// Herramientas y gestión (PNG/JPG/SVG)
import jiraIcon from '../assets/skills/jira-logo.svg';
import excelIcon from '../assets/skills/excel-logo.png';
import powerbiIcon from '../assets/skills/powerbi-logo.png';
import gitIcon from '../assets/skills/git-logo.png';

const frontend = [
  { 
    name: 'React', 
    icon: reactIcon, 
    level: 'Básico',
    description: 'Conocimientos iniciales en desarrollo de componentes y hooks básicos'
  },
  { 
    name: 'HTML5', 
    icon: htmlIcon, 
    level: 'Básico',
    description: 'Estructura básica de páginas web y elementos semánticos'
  },
  { 
    name: 'CSS3', 
    icon: cssIcon, 
    level: 'Básico',
    description: 'Estilos básicos, flexbox y diseño responsivo simple'
  },
  { 
    name: 'JavaScript', 
    icon: jsIcon, 
    level: 'Básico',
    description: 'Fundamentos de programación y manipulación básica del DOM'
  },
  { 
    name: 'Python', 
    icon: pythonIcon, 
    level: 'Básico',
    description: 'Conceptos básicos de programación y scripts simples'
  },
  { 
    name: 'C++', 
    icon: cppIcon, 
    level: 'Básico',
    description: 'Fundamentos de programación orientada a objetos'
  },
];

const backend = [
  { 
    name: 'Node.js', 
    icon: nodeIcon, 
    level: 'Básico',
    description: 'Conceptos básicos de servidores y APIs REST'
  },
  { 
    name: 'Express', 
    icon: expressIcon, 
    level: 'Básico',
    description: 'Creación de rutas y middleware básico'
  },
  { 
    name: 'SQL', 
    icon: mysqlIcon, 
    level: 'Básico',
    description: 'Consultas básicas y estructura de bases de datos'
  },
];

const herramientas = [
  { 
    name: 'Jira', 
    icon: jiraIcon, 
    level: 'Básico',
    description: 'Gestión básica de tareas y seguimiento de proyectos'
  },
  { 
    name: 'Excel', 
    icon: excelIcon, 
    level: 'Intermedio',
    description: 'Fórmulas básicas, tablas dinámicas y gráficos'
  },
  { 
    name: 'Power BI', 
    icon: powerbiIcon, 
    level: 'Intermedio',
    description: 'Creación de visualizaciones y dashboards básicos'
  },
  { 
    name: 'Git', 
    icon: gitIcon, 
    level: 'Básico',
    description: 'Comandos básicos y control de versiones simple'
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderSkillItem = (skill) => (
    <div 
      className="skill-item" 
      key={skill.name}
      role="article"
      aria-label={skill.name}
    >
      <img 
        src={skill.icon} 
        alt={`${skill.name} logo`} 
        className="skill-icon"
        loading="lazy"
      />
      <span>{skill.name}</span>
      <div className="skill-tooltip" role="tooltip">
        {skill.description}
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      className="skills-section"
      ref={sectionRef}
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className="skills-title">Habilidades</h2>
      <div className="skills-category">
        <h3>Frontend & Lenguajes</h3>
        <div className="skills-list" role="list">
          {frontend.map(renderSkillItem)}
        </div>
      </div>
      <div className="skills-category">
        <h3>Backend & Bases de Datos</h3>
        <div className="skills-list" role="list">
          {backend.map(renderSkillItem)}
        </div>
      </div>
      <div className="skills-category">
        <h3>Herramientas & Gestión</h3>
        <div className="skills-list" role="list">
          {herramientas.map(renderSkillItem)}
        </div>
      </div>
    </section>
  );
};

export default Skills; 