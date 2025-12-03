import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './PreOrder.css';

const PreOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: 1
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', quantity: 1 });
    }, 3000);
  };

  const benefits = [
    'Desconto exclusivo de 30%',
    'Autógrafo digital do autor',
    'Acesso antecipado aos primeiros capítulos',
    'Marcador de página exclusivo',
    'Arte conceitual em alta resolução',
    'Convite para evento de lançamento'
  ];

  return (
    <section id="preorder" className="preorder">
      <div className="preorder-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="preorder-header"
        >
          <h2 className="section-title">Garanta sua Pré-venda</h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">
            Seja um dos primeiros a mergulhar nesta aventura épica
          </p>
        </motion.div>

        <div className="preorder-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="preorder-info"
          >
            <div className="price-card">
              <div className="price-header">
                <span className="price-label">Oferta de Lançamento</span>
                <div className="price">
                  <span className="old-price">R$ 79,90</span>
                  <span className="new-price">R$ 55,90</span>
                </div>
                <span className="discount-badge">30% OFF</span>
              </div>

              <div className="benefits-list">
                <h3>Bônus Exclusivos:</h3>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <FaCheck className="check-icon" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="preorder-form-container"
          >
            <form onSubmit={handleSubmit} className="preorder-form">
              <h3>Reserve seu Exemplar</h3>

              <div className="form-group">
                <label htmlFor="preorder-name">Nome Completo</label>
                <input
                  type="text"
                  id="preorder-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="preorder-email">E-mail</label>
                <input
                  type="email"
                  id="preorder-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Quantidade</label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                >
                  <option value="1">1 exemplar - R$ 55,90</option>
                  <option value="2">2 exemplares - R$ 111,80</option>
                  <option value="3">3 exemplares - R$ 167,70</option>
                  <option value="5">5 exemplares - R$ 279,50</option>
                </select>
              </div>

              <motion.button
                type="submit"
                className="preorder-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                {submitted ? 'Reserva Confirmada! ✓' : 'Confirmar Pré-venda'}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="success-message"
                >
                  Obrigado! Você receberá mais informações em breve.
                </motion.div>
              )}

              <p className="payment-info">
                * Pagamento será processado próximo ao lançamento
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreOrder;
