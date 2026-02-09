import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" itemScope itemType="https://schema.org/Hotel">
      <div className="container">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <h3 className="footer-logo" itemProp="name">
              Tu Amigo Hotelero
            </h3>

            <p className="footer-slogan" itemProp="description">
              Hotel en Mar del Plata con tarifas justas para turistas, familias, grupos, congresos y eventos deportivos.
            </p>

            <div className="footer-social">
              <a
                href="https://www.instagram.com/gonard.matias/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Tu Amigo Hotelero"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://wa.me/5492235203369"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Tu Amigo Hotelero"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* LINKS SEO */}
          <nav className="footer-links" aria-label="Enlaces principales">
            <h4>Hotel en Mar del Plata</h4>
            <ul>
              <li><a href="#rooms">Habitaciones en Mar del Plata</a></li>
              <li><a href="#groups">Alojamiento para grupos</a></li>
              <li><a href="#congress">Congresos y eventos</a></li>
              <li><a href="#sports">Grupos deportivos</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
              <li><a href="#contact">Contacto directo</a></li>
            </ul>
          </nav>

          {/* CONTACTO LOCAL */}
          <div className="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span itemProp="telephone"> +54 9 223 520-3369</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span itemProp="email"> matiasgonard1@gmail.com</span>
              </li>
              <li itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                  <span itemProp="streetAddress"> Garay 1630</span> –
                  <span itemProp="addressLocality"> Mar del Plata</span>,
                  <span itemProp="addressCountry"> Argentina</span>
                </span>
              </li>
            </ul>

            <p className="footer-zone">
              Zona Güemes · Shopping Aldrey · Vieja Terminal
            </p>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h4>Ofertas y descuentos exclusivos</h4>
            <p>
              Promociones para turistas, gremios, sindicatos, eventos y fines de semana largos.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Tu email"
                aria-label="Email para recibir promociones"
                required
              />
              <button type="submit" className="btn btn-primary">
                Recibir ofertas
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="legal-links">
            <a href="/terminos">Términos y condiciones</a>
            <a href="/privacidad">Política de privacidad</a>
            <a href="/cookies">Cookies</a>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Tu Amigo Hotelero – Hotel en Mar del Plata
          </p>

          <p className="footer-credit">
            Hecho con ❤️ por{" "}
            <a
              href="https://mgproduccionesweb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MG Producciones Web
            </a>
          </p>
        </div>

      </div> {/* 👈 ESTE era el que faltaba */}
    </footer>


  );
};

export default Footer;
