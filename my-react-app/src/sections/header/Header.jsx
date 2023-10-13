import "./style.css";
import logo from "../../assets/Britlex.svg";
import menuBtn from "../../assets/menubtn.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo" className="logoImage" />
        </div>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item" type="none">
              Home
            </li>

            <li type="none" className="menu__item">
              Skills
            </li>

            <li type="none" className="menu__item">
              About Us
            </li>

            <li type="none" className="menu__item">
              Pricing
            </li>

            <li type="none" className="menu__item">
              Contacts
            </li>
          </ul>
        </nav>
        <div className="header__button">
          <button className="button">Let's Talk</button>
          <div className="menubtn">
            <img src={menuBtn} alt="menu-button" className="menu-button" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
