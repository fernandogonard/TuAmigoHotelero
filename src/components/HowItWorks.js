import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHotel, faReceipt } from '@fortawesome/free-solid-svg-icons';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="how-it-works section">
      <div className="container">

        <h2 className="section-title">
          Cómo funciona Tu Amigo Hotelero
        </h2>

        <p className="section-subtitle">
          Conseguí <strong>alojamiento en Mar del Plata</strong> de forma simple, 
          rápida y segura. Sin intermediarios, con atención personalizada y 
          precios reales de hotel.
        </p>

        <div className="steps-container">

          {/* PASO 1 */}
          <article className="step-card">
            <span className="step-number">1</span>

            <div className="step-icon">
              <FontAwesomeIcon icon={faMessage} />
            </div>

            <h3 className="step-title">
              Nos escribís por WhatsApp
            </h3>

            <p className="step-description">
              Contanos fechas, cantidad de personas y tipo de viaje 
              (familia, pareja, congreso, grupo deportivo o gremio).
              Respondemos rápido y sin vueltas.
            </p>

            <a
              href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20alojamiento%20en%20Mar%20del%20Plata"
              className="btn btn-outline step-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar alojamiento
            </a>
          </article>

          {/* PASO 2 */}
          <article className="step-card">
            <span className="step-number">2</span>

            <div className="step-icon">
              <FontAwesomeIcon icon={faHotel} />
            </div>

            <h3 className="step-title">
              Te mostramos hoteles disponibles
            </h3>

            <p className="step-description">
              Te enviamos opciones reales de hoteles en Mar del Plata,
              con fotos, ubicación (Güemes, Aldrey, centro) y tarifas
              sin comisiones ni sorpresas.
            </p>

            <a
              href="https://wa.me/5492235203369?text=Hola!%20Quiero%20ver%20opciones%20de%20hotel%20en%20Mar%20del%20Plata"
              className="btn btn-outline step-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver opciones disponibles
            </a>
          </article>

          {/* PASO 3 */}
          <article className="step-card">
            <span className="step-number">3</span>

            <div className="step-icon">
              <FontAwesomeIcon icon={faReceipt} />
            </div>

            <h3 className="step-title">
              Confirmás y pagás en el hotel
            </h3>

            <p className="step-description">
              Elegís la opción que más te conviene, confirmás tu reserva
              y pagás directamente en el hotel, con factura oficial
              y total transparencia.
            </p>

            <a href="#testimonials" className="btn btn-outline step-cta">
              Ver opiniones reales
            </a>
          </article>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
