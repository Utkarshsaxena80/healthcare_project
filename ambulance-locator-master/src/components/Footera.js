import React from "react";
import "../Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="emergency-banner">
        <span className="emergency-text">Emergency: Call 102</span>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact */}
          <div className="contact-info">
            <p>Non-Emergency: (555) 123-4567</p>
            <p>contact@ambulance.com</p>
            <p>123 NEW DELHI, City, ST 12345</p>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <br></br>
            <a href="/services">Services</a>
            <a href="/coverage">Coverage Area</a>
            <a href="/contact">Contact Us</a>
          </div>

          {/* Hours */}
          <div className="hours">
            <p className="hours-title">Available 24/7</p>
            <p>Emergency Medical Services</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; {currentYear} Emergency Medical Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
