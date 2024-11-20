import React, { useState } from "react";
import "./Admission.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import Contact from "../../components/Contact/Contact";

const Admission2 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
            <div className="background-container">
            <div className="admission-page">
                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-star"></i>
                            <div className="details">
                                <span className="title" style={{color: "#d58442"}}>Announcement Direct Admissions 1-1 (Early Round)
                                For International Students (non-Thai Passport Holders)</span>
                            </div>
                            <p>School of Engineering, King Mongkut's Institute of Technology Ladkrabang invites qualied applicants to apply for admissions to the School of Engineering in 4 years Bachelor's Degree Programs for Academic Year 2025 (beginning in August 2025)</p>
                            <div className="bottom">
                                <a href="https://reg.kmitl.ac.th/TCAS_old/news/files/2568_1_news1_3497_2024_09_16-20-27-22_894e8.pdf?fbclid=IwZXh0bgNhZW0CMTAAAR0H063RC2rVsPIy1bocuwESE33tLHgpa3UB5q9RQTmaSlsZ_Oy8A6M6OF0_aem_WomVlA40IIH88jDkskkSog" target="_blank">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-home"></i>
                            <div className="details">
                                <span className="title">11 November, 2024</span>
                                <span>1st</span>
                            </div>
                            <p>Application filing and applicatiion fee payment period</p>
                            <div className="bottom">
                                <a href="https://new.reg.kmitl.ac.th/admission/" target="_blank">Apply Now</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-star" style={{backgroundColor:"#ce762e"}}></i>
                            <div className="details">
                                <span className="title">18 November, 2024</span>
                                <span>2nd</span>
                            </div>
                            <p>Interview Candidate Notification</p>
                            <div className="bottom">
                                <a href="https://new.reg.kmitl.ac.th/admission/" target="_blank">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-rocket"></i>
                            <div className="details">
                                <span className="title">23 November, 2024</span>
                                <span>3rd</span>
                            </div>
                            <p>Candidate Interview Date</p>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-globe"></i>
                            <div className="details">
                                <span className="title">29 November 2024</span>
                                <span>4th</span>
                            </div>
                            <p>Interview Result Announcement</p>
                            <div className="bottom">
                                <a href="https://new.reg.kmitl.ac.th/admission/" target="_blank">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-paper-plane"></i>
                            <div className="details">
                                <span className="title">5 - 6 February, 2025</span>
                                <span>5th</span>
                            </div>
                            <p>TCAS Clearing House (for Thai Nationality only)</p>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-map-marker-alt"></i>
                            <div className="details">
                                <span className="title">13 February, 2025</span>
                                <span>6th</span>
                            </div>
                            <p>KMITL has announced the list of qualified candidate to study at KMITL with the details of how to make anvanced payment of tuitition fee</p>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-paper-plane"></i>
                            <div className="details">
                                <span className="title">18 - 24 February, 2025</span>
                                <span>5th</span>
                            </div>
                            <p>Enrollment Confirmation and Tuitition Fee Payment</p>
                            <div className="bottom">
                                <a href="https://new.reg.kmitl.ac.th/admission/" target="_blank">Read more</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        
        <Contact handleLoginClick={handleLoginClick}/>
        </div>
        </>
    );
};

export default Admission2;
