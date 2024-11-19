import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import "./Archive.css";

const Archive = ({
  loggedIn,
  username,
  showArchive,
  setShowArchive,
  handleLoginClick,
  handleLogout
}) => {
  return (
    <>
      <Navbar
        loggedIn={loggedIn}
        username={username}
        handleLoginClick={handleLoginClick}
        handleLogout={handleLogout}
        showArchive={showArchive}
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
            <div className="year-card" onClick={() => window.location.href="/archive/year1"}>
              <h3>Year 1</h3>
            </div>
            <div className="year-card" onClick={() => window.location.href="/archive/year2"}>
              <h3>Year 2</h3>
            </div>
            <div className="year-card" onClick={() => window.location.href="/archive/year3"}>
              <h3>Year 3</h3>
            </div>
            <div className="year-card" onClick={() => window.location.href="/archive/year4"}>
              <h3>Year 4</h3>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Projects</h2>
          <div className="year-grid">
            <div className="year-card" onClick={() => window.location.href="/projects/year1"}>
              <h3>Year 1</h3>
            </div>
            <div className="year-card" onClick={() => window.location.href="/projects/year2"}>
              <h3>Year 2</h3>
            </div>
            <div className="year-card" onClick={() => window.location.href="/projects/year3"}>
              <h3>Year 3</h3>
            </div>
            <div className="year-card" onClick={() => window.location.href="/projects/year4"}>
              <h3>Year 4</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Archive;