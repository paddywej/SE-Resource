import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News1.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import news5 from "../../assets/news5.jpg";
import Contact from "../../components/Contact/Contact";

const News5 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

            <section className="news5-page news-page">
                <div className="about-us">
                    <div className="about">
                        <img src={news5} className="pic" alt="News" />
                        <div className="text">
                            <h2>Introducing KMITL - U. of Queensland Double-Degree Program in Software Engineering</h2>
                            <h5>
                                Invitation to join the talk on Friday 8 December 2023, 13.30 – 14.30, 
                                Room HM-206, HM Building, School of Engineering, KMITL
                                Limited seats.
                            </h5>
                            <p>
                                Founded in 1909, University of Queensland (UQ) is a public research university in Australia and is currently ranked at 43rd in the world (QS). Starting from 2024, KMITL and UQ will be offering the Double-Degree (2+2) Bachelor of Engineering Program in Software Engineering (SE). The program enables qualified students entering the SE program from Academic Year 2024 onwards to earn both KMITL and UQ Software Engineering degrees. In this talk, representatives from UQ and KMITL will introduce this double-degree program and the application process and requirements.
                            </p>
                            <p>
                                The talk is given in English, but the Q&A session is conducted using both Thai and English.
                            </p>
                            <div className="data">
                                <a href="https://bit.ly/3R2xNrY" target="_blank" className="hire">Register Now</a>
                                <Link to="/news"><a href="#" className="hire">Back</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact handleLoginClick={handleLoginClick} />
        </>
    );
};

export default News5;
