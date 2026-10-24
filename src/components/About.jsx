import React from 'react';
import '../styles/About.css';

const softSkills = [
  'Trabajo en equipo',
  'Liderazgo',
  'Comunicación',
  'Análisis funcional',
  'Metodologías ágiles',
  'Mejora continua',
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container about-centered">
        <div className="about-photo">
          <img src="/Perfil.jpg" alt="Foto de Juan Ignacio Tuninetti" />
        </div>
        <h2 className="about-title section-title">Sobre Mí</h2>
        <p className="about-description">
          Soy Juan Ignacio Tuninetti, estudiante avanzado de Ingeniería en Sistemas de Información en la UTN San Francisco,
          con orientación en análisis funcional, gestión de proyectos, metodologías ágiles y análisis de datos.
          Actualmente trabajo como Soporte Informático en el Tribunal de San Francisco (Justicia Córdoba), donde combino
          la resolución técnica con el trato directo con usuarios.
        </p>
        <p className="about-description">
          Me interesa desarrollarme en roles donde pueda combinar mi formación técnica con habilidades de gestión de
          productos y trabajo colaborativo, aportando valor en entornos dinámicos orientados a la mejora continua.
        </p>
        <ul className="about-softskills">
          {softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
