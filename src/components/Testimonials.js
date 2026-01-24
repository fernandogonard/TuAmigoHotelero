import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

// Importar imágenes de testimonios
import testimonial1 from '../assets/images/testimonial-1.png';
import testimonial2 from '../assets/images/testimonial-2.png';
import testimonial3 from '../assets/images/testimonial-3.png';
import testimonial4 from '../assets/images/testimonial-4.png';

// Datos de muestra para testimonios
const testimonialsData = [
  {
    id: 1,
    name: 'Laura G.',
    rating: 5,
    text: 'Excelente atención, resolvieron todo por WhatsApp en minutos y nos consiguieron un hotel de primera. La habitación era exactamente como en las fotos.',
    image: testimonial1,
    location: 'Córdoba'
  },
  {
    id: 2,
    name: 'Martín L.',
    rating: 4.5,
    text: 'Pagamos directo en el hotel, todo transparente y sin comisiones ocultas. Nos ahorramos casi un 20% comparado con otras plataformas. Volveremos a usarlo.',
    image: testimonial2,
    location: 'Buenos Aires'
  },
  {
    id: 3,
    name: 'Claudia M.',
    rating: 5,
    text: 'Viajé con mi familia y Tu Amigo Hotelero nos consiguió una habitación cuádruple perfecta. La atención personalizada marca la diferencia.',
    image: testimonial3,
    location: 'Rosario'
  },
  {
    id: 4,
    name: 'Emilia F.',
    rating: 5,
    text: 'Llegamos de madrugada sin reserva y en 15 minutos ya teníamos habitación. Servicio excepcional para situaciones imprevistas.',
    image: testimonial4,
    location: 'Mendoza'
  }
];

// Componente para mostrar estrellas de calificación
const RatingStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} />);
  }
  
  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalfAlt} />);
  }
  
  return <div className="testimonial-rating">{stars}</div>;
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle">
          Más de 5,000 viajeros ya disfrutaron de Mar del Plata gracias a nuestro servicio personalizado.
        </p>
        
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-content">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <RatingStars rating={testimonial.rating} />
              </div>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={`Foto de ${testimonial.name}`} 
                  className="author-image"
                />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-cta">
          <p>Más de 200 opiniones con calificación promedio de 4.8/5</p>
          <a href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20alojamiento" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Consultá tu alojamiento</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;