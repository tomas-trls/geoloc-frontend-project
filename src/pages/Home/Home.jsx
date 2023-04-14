import React from "react";
import NavBar from "../../containers/NavBar/NavBar";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";

const Home = () => {
  return (
    <div className="home">
      <NavBar isHome={true} />
      <SearchContainer />
    </div>
  );
};

export default Home;
