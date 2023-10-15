import "./style.css";
import banner from "../../assets/pictures/languages.png";
import bulb from "../../assets/icons/light-bulb.svg";

const HomePage = () => {
  return (
    <section className="homePage__container homepage">
      <div className="homepage__getstart getstart">
        <div className="getstart__title-wrapper">
          <h1 className="getstart__title page-title">
            Learn <br className="page-title__separate"/> Any Foreign Language
          </h1>
          <div className="getstart__bulb-image">
            <img src={bulb} alt="bulb" />
          </div>
        </div>
        <p className="getstart__column block-column">
          With our teachers who write a program for each student, you will be
          able to make your first sketch after the first lesson.
        </p>
        <button className="getstart__button black-button">Get started</button>
      </div>
      <div className="homepage__banner">
        <img
          src={banner}
          alt="banner-image"
          className="homepage__banner-image"
        />
      </div>
    </section>
  );
};

export default HomePage;
