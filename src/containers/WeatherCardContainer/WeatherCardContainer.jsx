import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./WeatherCardContainer.scss";
const WeatherCardContainer = ({ weatherData }) => {
  return (
    <div className="weather-container">
      <div className="weather-container__mobile">
        <WeatherCard weatherData={weatherData} />
      </div>
      <Carousel weatherData={weatherData} isCurrentData={true} />
    </div>
  );
};

export default WeatherCardContainer;
