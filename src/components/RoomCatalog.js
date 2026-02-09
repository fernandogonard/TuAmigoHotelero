import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faMugHot, faParking, faTv, faSnowflake, faPaw } from '@fortawesome/free-solid-svg-icons';
import './RoomCatalog.css';

// Importar imágenes de habitaciones
import roomDoubleStandard from '../assets/images/room-double-standard.jpg';
import roomSingleEconomy from '../assets/images/room-single-economy.jpg';
import roomFamilySuite from '../assets/images/room-family-suite.jpg';
import roomGroup from '../assets/images/room-group.jpg';
import roomOceanView from '../assets/images/room-ocean-view.jpg';
import roomTriplePremium from '../assets/images/room-triple-premium.jpg';

// Datos de muestra para las habitaciones
const roomsData = [
  {
    id: 1,
    name: 'Habitación Doble Standard',
    image: roomDoubleStandard,
    price: 75000,
    type: 'Doble',
    services: ['wifi', 'breakfast', 'tv', ],
    description: 'Cómoda habitación con 2 camas individuales o 1 matrimonial, ideal para parejas o amigos.'
  },
  {
    id: 2,
    name: 'Habitación Single Económica',
    image: roomSingleEconomy,
    price: 60000,
    type: 'Single',
    services: ['wifi','breakfast', 'tv'],
    description: 'Habitación individual con excelente relación calidad-precio para viajeros solitarios.'
  },
  {
    id: 3,
    name: 'Triple Familiar',
    image: roomFamilySuite,
    price: 90000,
    type: 'Triple',
    services: ['wifi', 'breakfast', 'parking', 'tv', 'ac'],
    description: 'Amplia habitación con capacidad para 4 personas, ideal para familias con niños.'
  },
  {
    id: 4,
    name: 'Habitación Grupal',
    image: roomGroup,
    price: 120000,
    type: 'Grupal',
    services: ['wifi', 'tv', 'ac'],
    description: 'Espaciosa habitación con capacidad para 4 personas, perfecta para grupos de amigos.'
  },
  {
    id: 5,
    name: 'Habitación Cuadruple',
    image: roomOceanView,
    price: 120000,
    type: 'Cuadruple',
    services: ['wifi', 'breakfast', 'parking', 'tv', 'ac', 'pet'],
    description: 'Habitación cuádruple con todas las comodidades.'
  },
  {
    id: 6,
    name: 'Habitación Triple ',
    image: roomTriplePremium,
    price: 90000,
    type: 'Triple',
    services: ['wifi', 'breakfast', 'tv', 'ac'],
    description: 'Espaciosa habitación para 3 personas con todas las comodidades para una estadía perfecta.'
  }
];

// Componente para los servicios con iconos
const ServiceIcon = ({ service }) => {
  const icons = {
    wifi: { icon: faWifi, label: 'Wi-Fi' },
    breakfast: { icon: faMugHot, label: 'Desayuno' },
    parking: { icon: faParking, label: 'Cochera' },
    tv: { icon: faTv, label: 'TV LED' },
    ac: { icon: faSnowflake, label: 'Aire acond.' },
    pet: { icon: faPaw, label: 'Pet friendly' }
  };

  const icon = icons[service];
  if (!icon) {
    console.error(`Servicio no encontrado: ${service}`);
    return null;
  }

  return (
    <div className="service-icon" title={icon.label}>
      <FontAwesomeIcon icon={icon.icon} />
      <span className="service-tooltip">{icon.label}</span>
    </div>
  );
};

const RoomCatalog = () => {
  const [filter, setFilter] = useState('todos');
  const [priceRange, setPriceRange] = useState(120000); // valor inicial igual al máximo
  const [selectedServices, setSelectedServices] = useState([]);

  // Manejar cambio en los filtros de servicios
  const handleServiceFilter = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Filtrar habitaciones según criterios seleccionados
  const filteredRooms = roomsData.filter(room => {
    // Filtro por tipo
    const typeMatch = filter === 'todos' || room.type === filter;
    
    // Filtro por precio
    const priceMatch = room.price <= priceRange;
    
    // Filtro por servicios
    const servicesMatch = 
      selectedServices.length === 0 || 
      selectedServices.every(service => room.services.includes(service));
    
    return typeMatch && priceMatch && servicesMatch;
  });

  return (
   <section
  id="habitaciones-hotel-mar-del-plata"
  className="room-catalog section"
  aria-labelledby="titulo-habitaciones"
>
  <div className="container">

    {/* TÍTULO SEO */}
    <h2 id="titulo-habitaciones" className="section-title">
      Habitaciones en Hotel en Mar del Plata
    </h2>

    {/* TEXTO SEO + CONVERSIÓN */}
    <p className="section-subtitle">
      Conocé nuestras habitaciones en <strong>Mar del Plata</strong>, ideales para parejas,
      familias, grupos y viajeros de trabajo. Tarifas directas de hotel,
      excelente ubicación cerca de Güemes, Shopping Aldrey y la vieja terminal.
    </p>

    {/* FILTROS */}
    <div className="filters-container" aria-label="Filtros de búsqueda de habitaciones">

      <div className="filter-group">
        <label htmlFor="tipo-habitacion">Tipo de habitación</label>
        <select
          id="tipo-habitacion"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="todos">Todas</option>
          <option value="Single">Single</option>
          <option value="Doble">Doble</option>
          <option value="Triple">Triple</option>
          <option value="Grupal">Grupal</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="precio-maximo">
          Precio máximo por noche: <strong>${priceRange.toLocaleString()}</strong>
        </label>
        <input
          id="precio-maximo"
          type="range"
          min="5000"
          max="220000"
          step="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="price-slider"
        />
      </div>

      <div className="filter-group services-filter">
        <label>Servicios incluidos</label>
        <div className="service-checkboxes">

          <label className="service-checkbox">
            <input
              type="checkbox"
              checked={selectedServices.includes('wifi')}
              onChange={() => handleServiceFilter('wifi')}
            />
            <FontAwesomeIcon icon={faWifi} /> Wi-Fi
          </label>

          <label className="service-checkbox">
            <input
              type="checkbox"
              checked={selectedServices.includes('breakfast')}
              onChange={() => handleServiceFilter('breakfast')}
            />
            <FontAwesomeIcon icon={faMugHot} /> Desayuno
          </label>

          <label className="service-checkbox">
            <input
              type="checkbox"
              checked={selectedServices.includes('parking')}
              onChange={() => handleServiceFilter('parking')}
            />
            <FontAwesomeIcon icon={faParking} /> Cochera
          </label>

          <label className="service-checkbox">
            <input
              type="checkbox"
              checked={selectedServices.includes('ac')}
              onChange={() => handleServiceFilter('ac')}
            />
            <FontAwesomeIcon icon={faSnowflake} /> Aire acondicionado
          </label>

        </div>
      </div>
    </div>

    {/* GRID DE HABITACIONES */}
    {filteredRooms.length > 0 ? (
      <div className="rooms-grid">
        {filteredRooms.map((room) => (
          <article className="room-card" key={room.id}>

            <div className="room-image">
              <img
                src={room.image}
                alt={`${room.name} en hotel en Mar del Plata`}
                loading="lazy"
              />
              <div className="room-price">
                Desde ${room.price.toLocaleString()}
                <span> / noche</span>
              </div>
            </div>

            <div className="room-content">
              <h3 className="room-title">{room.name}</h3>

              <p className="room-description">
                {room.description}
              </p>

              <div className="room-services" aria-label="Servicios de la habitación">
                {room.services.map((service) => (
                  <ServiceIcon key={service} service={service} />
                ))}
              </div>

              <a
                href={`https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20disponibilidad%20para%20${encodeURIComponent(room.name)}%20en%20Mar%20del%20Plata`}
                className="btn btn-primary room-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar disponibilidad por WhatsApp
              </a>
            </div>

          </article>
        ))}
      </div>
    ) : (
      <div className="no-rooms-message">
        <p>
          No encontramos habitaciones con los filtros seleccionados.
          Probá modificarlos o escribinos por WhatsApp para ayudarte.
        </p>
      </div>
    )}

  </div>
</section>

  );
};

export default RoomCatalog;