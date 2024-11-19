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

import about2 from "../../assets/about-2.PNG";
import admission2 from "../../assets/admission-2.PNG";
import program2 from "../../assets/program-2.PNG";
import event2 from "../../assets/events-2.PNG";
import news2 from "../../assets/news-2.PNG";

const HomepageMenu = () => {
  const { loggedIn } = useContext(UserContext); // Access loggedIn state from context

  return (
    <div className="container2">
      <ul className="list_menu">
        <li>
          <Link to="/about">
            <img
              className="button_img"
              src={loggedIn ? about2 : about} // Conditionally set the image source
              alt="About"
            />
          </Link>
        </li>
        <li>
          <Link to="/admission">
            <img
              className="button_img"
              src={loggedIn ? admission2 : admission} // Conditionally set the image source
              alt="Admission"
            />
          </Link>
        </li>
        <li>
          <Link to="/news">
            <img
              className="button_img"
              src={loggedIn ? news2 : news} // Conditionally set the image source
              alt="News"
            />
          </Link>
        </li>
        <li>
          <Link to="/program">
            <img
              className="button_img"
              src={loggedIn ? program2 : program} // Conditionally set the image source
              alt="Program"
            />
          </Link>
        </li>
        <li>
          <Link to="/events">
            <img
              className="button_img"
              src={loggedIn ? event2 : event} // Conditionally set the image source
              alt="Event"
            />
          </Link>
        </li>

        {/* Conditionally render the Archive link if the user is logged in */}
        {loggedIn && (
          <li>
            <Link to="/file1">
              <img className="button_img" src={archive} alt="Archive" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default HomepageMenu;
