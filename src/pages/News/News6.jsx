import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News1.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import news6 from "../../assets/news6.jpg";
import Contact from "../../components/Contact/Contact";

const News6 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

            <section className="news6-page news-page">
                <div className="about-us">
                    <div className="about">
                        <img src={news6} className="pic" alt="News" />
                        <div className="text">
                            <h2>University Roadshow at K-Engineering International Education Fair 2024</h2>
                            <h5>
                                A great opportunity for KMITL students! Whether you're interested in studying in #UK, #USA, #Australia, or #Canada, join us!
                            </h5>
                            <p>
                                We've invited top universities to provide information and course recommendations.
                            </p>
                            <p>For those who want to test their English proficiency, you can register for a FREE IELTS Mock Speaking test.</p>
                            <p>Details:</p>
                            <ul>
                                <li>📅 Date: Wednesday, October 16, 2024</li>
                                <li>🕒 Time: 11:00 AM - 3:00 PM</li>
                                <li>📍 Venue: HM Building, 1st floor, Faculty of Engineering, KMITL</li>
                                <li>Mock IELTS Speaking: Room HM 206, 2nd floor, HM Building</li>
                            </ul>
                            <p>
                                ✨ Free registration! Stand a chance to win a cute Popmart blind box.
                            </p>
                            <p>For more information:</p>
                            <ul>
                                <li>Line ID: @interengineerkmitl</li>
                                <li>📞 Tel: 092-8504119</li>
                            </ul>
                            <div className="data">
                                <a href="https://forms.gle/fMqfeoKYDrCVredN9" target="_blank" className="hire">Register Now</a>
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

export default News6;
