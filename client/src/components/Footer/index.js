import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <ul>
          <li>News</li>
          <li>Investors</li>
          <li>Events</li>
          <li>Inclusion & Diversity</li>
        </ul>
        <div className="social-media">
          <FaFacebookSquare />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
      <div className="bottom-section">
        <ul>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Do not sell</li>
          <li>Copyright</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;