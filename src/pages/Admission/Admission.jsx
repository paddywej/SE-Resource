import React, { useState } from "react";
import "./Admission.css";
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

const Admission = () => {
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
            <div className="admission-page">
                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-star"></i>
                            <div className="details">
                                <span className="title" style={{color: "#d58442"}}>Announcement Direct Admissions 1-1 (Early Round) For Thai Students</span>
                            </div>
                            <p>School of Engineering, King Mongkut's Institute of Technology Ladkrabang invites qualied applicants to apply for admissions to the School of Engineering in 4 years Bachelor's Degree Programs for Academic Year 2025 (beginning in August 2025)</p>
                            <div className="bottom">
                                <a href="https://reg.kmitl.ac.th/TCAS_old/news/files/2568_1_news1_3498_2024_09_16-20-30-11_4320b.pdf?fbclid=IwZXh0bgNhZW0CMTAAAR1efqJQ4A3Rg7Pr-yNHNEO8qRrn3LPVxnwu3NSq9FGFiyxFuu8ELMtdPBs_aem_06AinAd08KrhPeHPH1riUQ" target="_blank">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-home"></i>
                            <div className="details">
                                <span className="title">11 November, 2024</span>
                                <span>1st</span>
                            </div>
                            <p>Application filing and applicatiion fee payment period</p>
                            <div className="bottom">
                                <a href="https://new.reg.kmitl.ac.th/admission/" target="_blank">Apply Now</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-star"></i>
                            <div className="details">
                                <span className="title">18 November, 2024</span>
                                <span>2nd</span>
                            </div>
                            <p>Interview Candidate Notification</p>
                            <div className="bottom">
                                <a href="https://new.reg.kmitl.ac.th/admission/" target="_blank">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-rocket"></i>
                            <div className="details">
                                <span className="title">23 November, 2024</span>
                                <span>3rd</span>
                            </div>
                            <p>Candidate Interview Date</p>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-globe"></i>
                            <div className="details">
                                <span className="title">29 November 2024</span>
                                <span>4th</span>
                            </div>
                            <p>Interview Result Announcement</p>
                            <div className="bottom">
                                <a href="https://new.reg.kmitl.ac.th/admission/" target="_blank">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-paper-plane"></i>
                            <div className="details">
                                <span className="title">5 - 6 February, 2025</span>
                                <span>5th</span>
                            </div>
                            <p>TCAS Clearing House (for Thai Nationality only)</p>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-map-marker-alt"></i>
                            <div className="details">
                                <span className="title">13 February, 2025</span>
                                <span>6th</span>
                            </div>
                            <p>KMITL has announced the list of qualified candidate to study at KMITL with the details of how to make anvanced payment of tuitition fee</p>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-paper-plane"></i>
                            <div className="details">
                                <span className="title">18 - 24 February, 2025</span>
                                <span>5th</span>
                            </div>
                            <p>Enrollment Confirmation and Tuitition Fee Payment</p>
                            <div className="bottom">
                                <a href="https://new.reg.kmitl.ac.th/admission/" target="_blank">Read more</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

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

export default Admission;
