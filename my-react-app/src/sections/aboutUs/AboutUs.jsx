import React from "react";
import "./style.css";
import business from "../../assets/pictures/Business-competition.png";

export const AboutUs = () => {
  return (
    <section className="aboutUs__container aboutUs">
      <h2 className="aboutUs__title page-title">About Us</h2>
      <div className="aboutUs__banner">
        <img
          src={business}
          alt="business competition"
          className="aboutUs__banner-img"
        />
      </div>
      <div className="aboutUs__info info">
        <p className="info__column block-column ">
          The model offers a framework for discussing problems related to the
          user's experience, as well as possible ways and means of solving them.
          Application development begins at the top level (strategy), where the
          future software product is described quite abstractly from the point
          of view of the expectations of both users and the customer.
        </p>
        <div className="info__statistics statistics">
            <div className="statistics__block">
                <h3 className="statistics__numbers page-title">800</h3>
                <p className="statistics__name block-column">Pupils</p>
            </div>
            <div className="statistics__block">
                <h3 className="statistics__numbers page-title">18</h3>
                <p className="statistics__name block-column">Teachers</p>
            </div>
            <div className="statistics__block">
                <h3 className="statistics__numbers page-title">6</h3>
                <p className="statistics__name block-column">Foreign languages</p>
            </div>
        </div>
      </div>
    </section>
  );
};
