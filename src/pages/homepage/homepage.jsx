import React, { useState, useRef, useEffect } from "react";
import "./homepage.css";
// import "./NavBar/navbar";
import seLogo from "../../assets/se_logo.png";
import homepagePic1 from "../../assets/homepage-pic1.png";
import homepagePic2 from "../../assets/homepage-pic2.png";
import homepagePic3 from "../../assets/homepage-pic3.png";
import homepagePic4 from "../../assets/homepage-pic4.png";
import close_symbol from "../../assets/close_symbol.png";
import button_left from "../../assets/button left.png";
import button_right from "../../assets/button right.png";

const HomePage = () => {
  /*=============== LOGIN ===============*/
  const [showLogin, setShowLogin] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null); 
  const images = [homepagePic1, homepagePic2, homepagePic3, homepagePic4];

  const clonedImages = [images[images.length - 1], ...images, images[0]];

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      if (currentIndex === 0) {
        sliderRef.current.scrollLeft =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth * 2;
        setCurrentIndex(images.length - 1);
      } else {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.clientWidth,
          behavior: "smooth",
        });
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      if (currentIndex === images.length - 1) {
        sliderRef.current.scrollLeft = sliderRef.current.clientWidth;
        setCurrentIndex(0);
      } else {
        sliderRef.current.scrollBy({
          left: sliderRef.current.clientWidth,
          behavior: "smooth",
        });
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.clientWidth;
    }
  }, []);

  return (
    <>
      {/*==================== HEADER ====================*/}
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
              <li className="nav__item"></li>
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
                >
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/*==================== SLIDER ====================*/}
      <div className="slider_wrapper">
        <button className="slider_button left" onClick={handlePrevClick}>
        <img src={button_left} alt="button_left" className="buttonPic" />
        </button>

        <div className="slider" ref={sliderRef}>
          {clonedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider_img"
            />
          ))}
        </div>

        <button className="slider_button right" onClick={handleNextClick}>
        <img src={button_right} alt="button_right" className="buttonPic" />
        </button>
      </div>

      {/*==================== HOMEPAGE MENU ====================*/}

      <div className="homepage_manu">

      </div>

      {/*==================== LOGIN ====================*/}
      {showLogin && (
        <div className="login show-login" id="login">
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
                <a href="#">Sign up</a>
              </p>
              <a href="#" className="login__forgot">
                Forgot password?
              </a>
              <button type="submit" className="login__button">
                Log In
              </button>
            </div>
          </form>

          <i
            className="login__close"
            id="login-close"
            onClick={handleLoginClose}>
            <img className="close_button" src={close_symbol} />
          </i>
        </div>
      )}
    </>
  );
};

export default HomePage;
