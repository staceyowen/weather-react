import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Weather() {
  let [city, setCity] = useState("");
  let [information, setInformation] = useState(false);
  let [weather, setWeather] = useState("");


  function displayWeather(response) {
    setInformation(true);
    setWeather({
      citydisplay: response.data.name,
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
      <div class="row">
        <div class="col-7">
          <input type="search" 
          autocomplete="off"
          className="form-control" 
          id="city-input" 
          placeholder="Type a city" 
          onChange={updateCity} 
          />
        </div>
        <div class="col-3">
          <input 
            className="btn btn-primary w-100" 
            type="submit" 
            value="Search" />
        </div>
        
      </div>

    </form>
  );

  if (information) {
    return (
      <div>
        {form}
        <h4>
        <ul className="main-weather">
          <li><h1 id="city">{weather.citydisplay}</h1></li>
          <li><h4>{weather.description}</h4></li>
          <li>
              <img src={weather.icon} alt="{weather.description}" className="float-left" />
            </li>
        </ul>
          <ul className="main-description">
            <li>Temperature: {Math.round(weather.temperature)}°c</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind speed: {Math.round(weather.wind)} km/h</li>
          </ul>
        </h4>
      </div>
    );
  } else {
    return form;
  }
}
