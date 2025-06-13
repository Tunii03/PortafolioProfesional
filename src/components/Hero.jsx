import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
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
            Estudiante de Ingeniería en Sistemas
          </h2>
          
          <motion.a
            href="#contact"
            className="hero-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ¡Contáctame!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 