import React from 'react';
import ReactGA from 'react-ga4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  const handleSocialLinkClick = (platform) => {
    ReactGA.event({
      category: 'Social Links',
      action: 'Click',
      label: platform
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title section-title">Contacto</h2>
      <p className="section-subtitle">
        ¿Te interesa trabajar juntos o tenés alguna consulta? Escribime y te respondo a la brevedad.
      </p>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>San Francisco, Córdoba, Argentina</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <a
                href="tel:+5493564667084"
                onClick={() => handleSocialLinkClick('Teléfono')}
              >
                +54 9 3564-667084
              </a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="mailto:juanituninetti55@gmail.com"
                onClick={() => handleSocialLinkClick('Email')}
              >
                juanituninetti55@gmail.com
              </a>
            </div>
          </div>
          <div className="social-links">
            <a 
              href="https://github.com/Tunii03" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              onClick={() => handleSocialLinkClick('GitHub')}
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/juan-ignacio-tuninetti/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              onClick={() => handleSocialLinkClick('LinkedIn')}
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a
              href="/CV-Juan-Ignacio-Tuninetti.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link contact-cv"
              onClick={() => handleSocialLinkClick('Download CV (Contacto)')}
            >
              <FontAwesomeIcon icon={faFileArrowDown} />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
