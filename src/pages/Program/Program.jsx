import React, { useState } from "react";
import "./Program.css";
import Navbar from "../../components/NavBar/NavBar";
import seLogo from "../../assets/se-logo.png";

const Program = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
        <Navbar handleLoginClick={handleLoginClick} />

        <div className={"container-program-head"}>
            <h1>B.Eng. in Software Engineering Program</h1>
            <br/>
            <div className={"container-program-body"}>
                <p>The B.Eng. in Software Engineering Program is a 4-year undergraduate program aiming at producing graduates who are capable of working confidently in the international software industry as well as pursuing postgraduate study and research in leading universities worldwide. The curriculum of the program is designed in accordance with the recent ACM/IEEE guideline for undergraduate curriculum in software engineering.</p>
                
                
                
            </div>
            <div>
                <h2>Curriculum Overview - Study Plans</h2>
                <img src=""></img>
            </div>
            
        </div>
        </>
    )
}

export default Program;