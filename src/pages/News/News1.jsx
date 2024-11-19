import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News1.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import news1 from "../../assets/news1.jpg";
import Contact from "../../components/Contact/Contact";

const News1 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

            <section className="news-page">
                <div className="about-us">
                    <div className="about">
                        <img src={news1} className="pic" alt="News" />
                        <div className="text">
                            <h2>International AI Hackathon</h2>
                            <h5>
                            AMD Thailand, Amazon Web Services (AWS), SSA Network (Thailand), and Digital Focus. & <span>KMITL</span>
                            </h5>
                            <p>
                                During 19-27 July 2024, King Mongkut’s Institute of Technology Ladkrabang (KMITL), the University of Queensland, Australia, and 
                                the National Innovation Agency (NIA) co-organized the 2024 AI Hackathon under the theme “Save the World with AI”. The aim of the 
                                hackathon is to encourage talented university students to create software innovations that utilize Artificial Intelligence (AI) to 
                                address current issues in our society and our environment.
                            </p>
                            <p>
                                We were pleased to welcome 40 participants of 5 nationalities in this hackathon. The first stage of this hackathon was a series of 
                                workshops on current topics in artificial intelligence, taught by experts from KMITL, University of Queensland, and also from the 
                                industry, including AWS, AMD, and ArcFusion.
                            </p>
                            <div className="team-awards">
                                <h3>Prizes and Winning Teams</h3>
                                <ul>
                                    <li>
                                        <span>Gold Prize:</span> Team SPAB
                                        <ul>
                                            <li>Abdallah Azazy (U. of Queensland)</li>
                                            <li>Bailey Stoodley (U. of Queensland)</li>
                                            <li>Pritika Guglani (U. of Queensland)</li>
                                            <li>Sidney George Neil (U. of Queensland)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>Silver Prize:</span> Team LinearOnly
                                        <ul>
                                            <li>Chonakan Chumtap (Chitralada Technology Institute)</li>
                                            <li>Jittapat Ausakul (Chitralada Technology Institute)</li>
                                            <li>Pon Morin (Chitralada Technology Institute)</li>
                                            <li>Thanabodin Keawmaha (Chitralada Technology Institute)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>Bronze Prize:</span> Team PLOT and Team Skibidi
                                        <ul>
                                            <li>Kaung Khant Zaw (KMITL)</li>
                                            <li>Lwin Moe Aung (KMITL)</li>
                                            <li>Phyo Thi Khaing (KMITL)</li>
                                            <li>Thu Rein Win Hein (KMITL)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                The hackathon was kindly sponsored by AMD Thailand, Amazon Web Services (AWS), SSA Network (Thailand), and Digital Focus.
                            </p>
                            <div className="data">
                                <a href="https://se.kmitl.ac.th/aihackathon" target="_blank" className="hire">Learn More</a>
                                <Link to="/news"><a href="#" className="hire">Back</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact handleLoginClick={handleLoginClick}/>
        </>
    );
};

export default News1;
