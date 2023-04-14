import React from "react";
import NavBar from "../../containers/NavBar/NavBar";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";

const Home = () => {
  return (
    <div className="home">
      <NavBar isHome={true} />
      <div className="home__description">
        <h2 className="home__title">
          No matter the <span className="home__title-pink">Weather</span>
          <br /> Become the best version of yourself
        </h2>
        <p className="home__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ex nec
          nisl lobortis tempus. Vivamus volutpat tincidunt erat et pellentesque.
        </p>
      </div>
      <SearchContainer />
    </div>
  );
};

export default Home;
