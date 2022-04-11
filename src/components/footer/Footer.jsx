import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/logoText.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <a href="">
            <img src={logo} alt="" className="footer-logo-img" />
            <img src={logoText} alt="" className="footer-logo-text" />
            <h1 className="footer-heading">
              Ready to serve customers. Anywhere, Anytime!
            </h1>
          </a>
        </div>
        <div className="footer-component">
          <h1>Usability</h1>
          <ul>
            <li>
              <a href="">Education</a>
            </li>
            <li>
              <a href="">Software and IT</a>
            </li>
            <li>
              <a href="">Telecommunications</a>
            </li>
            <li>
              <a href="">Financial Institutions</a>
            </li>
            <li>
              <a href="">Government</a>
            </li>
            <li>
              <a href="">Health Care</a>
            </li>
            <li>
              <a href="">Manufacturing</a>
            </li>
            <li>
              <a href="">Media</a>
            </li>
            <li>
              <a href="">Retail</a>
            </li>
          </ul>
        </div>
        <div className="footer-component">
          <h1>Company</h1>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-component">
          <h1>Product</h1>
          <ul>
            <li>
              <a href="">Feautres</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="footer-connect">
          <h1 className="footer-heading">Connect with Anydone Desk</h1>
          <div className="c-socialLinks">
            <a href="" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className="c-socialLinks">
            <a href="" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="" className="linkedin social">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h1>©2021 Anydone Desk. All Rights Reserved .</h1>
      </div>
    </>
  );
};

export default Footer;
