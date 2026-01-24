import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // En una implementación real, aquí enviarías el formulario
    alert('¡Gracias por tu mensaje! Te responderemos a la brevedad.');
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          Estamos para ayudarte a encontrar el alojamiento perfecto en Mar del Plata. 
          Contactanos y te responderemos a la brevedad.
        </p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Información de contacto</h3>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className="contact-details">
                <h4>WhatsApp (respuesta inmediata)</h4>
                <a href="https://wa.me/5492235203369" target="_blank" rel="noopener noreferrer">
                  +54 9 223 520-3369
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-details">
                <h4>Teléfono</h4>
                <a href="tel:+5492235203369">
                  +54 9 223 520-3369
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:matiasgonard1@gmail.com">
                  matiasgonard1@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-details">
                <h4>Dirección</h4>
                <p>Garay 1630 (Hotel Diva), Mar del Plata, Buenos Aires</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.instagram.com/gonard.matias/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* No hay Twitter ni Facebook */}
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Envianos tu consulta</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input type="text" id="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Teléfono / WhatsApp</label>
                <input type="tel" id="phone" />
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">Tu consulta</label>
                <textarea id="message" rows="4" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-lg" onClick={() => window.open('https://wa.me/5492235203369', '_blank')}>
                Enviar consulta por WhatsApp
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-motivation">
          <p>Encontrá tu lugar en Mar del Plata. Nosotros nos ocupamos del resto.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;