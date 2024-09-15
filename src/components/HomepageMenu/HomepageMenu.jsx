import React from "react";
import "./HomepageMenu.css";
import { Link } from "react-router-dom";
import about from "../../assets/about.png";
import admission from "../../assets/admission.png";
import news from "../../assets/news.png";
import program from "../../assets/program.png";
import event from "../../assets/events.png";

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
            <img className="button_img" src={admission} alt="Admission" />
          </li>
          <li>
            <img className="button_img" src={news} alt="News" />
          </li>
          <li>
            <img className="button_img" src={program} alt="Program" />
          </li>
          <li>
            <img className="button_img" src={event} alt="Event" />
          </li>
        </ul>
      </div>
    );
};

export default HomepageMenu;
