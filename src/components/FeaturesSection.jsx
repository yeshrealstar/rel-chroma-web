import React from 'react';
import './FeaturesSection.css';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <div className="features-section" id="features">
      <h2>Key Features</h2>
      <motion.div 
        className="features-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            x: -100,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.3,
            }
          }
        }}
      >
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <h3>Semantic Relations</h3>
          <p>Capture relational dependencies between chunks for comprehensive data retrieval.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <h3>One-Time Data Conversion</h3>
          <p>Convert datasets once and adapt them to changing AI model efficiencies.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <h3>Enhanced RAG Pipelines</h3>
          <p>Provide full contextual information to LLMs for more accurate answers.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FeaturesSection;
