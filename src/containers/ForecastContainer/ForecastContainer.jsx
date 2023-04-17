import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./ForecastContainer.scss";

const ForecastContainer = ({ weatherData }) => {
  return (
    <div>
      <Carousel isForecast={true} weatherData={weatherData} />
    </div>
  );
};

export default ForecastContainer;
