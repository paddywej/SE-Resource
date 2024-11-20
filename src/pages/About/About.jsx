import React, { useState } from "react";
import "./About.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import Contact from "../../components/Contact/Contact";
import aboutMainPic from "../../assets/about-main-pic.png";

const About = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
            <div className="about-container">
                <div className="container-main-pic">
                    <img src={aboutMainPic} alt="Main About" />
                    <h1>Be part of the mobile & AI revolution and beyond</h1>
                </div>

                <div className="container-about-body">
                    <div className="container-about-body-text">
                        <p>Software engineering (SE) is an engineering discipline concerning all aspects of software production, including software analysis, design, development, testing, and deployment. SE requires profound abstract and logical thinking and the application of mathematics, logic, and computer science in order to produce efficient and reliable software with the available resources.</p>
                        <br />
                        <h2 style= {{color: "#5b65a4"}}>Why study Software Engineering?</h2>
                        <br></br>
                        <p>It is hard to overstate the ubiquity of software nowadays. Every computer system is governed by software. Almost every human activity involves software in some form. Undoubtedly, the software industry is one of the largest and fastest-growing industries in the world. Consequently, skilled software engineers are in high demand worldwide.</p>
                        <br />
                        <p>As software becomes more and more complex, the programming skills and the rudimentary knowledge of software engineering that students obtained from traditional computer science and computer engineering curriculums are insufficient.</p>
                        <br />
                        <p>The development of real-world software applications requires the skills in analyzing the problem domain and the customer's requirements and the skills in designing the software from the topmost level down to the implementation level.</p>
                        <br />
                        <p>Moreover, a software engineer must be able to use proper tools, techniques, and methodologies in order to produce the software in an efficient manner.</p>
                        <br />
                        <h2 style= {{color: "#5b65a4"}}>Careers in Software Engineering</h2>
                        <br></br>
                        <p>There are abundant career opportunities for graduates from the software engineering program.</p>
                        <ul>
                            <br></br>
                            <li>Software engineers, software architects, and software developers on various platforms, including enterprise software, web applications, mobile applications, games, embedded applications, etc.</li>
                            <br></br>
                            <li>Analysts and designers of IT systems, IT consultants</li>
                            <br></br>
                            <li>Software entrepreneurs with a strong foundation in computer science, mathematics, and software engineering principles. Graduates of the SE program may continue their studies at postgraduate level in various software engineering or computing-related fields in universities worldwide.</li>
                        </ul>
                    </div>
                </div>
                <Contact handleLoginClick={handleLoginClick} />
            </div>
        </>
    );
}

export default About;
