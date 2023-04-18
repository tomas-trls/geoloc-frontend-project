import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ForecastContainer from "../../containers/ForecastContainer/ForecastContainer";
import NavBar from "../../containers/NavBar/NavBar";
import Todo from "../../containers/Todo/Todo";
import WeatherCardContainer from "../../containers/WeatherCardContainer/WeatherCardContainer";

const Dashboard = () => {
  const location = useLocation();
  const query = location.state?.query;

  const [weatherData, setWeatherData] = useState({});
  const [locationQuery, setLocationQuery] = useState("London");

  const successCallback = (position) => {
    setLocationQuery(`${position.coords.latitude}, ${position.coords.longitude}`);
  };

  const errorCallback = (error) => {
    setLocationQuery("London");
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  const fetchData = async () => {
    try {
      const path = `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`;
      const res = await fetch(
        `${path}&q=${query ? query : locationQuery}&days=7&aqi=yes`
      );
      if (!res.ok) {
        throw new Error("Sorry something went wrong !");
      }
      const data = await res.json();
      setWeatherData(data);
      return data;
    } catch (e) {
      //console.clear();
      alert(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, locationQuery]);

  return (
    <div className="dashboard">
      <NavBar />
      <WeatherCardContainer weatherData={weatherData} />
      <ForecastContainer weatherData={weatherData} />
      <Todo />
    </div>
  );
};

export default Dashboard;
