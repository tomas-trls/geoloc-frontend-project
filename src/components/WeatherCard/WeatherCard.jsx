import React from "react";
import "./WeatherCard.scss";

const Card = ({ weatherData }) => {
  return (
    <div className="weather-card">
      {Object.keys(weatherData).length > 0 && (
        <div className="weather-card__current">
          <div className="weather-card__title">
            <h2 className="weather-card__city">{weatherData.location.name}</h2>
            <h2 className="weather-card__temperature">
              {weatherData.current.temp_c}°C
            </h2>
          </div>
          <p className="weather-card__country">{weatherData.location.country}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
