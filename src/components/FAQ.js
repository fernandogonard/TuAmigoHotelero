import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: '¿Quién factura el alojamiento en los hoteles de Mar del Plata?',
    answer:
      'La factura del alojamiento la emite directamente el hotel donde te hospedás en Mar del Plata. Nosotros no intermediamos fiscalmente: te conectamos con hoteles verificados para que reserves de forma directa, segura y sin comisiones.'
  },
  {
    id: 2,
    question: '¿Puedo cancelar una reserva de hotel en Mar del Plata?',
    answer:
      'Sí. La mayoría de los hoteles con los que trabajamos ofrecen cancelación gratuita entre 48 y 72 horas antes del check-in. Al momento de confirmar tu alojamiento en Mar del Plata te informamos claramente las condiciones de cancelación.'
  },
  {
    id: 3,
    question: '¿Cómo consulto disponibilidad de hoteles en Mar del Plata?',
    answer:
      'Muy simple: nos escribís por WhatsApp con tus fechas, cantidad de personas y tipo de viaje (familia, grupo, evento, trabajo). Consultamos disponibilidad en tiempo real y te respondemos en minutos con opciones y precios actualizados.'
  },
  {
    id: 4,
    question: '¿Qué medios de pago aceptan los hoteles?',
    answer:
      'Los hoteles de Mar del Plata con los que trabajamos aceptan efectivo, tarjetas de crédito y débito, transferencias bancarias y MercadoPago. En muchos casos hay descuentos especiales por pago en efectivo.'
  },
  {
    id: 5,
    question: '¿El servicio tiene comisión o costo adicional?',
    answer:
      'No. Nuestro servicio es 100% gratuito para vos. No cobramos comisiones ni recargos. Te ofrecemos tarifas directas del hotel, muchas veces con beneficios exclusivos.'
  },
  {
    id: 6,
    question: '¿Ofrecen alojamiento para grupos, congresos y eventos deportivos?',
    answer:
      'Sí. Gestionamos alojamiento en Mar del Plata para grupos deportivos, delegaciones, congresos, eventos corporativos, COSAPRO, Juegos Bonaerenses, Juegos Evita y viajes institucionales. Conseguimos cupos, tarifas especiales y ubicaciones estratégicas.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="faq section"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <h2 className="section-title">
          Preguntas frecuentes sobre alojamiento en Mar del Plata
        </h2>

        <p className="section-subtitle">
          Respondemos las dudas más comunes sobre hoteles, reservas y alojamiento
          para familias, jóvenes, grupos y eventos en Mar del Plata.
        </p>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              key={item.id}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
                itemProp="name"
              >
                <h3>{item.question}</h3>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="faq-icon"
                />
              </div>

              <div
                className="faq-answer"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-more">
          <p>¿Tenés otra consulta sobre hoteles en Mar del Plata?</p>
          <a
            href="#contact"
            className="btn btn-outline"
            aria-label="Contactar para consultar alojamiento en Mar del Plata"
          >
            Contactanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
