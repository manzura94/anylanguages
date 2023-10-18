import React from 'react'
import logo from "../assets/icons/Britlex.svg"
import "./style.css"

export const Footer = () => {
  return (
    <footer className='footer__container footer'>
        <div className="footer__logo">
            <img src={logo} alt="logo" className="footer__logo-img" />
        </div>
        <p className="footer__column block-column">Terms and Conditions • Privacy Policy • Cookie Policy</p>
    </footer>
  )
}
