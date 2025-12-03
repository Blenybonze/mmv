import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';
import capaLivro from '../assets/capa-livro.jpg';
import livroAberto from '../assets/MMV ABERTO.png';
import mockup4 from '../assets/MOCKUP 4.png';
import marcaPagina from '../assets/MARCA PAGINA MOCKUP (1).png';
import autorFoto from '../assets/WhatsApp_Image_2024-08-23_at_15.23.56-removebg-preview.png';
import screenshot from '../assets/Screenshot_2024-06-12-19-06-11-188_com.miui.gallery-edit.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      url: livroAberto,
      title: 'Livro Aberto'
    },
    {
      url: mockup4,
      title: 'Mockup'
    },
    {
      url: marcaPagina,
      title: 'Marca Página'
    },
    {
      url: autorFoto,
      title: 'Autora Manoelly Deodoro'
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gallery-header"
        >
          <h2 className="section-title">Galeria</h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">
            Explore o universo visual de Reinos Esquecidos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gallery-swiper-container"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="gallery-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={image.url} alt={image.title} />
                  <div className="gallery-overlay">
                    <h3>{image.title}</h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
