import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faBriefcase,
  faGraduationCap,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import './GroupsSection.css';

const GroupsSection = () => {
  return (
    <section id="groups" className="groups-section">
      <div className="groups-overlay">
        <div className="groups-content">

          <h2 className="groups-title">
            ¿Viajás en grupo o con tu equipo?
          </h2>

          <p className="groups-description">
            Especialistas en alojamiento grupal en Mar del Plata.
            Desde delegaciones deportivas hasta congresos y viajes educativos.
          </p>

          <ul className="groups-benefits">
            <li>
              <FontAwesomeIcon icon={faUsers} />
              Habitaciones múltiples o bloque de habitaciones
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} />
              Hoteles con salones para eventos corporativos
            </li>
            <li>
              <FontAwesomeIcon icon={faGraduationCap} />
              Tarifas especiales para delegaciones estudiantiles
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarAlt} />
              Reservas flexibles para grupos grandes
            </li>
          </ul>

          <div className="groups-tags">
            <span>Equipos deportivos</span>
            <span>Viajes de egresados</span>
            <span>Convenciones</span>
            <span>Eventos empresariales</span>
          </div>

          <a
            href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20alojamiento%20grupal"
            target="_blank"
            rel="noopener noreferrer"
            className="groups-cta"
          >
            Pedí tu propuesta para grupos
          </a>

        </div>
      </div>
    </section>
  );
};

export default GroupsSection;
