import React from 'react';
import './AnimationSection.css';
import { motion } from 'framer-motion';

const AnimationSection = () => {
  return (
    <div className="animation-section" id="how-it-works">
      <h2>How Relational Chroma DB Works</h2>
      <motion.div 
        className="animation-container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
            }
          }
        }}
      >
        <motion.div 
          className="animation-box"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="db-box">Data</div>
          <div className="arrow">→</div>
          <div className="vector-box">Vector Embeddings</div>
          <div className="arrow">→</div>
          <div className="relation-box">Relational Graph</div>
        </motion.div>
        <p>Relational Chroma DB creates a relational graph that maps relations between text chunks during ingestion, making data retrieval more contextually aware and precise.</p>
      </motion.div>
    </div>
  );
}

export default AnimationSection;
