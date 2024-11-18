import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import Navbar from "../../components/NavBar/NavBar2";
import Login from "../../components/Login/Login";
import NewsSlider from "../../components/NewsSlider/NewsSlider";
import EventSlider from "../../components/EventSlider/EventSlider";
import HomepageMenu from "../../components/HomepageMenu/HomePageMenu2";
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

const HomePage2 = ({
  loggedIn,
  setLoggedIn,
  username,
  setUsername,
  showLogin,
  setShowLogin,
  showArchive,
  setShowArchive,
  handleLoginClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null); 
  const images = [homepagePic1, homepagePic2, homepagePic3, homepagePic4];
  const clonedImages = [images[images.length - 1], ...images, images[0]];

  const handleLoginClick = () => setShowLogin(true);
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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`${text} copied to clipboard!`);
      })
      .catch(() => {
        alert('Failed to copy to clipboard.');
      });
  };
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedShowArchive = localStorage.getItem("showArchive") === "true";
    if (savedUsername) {
      setLoggedIn(true);
      setUsername(savedUsername);
      setShowArchive(savedShowArchive);
    }
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setShowArchive(false);
    localStorage.removeItem("username");
    localStorage.removeItem("showArchive");
  };

  return (
    <>
      <Navbar 
        loggedIn={loggedIn}
        username={username}
        handleLoginClick={() => setShowLogin(true)}
        handleLogout={handleLogout}
        showArchive={showArchive}
      />
      <Login 
        showLogin={showLogin} 
        handleLoginClose={() => setShowLogin(false)}
        setLoggedIn={setLoggedIn}
        setUsername={setUsername}
        setShowArchive={setShowArchive}  // Pass setShowArchive to Login
      />
      
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

      
       {/*==================== CONTACT ====================*/}
       <div className="container3">
        <div className="child-container left-container">
          <br />
          <p className="contact-font">CONTACT US</p>
          <hr className="custom-separator" />
          <br />
          
          <div className="map-container">
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
          </div>
          
          <br />
          <div className={'hover-link icon-text copy-button'} onClick={() => copyToClipboard('1 Chalong Krung 1 Alley, Lat Krabang, Khet Lat Krabang, Krung Thep Maha Nakhon 10520')} >
              <img src={location} alt="Location Icon" className="icon"/>
              <p>1 Chalong Krung 1 Alley, Lat Krabang, Khet Lat Krabang, Krung Thep Maha Nakhon 10520</p>
            </div>
        </div>

        <div className="child-container right-container">
          <div className="contact-info">
            <div className={'hover-link icon-text copy-button'} onClick={() => copyToClipboard('02-329-8000')}>
              <img src={phone} alt="Phone Icon" className="icon" />
              <p>02-329-8000</p>
            </div>
            <div className={'hover-link icon-text copy-button'} onClick={() => copyToClipboard('02-329-8321')}>
              <img src={phone} alt="Phone Icon2" className="icon" />
              <p>02-329-8321</p>
            </div>
            <div className="icon-text">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=siie@kmitl.ac.th&su=Subject%20Here&body=Message%20body" target="_blank" className={'hover-link contact-links'}>
                <img src={mail} alt="Mail Icon" className="icon" />
                <p>siie@kmitl.ac.th</p>
              </a>
            </div>
            <div className="icon-text">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wiboon.pr@kmitl.ac.th&su=Subject%20Here&body=Message%20body" target="_blank" className={'hover-link contact-links'}>
                <img src={mail} alt="Mail Icon2" className="icon" />
                <p>wiboon.pr@kmitl.ac.th</p>
              </a>
            </div>
            <div className="icon-text">
              <a href="https://www.facebook.com/sekmitl/?locale=th_TH" target="_blank" className={'hover-link contact-links'} >
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

export default HomePage2;

