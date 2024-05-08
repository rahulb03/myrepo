import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              fermentum auctor velit, ut convallis nunc.
            </p>
            <div className="contact">
              <span><i className="fas fa-phone"></i> +123456789</span>
              <span><i className="fas fa-envelope"></i> info@example.com</span>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="/"><i className="fab fa-facebook"></i></a>
              <a href="/"><i className="fab fa-twitter"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
              <a href="/"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Ecommerce Store. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
