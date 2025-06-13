import React from 'react';
import '../styles/About.css';
import perfil from '../assets/perfil.jpg'; // Asegúrate de guardar la imagen como perfil.jpg en src/assets

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container about-centered">
        <div className="about-photo">
          <img src={perfil} alt="Foto de Juan Ignacio Tuninetti" />
        </div>
        <h2 className="about-title">Sobre Mí</h2>
        <p className="about-description">
          Soy Juan Ignacio Tuninetti, estudiante avanzado de Ingeniería en Sistemas en la UTN San Francisco. Me interesa mucho la tecnología y siempre estoy buscando aprender cosas nuevas y mejorar mis habilidades. Disfruto trabajar en equipo, enfrentar desafíos y encontrar soluciones prácticas a los problemas. Mi objetivo es crecer profesionalmente, aportar valor y adquirir experiencia en el mundo IT.
        </p>
      </div>
    </section>
  );
};

export default About; 