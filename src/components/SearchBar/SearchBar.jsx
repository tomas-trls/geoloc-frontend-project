import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./SearchBar.scss";

const SearchBar = ({ handleSearch, isInNav }) => {
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <input
        className="searchbar__input"
        type="text"
        placeholder="Type your location here..."
      />
      {!isInNav && <Button buttonType={"submit"} />}
    </form>
  );
};

export default SearchBar;
