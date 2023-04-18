import React from "react";
import { Link } from "react-router-dom";
import settingsLogo from "../../assets/images/Settings.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./NavBar.scss";
const NavBar = ({ isHome }) => {
  return (
    <div className="navbar">
      <Link to="/geoloc-frontend-project" className="navbar__link">
        <h1 className="navbar__logo">WeatherWise</h1>
      </Link>
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
