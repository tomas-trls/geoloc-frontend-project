import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CurrentDataCard from "../CurrentDataCard/CurrentDataCard";
import ForecastCard from "../ForecastCard/ForecastCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Carousel.scss";

const Carousel = ({ weatherData, isCurrentData, isForecast }) => {
  const [data, setData] = useState({
    forecast: {
      forecastday: [],
    },
  });

  const settingsCurrent = {
    centerMode: true,
    initialSlide: 1,
    className: "carousel-currData--mobile",
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
  };

  const settingsForecast = {
    centerMode: true,
    className: "carousel-forecast--mobile",
    slidesToShow: 1,
    variableWidth: true,
    infinite: false,
    focusOnSelect: true,
    initialSlide: 1,
    arrows: false,
  };

  const weatherForecaseJSX = data.forecast.forecastday.map((day, index) => {
    return (
      <ForecastCard key={index + 1} text={day.day.condition.text} date={day.date} />
    );
  });

  useEffect(() => {
    if (Object.keys(weatherData).length > 0) {
      setData(weatherData);
    }
  }, [weatherData]);
  return (
    <>
      {isCurrentData && (
        <>
          <Slider {...settingsCurrent}>
            <CurrentDataCard weatherData={weatherData} isMoonPhase={true} />
            <CurrentDataCard weatherData={weatherData} isAirData={true} />
            <CurrentDataCard weatherData={weatherData} isRiskOfRain={true} />
          </Slider>
          <div className="carousel-currData">
            <WeatherCard weatherData={weatherData} />
            <CurrentDataCard weatherData={weatherData} isMoonPhase={true} />
            <CurrentDataCard weatherData={weatherData} isAirData={true} />
            <CurrentDataCard weatherData={weatherData} isRiskOfRain={true} />
          </div>
        </>
      )}
      {isForecast && (
        <div className="carousel-forecast">
          <h3 className="carousel-forecast__title">Weather Forecast</h3>
          <Slider {...settingsForecast}>{weatherForecaseJSX}</Slider>
          <div className="carousel-forecast--desktop">
            <h3 className="carousel-forecast--desktop__title">Weather Forecast</h3>
            <div className="carousel-forecast--desktop--cards">
              {weatherForecaseJSX}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
