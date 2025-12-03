import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Hero.css';
import capaLivro from '../assets/Screenshot_2024-06-12-19-06-11-188_com.miui.gallery-edit.jpg';
import livroAberto from '../assets/MMV ABERTO.png';
import mockup4 from '../assets/MOCKUP 4.png';

const Hero = () => {
  const bookImages = [
    capaLivro,
    livroAberto,
    mockup4,
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        className="hero-swiper"
      >
        {bookImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div 
              className="hero-slide"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-text"
        >
          <motion.span 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Em breve
          </motion.span>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Memórias Manchadas de Vermelho
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Uma jornada épica através de mundos sombrios, memórias esquecidas e destinos entrelaçados.
            Prepare-se para descobrir um universo onde o passado encontra o presente de forma surpreendente.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button
              className="btn-primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('preorder').scrollIntoView({ behavior: 'smooth' })}
            >
              Garanta sua Pré-venda
            </motion.button>
            
            <motion.button
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#fbbf24"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
