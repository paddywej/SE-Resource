import React, { useState } from "react";
import "./Program.css";
import "../../pages/HomePage/HomePage.css";
import seLogo from "../../assets/se-logo.png";
import queenslandLogo from "../../assets/queensland-logo.png";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import Contact from "../../components/Contact/Contact";

const Queensland = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);
    
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

        <Contact handleLoginClick={handleLoginClick} />
    </>
  );
};
        
export default Queensland;