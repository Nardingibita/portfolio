import React from 'react';
import { FaFacebookF,  FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../style.css/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
         <p>Feel free to reach out via any platform.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/nardingingkoy.ibita" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://github.com/Nardingibita" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="mailto:ibitanarding@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="tel:+639704711809" aria-label="Phone">
          <FaPhone />
        </a>
      </div>
      <div className="footer-text">
        © {new Date().getFullYear()} Narding M. Ibita. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
