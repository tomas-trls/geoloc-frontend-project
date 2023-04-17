import React from "react";
import settingsLogo from "../../assets/images/Settings.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./NavBar.scss";

const NavBar = ({ isHome }) => {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">WeatherWise</h1>
      {!isHome && (
        <>
          {/* <SearchBar isInNav={true} /> */}
          <img
            src={settingsLogo}
            alt="settings logo"
            className="navbar__settings-logo"
          />
        </>
      )}
    </div>
  );
};

export default NavBar;
