import React from "react";
import "./style.css";
import onlineTest from "../../assets/pictures/Online-test.png";
import lesson from "../../assets/pictures/Lesson.png";
import webinar from "../../assets/pictures/Webinar.png";

export const Pricing = () => {
  return (
    <section className="pricing__container pricing">
      <h2 className="pricing__title page-title">Pricing</h2>
      <div className="pricing__blocks">
        <div className="pricing__block">
          <div className="pricing__banner">
            <img
              src={onlineTest}
              alt="online test"
              className="pricing__banner-img"
            />
          </div>
          <h3 className="pricing__block-title block-title">Self-study online course</h3>
          <p className="pricing__block-column block-column ">
            Start learning English online in live classes with qualified EC
            teachers and students from all over the world.
          </p>
          <div className="pricing__wrapper">
            <div className="pricing__price block-title">$5.99</div>
            <div className="pricing__monthly">per month</div>
          </div>
        </div>
        <div className="pricing__block">
          <div className="pricing__banner">
            <img
              src={lesson}
              alt="online test"
              className="pricing__banner-img"
            />
          </div>
          <h3 className="pricing__block-title block-title">Live online classes</h3>
          <p className="pricing__block-column block-column ">
            Interactive group classes with expert teachers. Free 7-day trial
          </p>
          <div className="pricing__wrapper">
            <div className="pricing__price block-title">$12.99</div>
            <div className="pricing__monthly">per month</div>
          </div>
        </div>
        <div className="pricing__block">
          <div className="pricing__banner">
            <img
              src={webinar}
              alt="online test"
              className="pricing__banner-img"
            />
          </div>
          <h3 className="pricing__block-title block-title">Personal Tuition</h3>
          <p className="pricing__block-column block-column ">
            Online one-to-one English tutoring – enjoy our first session for
            only $1
          </p>
          <div className="pricing__wrapper">
            <div className="pricing__price block-title">$20.99</div>
            <div className="pricing__monthly">per month</div>
          </div>
        </div>
      </div>
    </section>
  );
};
