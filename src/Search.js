import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [information, setInformation] = useState(false);
  let [weather, setWeather] = useState("");

  function displayWeather(response) {
    setInformation(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "dfc2e82cce5dfe54171afee9e327c236";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (information) {
    return (
      <div>
        {form}
        <h4>
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°c</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind speed: {Math.round(weather.wind)} km/h</li>
            <li>
              <img src={weather.icon} alt="{weather.description}" />
            </li>
          </ul>
        </h4>
      </div>
    );
  } else {
    return form;
  }
}
