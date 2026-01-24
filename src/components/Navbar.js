import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-text">Tu Amigo Hotelero</span>
        </a>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" onClick={closeMenu}>Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#how-it-works" onClick={closeMenu}>Cómo Funciona</a>
          </li>
          <li className="navbar-item">
            <a href="#rooms" onClick={closeMenu}>Habitaciones</a>
          </li>
          <li className="navbar-item">
            <a href="#testimonials" onClick={closeMenu}>Opiniones</a>
          </li>
          <li className="navbar-item">
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" onClick={closeMenu} className="navbar-cta">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;