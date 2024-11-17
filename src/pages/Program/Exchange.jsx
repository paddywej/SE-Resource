import React, { useState } from "react";
import "./Exchange.css";
import "../../pages/HomePage/Homepage.css";
import seLogo from "../../assets/se-logo.png";
import frankfurtLogo from "../../assets/frankfurt-logo.png";
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

const Exchange = () => {
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
            <h1>Exchange Study at Frankfurt University of Applied Sciences</h1>
            <div className={"container-program-body"}>
                <p>Qualified students in the SE program have an opportunity to join an exchange study for one semester in Year 3 Semester 2 at Frankfurt University of Applied Sciences (FRA-UAS), our partner university in Germany. The students joining the exchange program will be taking courses in the Bachelor Program in Computer Science at FRA-UAS and the results and credits of the study be transferred back to their study in the SE program. This article provides an overview of the exchange program for the current SE students who wish to undertake an exchange study at FRA-UAS. About Frankfurt University of Applied Sciences.</p>
                <br></br>
                <p>Frankfurt University of Applied Sciences (abbreviated as FRA-UAS) is a large practice-oriented higher-education institute specializing in science and technology. The University is located near the center of Frankfurt am Main, a city which is considered a multicultural city and the largest financial center in Continental Europe. It has a highly international student body, with over 10,000 students from more than 100 countries. The University has more than 650 academic staff and 220 administrative staff. There are four faculties:
                    <ul>
                        <li></li>
                    </ul>
                </p>
            </div>

            <div className={"small-header"}>
                <h2>About Frankfurt University of Applied Sciences</h2>
                <div className={"container-program-body"}>
                    <p>Frankfurt University of Applied Sciences (abbreviated as FRA-UAS) is a large practice-oriented higher-education institute specializing in science and technology. The University is located near the center of Frankfurt am Main, a city which is considered a multicultural city and the largest financial center in Continental Europe. It has a highly international student body, with over 10,000 students from more than 100 countries. The University has more than 650 academic staff and 220 administrative staff. 
                        There are four faculties:
                        <li>Architecture and construction</li>
                        <li>Informatics and engineering</li>
                        <li>Business and law</li>
                        <li>Social work and health</li>
                        The degree programs in the University adopts a bi-semester system. Each semester is 19-week long, with 15 weeks of teaching. The semester times are as follows:
                        <li>Winter Semester : October – February</li>
                        <li>Summer Semester : Mid March – July</li>
                        FRA-UAS has been offering many postgraduate programs in English and, recently, has started to teach a number of undergraduate courses in English, including the courses in the second year in its Bachelor Program in Computer Science.
                    </p>
                        <table className={"table-class"}>
                        <tbody>
                            <tr>
                                <th>Courses at FRA-UAS</th>
                                <th>ECTS</th>
                                <th>Courses at KMITL</th>
                                <th>Credit</th>
                            </tr>
                            <tr>
                                <td>Software Engineering - Design</td>
                                <td>5</td>
                                <td>Software Design and Architecture</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Realtime Systems</td>
                                <td>5</td>
                                <td>
                                <p>Advanced Topics in Software Engineering (SE Track)<br></br>
                                Embedded System Software (Mobile SE Track)</p>
                                </td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>IT Security</td>
                                <td>5</td>
                                <td>Computer Security</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Distributed Systems</td>
                                <td>5</td>
                                <td>Distributed Computing</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Programming Exercises</td>
                                <td>5</td>
                                <td>Team Software Project</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Additionally, in each year, there are 1 - 3 courses in the M.Sc. in High Integrity Systems program at FRA-UAS with transferable credits which you may take. The list of the courses is to be announced a few months before the exchange begins. The following courses are the courses in the SE program in Year 3 Semester 2 which have no equivalent counterpart at FRA-UAS. You are to take these courses in Year 4 Semester 2 instead:
                        <li>Science & Technology for the Modern World</li>
                        <li>Software Verification and Validation (unless the M.Sc. course "Advanced Testing Techniques" is taken at FRA-UAS)</li>
                        <li>Software Development Process</li>
                        <li>Compiler Construction (for students in the SE track only)</li>
                    </p>
                </div>

                <div className={"container-logo-pic"}>
                    <img src={frankfurtLogo} alt="Frankfurt Logo"></img>
                </div>
                
            </div>
            <br></br>
            <div className={"small-header"}>
                <h2>Cost</h2>
                <div className={"container-program-body"}>
                    <p>In accordance with the university's regulation, you are required to pay the normal tuition fee for Year 3 Semester 1 to KMITL as usual. FRA-UAS does not collect additional tuition fee for your study there. You are still required to prepare for other expenses during your period of study at Frankfurt. The following table provides a rough estimate of the essential expenses (not including leisure activities, souvenirs and other unnecessary items):</p>
                    <table className={"table-class"}>
                    <tbody>
                        <tr>
                            <th>Expense</th>
                            <th>Estimated cost / semester<br></br>
                            (5 months)</th>
                        </tr>
                        <tr>
                            <td>Round-trip flight ticket</td>
                            <td>47,000 THB</td>
                        </tr>
                        <tr>
                            <td>Semester ticket (covering public transport)</td>
                            <td>330 €</td>
                        </tr>
                        <tr>
                            <td>Health insurance (80 €/month)</td>
                            <td>400 €</td>
                        </tr>
                        <tr>
                            <td>Accommodation (280 – 380 €/month)</td>
                            <td>1,900 €</td>
                        </tr>
                        <tr>
                            <td>Food (200 - 400 €/month)</td>
                            <td>2,000 €</td>
                        </tr>
                        <tr>
                            <td>Communication - Internet, cell phone (40 €/month)</td>
                            <td>200 €</td>
                        </tr>
                        <tr>
                            <td><strong>Total per semester (5 months)</strong></td>
                            <td><strong>≈ 250,000 Baht</strong></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div className={"small-header"}>
                <h2>Requirements</h2>
                <div className={"container-program-body"}>
                    <p>The following is the minimum requirement for joining the exchange program at FRA-UAS.</p>
                    <li>Studying in Year 3 Semester 1 of the SE program.</li>
                    <li>GPA at the end of Year 2 is 2.7 or higher.</li>
                    <li>Excellent English language skills</li>
                    <p>Those who do not satisfy these requirements may be accepted at the discretion of the International College and FRA-UAS.</p>
                </div>
            </div>
            
            <div className={"small-header"}>
                <h2>Application</h2>
                <div className={"container-program-body"}>
                    <p>The application procedure is as follows:</p>
                    <li>The candidate fills in the International College study abroad application form: <a href="https://goo.gl/HPqTbB" rel="alternate noopener noreferrer" target="_blank" className={"link-class"}>Application Form</a></li>
                    <li>IC evaluates and selects the candidates and announces the result of the selection.</li>
                    <li>IC nominates the selected candidates to FRA-UAS.</li>
                    <li>The selected candidates complete the application on <a href="https://frankfurt-university.de/en/studies/international-office/incomings/exchange/" rel="alternate noopener noreferrer" target="_blank" className={"link-class"}>FRA-UAS website</a></li> 
                    <li>FRA-UAS emails each candidate an acceptance letter and an application form for accommodations.</li>
                    <li>Accepted candidates start applying for a student visa.</li>
                </div>
            </div>            

            <div className={"small-header"}>
                <h2>Contact</h2>
                <div className={"container-program-body"}>
                    <p>For all enquiries regarding the exchange study at FRA-UAS, contact:</p>   
                    <li>Dr. Jochen Amrehn</li>
                    <li>Dr. Natthapong Jungteerapanich</li>
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
        
export default Exchange;