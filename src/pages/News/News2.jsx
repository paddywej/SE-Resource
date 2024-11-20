import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News1.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import news2 from "../../assets/news2.jpg";
import Contact from "../../components/Contact/Contact";

const News2 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <Navbar handleLoginClick={handleLoginClick} />
            <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

            <section className="news-page news2-page">
                <div className="about-us">
                    <div className="about">
                        <img src={news2} className="pic" alt="News" />
                        <div className="text">
                            <h2>Direct Admission 1-1 (Early Round) 2025 is Now Open!</h2>
                            <p>
                                🌟 <strong>Exciting Opportunity for Aspiring Engineers!</strong>
                            </p>
                            <p>
                                The wait is over! The <strong>Direct Admission 1-1 (Early Round)</strong> for the academic year <strong>2025</strong> is officially open. If you're ready to take the first step toward your engineering dream, now is the time to apply!
                            </p>
                            <p><strong> Application Period:</strong> From now until <strong>November 11, 2024</strong>.</p>
                            <p>
                                <strong> Application Links:</strong>
                                <ul>
                                    <li>
                                        For <strong>Thai Students 🇹🇭</strong>:{" "}
                                        <a href="https://reg.kmitl.ac.th/TCAS_old/news/files/2568_1_news1_3498_2024_09_16-20-30-11_4320b.pdf?fbclid=IwZXh0bgNhZW0CMTAAAR2Jw6uSbYHOpElPXnLR6xzWqgIYpK2CUmTtQ43jFctaRskh0ZqyDVpgYFs_aem_8I-UWtbxjXdT_7MRcrLKfg" target="_blank" rel="noopener noreferrer">
                                            Direct Admission for Thai Students
                                        </a>
                                    </li>
                                    <li>
                                        For <strong>International Students </strong>:{" "}
                                        <a href="https://reg.kmitl.ac.th/TCAS_old/news/files/2568_1_news1_3497_2024_09_16-20-27-22_894e8.pdf?fbclid=IwZXh0bgNhZW0CMTAAAR2O3PWn_dXzkLB0hINvmqqBv0insVHWV9e24oRhwWVTibZ5gUTSavdj5xM_aem_2V1pjkWYDwniDRTzEpSBjg" target="_blank" rel="noopener noreferrer">
                                            Direct Admission for International Students
                                        </a>
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong>📍 Why KMITL Engineering?</strong>
                                Join <strong>King Mongkut's Institute of Technology Ladkrabang (KMITL)</strong>, where innovation meets opportunity. As a part of our <strong>Faculty of Engineering</strong>, you'll be stepping into a globally recognized program that nurtures creativity, technical expertise, and a global mindset.
                            </p>
                            <p>
                                <strong> Programs Offered:</strong>
                                <ul>
                                    <li>Cutting-edge engineering disciplines tailored for the future.</li>
                                    <li>Global programs under <strong>SIIE KMITL</strong> with a strong focus on international collaboration and innovation.</li>
                                </ul>
                            </p>
                            <p>
                                <strong> What’s Next?</strong> Don’t miss this chance to become a part of a world-class engineering faculty. Secure your spot today and be ready to <strong>Go Beyond the Limit</strong> with KMITL!
                            </p>
                            <div className="data">
                                <a href="https://new.reg.kmitl.ac.th/admission/?fbclid=IwZXh0bgNhZW0CMTAAAR0v5vimXB9uTq_y6Dth9QCwtcR9-794f1NLmWcFxt0iR370Txlc4r7bDsY_aem_9_mqfuP7iIdn62hIeH03wA#/" target="_blank" rel="noopener noreferrer" className="hire">
                                    Apply Now
                                </a>
                                <Link to="/news">
                                    <button className="hire">Back</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact handleLoginClick={handleLoginClick} />
        </>
    );
};

export default News2;
