import React from "react";
import "../style/Footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className={`retro-footer ${theme}`}>
      <div className="footer-content">
        <h6 className="footer-text">Designed and Developed by Maadi El Moufaddal</h6>
        <p className="footer-copyright">© 2025 Mfdal.dev | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;