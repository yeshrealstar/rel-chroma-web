import React from 'react';
import { Container, Button } from 'react-bootstrap';

import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <Container className="text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5 }}
        >
          <h1 className="display-4">AI-Powered Semantic Relational Vector Database</h1>
          <p className="lead">Experience the future of contextually rich data retrieval with Relational Chroma DB.</p>
          <Button variant="primary" className="mt-4" href="#features">Learn More</Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default HeroSection;
