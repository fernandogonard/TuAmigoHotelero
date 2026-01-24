import React, { useEffect } from 'react';
import './App.css';

// Importar componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RoomCatalog from './components/RoomCatalog';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import GroupsSection from './components/GroupsSection';

import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

function App() {
  // Implementar funciones para mejorar el SEO dinámico
  useEffect(() => {
    // Actualizar el título dinámicamente según la sección
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        
        if(scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight) {
          // Actualizar el título basado en la sección visible
          const sectionName = section.getAttribute('id');
          const baseTitle = 'Tu Amigo Hotelero | ';
          
          switch(sectionName) {
            case 'hero':
              document.title = baseTitle + 'Hoteles en Mar del Plata sin comisiones';
              break;
            case 'how-it-works':
              document.title = baseTitle + 'Cómo funciona nuestro servicio';
              break;
            case 'room-catalog':
              document.title = baseTitle + 'Catálogo de habitaciones disponibles';
              break;
            case 'testimonials':
              document.title = baseTitle + 'Testimonios de huéspedes satisfechos';
              break;
            case 'faq':
              document.title = baseTitle + 'Preguntas frecuentes';
              break;
            case 'groups':
              document.title = baseTitle + 'Reservas para grupos y eventos';
              break;
            case 'contact':
              document.title = baseTitle + 'Contáctanos';
              break;
            default:
              document.title = baseTitle + 'Conectamos viajeros con hoteles locales en Mar del Plata';
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Agregar etiquetas Structured Data en tiempo de ejecución si es necesario
    const addStructuredData = () => {
      // Ejemplo: Añadir datos de FAQPage para la sección de FAQ
      const faqData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cómo funciona Tu Amigo Hotelero?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Conectamos a viajeros directamente con hoteles locales en Mar del Plata, eliminando comisiones y garantizando los mejores precios.'
            }
          },
          // Más preguntas y respuestas se generarían dinámicamente
        ]
      };

      // Crear el script para añadir al DOM
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(faqData);
      document.head.appendChild(script);
    };
    
    addStructuredData();
    
    // Limpieza al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      {/* Componente de Navbar */}
      <header>
        <Navbar />
      </header>

      <main>
        {/* Sección Hero con etiqueta semántica para SEO */}
        <section id="hero" aria-labelledby="hero-heading">
          <Hero />
        </section>

        {/* Sección Cómo Funciona con etiqueta semántica para SEO */}
        <section id="how-it-works" aria-labelledby="how-works-heading">
          <HowItWorks />
        </section>

        {/* Sección Catálogo de Habitaciones con etiqueta semántica para SEO */}
        <section id="room-catalog" aria-labelledby="catalog-heading">
          <RoomCatalog />
        </section>

        {/* Sección Testimonios con etiqueta semántica para SEO */}
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Testimonials />
        </section>

        {/* Sección FAQ con etiqueta semántica para SEO */}
        <section id="faq" aria-labelledby="faq-heading">
          <FAQ />
        </section>

        {/* Sección Grupos con etiqueta semántica para SEO */}
        <section id="groups" aria-labelledby="groups-heading">
          <GroupsSection />
        </section>

        {/* Sección Contacto con etiqueta semántica para SEO */}
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>

      {/* WhatsApp flotante siempre visible */}
      <WhatsAppFloat />

      {/* Footer con etiqueta semántica para SEO */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;