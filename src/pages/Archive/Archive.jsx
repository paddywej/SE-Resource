import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { UserContext } from "../../context/UserContext";
import Navbar from "../../components/NavBar/NavBar";
import Contact from "../../components/Contact/Contact";
import "./Archive.css";
import year1resources from "../../assets/resources.png";
import year2resources from "../../assets/resources.png";
import year3resources from "../../assets/resources.png";
import year4resources from "../../assets/resources.png";
import year1projects from "../../assets/projects.png";
import year2projects from "../../assets/projects.png";
import year3projects from "../../assets/projects.png";
import year4projects from "../../assets/projects.png";

const Archive = () => {
  const { loggedIn, username } = useContext(UserContext);
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar handleLoginClick={handleLoginClick} />
      <div className="archive-container">
        <div className="archive-header">
          <h1>Student Archive</h1>
          <div className="user-info">
            <span>{username}</span>
          </div>
        </div>

        <section className="resources-section">
          <h2>Study Resources</h2>
          <div className="year-grid">
            <div className="year-card" onClick={() => navigate("/resources/year1")}>
              <img className="year-card-img" src={year1resources} alt="Year 1" />
              <h3>Year 1</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/resources/year2")}>
              <img className="year-card-img" src={year2resources} alt="Year 2" />
              <h3>Year 2</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/resources/year3")}>
              <img className="year-card-img" src={year3resources} alt="Year 3" />
              <h3>Year 3</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/resources/year4")}>
              <img className="year-card-img" src={year4resources} alt="Year 4" />
              <h3>Year 4</h3>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Projects</h2>
          <div className="year-grid">
            <div className="year-card" onClick={() => navigate("/projects/year1")}>
              <img className="year-card-img" src={year1projects} alt="Year 1" />
              <h3>Year 1</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/projects/year2")}>
              <img className="year-card-img" src={year2projects} alt="Year 2" />
              <h3>Year 2</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/projects/year3")}>
              <img className="year-card-img" src={year3projects} alt="Year 3" />
              <h3>Year 3</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/projects/year4")}>
              <img className="year-card-img" src={year4projects} alt="Year 4" />
              <h3>Year 4</h3>
            </div>
          </div>
        </section>
      </div>
      <Contact handleLoginClick={handleLoginClick} />
    </>
  );
};

export default Archive;
