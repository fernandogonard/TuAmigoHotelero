import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShield,
  faMoneyBillWave,
  faHandshake,
  faMapMarkerAlt,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

import heroImage from '../assets/images/hero-mar-del-plata.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Hotel en Mar del Plata"
    >
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">

          {/* H1 SEO */}
          <h1 className="hero-title animate-fade-in">
            Hotel en Mar del Plata · Alojamiento directo y al mejor precio
          </h1>

          {/* Subtítulo con keywords */}
          <p className="hero-subtitle animate-fade-in animate-delay-100">
            Ideal para familias, turistas jóvenes, ejecutivos, grupos deportivos,
            congresos y eventos. Sin intermediarios, pagás directo en el hotel.
          </p>

          {/* Ubicación destacada */}
          <p className="hero-location animate-fade-in animate-delay-150">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            &nbsp; Zona Güemes · Shopping Aldrey · Vieja Terminal
          </p>

          {/* CTA principal */}
          <div className="hero-actions animate-fade-in animate-delay-200">
            <a
              href="#rooms"
              className="btn btn-primary btn-lg hero-cta"
            >
              Ver disponibilidad
            </a>

            <a
              href="#contact"
              className="btn btn-outline-light btn-lg hero-secondary"
            >
              Consultar por WhatsApp
            </a>
          </div>

          {/* Beneficios */}
          <div className="hero-benefits animate-fade-in animate-delay-300">

            <div className="benefit-item">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faShield} />
              </div>
              <div className="benefit-text">
                <h3>Confianza real</h3>
                <p>Hoteles verificados con atención personalizada</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <div className="benefit-text">
                <h3>Precio justo</h3>
                <p>Pagás en el hotel, sin comisiones ocultas</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <div className="benefit-text">
                <h3>Convenios especiales</h3>
                <p>Descuentos para gremios, sindicatos y organismos</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="benefit-text">
                <h3>Grupos y eventos</h3>
                <p>Deportes, congresos, COSAPRO, Juegos Evita</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
