import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

// Imágenes de testimonios
import testimonial1 from '../assets/images/testimonial-1.png';
import testimonial2 from '../assets/images/testimonial-2.png';
import testimonial3 from '../assets/images/testimonial-3.png';
import testimonial4 from '../assets/images/testimonial-4.png';

// Datos de testimonios optimizados SEO
const testimonialsData = [
  {
    id: 1,
    name: 'Laura G.',
    rating: 5,
    text: 'Excelente atención, resolvieron todo por WhatsApp en minutos y nos consiguieron un hotel en Mar del Plata, cerca de Güemes. La habitación era exactamente como en las fotos.',
    image: testimonial1,
    location: 'Córdoba'
  },
  {
    id: 2,
    name: 'Martín L.',
    rating: 4.5,
    text: 'Pagamos directo en el hotel, todo transparente y sin comisiones ocultas. Nos ahorramos casi un 20% comparado con otras plataformas de alojamiento en Mar del Plata.',
    image: testimonial2,
    location: 'Buenos Aires'
  },
  {
    id: 3,
    name: 'Claudia M.',
    rating: 5,
    text: 'Viajé con mi familia y conseguimos una habitación cuádruple perfecta en Mar del Plata. La atención personalizada realmente marca la diferencia.',
    image: testimonial3,
    location: 'Rosario'
  },
  {
    id: 4,
    name: 'Emilia F.',
    rating: 5,
    text: 'Llegamos de madrugada sin reserva y en 15 minutos ya teníamos alojamiento en Mar del Plata. Servicio ideal para viajes imprevistos.',
    image: testimonial4,
    location: 'Mendoza'
  }
];

// Estrellas de calificación
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
    <section
      id="testimonials"
      className="testimonials section"
      aria-label="Opiniones de huéspedes sobre hoteles en Mar del Plata"
    >
      <div className="container">

        {/* Título SEO */}
        <h2 className="section-title">
          Opiniones reales de huéspedes que se alojaron en Mar del Plata
        </h2>

        {/* Subtítulo SEO + conversión */}
        <p className="section-subtitle">
          Familias, parejas, ejecutivos y grupos que eligieron hoteles en Mar del Plata
          con asesoramiento personalizado y pago directo en el hotel.
        </p>

        {/* Grid de testimonios */}
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.id}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="testimonial-content">
                <span className="quote-mark" aria-hidden="true">“</span>

                <p className="testimonial-text" itemProp="reviewBody">
                  {testimonial.text}
                </p>

                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testimonial.rating} />
                  <RatingStars rating={testimonial.rating} />
                </div>
              </div>

              <div className="testimonial-author" itemProp="author" itemScope itemType="https://schema.org/Person">
                <img
                  src={testimonial.image}
                  alt={`Opinión de ${testimonial.name} sobre hotel en Mar del Plata`}
                  className="author-image"
                  loading="lazy"
                />
                <div>
                  <h4 className="author-name" itemProp="name">
                    {testimonial.name}
                  </h4>
                  <p className="author-location">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA fuerte */}
        <div className="testimonial-cta">
          <p>
            ⭐ 4.8/5 basado en más de 200 opiniones reales de huéspedes
          </p>
          <a
            href="https://wa.me/5492235203369?text=Hola!%20Quiero%20consultar%20por%20alojamiento%20en%20Mar%20del%20Plata"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar alojamiento en Mar del Plata
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
