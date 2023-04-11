import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
