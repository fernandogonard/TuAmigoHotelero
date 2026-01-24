import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHotel, faReceipt } from '@fortawesome/free-solid-svg-icons';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <h2 className="section-title">Cómo Funciona</h2>
        <p className="section-subtitle">
          Con Tu Amigo Hotelero conseguís alojamiento en Mar del Plata de manera rápida, 
          fácil y al mejor precio, sin intermediarios.
        </p>
        
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <FontAwesomeIcon icon={faMessage} />
            </div>
            <h3 className="step-title">Enviás tu consulta</h3>
            <p className="step-description">
              Contanos tus fechas, cantidad de personas y preferencias de alojamiento. 
              Te respondemos en minutos por WhatsApp.
            </p>
            <a href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20alojamiento" className="btn btn-outline step-cta" target="_blank" rel="noopener noreferrer">
              Consultar ahora
            </a>
          </div>
          
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <FontAwesomeIcon icon={faHotel} />
            </div>
            <h3 className="step-title">Te mostramos opciones</h3>
            <p className="step-description">
              Recibís fotos y detalles de habitaciones disponibles según tus necesidades, 
              con precios sin comisiones extra.
            </p>
            <a href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20disponibilidad%20de%20habitaciones" className="btn btn-outline step-cta" target="_blank" rel="noopener noreferrer">
              Solicitar disponibilidad
            </a>
          </div>
          
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
              <FontAwesomeIcon icon={faReceipt} />
            </div>
            <h3 className="step-title">Confirmás y pagás</h3>
            <p className="step-description">
              Elegís tu opción ideal, confirmás la reserva y pagás 
              directamente en el hotel con factura oficial.
            </p>
            <a href="#testimonials" className="btn btn-outline step-cta">
              Ver opiniones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;