import React from "react";
import settingsLogo from "../../assets/images/Settings.svg";
import "./NavBar.scss";

const NavBar = ({ isHome }) => {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">WeatherWise</h1>
      {!isHome && (
        <img
          src={settingsLogo}
          alt="settings logo"
          className="navbar__settings-logo"
        />
      )}
    </div>
  );
};

export default NavBar;
