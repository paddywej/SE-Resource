import React, { useState, useRef, useEffect } from "react";
import "./homepage.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import HomepageMenu from "../../components/HomepageMenu/HomepageMenu";
import homepagePic1 from "../../assets/homepage-pic1.png";
import homepagePic2 from "../../assets/homepage-pic2.png";
import homepagePic3 from "../../assets/homepage-pic3.png";
import homepagePic4 from "../../assets/homepage-pic4.png";
import button_left from "../../assets/button left.png";
import button_right from "../../assets/button right.png";

const HomePage = () => {
  /*=============== LOGIN ===============*/
  const [showLogin, setShowLogin] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null); 
  const images = [homepagePic1, homepagePic2, homepagePic3, homepagePic4];
  const clonedImages = [images[images.length - 1], ...images, images[0]];

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

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
      <Navbar handleLoginClick={handleLoginClick} />
      <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
      
      {/*==================== SLIDER ====================*/}
      <div className="slider_wrapper">
        <i className="slider_button left" onClick={handlePrevClick}>
        <img src={button_left} alt="button_left" className="buttonPic" />
        </i>

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

        <i className="slider_button right" onClick={handleNextClick}>
        <img src={button_right} alt="button_right" className="buttonPic" />
        </i>
      </div>

      <HomepageMenu/>
      
       {/*==================== CONTRACT ====================*/}
       <div className="container3">
            <p>CONTRACT</p>
       </div>

    </>
  );
};

export default HomePage;

/*
Remaining tasks to fix:
  - Adjust position of the navbar menu for different screen sizes (convert to dropdown)
  - fix Responsive typography
*/

