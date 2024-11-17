import React, { useState } from "react";
import "./Glasgow.css";
import "../../pages/HomePage/HomePage.css";
import seLogo from "../../assets/se-logo.png";
import glasgowLogo from "../../assets/glasgow-logo.png";
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

const Glasgow = () => {
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
            <h1>KMITL-Glasgow Double-Degree Program in Software Engineering</h1>
            <div className={"container-program-body"}>
                <p>The B.Eng. in Software Engineering Program is a 4-year undergraduate program aiming at producing graduates who are capable of working confidently in the international software industry as well as pursuing postgraduate study and research in leading universities worldwide. The curriculum of the program is designed in accordance with the recent ACM/IEEE guideline for undergraduate curriculum in software engineering. The KMITL-Glasgow Double-Degree Program in Software Engineering is a collaboration between KMITL and the University of Glasgow, UK. The program enables qualified students who have completed Year 2 in the SE program at the International College to enter Years 3 and 4 of the Software Engineering program at the University of Glasgow's School of Computing Science. At Glasgow, the student will have an opportunity to study with world-renowned academics, as well as working on team projects with multi-national talents. This is an excellent opportunity for the students who wish to gain studying and living experience in the UK.</p>
            </div>

            <div>
                <h2>About University of Glasgow</h2>
                <div className={"container-program-body"}>
                    <p>Founded in 1451, the University of Glasgow (Glasgow, United Kingdom) is one of the oldest universities in the world, and has been ranked asone of the world's top 100 universities. With its long history in advanced research, the University of Glasgow has been home to six Nobel-prize winners. The University's School of Computing Science has consistently been ranked in the UK's top 10 in computing. Glasgow's Software Engineering program is one of the first programs in the world that specialize in software engineering and is highly respected by software industry.</p>
                </div>

                <div className={"container-logo-pic"}>
                    <img src={glasgowLogo} alt="Glasgow logo"></img>
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
                    <p>Students who have completed Year 4 of this double-degree program will be awarded a
                      BSc Honours degree in Software Engineering from the University of Glasgow and aB.Eng. degree in Software Engineering from KMITL.
                      Students who maintain good academic records during their studies at the University of Glasgow will be eligible to transfer to a one-year Master program in Software Engineering at the end of Year 4 and graduate with the Master of Science degree in Software Engineering awarded by University of Glasgow at the end of Year 5.
                    </p>
                </div>
            </div>
            
            <div className={"small-header"}>
                <h2>Tuition Fees</h2>
                <div className={"container-program-body"}>
                    <p>The tuition fee rates are as follows:*
                          <li>2 years at KMITL, Tuition fee : THB 180,000 per year</li>
                          <li>2 years at Glasgow, Tuition fee with scholarship : GBP 17,536 per year</li>
                        * Rates as of Academic Year 2020. Every student joining the double-degree program is entitled to the KMITL - Glasgow Undergraduate Scholarship which provides 20% reduction from the full tuition-fee rate for international students at Glasgow University.
                    </p>
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
        
export default Glasgow;