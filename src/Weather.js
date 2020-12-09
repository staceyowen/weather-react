import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [information, setInformation] = useState(false);
  let [weather, setWeather] = useState("");


  function displayWeather(response) {
  
    setWeather({
      citydisplay: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temphigh: response.data.main.temp_max,
      templow: response.data.main.temp_min,
    });
    setInformation(true);
  }

  function search() {
    let apiKey = "dfc2e82cce5dfe54171afee9e327c236";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(url).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
          <input 
          type="search" 
          placeholder="Search for a city" 
          autoComplete="off"
          autoFocus="on"
          className="form-control" 
          id="city-input" 
          onChange={updateCity} 
          />
        </div>
        <div className="col-3">
          <input 
            className="btn btn-primary w-100" 
            type="submit" 
            value="Search" />
        </div>
        <div className="col-2">
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
        <WeatherInfo data={weather}/>
      
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
