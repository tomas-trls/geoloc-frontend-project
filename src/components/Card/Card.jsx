import React, { useEffect } from "react";
import "./Card.scss";

const Card = () => {
  const fetchData = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=London&aqi=yes`
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Card</div>;
};

export default Card;
