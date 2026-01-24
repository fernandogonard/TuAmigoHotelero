import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faMoneyBillWave, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

// Importar la imagen de Mar del Plata
import heroImage from '../assets/images/hero-mar-del-plata.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">Alojamiento en Mar del Plata al precio justo</h1>
          <p className="hero-subtitle animate-fade-in animate-delay-100">
            Conectamos viajeros con hoteles locales. Pagás directo en el hotel, sin comisiones ocultas.
          </p>
          
          <a href="#rooms" className="btn btn-primary btn-lg hero-cta animate-fade-in animate-delay-200">
            Solicitar disponibilidad
          </a>
          
          <div className="hero-benefits animate-fade-in animate-delay-300">
            <div className="benefit-item">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faShield} />
              </div>
              <div className="benefit-text">
                <h3>Confianza</h3>
                <p>Hoteles verificados con atención personalizada</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <div className="benefit-text">
                <h3>Precio justo</h3>
                <p>Pagá directo en el hotel con factura oficial</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <div className="benefit-text">
                <h3>Sin intermediarios</h3>
                <p>Trato directo con los hoteles locales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;