import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-link">
            <Link to="/#">Terms</Link>
          </div>
          <div className="footer-link">
            <Link to="/#">Privacy Policy</Link>
          </div>
          <div className="footer-link">
            <Link to="/#">Cookie Policy</Link>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2019</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
