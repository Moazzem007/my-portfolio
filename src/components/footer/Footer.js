import React from "react";
import "./footer.css";
import { FiFacebook } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Moazzem Hossain
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FiFacebook />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Moazzem Hossain. All rights served.</small>
      </div>
    </footer>
  );
};
