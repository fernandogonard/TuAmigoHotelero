import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './FAQ.css';

// Datos de muestra para preguntas frecuentes
const faqData = [
  {
    id: 1,
    question: '¿Quién factura el alojamiento?',
    answer: 'El hotel emite la factura directamente a tu nombre. Nosotros no actuamos como intermediarios fiscales, sino como facilitadores de la conexión entre viajeros y hoteles locales de Mar del Plata.'
  },
  {
    id: 2,
    question: '¿Puedo cancelar mi reserva?',
    answer: 'Sí, las políticas de cancelación dependen de cada hotel, pero trabajamos con establecimientos que ofrecen cancelación gratuita hasta 48-72 horas antes del check-in. Al hacer tu reserva te informamos las condiciones específicas de tu alojamiento.'
  },
  {
    id: 3,
    question: '¿Cómo sé si hay disponibilidad para mis fechas?',
    answer: 'Al contactarnos por WhatsApp con tus fechas y preferencias, consultamos en tiempo real con nuestra red de hoteles. Te respondemos en minutos con las opciones disponibles y los precios actualizados.'
  },
  {
    id: 4,
    question: '¿Qué métodos de pago aceptan los hoteles?',
    answer: 'Nuestros hoteles asociados aceptan efectivo, tarjetas de crédito/débito, transferencias bancarias y MercadoPago. Algunos establecimientos ofrecen descuentos adicionales por pago en efectivo, lo que te informamos en cada caso.'
  },
  {
    id: 5,
    question: '¿Cobran comisión por el servicio?',
    answer: 'No cobramos comisión a los viajeros. Nuestro servicio de búsqueda y conexión con hoteles es totalmente gratuito para vos. Los precios que te ofrecemos son directamente los que establece el hotel.'
  },
  {
    id: 6,
    question: '¿Puedo solicitar habitaciones para grupos grandes?',
    answer: 'Sí, tenemos una sección especializada para grupos, delegaciones y eventos. Conseguimos alojamiento para equipos deportivos, contingentes estudiantiles, eventos corporativos y grupos familiares con tarifas preferenciales.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2 className="section-title">Preguntas frecuentes</h2>
        <p className="section-subtitle">
          Respondemos tus dudas sobre nuestro servicio de alojamiento en Mar del Plata.
        </p>
        
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              key={item.id}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <h3>{item.question}</h3>
                <FontAwesomeIcon 
                  icon={openIndex === index ? faChevronUp : faChevronDown} 
                  className="faq-icon"
                />
              </div>
              
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-more">
          <p>¿No encontrás la respuesta que buscás?</p>
          <a href="#contact" className="btn btn-outline">Contactanos</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;