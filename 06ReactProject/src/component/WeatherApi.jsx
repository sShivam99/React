import React from 'react';
import { useState } from "react";

const WeatherApi = () => {
  const [city, setCity] = useState(""); // Store user input
  const [weather, setWeather] = useState(null); // Store API response
  const [error, setError] = useState(""); // Store error messages

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=cb87aa6983ad473f825145055250902&q=${city}&aqi=yes`
      );

      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }

      const data = await response.json();
      setWeather(data.current); // Store weather data
      setError(""); // Clear previous errors
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-xl font-bold mb-4">Weather Dashboard</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={fetchWeather} className="bg-blue-500 text-white px-4 py-2 rounded">
          Get Weather
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="border p-4 rounded shadow-lg text-center">
          <h3 className="text-lg font-semibold">Temperature: {weather.temp_c}°C</h3>
          <p>Wind Speed: {weather.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApi;
