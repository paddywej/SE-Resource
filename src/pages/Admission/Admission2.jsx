import React, { useState } from "react";
import "./Admission.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import kmitlLogo from "../../assets/kmitl-logo.png";


const Admission2 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
        <Navbar handleLoginClick={handleLoginClick} />
        <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
        <div className={"container-main"}></div>
        <div class="zigzag-container">
            <div class="row top-row">
                <div class="box" align="center" >
                    <strong>Now - November 11</strong>
                    <p>Application filing and applicatiion fee payment period</p>
                </div>
                <div class="box" align="center">
                    <strong>November 18, 2024</strong>
                    <p>Interview Candidate Notification</p>
                </div>
                <div class="box" align="center">
                    <strong>November 23, 2024</strong>
                    <p>Candidate Interview Date</p>
                </div>
                <div class="box" align="center">
                    <strong>November 29, 2024</strong>
                    <p>Interview Result Announcement</p>
                </div>
            </div>
            <div class="row bottom-row">
                <div class="box" align="center">
                        <strong>February 5-6, 2025</strong>
                        <p>TCAS Clearing House</p>
                        <p>(For Thai Nationality Only)</p>
                </div>
                <div class="box" align="center">
                        <strong>February 13, 2025</strong>
                        <p>KMITL has announced the list of qualified candidate to study at KMITL with the details of how to make anvanced payment of tuitition fee</p>
                </div>
                <div class="box" align="center">
                        <strong>February 18-24, 2025</strong>
                        <p>Enrollment Confirmation and Tuitition Fee Payment</p>
                </div>
            </div>
        </div>
        <div className={"container-main-text"}>
            <div className={"container-center"}>
                <img className={"logo-size"} src={kmitlLogo} alt="kmitl logo"/>
                <h3>Announcement Direct Admissions 1-1 (Early Round)</h3>
                <h3>Bachelor of Engineering (International Programs) Academic Year 2025</h3>
                <h3>School of Engineering, King Mongkut’s Institute of Technology Ladkrabang (KMITL)</h3>
                <div className={"custom-separator"}></div>
                <p style={{padding: "2vh 0"}}>School of Engineering, King Mongkut's Institute of Technology Ladkrabang invites qualified applicants to apply for admissions to the School of Engineering in 4 years Bachelor's Degree Programs for Academic Year 2025 (beginning in August 2025).This round of admissions is opened to all applicants with excellent academic backgrounds. Selection of qualified candidates is based on the applicant's academic records, standardized test scores, and English proficiency test results, along with a personal statement, letters of recommendation, past academic activities, the interview and other supplementary documents.</p>
            </div>
            <div className={"container-left"}>
                <h4 style={{padding: "2vh 0"}}>1. Programs and Number of Acceptances</h4>
                <p>You may apply up to a maximum of 3 programs choices as listed in the following table. Specify the ranking when considering the application.</p>
            </div>
            <div className={"container-center"}>
                <br />
                <table border="1">
                    <thead align="center">
                        <th>
                            No.
                        </th>
                        <th>
                            Programs
                        </th>
                        <th>
                            Persons
                        </th>
                    </thead>
                    <tbody align="center">
                        <tr>
                            <td>1</td>
                            <td align="left">Biomedical Engineering</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td align="left">Civil Engineering</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td align="left">Computer Engineering</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td align="left">Electrical Engineering</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td align="left">Energy Engineering</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td align="left">Financial Engineering</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td align="left">Industrial Engineering and Logistics Management</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td align="left">Mechanical Engineering</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td align="left">Robotics and AI Engineering</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td align="left">Software Engineering</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
            <div className={"container-left"}>
                <p><strong style={{marginRight :"1vw"}}>Remark:</strong> The number of accepted applicants may subject to change if candidates' qualification does not meet the programs' minimum requirements.</p>
                <h4 style={{padding: "2vh 0"}}>2.Application Requirements</h4>
                <p>The application process is conducted in accordance with KMITL's guidelines, and also rules and regulations.</p>
                <br />
                <b style={{padding: "0 2vh"}}>2.1 Educational background (Required)</b>
                <p style={{padding: "0 8vh"}}>The applicant <b>must satisfy</b> at least one of the following requirements:</p>
                <p style={{padding: "0 10vh"}}>1) Graduated from or currently studying in Matthayom 6 (Thailand's Education System).</p>
                <p style={{padding: "0 10vh"}}>2) Graduated with qualifications equivalent to Matthayom 6, as recognized by the Ministry of Education.(Note that Applicants with this education background are requested to contact the SIIE office for further information.)</p>
                <p style={{padding: "0 10vh"}}>3) Graduated from or currently enrolled in an accredited college or higher education institution in Thailand or abroad.</p>
                <br />
                <p><b style={{marginRight :"1vw"}}>Remark:</b> All applicants <b>must submit</b> an official final transcript, along with their official high school diploma and/or certificates of completion from their school, prior to the commencement of the Academic Year 2025.</p>
                <br />
                <b style={{padding: "0 2vh"}}>2.2 Academics Record (Optional)</b>
                <p style={{padding: "0 8vh"}}> The applicant <b>should submit</b> at least one of the following standardized test results and obtain a score which meet the minimum requirements as specified below:</p>
            </div>

        </div>
        </>
    )
}

export default Admission2;