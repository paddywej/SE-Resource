import React from "react";
import seLogo from "../../assets/se_logo.png";
import "./NavBar.css";

const Navbar = ({ handleLoginClick }) => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <ul>
          <li>
            <a href="#">
              <img src={seLogo} alt="seLogo" className="seLogoHome" />
            </a>
          </li>
          <li>Software Engineering</li>
        </ul>

        <div id="nav-menu">
          <ul className="nav__list">
            <li><a href="#" className="nav__link">About Us</a></li>
            <li><a href="#" className="nav__link">Program</a></li>
            <li><a href="#" className="nav__link">Admission</a></li>
            <li><a href="#" className="nav__link">News</a></li>
            <li><a href="#" className="nav__link">Events</a></li>
          </ul>
        </div>

        <div className="nav__right">
          <ul>
            <li>For students</li>
            <li>
              <a href="#" className="nav__link" onClick={handleLoginClick}>Log In</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
