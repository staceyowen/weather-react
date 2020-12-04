import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind, faSmile, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [information, setInformation] = useState(false);
  let [weather, setWeather] = useState("");


  function displayWeather(response) {
    setInformation(true);
    setWeather({
      citydisplay: response.data.name,
      date: "Saturday 07:00",
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      temphigh: response.data.main.temp_max,
      templow: response.data.main.temp_min,
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
          <input 
          type="search" 
          placeholder="Type a city" 
          autocomplete="off"
          autoFocus="on"
          className="form-control" 
          id="city-input" 
          onChange={updateCity} 
          />
        </div>
        <div class="col-3">
          <input 
            className="btn btn-primary w-100" 
            type="submit" 
            value="Search" />
        </div>
        <div class="col-2">
          <input 
            className="btn btn-primary w-100" 
            type="submit" 
            value="📍" />
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
          <li>
            <h1 id="city">{weather.citydisplay}
            </h1>
          </li>
          <li>
            {weather.date}
          </li>
          <li>
            <h4 className="text-capitalize">
              {weather.description}
            </h4>
          </li>
          
        </ul>
        <div className="main-description">
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                    <img 
                    src={weather.icon} 
                    alt="{weather.description}" 
                    className="float-left" 
                    />
                    <div className="float-left">
                      <span className="temperature">
                        {Math.round(weather.temperature)}
                      </span>
                      <span className="unit">
                        ° c
                      </span>
                    </div>
              </div>
            </div>
            <div className="col-3">
              <ul>
                <li><FontAwesomeIcon icon={faSmile} /> Feels like: {Math.round(weather.feelslike)}°c</li>
                <li><FontAwesomeIcon icon={faTint} /> Humidity: {weather.humidity}%</li>
                <li><FontAwesomeIcon icon={faWind} /> Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li><FontAwesomeIcon icon={faTemperatureHigh} /> High: {Math.round(weather.temphigh)}°c</li>
                <li><FontAwesomeIcon icon={faTemperatureLow} /> Low: {Math.round(weather.templow)}°c</li>
              </ul>
            </div>
          </div>
        </div>
        </h4>
      </div>
    );
  } else {
    let apiKey = "dfc2e82cce5dfe54171afee9e327c236";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${unit}&appid=${apiKey}`;
    axios.get(url).then(displayWeather);

    return "Loading...";
  }
}
