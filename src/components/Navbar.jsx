import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (sectionName, isMobile = false) => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Click',
      label: `${sectionName}${isMobile ? ' (Mobile)' : ' (Desktop)'}`
    });
  };

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`navbar-container${isScrolled ? ' navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-brand">JIT</div>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger${isMobileMenuOpen ? ' open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="navbar-links">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="nav-link"
              onClick={() => handleNavLinkClick(item.name, false)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className={`mobile-menu${isMobileMenuOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNavLinkClick(item.name, true);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 