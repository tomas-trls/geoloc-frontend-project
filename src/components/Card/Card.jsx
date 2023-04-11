import React, { useEffect, useState } from "react";
import "./Card.scss";

const Card = ({ query }) => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("London");
  const successCallback = (position) => {
    console.log(position);
    setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
  };

  const errorCallback = (error) => {
    console.log("Location not available");
    setLocation("London");
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  const fetchData = async () => {
    try {
      const path = `https://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`;
      const res = await fetch(`${path}&q=${query ? query : location}&aqi=yes`);
      if (!res.ok) {
        throw new Error("Sorry something went wrong !");
      }
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
      return data;
    } catch (e) {
      //console.clear();
      console.log(e.message);
      alert(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, location]);

  console.log(weatherData);

  return (
    <div className="card">
      {Object.keys(weatherData).length > 0 && (
        <div className="card__data">
          <h2 className="City">{weatherData.location.name}</h2>
          <p>{weatherData.location.country}</p>
          <h3 className="Temperature">{weatherData.current.temp_c}°C</h3>
          <img src={weatherData.current.condition.icon} alt="weather condition" />
        </div>
      )}
    </div>
  );
};

export default Card;
