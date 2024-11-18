import React from "react";
import "./HomepageMenu.css";
import { Link } from "react-router-dom";
import about from "../../assets/about-2.PNG";
import admission from "../../assets/admission-2.PNG";
import program from "../../assets/program-2.PNG";
import event from "../../assets/events-2.PNG";
import news from "../../assets/news-2.PNG";
import archive from "../../assets/archive-2.PNG";

const HomepageMenu = () => {
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
            <Link to="/event">
                <img className="button_img" src={event} alt="Event" />
            </Link>
          </li>
          <li>
            <Link to="/file">
                <img className="button_img" src={archive} alt="Archive" />
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default HomepageMenu;
