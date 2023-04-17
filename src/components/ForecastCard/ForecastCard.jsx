import React, { useEffect, useState } from "react";
import cloudy from "../../assets/images/cloudy.svg";
import mist from "../../assets/images/mist.svg";
import partlyCloudy from "../../assets/images/partly-cloudy.svg";
import rain from "../../assets/images/rain.svg";
import snowy from "../../assets/images/snowy.svg";
import sunny from "../../assets/images/sunny.svg";
import thunder from "../../assets/images/thunder.svg";
import "./ForecastCard.scss";

const ForecastCard = ({ text, date }) => {
  const [desc, setDesc] = useState("");
  const [datePicker, setDatePicker] = useState("Today");

  const getWeatherForecastIcon = () => {
    if (text.toLowerCase().includes("sunny")) {
      return sunny;
    } else if (text.toLowerCase().includes("snow")) {
      return snowy;
    } else if (text.toLowerCase().includes("rain")) {
      return rain;
    } else if (text.toLowerCase().includes("partly")) {
      return partlyCloudy;
    } else if (text.toLowerCase().includes("cloudy")) {
      return cloudy;
    } else if (text.toLowerCase().includes("thunder")) {
      return thunder;
    } else {
      return mist;
    }
  };

  const getForecastText = () => {
    if (text.toLowerCase().includes("sunny")) {
      setDesc("Sunny");
    } else if (text.toLowerCase().includes("snow")) {
      setDesc("Snowy");
    } else if (text.toLowerCase().includes("rain")) {
      setDesc("Rain");
    } else if (text.toLowerCase().includes("partly")) {
      setDesc("Partly Cloudy");
    } else if (text.toLowerCase().includes("cloudy")) {
      setDesc("Cloudy");
    } else if (text.toLowerCase().includes("thunder")) {
      setDesc("Thunder");
    } else {
      setDesc("Windy");
    }
  };

  const getDateDescription = () => {
    const newDate = new Date();
    const today = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
    const tomorrow = new Date(newDate.getTime() + 24 * 3600000 + 3600000 + 3600000);
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

    if (date === today) {
      setDatePicker("Today");
    } else if (date === tomorrowFormatted) {
      setDatePicker("Tomorrow");
    } else {
      setDatePicker(date);
    }
  };

  useEffect(() => {
    getForecastText();
    getDateDescription();
  });

  return (
    <div className="forecast-card">
      <div className="forecast-card--square">
        <img
          src={getWeatherForecastIcon()}
          alt="weather forecast"
          className="forecast-card__icon"
        />
        <p className="forecast-card__description">{desc}</p>
      </div>
      <p className="forecast-card__date">{datePicker}</p>
    </div>
  );
};

export default ForecastCard;
