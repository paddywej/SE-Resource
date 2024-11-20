import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News1.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import news3 from "../../assets/news3.jpg";
import Contact from "../../components/Contact/Contact";

const News3 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

            <section className="news3-page news-page">
                <div className="about-us">
                    <div className="about">
                    <img src={news3} className="pic" alt="News" />
                    <div className="text">
                        <h2>Computer Game Talk: Navigating the Future of Gaming in the UK and Thailand</h2>
                        <h5>
                        Explore the future of gaming: Can computer games be a career beyond just play? <span>Find out more!</span>
                        </h5>
                        <p>
                        Join us on Wednesday, 23 October at the Sheraton Grand Sukhumvit for a special talk on the future of the gaming industry.
                        Engage with top universities offering Computer Game courses, and hear from experts on the opportunities in both the UK and Thailand.
                        </p>
                        <p>More details:</p>
                        <ul>
                        <li>📅 Date: Wednesday 23 October (King Bhumibol Memorial Day)</li>
                        <li>🕒 Time: 16:00 – 17:45: Discussions with universities offering Computer Game programs</li>
                        <li>🕒 Time: 17:45 – 19:00: Seminar with Prof Ruth Falconer and Mr. Mo on study and career opportunities</li>
                        <li>📍 Venue: Sheraton Grand Sukhumvit, Bangkok (BTS Asok, MRT Sukhumvit)</li>
                        </ul>
                        <p>
                        The event will cover cutting-edge technologies in VR, AR, AI, Cloud Gaming, Mobile Games, and the growing role of platforms like Twitch.
                        </p>
                        <div className="data">
                        <a href="https://t.ly/coGaC" target="_blank" className="hire">Register for Free</a>
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

export default News3;
