import React from "react";
import "./style.css";
import happyGirl from "../../assets/pictures/happyGirl.png";

export const Contact = () => {
  return (
    <section className="contact__container contactUs">
      <h3 className="contactUs__title page-title">Contact Us</h3>
      <div className="contactUs__banner">
        <img src={happyGirl} alt="girl" className="contactUs__banner-img" />
      </div>
      <div className="contactUs__submit submit">
        <p className="submit__desc block-column">
          Discover your current English level by taking our free online English
          test.Sign up to our newsletter for learning tips and free resources
        </p>
        <form action="#" className="submit__form">
          <input
            type="text"
            className="submit__input"
            placeholder="Enter Your E-mail"
          />
          <button className="submit__btn black-button">Subscribe</button>
        </form>
      </div>
    </section>
  );
};
