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
    <section id="rooms" className="room-catalog section">
      <div className="container">
        <h2 className="section-title">Nuestras Habitaciones</h2>
        <p className="section-subtitle">
          Encontrá la habitación perfecta para tu estadía en Mar del Plata a precios directos de hotel.
        </p>
        
        <div className="filters-container">
          <div className="filter-group">
            <label>Tipo de habitación:</label>
            <select 
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
            <label>Precio máximo: ${priceRange}</label>
            <input
              type="range"
              min="5000"
              max="220000" // <-- valor corregido
              step="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="price-slider"
            />
          </div>
          
          <div className="filter-group services-filter">
            <label>Servicios:</label>
            <div className="service-checkboxes">
              <div className="service-checkbox">
                <input
                  type="checkbox"
                  id="wifi"
                  checked={selectedServices.includes('wifi')}
                  onChange={() => handleServiceFilter('wifi')}
                />
                <label htmlFor="wifi"><FontAwesomeIcon icon={faWifi} /> Wi-Fi</label>
              </div>
              
              <div className="service-checkbox">
                <input
                  type="checkbox"
                  id="breakfast"
                  checked={selectedServices.includes('breakfast')}
                  onChange={() => handleServiceFilter('breakfast')}
                />
                <label htmlFor="breakfast"><FontAwesomeIcon icon={faMugHot} /> Desayuno</label>
              </div>
              
              <div className="service-checkbox">
                <input
                  type="checkbox"
                  id="parking"
                  checked={selectedServices.includes('parking')}
                  onChange={() => handleServiceFilter('parking')}
                />
                <label htmlFor="parking"><FontAwesomeIcon icon={faParking} /> Cochera</label>
              </div>
              
              <div className="service-checkbox">
                <input
                  type="checkbox"
                  id="ac"
                  checked={selectedServices.includes('ac')}
                  onChange={() => handleServiceFilter('ac')}
                />
                <label htmlFor="ac"><FontAwesomeIcon icon={faSnowflake} /> Aire acond.</label>
              </div>
            </div>
          </div>
        </div>
        
        {filteredRooms.length > 0 ? (
          <div className="rooms-grid">
            {filteredRooms.map((room) => (
              <div className="room-card" key={room.id}>
                <div className="room-image">
                  <img src={room.image} alt={room.name} />
                  <div className="room-price">Desde ${room.price.toLocaleString()}<span>/noche</span></div>
                </div>
                <div className="room-content">
                  <h3 className="room-title">{room.name}</h3>
                  <p className="room-description">{room.description}</p>
                  <div className="room-services">
                    {room.services.map((service) => (
                      <ServiceIcon key={service} service={service} />
                    ))}
                  </div>
                  <a href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20disponibilidad%20de%20habitaciones" className="btn btn-primary room-cta" target="_blank" rel="noopener noreferrer">
                    Solicitar disponibilidad
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-rooms-message">
            <p>No encontramos habitaciones con los filtros seleccionados. Probá modificando tus criterios de búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomCatalog;