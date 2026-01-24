import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/5492235203369?text=Hola!%20Estoy%20interesado%20en%20consultar%20por%20alojamiento%20en%20Mar%20del%20Plata" 
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactanos por WhatsApp"
    >
      <div className="whatsapp-icon">
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
      <span className="whatsapp-text">Consultá por WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;