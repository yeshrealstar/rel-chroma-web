import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <p>© 2024 Relational Chroma DB. All Rights Reserved.</p>
      <motion.a 
        href="mailto:support@relationalchroma.com"
        whileHover={{ scale: 1.1, color: "#ff6600" }}
      >
        Contact Us
      </motion.a>
    </footer>
  );
}

export default Footer;
