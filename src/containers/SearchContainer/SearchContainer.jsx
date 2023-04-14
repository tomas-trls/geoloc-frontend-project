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
          No matter what the weather become the best version of yourself
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eum omnis
          accusamus, sunt assumenda veritatis. Sequi, et architecto perspiciatis
          temporibus quaerat alias, libero obcaecati, doloribus id maiores rem?
          Neque, quidem?
        </p>
      </div>
      <SearchBar handleSearch={handleSearch} />
      {query.length > 1 && <Navigate to="/dashboard" state={{ query }} />}
    </div>
  );
};

export default SearchContainer;
