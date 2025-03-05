import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      iconURL: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }
  function search() {
    let apiKey = "9f3o6449dc310bta33096fd85b205350";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
