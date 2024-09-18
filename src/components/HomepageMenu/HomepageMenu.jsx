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
            <Link to="/program">
                <img className="button_img" src={program} alt="Program" />
            </Link>
            </li>
          <li>
            <Link to="/admission">
                <img className="button_img" src={admission} alt="Admission" />
            </Link>
          </li>
        </ul>
        <ul className="list_menu">
            <li>
            <Link to="/news">
                <img className="button_img" src={news} alt="News" />
            </Link>
          </li>
            <li>
                <Link to="/event">
                    <img className="button_img" src={event} alt="Event" />
                </Link>
            </li>
          </ul>
      </div>
    );
};

export default HomepageMenu;
