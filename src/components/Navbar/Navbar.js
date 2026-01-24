import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#how-it-works">Cómo Funciona</a></li>
        <li><a href="#room-catalog">Habitaciones</a></li>
        <li><a href="#testimonials">Opiniones</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;