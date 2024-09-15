import React from "react";
import "./HomepageMenu.css";

const HomepageMenu = () => {
    return (
      <div className="container2">
        <ul>
        <ul className="list_menu">
            <li>Button1</li>
            <li>Button2</li>
            <li>Button3</li>
        </ul>
        <ul className="list_menu">
            <li>Button1</li>
            <li>Button2</li>
            <li>Button3</li> {/* hidden */}
        </ul>
        </ul>
      </div>
    );
  };
  
export default HomepageMenu;

