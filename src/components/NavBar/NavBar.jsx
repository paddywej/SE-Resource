import React, { useState, useEffect , useContext} from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import seLogo from "../../assets/se_logo.png";
import menu_icon from "../../assets/menu_icon.png";
import close_icon from "../../assets/close_symbol.png";
import "./NavBar.css";

const Navbar = ({ handleLoginClick, handleLogout }) => {
  const { loggedIn, username, setLoggedIn, setUsername } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();  // Initialize the navigate function

  useEffect(() => {
    // Debugging the username value from context
    console.log("Navbar username from context:", username);
  }, [username]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    setLoggedIn(false);  // Reset loggedIn state
    setUsername("");  // Clear username
    localStorage.removeItem("username");  // Remove username from localStorage
    navigate("/"); // Navigate to the homepage
    window.location.reload(); // Reload the page to reset everything
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

        <div className="nav__toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={close_icon} alt="close" className="close_button" />
          ) : (
            <img src={menu_icon} alt="menu" className="menu_button" />
          )}
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav__list">
            <li><a href="/about" className="nav__link">About Us</a></li>
            <li className="dropdown">
              <a href="#" className="nav__link">Program ▼</a>
              <ul className="dropdown-menu">
                <li><a href="/program" className="dropdown-link">Software Engineering 2024</a></li>
                <li><a href="/glasgow" className="dropdown-link">KMITL-Glasgow</a></li>
                <li><a href="/queensland" className="dropdown-link">KMITL-Queensland</a></li>
                <li><a href="/exchange" className="dropdown-link">Exchange-Study-Abroad</a></li>
                <li><a href="/internships" className="dropdown-link">Internships</a></li>
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

            
            {loggedIn && (
              <li><a href="/archive" className="nav__link">Archive</a></li>
            )}             
          </ul>
        </div>

        <div className="nav__right">
          <ul>
            {loggedIn ? (
              <>
                <li>
                  <div className="forS">{username}</div>
                </li>
                <li>
                  <a href="#" className="nav__link" onClick={logout}>Log Out</a>
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

export default Navbar;
