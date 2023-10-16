import React from "react";
import "./style.css";
import sharedGoals from "../../assets/icons/Shared-goals.svg";
import typeWriter from "../../assets/icons/Typewriter.svg";
import bookshelves from "../../assets/icons/Bookshelves.svg";
import audience from "../../assets/icons/Audience.svg";

export const Skills = () => {
  return (
    <section className="skills__container skills">
      <h2 className="skills__title block-title">Skills</h2>
      <div className="skils__grid grid">
        <article className="grid__item1 article">
          <div className="article__banner">
            <img
              src={sharedGoals}
              alt="two bro"
              className="article__banner-image"
            />
          </div>
          <h3 className="article__title block-title">Speaking</h3>
          <p className="article__column block-column">
            Improve your English skills and confidence. Live classes and
            interactive lessons online. 20% extra free for a limited time only
            <br />
            <br />
            Learn English online and improve your skills through our
            high-quality courses and resources – all designed for adult language
            learners.
          </p>
          <button className="article__button black-button ">Learn more</button>
        </article>
        <article className="grid__item2 article">
          <div className="article__banner">
            <img
              src={typeWriter}
              alt="two bro"
              className="article__banner-image"
            />
          </div>
          <h3 className="article__title block-title">Writing</h3>
          <p className="article__column block-column">
            One of the most important and extensive areas of natural science,
            the science that studies substances, also their composition
          </p>
          <button className="article__button black-button ">Learn more</button>
        </article>
        <article className="grid__item3 article">
          <div className="article__banner">
            <img
              src={bookshelves}
              alt="two bro"
              className="article__banner-image"
            />
          </div>
          <h3 className="article__title block-title">Reading</h3>
          <p className="article__column block-column">
            perception and response actions of the user resulting from the use
            and/or upcoming use of the product, system or service
          </p>
          <button className="article__button black-button ">Learn more</button>
        </article>
        <article className="grid__item4 article">
          <div className="article__banner">
            <img
              src={audience}
              alt="two bro"
              className="article__banner-image"
            />
          </div>
          <div className="last-grid">
            <h3 className="article__title block-title">Listening</h3>
            <p className="article__column block-column">
              Here you can find activities to practise your listening skills.
              Listening will help you to improve your understanding
            </p>
            <button className="article__button black-button ">
              Learn more
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
