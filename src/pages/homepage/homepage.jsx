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
import phone from "../../assets/phone.PNG";
import mail from "../../assets/mail.PNG";
import location from "../../assets/location.PNG";
import facebook from "../../assets/facebook.PNG";
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const position = [13.7265341, 100.7748818];

const customMarker = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41] // size of the shadow
});

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
      
       {/*==================== CONTACT ====================*/}
       <div class="container3">
        <div class="child-container left-container">
          <br></br>
          <p class="contact-font">CONTACT US</p>
          <hr className="custom-separator" />
          <br></br>

          <MapContainer
            center={position}
            zoom={13}
            style={{ 
              height: '300px', 
              width: '100%', 
              borderRadius: '15px'
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customMarker}>
              <Popup>
                <strong>KMITL</strong> <br /> King Mongkut's Institute of Technology Ladkrabang
              </Popup>
            </Marker>
          </MapContainer>
          
          <br></br>
          <div className="icon-text">
              <img src={location} alt="Location Icon" className="icon" />
              <p>1 Chalong Krung 1 Alley, Lat Krabang, Khet Lat Krabang, Krung Thep Maha Nakhon 10520</p>
            </div>
        </div>

        <div class="child-container right-container">
          <div className="contact-info">
            <div className="icon-text">
              <img src={phone} alt="Phone Icon" className="icon" />
              <p>02-329-8000</p>
            </div>
            <div className="icon-text">
              <img src={phone} alt="Phone Icon2" className="icon" />
              <p>02-329-8321</p>
            </div>
            <div className="icon-text">
              <img src={mail} alt="Mail Icon" className="icon" />
              <p>siie@kmitl.ac.th</p>
            </div>
            <div className="icon-text">
              <img src={mail} alt="Mail Icon2" className="icon" />
              <p>wiboon.pr@kmitl.ac.th</p>
            </div>
            <div className="icon-text">
              <a href="https://www.facebook.com/sekmitl/?locale=th_TH" target="_blank" class="contact-links" >
                <img src={facebook} alt="Facebook Icon" className="icon" />
                <p>Software Engineering KMITL</p>
              </a> 
            </div>
          </div>
        </div>
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

