import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="main-contact-items">
        <div className="contact-main">
          <div className="font-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="contact-detail">
            <h1>email@example.com</h1>
          </div>
        </div>
        <div className="contact-main">
          <div className="font-icon">
            <FontAwesomeIcon icon={faPhoneSquareAlt} />
          </div>
          <div className="contact-detail">
            <h1>555-555-5555</h1>
          </div>
        </div>
      </div>
      <div className="social-links">
        <div className="social-link">
          <div className="social-icon">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </div>
          <div className="social-desc">
            <p>Like us on Facebook</p>
          </div>
        </div>
        <div className="social-link">
          <div className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="social-desc">
            <p>Follow us on Instagram</p>
          </div>
        </div>
        <div className="social-link">
          <div className="social-icon">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </div>
          <div className="social-desc">
            <p>See us Tweet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
