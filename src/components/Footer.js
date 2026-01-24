import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">Tu Amigo Hotelero</h3>
            <p className="footer-slogan">Alojamientos al precio justo en Mar del Plata</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/gonard.matias/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://wa.me/5492235203369" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#how-it-works">Cómo Funciona</a></li>
              <li><a href="#rooms">Habitaciones</a></li>
              <li><a href="#testimonials">Testimonios</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
              <li><a href="#groups">Grupos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contáctanos</h4>
            <ul>
              <li>WhatsApp: +54 9 223 520-3369</li>
              <li>Tel: +54 9 223 520-3369</li>
              <li>Email: matiasgonard1@gmail.com</li>
              <li>Dirección: Garay 1630 (Hotel Diva), Mar del Plata</li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Recibí ofertas exclusivas</h4>
            <p>Suscribite a nuestro newsletter para recibir promociones y descuentos especiales</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Tu email" required />
              <button type="submit" className="btn btn-primary">Suscribirse</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#terms">Términos y condiciones</a>
            <a href="#privacy">Política de privacidad</a>
            <a href="#cookies">Cookies</a>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Tu Amigo Hotelero. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;