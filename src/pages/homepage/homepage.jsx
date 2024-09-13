import React, { useState } from "react";
import "./homepage.css";
import seLogo from "../../assets/se_logo.png";

const HomePage = () => {
  /*=============== LOGIN ===============*/
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    console.log("Log In button clicked"); 
    setShowLogin(true); 
  };

  const handleLoginClose = () => {
    console.log("Log In button close"); 
    setShowLogin(false); 
  };

  return (
    <>
      {/*==================== HEADER ====================*/}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#">
            <img src={seLogo} alt="seLogo" className="seLogoHome" />
          </a>

          <div id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                  Software Engineering
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Program
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Admission
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  News
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__actions">
            <ul className="nav__list">
              <li className="nav__item">For students</li>
              <li className="nav__item">
                <a
                  href="#"
                  className="nav__link"
                  id="login-btn"
                  onClick={handleLoginClick}
                >Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/*==================== LOGIN ====================*/}
      {showLogin && (
        <div className="login" id="login">
          <form action="" className="login__form">
            <h2 className="login__title">Log In</h2>

            <div className="login__group">
              <div>
                <label htmlFor="email" className="login__label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write your email"
                  id="email"
                  className="login__input"
                />
              </div>

              <div>
                <label htmlFor="password" className="login__label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  className="login__input"
                />
              </div>
            </div>

            <div>
              <p className="login__signup">
                You do not have an account? <a href="#">Sign up</a>
              </p>

              <a href="#" className="login__forgot">
                You forgot your password
              </a>

              <button type="submit" className="login__button">
                Log In
              </button>
            </div>
          </form>

          <i
            className="ri-close-line login__close"
            id="login-close"
            onClick={handleLoginClose}
          ></i>
        </div>
      )}
    </>
  );
};

export default HomePage;
