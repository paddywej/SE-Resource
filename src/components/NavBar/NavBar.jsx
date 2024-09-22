import React, { useState } from "react";
import seLogo from "../../assets/se_logo.png";
import "./NavBar.css";

const Navbar = ({ handleLoginClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <ul>
          <li>
            <a href="/">
              <img src={seLogo} alt="seLogo" className="seLogoHome" />
            </a>
          </li>
          <li>Software Engineering</li>
        </ul>

        <div id="nav-menu">
          <ul className="nav__list">
            <li><a href="/about" className="nav__link">About Us</a></li>
            <li className="dropdown">
              <a
                href="#"
                className="nav__link"
                onClick={toggleDropdown}
              >
                Program ▼
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/program" className="dropdown-link">Software Engineering 2024</a></li>
                  <li><a href="/glasgow" className="dropdown-link">KMITL-Glasgow</a></li>
                  <li><a href="/queensland" className="dropdown-link">KMITL-Queensland</a></li>
                  <li><a href="/exchange" className="dropdown-link">Exchange-Study-Abroad</a></li>

                </ul>
              )}
            </li>
            <li><a href="/admission" className="nav__link">Admission</a></li>
            <li><a href="/news" className="nav__link">News</a></li>
            <li><a href="/events" className="nav__link">Events</a></li>
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
