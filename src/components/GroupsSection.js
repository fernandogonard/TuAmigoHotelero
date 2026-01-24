import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBriefcase, faGraduationCap, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './GroupsSection.css';

const GroupsSection = () => {
  return (
    <section id="groups" className="groups-section section">
      <div className="container">
        <div className="groups-content">
          <div className="groups-text">
            <h2 className="section-title text-left">¿Viajás en grupo o con tu equipo?</h2>
            <p className="groups-description">
              Coordinamos alojamiento para delegaciones, empresas o viajes familiares grandes con tarifas preferenciales y condiciones especiales.
            </p>
            
            <ul className="groups-benefits">
              <li className="group-benefit-item">
                <FontAwesomeIcon icon={faUsers} className="benefit-icon" />
                <span>Habitaciones múltiples o bloque de habitaciones</span>
              </li>
              <li className="group-benefit-item">
                <FontAwesomeIcon icon={faBriefcase} className="benefit-icon" />
                <span>Hoteles con salones para eventos corporativos</span>
              </li>
              <li className="group-benefit-item">
                <FontAwesomeIcon icon={faGraduationCap} className="benefit-icon" />
                <span>Tarifas especiales para delegaciones estudiantiles</span>
              </li>
              <li className="group-benefit-item">
                <FontAwesomeIcon icon={faCalendarAlt} className="benefit-icon" />
                <span>Reservas flexibles para grupos grandes</span>
              </li>
            </ul>
            
            <p className="groups-contact-text">
              Tenemos experiencia organizando alojamiento para:
            </p>
            
            <div className="groups-tags">
              <span className="group-tag">Equipos deportivos</span>
              <span className="group-tag">Viajes de egresados</span>
              <span className="group-tag">Eventos empresariales</span>
              <span className="group-tag">Familias numerosas</span>
              <span className="group-tag">Convenciones</span>
              <span className="group-tag">Viajes de estudio</span>
            </div>
            
            <a href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20alojamiento%20grupal" className="btn btn-primary btn-lg groups-cta" target="_blank" rel="noopener noreferrer">
              Consultá por alojamiento grupal
            </a>
          </div>
          
          <div className="groups-image">
            <img 
              src={require('../assets/images/depor.png')}
              alt="Alojamiento para grupos en Mar del Plata" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupsSection;