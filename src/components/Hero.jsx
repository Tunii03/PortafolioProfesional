import { motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Hero.css';

const Hero = () => {
  const handleHeroClick = (label) => {
    ReactGA.event({
      category: 'Hero Section',
      action: 'Click',
      label
    });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="hero-greeting">¡Hola! Mi nombre es</h2>
          <h1 className="hero-title">Juan Ignacio Tuninetti</h1>
          <h2 className="hero-subtitle">
            Estudiante avanzado de Ingeniería en Sistemas
          </h2>
          <p className="hero-description">
            Orientado al análisis funcional, la gestión de proyectos y el análisis de datos.
            Busco combinar mi formación técnica con habilidades de gestión de productos y trabajo colaborativo.
          </p>

          <div className="hero-actions">
            <motion.a
              href="#contact"
              className="hero-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleHeroClick('Contact Button')}
            >
              ¡Contáctame!
            </motion.a>
            <motion.a
              href="/CV-Juan-Ignacio-Tuninetti.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta hero-cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleHeroClick('Download CV')}
            >
              <FontAwesomeIcon icon={faFileArrowDown} /> Descargar CV
            </motion.a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/juan-ignacio-tuninetti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={() => handleHeroClick('LinkedIn (Hero)')}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Tunii03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={() => handleHeroClick('GitHub (Hero)')}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
