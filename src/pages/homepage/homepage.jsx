import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import NewsSlider from "../../components/NewsSlider/NewsSlider";
import EventSlider from "../../components/EventSlider/EventSlider";
import HomepageMenu from "../../components/HomepageMenu/HomepageMenu";
import homepagePic1 from "../../assets/homepage-pic1.png";
import homepagePic2 from "../../assets/homepage-pic2.png";
import homepagePic3 from "../../assets/homepage-pic3.png";
import homepagePic4 from "../../assets/homepage-pic4.png";
import button_left from "../../assets/button left.png";
import button_right from "../../assets/button right.png";
import Contact from "../../components/Contact/Contact";

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null); 
  const images = [homepagePic1, homepagePic2, homepagePic3, homepagePic4];
  const links = ["/about", "/glasgow", "/queensland", "/news"]; 

  const clonedImages = [images[images.length - 1], ...images, images[0]];

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);
  const sliderSettings = {
    dots: true, // Enables dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 5000, 
    prevArrow: <img src={button_left} alt="Previous" className="buttonPic" />, 
    nextArrow: <img src={button_right} alt="Next" className="buttonPic" />, 
  };

  return (
    <>
      <Navbar handleLoginClick={handleLoginClick} />
      <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
      
      {/* SLIDER */}
      <div className="slider_container">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <Link to={links[index]}>
                <img src={image} alt={`Slide ${index + 1}`} className="slider_img" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="quote">
        <hr />
        <p>Now it's moblie revolution , and the next will be AI revolution</p>
        <br />
        <p>These two revolutions are shaping the future of software development <br />and research and this is the direction of our</p>
        <br />
        <strong> SOFTWARE ENGINEERING PROGRAM </strong>
        <br />
        <p>is taking and moving forward</p>
        <hr />
      </div>
      <HomepageMenu />
      <hr />
      <NewsSlider />
      <hr />
      <EventSlider />
      <hr />
      <Contact handleLoginClick={handleLoginClick} />
    </>
  );
};

export default HomePage;
