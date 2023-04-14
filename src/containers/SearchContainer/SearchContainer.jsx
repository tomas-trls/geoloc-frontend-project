import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchContainer.scss";

const SearchContainer = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
  };
  return (
    <div className="search-container">
      <div className="search-container__description">
        <h2 className="search-container__title">
          No matter what the{" "}
          <span className="search-container__title-pink">Weather</span>
          <br />
          Become the best version of yourself
        </h2>
        <p className="search-container__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ex nec
          nisl lobortis tempus. Vivamus volutpat tincidunt erat et pellentesque.
        </p>
      </div>
      <SearchBar handleSearch={handleSearch} />
      {query.length > 1 && <Navigate to="/dashboard" state={{ query }} />}
    </div>
  );
};

export default SearchContainer;
