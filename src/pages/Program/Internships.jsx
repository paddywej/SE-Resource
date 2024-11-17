import React, { useState } from "react";
import "./Internships.css";
import "../../pages/HomePage/Homepage.css";
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

const Internship = () => {
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
            <h1>Software Industrial Internships</h1>
            <div className={"container-program-body"}>
                <p>The Software Industrial Internship is a required component of the B.Eng. in Software Engineering program. The objectives are for the students to gain work experience in the software industry and to understand the role of a software engineer in business and the society. Every student is expected to undertake an internship position related to software development in a company in Thailand or abroad during the summer semester at the end of the second year of their study.</p>
            </div>

            <div>
                <h2>Information for Students</h2>               
                <div className={"container-program-body"}>
                  <h3>Requirements:</h3>
                  <h3>
                    <li>Duration and Timing</li>
                  </h3>
                  <p>The internship takes place in the summer semester of Year 2 of the program (late May - late July). The internship must consist of at least 7 weeks of full-time work. It may be longer if you wish.</p>

                  <h3>
                    <li>Type of Work</li>
                  </h3>

                
                  <p>An internship provides a excellent opportunity for you to apply your software engineering skills in the real world. The internship should be practical software engineering work, either as an individual project or as part of a larger project. You are expected to be involved in the coding of a software application or a dynamic website. Work consisting entirely of routine testing, internal support, development of a static website, or data entry would not be suitable. As a guideline, you are expected to carry out at least the following amount of coding:</p>
                  <table className={"table-class"}>
                    <tbody>
                      <tr>
                        <th><strong>Type of Programming Languages</strong></th>
                        <th><strong>Amout of coding </strong><br></br>
                        <strong>(not including comment)</strong></th>
                      </tr>
                      <tr>
                        <td>High-level languages, such as Python, Visual Basic, ActionScript</td>
                        <td>480 lines</td>
                      </tr>
                      <tr>
                        <td>HTML + Mark-up/Scripting languages, such as PHP, JavaScript</td>
                        <td>840 lines (not including the content of the web pages)</td>
                      </tr>
                      <tr>
                        <td>Lower-level languages, such as C, C++, C#, Objective-C, Java</td>
                        <td>840 lines</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>At the beginning of the internship, you and your employer should agree on a clearly defined set of objectives of your work. It is acceptable for the internship to change direction as time goes on, provided that new objectives are identified and agreed. The following examples illustrate opposite ends of the spectrum of suitable work:</p>
                  <li>At the one end of the spectrum, a student working for a large company undertakes small clearly-defined pieces of work within a large project. The student must first make a significant effort to understand the existing framework, before going on to implementation of software components that will fit into that framework.</li>
                  <li>At the other end of the spectrum, a student working for a small company develops a complete software package. The student first identifies the requirements, including a user interface design, and continues development through to a prototype implementation.</li>
                
                  <h3>
                    <li>Supervision</li>
                  </h3>
                  <p>Normally, the host company of your internship will assign a member of the company to be your supervisor. The supervisor will oversee the progress of your work and give you advice. The International College will also nominate one or more lecturers to be your internship advisors who will be available for consultation to both you and the company.</p>
                  <h3>
                    <li>Assessment</li>
                  </h3>
                    <p>The internship is an assessed component of your study. During the internship, the company will monitor your performance and then submit their assessment to the International College. The company's assessment will cover various aspects of your internship, including:</p>
                    <p>
                      <li>The quality and quantity of your work</li>
                      <li>Your attendance record</li>
                      <li>Other attributes a good software engineer should possess, such as punctuality, responsibility, human relations, creativity, etc.</li>
                    </p>
                    <p>After your internship, you are required to submit an internship report and give a presentation of your work and your internship experience to the internship assessment committee. The committee will then evaluate your internship and give you either grade S (Satisfactory) or U (Unsatisfactory).</p>
                  <h3>
                    <li>Internship Report</li>
                  </h3>
                  <p>An internship report is a short report (1,500 words or more) detailing:</p>
                  <li>A brief outline of the company (its size, its main activities, the division or project in which you were employed, etc.);</li>
                  <li>The original placement description and objectives (and any later changes to these);</li>
                  <li>What you actually did;</li>
                  <li>An honest evaluation of how successfully you achieved your objectives;</li>
                  <li>A summary of what you learned from working in an industrial environment (for example, tools, techniques, processes, group working, deadlines);</li>
                  <li>A reflection on the value of the placement, and how it could have been better.</li>
                  <p>The report should not just be a detailed technical description of what you did. The assessment committee is looking for a coherent, literate report in order to understand how your project fitted into the company you were working for, what you achieved, and your reflections on how the internship fitted into your educational experience. Here are some hints on preparing a good report. Make sure that your report has a clear logical structure – it should not be just an unstructured flow of words telling a story. Avoid simply quoting PR material about the organisation you worked for – think about what the reader needs to know about the organisation in order to understand the context of your work. Do not focus on minute technical detail describing intricate pieces of code that you wrote. The biggest problem for most students seems to be reflecting on the internship experience. Here are some questions you might like to think about in developing this part of the report:</p>
                  <li>What new skills did you learn?</li>
                  <li>What existing skills did you exercise or improve during the internship?</li>
                  <li>Did your internship experience reinforce your existing knowledge? (Did you observe techniques taught at the International College actually used in practice?)</li>
                  <li>Were there any techniques that you would like to have known before undertaking the internship?</li>
                  <li>How could the internship experience have been improved?</li>
                  <li>What knowledge and experience will you take forward as the most important lessons from your internship?</li>
                  <p>Both the content of the report and the quality of writing will be taken into account.</p>
                  
                  <h3>
                    <li>Presentation</li>
                  </h3>
                  <p>After your internship, you are required to present your work and your experience during the internship to the assessment committee and your colleagues. You should plan for a 20-minute presentation, which will be followed by a 10-minute QA session.</p>
                  
                  <h3>
                    <li>Absence during internship</li>
                  </h3>
                  <p>If, for any reason, you need to take a leave during the internship, you must ask for permission from the company. You must also submit a document supporting the request for your leave to your supervisor in the company (or a person who makes a record of your attendance). Absence without notice will result in failing the internship.</p>
                  <h3>
                    <li>Contact</li>
                  </h3>
                  <p>Should you have any problem or question, please contact:</p>
                  <p>Internship advisor: Dr. Natthapong Jungteerapanich</p>
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
        
export default Internship;