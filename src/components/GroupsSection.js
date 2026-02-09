import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faBriefcase,
  faGraduationCap,
  faCalendarAlt,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import './GroupsSection.css';

const GroupsSection = () => {
  return (
    <section
      id="alojamiento-grupal-mar-del-plata"
      className="groups-section"
      aria-labelledby="groups-title"
    >
      <div className="groups-overlay">
        <div className="groups-content">

          <h2 id="groups-title" className="groups-title">
            Alojamiento para grupos en Mar del Plata
          </h2>

          <p className="groups-description">
            Somos especialistas en <strong>hoteles para grupos en Mar del Plata</strong>.
            Recibimos <strong>equipos deportivos</strong>, <strong>congresos</strong>,
            <strong>delegaciones estudiantiles</strong>, <strong>eventos empresariales</strong>
            y contingentes institucionales durante todo el año.
          </p>

          <ul className="groups-benefits">
            <li>
              <FontAwesomeIcon icon={faUsers} />
              Bloqueo de habitaciones para grupos grandes y medianos
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} />
              Hoteles con salones para congresos y reuniones corporativas
            </li>
            <li>
              <FontAwesomeIcon icon={faGraduationCap} />
              Tarifas especiales para viajes educativos y estudiantiles
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarAlt} />
              Fechas flexibles para torneos, eventos y fines de semana largos
            </li>
            <li>
              <FontAwesomeIcon icon={faHandshake} />
              Convenios con gremios, sindicatos y organismos públicos
            </li>
          </ul>

          <div className="groups-tags">
            <span>Equipos deportivos</span>
            <span>Congresos y convenciones</span>
            <span>Viajes estudiantiles</span>
            <span>Eventos empresariales</span>
            <span>Juegos Evita</span>
            <span>Juegos Bonaerenses</span>
            <span>COSAPRO</span>
          </div>

          <a
            href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20alojamiento%20grupal%20en%20Mar%20del%20Plata"
            target="_blank"
            rel="noopener noreferrer"
            className="groups-cta"
            aria-label="Consultar alojamiento grupal en Mar del Plata por WhatsApp"
          >
            Solicitar propuesta para grupos
          </a>

        </div>
      </div>
    </section>
  );
};

export default GroupsSection;
