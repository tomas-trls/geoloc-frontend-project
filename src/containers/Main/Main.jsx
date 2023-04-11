import React, { useState } from "react";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Main.scss";

const Main = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <Card query={query} />
    </div>
  );
};

export default Main;
