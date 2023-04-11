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
    <main className="main">
      <SearchBar handleSearch={handleSearch} />
      <Card query={query} />
    </main>
  );
};

export default Main;
