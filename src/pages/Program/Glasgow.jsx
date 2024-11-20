import React, { useState } from "react";
import "./Program.css";
import "../../pages/HomePage/HomePage.css";
import seLogo from "../../assets/se-logo.png";
import glasgowLogo from "../../assets/glasgow-logo.png";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import Contact from "../../components/Contact/Contact";
import glasgowCampus from "../../assets/glasgow.png";

const Glasgow = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
        <Navbar handleLoginClick={handleLoginClick} />
        <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
            <div className="header-image">
                <img src={glasgowCampus} alt="Glasgow campus" className="header-img" />
                <div className="text-overlay">
                    <h1>KMITL-Glasgow Double-Degree Program in Software Engineering</h1>
                </div>
            </div>
            <div className="container-program-head">
            <div>
                <br></br>
                <h2 style= {{color: "#5b65a4"}}>About University of Glasgow</h2>
                <div className="container-program-body">
                    <p>Founded in 1451, the University of Glasgow (Glasgow, United Kingdom) is one of the oldest universities in the world, and has been ranked as one of the world's top 100 universities. With its long history in advanced research, the University of Glasgow has been home to six Nobel-prize winners. The University's School of Computing Science has consistently been ranked in the UK's top 10 in computing. Glasgow's Software Engineering program is one of the first programs in the world that specializes in software engineering and is highly respected by the software industry.</p>
                </div>

                <div className="container-logo-pic">
                    <img src={glasgowLogo} alt="Glasgow logo" />
                </div>
            </div>

            <br />

            <div className="small-header">
                <h2 style= {{color: "#5b65a4"}}>Admission</h2>
                <div className="container-program-body">
                    <p>Requirements for students who wish to join this double-degree program:
                        <li>Completed Year 2 of the B.Eng. in Software Engineering program with GPA of 3.0 or more</li>
                        <li>IELTS score of 6.5 or more, with no subtest below 6.0</li>
                    </p>
                </div>
            </div>

            <div className="small-header">
                <h2 style= {{color: "#5b65a4"}}>Degrees</h2>
                <div className="container-program-body">
                    <p>Students who have completed Year 4 of this double-degree program will be awarded a BSc Honours degree in Software Engineering from the University of Glasgow and a B.Eng. degree in Software Engineering from KMITL. Students who maintain good academic records during their studies at the University of Glasgow will be eligible to transfer to a one-year Master's program in Software Engineering at the end of Year 4 and graduate with the Master of Science degree in Software Engineering awarded by the University of Glasgow at the end of Year 5.</p>
                </div>
            </div>

            <div className="small-header">
                <h2 style= {{color: "#5b65a4"}}>Tuition Fees</h2>
                <div className="container-program-body">
                    <p>The tuition fee rates are as follows:*
                          <li>2 years at KMITL, Tuition fee: THB 180,000 per year</li>
                          <li>2 years at Glasgow, Tuition fee with scholarship: GBP 17,536 per year</li>
                          * Rates as of Academic Year 2020. Every student joining the double-degree program is entitled to the KMITL - Glasgow Undergraduate Scholarship which provides a 20% reduction from the full tuition-fee rate for international students at Glasgow University.
                    </p>
                </div>
            </div>
        </div>


        <Contact handleLoginClick={handleLoginClick} />
        </>
    );
};

export default Glasgow;
