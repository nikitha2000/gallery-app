import React, { useState } from "react";
import "./Nav.css";
import Button from "../Button";

function Nav() {
  const [activeItem, setActiveItem] = useState(null);
  const navItems = [
    "Home",
    "Videos",
    "Leaderboard",
    "Challenges",
    "Favourites",
  ];

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          {navItems.map((item) => (
            <a
              key={item}
              className={`nav-item ${activeItem === item ? "active" : ""}`}
              onClick={() => handleClick(item)}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="sub-heading">
        <h4>New Stock Photos</h4>
        <div className="drop-down-button">
          <Button label="New" className="new-button" />
        </div>
      </div>
    </>
  );
}

export default Nav;
