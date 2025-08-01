import React from 'react';
import ReactGA from 'react-ga4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      <h2 className="contact-title">Contacto</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>San Francisco, Córdoba, Argentina</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+54 9 3564-667084</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>juanituninetti55@gmail.com</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 