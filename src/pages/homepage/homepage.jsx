<<<<<<< Updated upstream
=======
import React from "react";
import "./homepage.css";
import seLogo from "../../assets/se_logo.png";

const HomePage = () => {

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
                <a href="#" className="nav__link">
                Software Engineering
                </a>
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

            {/* Close button */}
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            <ul className="nav__list">
              <li className="nav__item">For student</li>
              <li className="nav_item">
                <a href="#" className="nav_link">Log In</a>
              </li>
            </ul>

            {/* Login button */}
            <i className="ri-user-line nav__login" id="login-btn"></i>

          </div>
        </nav>
      </header>

      {/*==================== LOGIN ====================*/}
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

        <i className="ri-close-line login__close" id="login-close"></i>
      </div>
    </>
    );
};
export default HomePage;
>>>>>>> Stashed changes
