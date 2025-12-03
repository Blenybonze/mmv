import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1>📖 Memórias Manchadas de Vermelho</h1>
        </motion.div>

        <nav className="nav">
          <motion.a
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Início
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Sobre o Livro
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('gallery')}
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Galeria
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contato
          </motion.a>
          <motion.button
            className="cta-button"
            onClick={() => scrollToSection('preorder')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(251, 191, 36, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Pré-venda
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
