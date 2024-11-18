import React, { useState } from "react";
import seLogo from "../../assets/se_logo.png";
import menu_icon from "../../assets/menu_icon.png";
import close_icon from "../../assets/close_symbol.png";
import "./NavBar.css";

const Navbar2 = ({ loggedIn, username, handleLoginClick, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showArchive, setShowArchive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // this handle login response
  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        const data = await response.json();
        setShowArchive(data.showArchive);
        // Call the parent's handleLoginClick with the user data
        handleLoginClick(data);
      } else {
        const error = await response.json();
        console.error('Login failed:', error.detail);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
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

        {/* Toggle button for small screens */}
        <div className="nav__toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={close_icon} alt="close" className="close_button" />
          ) : (
            <img src={menu_icon} alt="menu" className="menu_button" />
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav__list">
            <li>
              <a href="/about" className="nav__link">About Us</a>
            </li>
            <li className="dropdown">
              <a href="#" className="nav__link">Program ▼</a>
              <ul className="dropdown-menu">
                <li><a href="/program" className="dropdown-link">Software Engineering 2024</a></li>
                <li><a href="/glasgow" className="dropdown-link">KMITL-Glasgow</a></li>
                <li><a href="/queensland" className="dropdown-link">KMITL-Queensland</a></li>
                <li><a href="/exchange" className="dropdown-link">Exchange-Study-Abroad</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav__link"> Admission ▼</a>
              <ul className="dropdown-menu">
                  <li><a href="/admission" className="dropdown-link">Direct Admission 1-1 (Early round) for Thai Students</a></li>
                  <li><a href="/admission2" className="dropdown-link">Direct Admission 1-1 (Early round) for International Students</a></li>
              </ul>
            </li>
            <li><a href="/news" className="nav__link">News</a></li>
            <li><a href="/events" className="nav__link">Events</a></li>
            <li><a href="/file" className="nav__link" style={{color: "rgb(222, 134, 27)"}}>Archive</a></li>
          </ul>
        </div>

        <div className="nav__right">
          <ul>
            
            {loggedIn ? (
              <>
                <li>
                  <div className="forS">{username}</div> {/* Display username */}
                </li>
                <li>
                  <a href="#" className="nav__link" onClick={handleLogout}>Log Out</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <div className="forS">For students</div>
                </li>
                <li>
                  <a href="#" className="nav__link" onClick={handleLoginClick}>Log In</a>
                </li>
            </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
