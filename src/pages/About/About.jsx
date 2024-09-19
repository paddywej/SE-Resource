import React, { useState } from "react";
import "./About.css";
import Navbar from "../../components/NavBar/NavBar";
import seLogo from "../../assets/se-logo.png";

const About = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />

            <div className={"container-about-head"}>
                <h1>What is Software Engineering?</h1>
                <br />
                <div className={"container-about-body"}>
                    <div className={"container-about-body-left"}>
                        <p>Software engineering (SE) is an engineering discipline concerning all aspects of software production, including software analysis, design, development, testing, and deployment. SE requires profound abstract and logical thinking and the application of mathematics, logic, and computer science in order to produce efficient and reliable software with the available resources.</p>
                    </div>
                    <div className={"container-about-body-right"}>
                        <img src={seLogo} alt="Software Engineering" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
