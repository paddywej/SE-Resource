import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import news1 from "../../assets/news1.jpg"
import news2 from "../../assets/news2.jpg"
import news3 from "../../assets/news3.jpg"
import news4 from "../../assets/news4.jpg"
import news5 from "../../assets/news5.jpg"
import news6 from "../../assets/news6.jpg"

const News = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <div className="news0-page">
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
            <br></br>
            <h1 style={{ textAlign: "center", fontSize: "33px", color: "black"}}>Latest News</h1>
            <br></br>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={news1} alt="news1" style={{ width: "100%" }} />
                        <div className="container">
                            <br></br>
                            <h2>International AI Hackathon</h2>
                            <br></br>
                            <p className="title">During 19-27 July 2024, King Mongkut’s Institute of Technology Ladkrabang (KMITL), the University of Queensland, Australia, and the National Innovation Agency (NIA) co-organized the 2024 AI Hackathon under the theme “Save the World with AI”. The aim of the hackathon is to encourage talented university students to create software innovations that utilize Artificial Intelligence (AI) to address current issues in our society and our environment.</p>
                            <br></br>
                            <Link to="/news1"><p><button className="button" >Read More</button></p></Link>
                            <br></br>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={news2} alt="news2" style={{ width: "100%" }} />
                        <div className="container">
                            <br></br>
                            <h2>Direct Admission 1-1 (Early Round) 2025 is now open</h2>
                            <br></br>
                            <p className="title">We are excited to announce that the Direct Admission 1-1 (Early Round) for the 2025 academic year is officially open! This is your opportunity to secure a place in your desired program early.
Start your application today and get a head start on your academic journey for 2025. Don't miss this chance to join a dynamic and innovative community at KMITL!</p>
                            <br></br>
                            <Link to="/news2"><p><button className="button" >Read More</button></p></Link>
                            <br></br>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={news3} alt="news3" style={{ width: "100%" }} />
                        <div className="container">
                            <br></br>
                            <h2>Computer Game Talk</h2>
                            <br></br>
                            <p className="title">Navigating the Future of Gaming in the UK and Thailand. Technologies that are currently gaining attention and playing a major role in the development and playing of games today. Why are VR, AR, and AI the key players? After this event, participants will have the opportunity to speak with representatives from top UK universities at the 𝗨𝗞 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗙𝗮𝗶𝗿 𝗯𝘆 𝗕𝗥𝗜𝗧 - 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 𝗨𝗞 for more information about studying and applying for university.</p>
                            <br></br>
                            <Link to="/news3"><p><button className="button" >Read More</button></p></Link>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={news4} alt="news4" style={{ width: "100%" }} />
                        <div className="container">
                            <br></br>
                            <h2>Study in Software Engineering Double Degree Program at KMITL and U. of Glasgow, UK</h2>
                            <br></br>
                            <p className="title">We would like to invite students and parents interested in our Software Engineering program to attend a webinar hosted by Dr. Zaiqiao Meng (U. of Glasgow), introducing the application process and the curriculum of the Double Degree Software Engineering program, a collaboration between KMITL and the U. of Glasgow, UK.</p>
                            <br></br>
                            <Link to="/news4"><p><button className="button" >Read More</button></p></Link>
                            <br></br>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={news5} alt="news5" style={{ width: "100%" }} />
                        <div className="container">
                            <br></br>
                            <h2>Introducing KMITL - U. of Queensland Double-Degree Program in Software Engineering</h2>
                            <br></br>
                            <p className="title">The program enables qualified students entering the SE program from Academic Year 2024 onwards to earn both KMITL and UQ Software Engineering degrees. In this talk, representatives from UQ and KMITL will introduce this double-degree program and the application process and requirements. The talk is given in English, but the Q&A session is conducted using both Thai and English.</p>
                            <br></br>
                            <Link to="/news5"><p><button className="button" >Read More</button></p></Link>
                            <br></br>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={news6} alt="news6" style={{ width: "100%" }} />
                        <div className="container">
                            <br></br>
                            <h2>University Roadshow in K-Engineering International Education Fair 2024</h2>
                            <br></br>
                            <p className="title">University Roadshow at K-Engineering International Education Fair 2024
A great opportunity for KMITL students!
Whether you're interested in studying in #UK #USA #Australia #Canada, join us! We've invited top universities to provide information and course recommendations. For those who want to test their English proficiency, you can register for a FREE IELTS Mock Speaking test.</p>
                            <br></br>
                            <Link to="/news6"><p><button className="button" >Read More</button></p></Link>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default News;
