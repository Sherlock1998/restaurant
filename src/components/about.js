import React from 'react';

const About = ({ onShowModal }) => {
  return (
    <section className="overlap-section">
      <div className="overlap">
        <div className="reservation">
          <div className="reservation__text">
            <h4 className="reservation__text--heading heading--primary">
              Reservations
            </h4>
            <p className="body__text">
              Contact us now to book a table. Reservations must be made on the
              same day
            </p>
            <button className="reservation__text--button" onClick={onShowModal}>
              book a table
            </button>
          </div>
          <div className="reservation__pic" />
        </div>
        <div className="about">
          <div className="about__pic" />
          <div className="about__text">
            <h4 className="about__text--heading heading--primary">About</h4>
            <p className="body__text">
              La Granda is a third generation family owned restaurant that have
              received numerous fine-dining awards over the years. The
              restaurant is well known for preserving its authentic flavours
              throughout the years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
