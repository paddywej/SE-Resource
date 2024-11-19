import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News1.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import news4 from "../../assets/news4.jpg";
import Contact from "../../components/Contact/Contact";

const News4 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

            <section className="news4-page news-page">
                <div className="about-us">
                    <div className="about">
                        <img src={news4} className="pic" alt="News" />
                        <div className="text">
                            <h2>Study in Software Engineering Double Degree Program at KMITL and U. of Glasgow, UK</h2>
                            <h5>
                                We would like to invite students and parents interested in our Software Engineering program to attend a webinar hosted by Dr. Zaiqiao Meng (U. of Glasgow), introducing the application process and the curriculum of the Double Degree Software Engineering program, a collaboration between KMITL and the U. of Glasgow, UK. <span>Find out more!</span>
                            </h5>
                            <p>
                                This online webinar will cover the details about the Double Degree Software Engineering program and the application process. You will also learn about the opportunities in both Thailand and the UK.
                            </p>
                            <p>More details:</p>
                            <ul>
                                <li>📅 Date: Sunday, 29 September 2024</li>
                                <li>🕒 Time: 13:00 – 15:00 (GMT+7)</li>
                                <li>📍 Location: Online via Zoom</li>
                            </ul>
                            <p>
                                The talk will be conducted in English, and attendees will have the chance to ask questions about the program and learn more about the benefits of studying Software Engineering at KMITL and the University of Glasgow.
                            </p>
                            <div className="data">
                                <a href="https://zoom.us/j/94378090087?pwd=bmAipFDfUQxlaR3iK6ajM1BbrFh78j.1" target="_blank" className="hire">Join Zoom Meeting</a>
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

export default News4;
