import React from "react";
import "./topbar.css";
import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/logoText.png";

const Topbar = () => {
  return (
    <>
      <nav className="top-nav">
        <div className="logo">
          <a href="">
            <img src={logo} alt="" className="logo-img"/>
            <img src={logoText} alt="" className="logo-text"/>
          </a>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Solutions</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Sign In</a>
            </li>
          </ul>
        </div>
        <div className="try-now">
          <button className="try-now-btn">Try Now</button>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
