import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import "./Archive.css";

const Archive = () => {
  const { loggedIn, username } = useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <Navbar 
        handleLoginClick={handleLoginClick}
      />
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
            <div className="year-card" onClick={() => navigate("/archive/year1")}>
              <h3>Year 1</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/archive/year2")}>
              <h3>Year 2</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/archive/year3")}>
              <h3>Year 3</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/archive/year4")}>
              <h3>Year 4</h3>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Projects</h2>
          <div className="year-grid">
            <div className="year-card" onClick={() => navigate("/projects/year1")}>
              <h3>Year 1</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/projects/year2")}>
              <h3>Year 2</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/projects/year3")}>
              <h3>Year 3</h3>
            </div>
            <div className="year-card" onClick={() => navigate("/projects/year4")}>
              <h3>Year 4</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Archive;