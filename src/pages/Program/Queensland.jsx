import React, { useState } from "react";
import "./Queensland.css";
import "../../pages/HomePage/Homepage.css";
import seLogo from "../../assets/se-logo.png";
import queenslandLogo from "../../assets/queensland-logo.png";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
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

const Queensland = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert(`${text} copied to clipboard!`);
          })
          .catch(() => {
            alert('Failed to copy to clipboard.');
          });
      };
    
    return (
        <>
        <Navbar handleLoginClick={handleLoginClick} />
        <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

        <div className={"container-program-head"}>
            <h1>KMITL-Queensland Double-Degree Program in Software Engineering</h1>
            <div className={"container-program-body"}>
                <p>The KMITL-Queensland Double-Degree Program in Software Engineering is a collaboration between KMITL and the University of Queensland (UQ), Australia. The program enables qualified students who have completed Year 2 in the Software Engineering program at KMITL to enter Years 3 and 4 of the Software Engineering program at the University of Queensland in Australia, and, upon completion, be awarded with software engineering degrees from both KMITL and UQ. The collaborative program aims to equip its students with advanced knowledge and skills of software engineering to prepare them for careers in the international software industry, as well as for research and postgraduate study in all computing-related fields.</p>
            </div>

            <div className={"small-header"}>
                <h2>About University of Queensland</h2>
                <div className={"container-program-body"}>
                    <p>The University of Queensland (UQ) is a premier public research university located in Brisbane, Australia. Established in 1909, UQ has a rich heritage of fostering change through innovation and its contributions extend internationally​​​​​​. The university has consistently been ranked in the top 50 universities worldwide. The main campus in the riverside suburb of St Lucia is lauded for its picturesque and tranquil environment, while being easily accessible from the vibrant downtown center of Brisbane. The campus provides comprehensive infrastructure, world-class research facilities, state-of-the-art learning spaces, and on-campus student accommodations. Building on this foundation of academic excellence, UQ's Bachelor of Engineering program in Software Engineering is well recognized internationally and is accredited by Engineers Australia. The program boasts an up-to-date and flexible curriculum that emphasizes hands-on learning through problems and projects from the real world. Students can expect to engage in both team and individual projects, mirroring the collaborative nature of the industry and catering to future employment prospects in diverse settings, from small firms to large multinational corporations​.</p>
                </div>

                <div className={"container-logo-pic"}>
                    <img src={queenslandLogo} alt="Queensland logo"></img>
                </div>
                
            </div>
            <br></br>
            <div className={"small-header"}>
                <h2>Admission</h2>
                <div className={"container-program-body"}>
                    <p>Requirements for the students who wish to join this double-degree program:
                    <li>Completed Year 2 of the B.Eng. in Software Engineering program with GPA of 3.0 or more</li>
                    <li>IELTS score of 6.5 or more, with no subtest below 6.0</li>
                    </p>
                </div>
            </div>

            <div className={"small-header"}>
                <h2>Degrees</h2>
                <div className={"container-program-body"}>
                    <p>Students who have completed Year 4 of this double-degree program will be awarded a BEng (Hons) degree in Software Engineering from the University of Queensland and a B.Eng. degree in Software Engineering from KMITL.</p>
                </div>
            </div>
            
            <div className={"small-header"}>
                <h2>Tuition Fees</h2>
                <div className={"container-program-body"}>
                    <p>In Years 1-2, students in this double-degree program are to pay the KMITL tuition fee at the standard rate of 90,000 Baht/Semester. In Years 3-4, students are to pay the tuition fee and other fees as set out by UQ. All students in the program will be eligible to receive special scholarships from UQ which partially cover the fees at UQ. Details on the fees and scholarships will be announced soon.</p>
                </div>
            </div>               
        </div>

       <div className="container3">
        <div className="child-container left-container">
          <br />
          <p className="contact-font">CONTACT US</p>
          <hr className="custom-separator" />
          <br />

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
            <div className={"icon-text"}>
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
        
export default Queensland;