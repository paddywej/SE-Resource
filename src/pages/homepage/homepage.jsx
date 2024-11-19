import React, { useState, useRef, useEffect } from "react";
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
  const clonedImages = [images[images.length - 1], ...images, images[0]];

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);
  const sliderSettings = {
    dots: true, // Enables dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-slide
    autoplaySpeed: 5000, // Time between slides (in ms)
    prevArrow: <img src={button_left} alt="Previous" className="buttonPic" />, // Custom left arrow
    nextArrow: <img src={button_right} alt="Next" className="buttonPic" />, // Custom right arrow
  };

  return (
    <>
      <Navbar handleLoginClick={handleLoginClick} />
      <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
      
      {/*==================== SLIDER ====================*/}
      <div className="slider_container">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slider_img" />
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="quote">
        <hr></hr>
        <p>Now it's moblie revolution , and the next will be AI revolution</p>
        <br></br>
        <p>These two revolutions are shaping the feture of software development <br></br>and research and this is the direction of our</p>
        <br></br>
        <strong> SOFTWARE ENGINEERING PROGRAM </strong>
        <br></br>
        <p>is taking and move forward</p>
        <hr></hr>
      </div>
      <HomepageMenu/>
      <hr></hr>
      <NewsSlider/>
      <hr></hr>
      <EventSlider/>
      <hr></hr>
      <Contact handleLoginClick={handleLoginClick} />
    </>
  );
};

export default HomePage;

