import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "5d0f913f5173748a05d2732e5d80df07";
  const city = "Bordeaux";

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeather();
    // Setting up an interval to refresh weather data every hour
    const intervalId = setInterval(fetchWeather, 3600000); // 3600000 milliseconds = 1 hour

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p>Error fetching weather: {error}</p>;
  }

  return (
    <div className="weather-container">
      <h1>Weather in {city}</h1>
      <p className="temperature"> {weather.main.temp}°C</p>
      <div className="details">
        <p>Condition: {weather.weather[0].main}</p>
        <p>Humidity: {weather.main.humidity}%</p>
      </div>
    </div>
  );
};

export default Weather;
