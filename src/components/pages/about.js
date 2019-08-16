import React from "react";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-grid-wrapper">
        <div className="dad-image" />
        <div className="about-grid-description">
          <p>Diggin in the dirt for yellow rocks...</p>
        </div>
        <div className="about-grid-description">
          <p>Water pump blasts the washplant...</p>
        </div>
        <div className="pump-image" />

        <div className="washplant-image" />
        <div className="about-grid-description">
          <p>Washplant filters through the tailings...</p>
        </div>
        <div className="about-grid-description">
          <p>There's yer Gold</p>
        </div>
        <div className="gold-image" />
      </div>
    </div>
  );
};

export default About;
