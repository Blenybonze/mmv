import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaMagic, FaDragon, FaCrown } from 'react-icons/fa';
import capaLivro from '../assets/capa-livro.png';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaMagic />,
      title: 'Mutação e Poder',
      description: 'Descubra a habilidade de manipular mutações no sangue'
    },
    {
      icon: <FaDragon />,
      title: 'Feéricos Ameaçadores',
      description: 'Enfrente criaturas além da muralha que ameaçam Astralis'
    },
    {
      icon: <FaCrown />,
      title: 'Guerra e Vingança',
      description: 'Uma guerra que mudou tudo há vinte anos atrás'
    },
    {
      icon: <FaBookOpen />,
      title: 'Jornada de Descoberta',
      description: 'Entre amizade, sacrifício e busca pela verdade'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h2 className="section-title">Sobre o Livro</h2>
          <div className="title-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image"
          >
            <div className="book-mockup">
              <img 
                src={capaLivro}
                alt="Memórias Manchadas de Vermelho - Manoelly Deodoro"
              />
              <div className="book-glow"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-text"
          >
            <h3>Uma Guerra que Mudou Tudo</h3>
            <p>
              Há vinte anos, uma grande guerra mudou o destino de Astralis para sempre. Agora, 
              a jovem Sarah, de dezenove anos, vive no Instituto Aurora Astralis há cinco anos, 
              onde é treinada ao lado de outros jovens para compreender e manipular a mutação em 
              seu sangue. Esta habilidade é essencial para servir ao exército e proteger seu país 
              dos feéricos que ameaçam além da muralha.
            </p>
            <p>
              Porém, Sarah esconde um segredo: sua verdadeira motivação é vingar a morte de sua mãe, 
              vítima da guerra que arruinou sua vida antes mesmo de seu nascimento. Determinada a 
              desvendar os mistérios que cercam este conflito devastador, Sarah luta contra seus 
              próprios demônios enquanto busca a verdade.
            </p>
            <p>
              Embora seu sonho de se tornar uma grande dançarina tenha sido adiado, Sarah descobre 
              que o treinamento no Instituto a prepara para algo ainda mais crucial. Ao transformar-se 
              em uma lutadora habilidosa e implacável, ela encontra forças para proteger aqueles que 
              ama e enfrentar os desafios que a aguardam além da muralha.
            </p>
            <p>
              <strong>Memórias Manchadas de Vermelho</strong> é uma história envolvente de amizade, 
              vingança e sacrifício. Em um mundo onde o passado nunca está verdadeiramente enterrado, 
              Sarah deve encontrar seu próprio caminho e confrontar as sombras de uma guerra que ainda 
              ecoa no presente. Uma jornada de autodescoberta e resistência, onde cada passo aproxima 
              Sarah de seu destino final.
            </p>
            
            <div className="book-stats">
              <div className="stat">
                <span className="stat-number">19</span>
                <span className="stat-label">Anos de Sarah</span>
              </div>
              <div className="stat">
                <span className="stat-number">20</span>
                <span className="stat-label">Anos da Guerra</span>
              </div>
              <div className="stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Anos no Instituto</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="features-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
