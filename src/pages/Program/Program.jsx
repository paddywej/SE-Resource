import React, { useState } from "react";
import "./Program.css";
import "../HomePage/HomePage.css";
import seLogo from "../../assets/se-logo.png";
import overviewPic from "../../assets/program-overview-pic.png";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import Contact from "../../components/Contact/Contact";

const Program = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);
    
    return (
        <>
        <Navbar handleLoginClick={handleLoginClick} />
        <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

            <div className={"container-program-head2"}>
                <h1 style= {{color: "#5b65a4"}} >B.Eng. in Software Engineering Program</h1>
            </div>
        <div className={"container-program-head"}>
            <div className={"container-program-body"}>
                <p>The B.Eng. in Software Engineering Program is a 4-year undergraduate program aiming at producing graduates who are capable of working confidently in the international software industry as well as pursuing postgraduate study and research in leading universities worldwide. The curriculum of the program is designed in accordance with the recent ACM/IEEE guideline for undergraduate curriculum in software engineering.</p>
            </div>
            
        
            <div>
                <h2 style= {{color: "#5b65a4"}}>Curriculum Overview - Study Plans</h2>
                <div className={"container-table-pic"}>
                    <img src={overviewPic} alt="Curriculum Overview"></img>
                </div>
            </div>
            <br></br>
            <div className={"small-header"}>
                <h2 style= {{color: "#5b65a4"}}>Year 1 and 2</h2>
                <div className={"container-program-body"}>
                    <p>In the first two years, the students will study basic courses in mathematics, computer science, and software engineering and develop their programming skills using various programming languages (including Python, C, C++, Java, etc.). Also, the students will be trained to communicate correctly and effectively. At the end of Year 2, every student is required to undertake an internship in a software company for 8 - 10 weeks. All the courses in the first two years will be held at the International College in the Bangkok Campus of KMITL.</p>
                </div>
            </div>

            <div className={"small-header"}>
                <h2 style= {{color: "#5b65a4"}}>Year 3 and 4 (KMITL)</h2>
                <div className={"container-program-body"}>
                    <p>In Year 3 and Year 4, the students will learn advanced topics in software engineering and important software development methodologies that are used in practice. The students will have opportunities to the apply the knowledge and skills they have acquired to conduct a team software project in Year 3 and a one-year research project in Year 4. Students entering Year 3 are required to take one of the following specializations:
                    <br></br>1. Metaverse Software Engineering - Specializing in large and complex software for enterprises and digital transformation.
                    <br></br>2. Industrial Internet of Things - Specializing in the Internet of Things, including embedded and mobile systems.
                    <br></br>3. Artificial Intelligence - Specializing in applications of artificial intelligence and data science, including machine learning and Big Data.
                    <br></br>The study plans for these three specializations differ in some required courses. Also the students are recommended to toe work on their senior projects that utilize the knowledge of their respective specializations.</p>
                </div>
            </div>
            
            <div className={"small-header"}>
                <h2 style= {{color: "#5b65a4"}}>Year 3 and Year 4 (KMITL-Glasgow Double-Degree Program)</h2>
                <div className={"container-program-body"}>
                    <p>The students joining the KMITL-Glasgow Double-Degree Program will take courses in Years 3 and 4 in the Software Engineering program at the School of Computing Science, University of Glasgow.</p>
                </div>
            </div>

            <div className={"small-header"}>
                <h2 style= {{color: "#5b65a4"}}>Year 3 and Year 4 (KMITL-Queensland Double-Degree Program)</h2>
                <div className={"container-program-body"}>
                    <p>The students joining the KMITL-Queensland Double-Degree Program will take courses in Years 3 and 4 in Software Engineering Program at the Faculty of Engineering, Architecture and Information Technology, University of Queensland.</p>
                </div>
            </div>
            
        </div>

        <Contact handleLoginClick={handleLoginClick} />
    </>
  );
};
        
export default Program;