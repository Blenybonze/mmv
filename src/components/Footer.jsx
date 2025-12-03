import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', name: 'Facebook' },
    { icon: <FaInstagram />, url: '#', name: 'Instagram' },
    { icon: <FaTwitter />, url: '#', name: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Galeria', id: 'gallery' },
    { name: 'Contato', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">📖 Memórias Manchadas de Vermelho</h3>
          <p className="footer-description">
            Uma saga épica de fantasia sombria que irá transportar você para um mundo de mistério,
            memórias esquecidas e destinos entrelaçados.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <motion.a
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <ul className="footer-contact">
            <li>
              <FaEnvelope />
              <a href="mailto:contato@reinosesquecidos.com">
                contato@reinosesquecidos.com
              </a>
            </li>
            <li>
              <span>Lançamento previsto: 2025</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Receba atualizações sobre o lançamento</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              aria-label="Email para newsletter"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inscrever
            </motion.button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Memórias Manchadas de Vermelho - Manoelly Deodoro. Todos os direitos reservados.
        </p>
        <p className="footer-love">
          Feito com <FaHeart className="heart-icon" /> para amantes de fantasia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
