import React from 'react';
import './App.css';
import InstagramIcon from '/ig-icon.svg';



const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Alejandra Vacuii</p>
      <a href="https://www.instagram.com/lamalafortuna/" target="_blank" rel="noopener noreferrer">
        <img 
          src={InstagramIcon} 
          alt="Instagram" 
          className="instagram-icon" 
        />
      </a>
    </footer>
  );
};

export default Footer;