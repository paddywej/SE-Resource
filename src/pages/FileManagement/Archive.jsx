import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Archive.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import Contact from "../../components/Contact/Contact";
import button1 from "../../assets/program.png";
import button2 from "../../assets/program.png";
import button3 from "../../assets/program.png";
import button4 from "../../assets/program.png";
import button5 from "../../assets/program.png";
import button6 from "../../assets/program.png";
import button7 from "../../assets/program.png";
import button8 from "../../assets/program.png";

const Archive = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  return (
    <>
      <Navbar handleLoginClick={handleLoginClick} />
      <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
      <div className="button-container">
        <h1>Study Resources</h1>
        <ul className="button-list">
          <li>
            <Link to="/file1" className="button">
              <img className="button-img" src={button1} alt="Year 1" />
              <div className="button-text">Year 1</div>
            </Link>
          </li>
          <li>
            <Link to="/file2" className="button">
              <img className="button-img" src={button2} alt="Year 2" />
              <div className="button-text">Year 2</div>
            </Link>
          </li>
          <li>
            <Link to="/file3" className="button">
              <img className="button-img" src={button3} alt="Button 3" />
              <div className="button-text">Year 3</div>
            </Link>
          </li>
          <li>
            <Link to="/file4" className="button">
              <img className="button-img" src={button4} alt="Button 4" />
              <div className="button-text">Year 4</div>
            </Link>
          </li>

          <h1>Projects</h1>
          <li>
            <Link to="/file5" className="button">
              <img className="button-img" src={button5} alt="Button 5" />
              <div className="button-text">Year 1</div>
            </Link>
          </li>
          <li>
            <Link to="/file6" className="button">
              <img className="button-img" src={button6} alt="Button 6" />
              <div className="button-text">Year 2</div>
            </Link>
          </li>
          <li>
            <Link to="/file7" className="button">
              <img className="button-img" src={button7} alt="Button 7" />
              <div className="button-text">Year 3</div>
            </Link>
          </li>
          <li>
            <Link to="/file8" className="button">
              <img className="button-img" src={button8} alt="Button 8" />
              <div className="button-text">Year 4</div>
            </Link>
          </li>
        </ul>
      </div>
      <Contact handleLoginClick={handleLoginClick} />
    </>
  );
};

export default Archive;
