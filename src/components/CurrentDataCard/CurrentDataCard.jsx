import React, { useEffect, useState } from "react";
import moon from "../../assets/images/moon.svg";
import airQualityVector from "../../assets/images/vectorAirQuality.svg";
import "./CurrentDataCard.scss";

const CurrentDataCard = ({ weatherData, isAirData, isMoonPhase, isRiskOfRain }) => {
  const [airQuality, setAirQuality] = useState("");
  const [riskOfRain, setRiskOfRain] = useState("");

  const getAirQuality = (airIndex) => {
    if (airIndex < 4) {
      setAirQuality("Good");
    } else if (airIndex >= 4 && airIndex < 7) {
      setAirQuality("Moderate");
    } else if (airIndex >= 7 && airIndex < 10) {
      setAirQuality("Poor");
    } else if (airIndex == 10) {
      setAirQuality("Very Poor");
    }
  };

  const getRiskOfRain = (risk) => {
    if (risk <= 25) {
      setRiskOfRain("Low");
    } else if (risk > 25 && risk <= 50) {
      setRiskOfRain("Moderate");
    } else if (risk > 50 && risk <= 75) {
      setRiskOfRain("High");
    } else if (risk > 75) {
      setRiskOfRain("Very High");
    }
  };

  useEffect(() => {
    if (Object.keys(weatherData).length > 0) {
      getAirQuality(weatherData.current.air_quality["gb-defra-index"]);
      getRiskOfRain(weatherData.forecast.forecastday[0].day.daily_chance_of_rain);
    }
  }, [weatherData]);

  return (
    <>
      {Object.keys(weatherData).length > 0 && (
        <>
          {isAirData && (
            <div className="current-card">
              <h3 className="current-card__title">Air Quality</h3>
              <img src={airQualityVector} alt="air quality curve" />
              <p className="current-card__data--desc">{airQuality}</p>
            </div>
          )}
          {isMoonPhase && (
            <div className="current-card">
              <h3 className="current-card__title">Moon Phase</h3>
              <img
                src={moon}
                alt="moon phase icon"
                className="current-card__image"
              />
              <p className="current-card__data--desc">
                {weatherData.forecast.forecastday[0].astro.moon_phase}
              </p>
            </div>
          )}
          {isRiskOfRain && (
            <div className="current-card">
              <h3 className="current-card__title">Risk Of Rain</h3>
              <h2 className="current-card__data">
                {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%
              </h2>
              <p className="current-card__data--desc">{riskOfRain}</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CurrentDataCard;
