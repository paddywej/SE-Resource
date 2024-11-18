import React, { useContext } from "react";
import "./HomepageMenu.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext"; // Import UserContext
import about from "../../assets/about.png";
import admission from "../../assets/admission.png";
import program from "../../assets/program.png";
import event from "../../assets/events.png";
import news from "../../assets/news.png";
import archive from "../../assets/archive-2.PNG";

const HomepageMenu = () => {
  const { loggedIn } = useContext(UserContext); // Access loggedIn state from context

  return (
    <div className="container2">
      <ul className="list_menu">
        <li>
          <Link to="/about">
            <img className="button_img" src={about} alt="About" />
          </Link>
        </li>
        <li>
          <Link to="/admission">
            <img className="button_img" src={admission} alt="Admission" />
          </Link>
        </li>
        <li>
          <Link to="/news">
            <img className="button_img" src={news} alt="News" />
          </Link>
        </li>
        <li>
          <Link to="/program">
            <img className="button_img" src={program} alt="Program" />
          </Link>
        </li>
        <li>
          <Link to="/events">
            <img className="button_img" src={event} alt="Event" />
          </Link>
        </li>

        {/* Conditionally render the Archive link if the user is logged in */}
        {loggedIn && (
          <li>
            <Link to="/file">
              <img className="button_img" src={archive} alt="Archive" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default HomepageMenu;
