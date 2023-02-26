import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        <ul>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Do not sell</li>
          <li>Copyright</li>
        </ul>

        <div className="social-media">
          <FaFacebookSquare />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>

    </footer>
  )
}

export default Footer;